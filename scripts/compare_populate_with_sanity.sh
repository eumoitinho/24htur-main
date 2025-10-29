#!/usr/bin/env bash
set -euo pipefail

# Script que executa populate.js em DRY_RUN, busca os docs correspondentes no Sanity e mostra diff

if [ ! -f .env ]; then
  echo ".env não encontrado. Coloque SANITY_API_TOKEN e vars no .env"
  exit 1
fi

SANITY_API_TOKEN="$(grep -m1 '^SANITY_API_TOKEN' .env | cut -d= -f2- | tr -d '"' )"
export SANITY_API_TOKEN

PROJECT="${NEXT_PUBLIC_SANITY_PROJECT_ID:-kyx4ncqy}"
DATASET="${NEXT_PUBLIC_SANITY_DATASET:-production}"

command -v jq >/dev/null || { echo "jq não encontrado"; exit 1; }
command -v node >/dev/null || { echo "node não encontrado"; exit 1; }
command -v curl >/dev/null || { echo "curl não encontrado"; exit 1; }

echo "Gerando expected.json (DRY_RUN=1)..."
DRY_RUN=1 node populate.js > expected.json
if [ ! -s expected.json ]; then
  echo "expected.json vazio. Verifique populate.js DRY_RUN.";
  exit 1
fi

# extrair ids do expected.json
IDS=( $(jq -r '.[]._id' expected.json) )
if [ ${#IDS[@]} -eq 0 ]; then
  echo "Nenhum _id encontrado em expected.json"
  exit 1
fi

# montar query para buscar apenas esses ids no Sanity
IDS_JSON=$(printf '"%s",' "${IDS[@]}" | sed 's/,$//')
QUERY="*[_id in [${IDS_JSON}]]"
ENC_QUERY=$(node -e "console.log(encodeURIComponent(process.argv[1]))" "$QUERY")

echo "Buscando documentos atuais no Sanity..."
curl -s -H "Authorization: Bearer ${SANITY_API_TOKEN}" \
  "https://${PROJECT}.api.sanity.io/v2021-06-07/data/query/${DATASET}?query=${ENC_QUERY}" \
  | jq -S '.result' > actual.json

# normalizar e ordenar por _id para comparação
jq -S 'sort_by(._id)' expected.json > /tmp/expected.sorted.json
jq -S 'sort_by(._id)' actual.json > /tmp/actual.sorted.json

echo "Diferenças (expected ≠ actual):"
diff -u /tmp/expected.sorted.json /tmp/actual.sorted.json || true
echo "Fim."
