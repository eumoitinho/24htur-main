import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SobrePage from '../../components/sobre/SobrePage';
import { client } from '../../utils/lib/sanity';

async function getSobreData() {
  try {
    const query = `*[_type == "sobrePage"][0]`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados da página sobre:', error);
    return null;
  }
}

export default async function Sobre() {
  const sobreData = await getSobreData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <SobrePage data={sobreData} />
      </main>
      <Footer />
    </div>
  );
}