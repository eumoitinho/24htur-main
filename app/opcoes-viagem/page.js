import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OpcoesViagemPage from '../../components/opcoes-viagem/OpcoesViagemPage';
import { client } from '../../utils/lib/sanity';

async function getOpcoesViagemData() {
  try {
    const query = `*[_type == "opcoesViagemPage"][0]`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados da página opções de viagem:', error);
    return null;
  }
}

export default async function OpcoesViagem() {
  const opcoesViagemData = await getOpcoesViagemData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <OpcoesViagemPage data={opcoesViagemData} />
      </main>
      <Footer />
    </div>
  );
}