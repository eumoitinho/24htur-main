#!/bin/bash

echo "Fazendo upload dos documentos para o Sanity..."

# Upload da página Sobre
echo "Uploading sobrePage..."
sanity documents create --replace --id sobrePage-1 --type sobrePage --file data/sobrePage.json --non-interactive

# Upload da página Equipe  
echo "Uploading equipePage..."
sanity documents create --replace --id equipePage-1 --type equipePage --file data/equipePage.json --non-interactive

# Upload da página Eventos
echo "Uploading eventosPage..."
sanity documents create --replace --id eventosPage-1 --type eventosPage --file data/eventosPage.json --non-interactive

# Upload da página Opções de Viagem
echo "Uploading opcoesViagemPage..."
sanity documents create --replace --id opcoesViagemPage-1 --type opcoesViagemPage --file data/opcoesViagemPage.json --non-interactive

# Upload da página Trabalhe Conosco
echo "Uploading trabalheConoscoPage..."
sanity documents create --replace --id trabalheConoscoPage-1 --type trabalheConoscoPage --file data/trabalheConoscoPage.json --non-interactive

# Upload da página Lazer
echo "Uploading lazerPage..."
sanity documents create --replace --id lazerPage-1 --type lazerPage --file data/lazerPage.json --non-interactive

echo "Upload concluído!"
