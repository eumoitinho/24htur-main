import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EquipePage from '../../components/equipe/EquipePage';
import { client } from '../../utils/lib/sanity';

async function getEquipeData() {
  try {
    const query = `*[_type == "equipePage"][0]`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados da página equipe:', error);
    return null;
  }
}

export default async function Equipe() {
  const equipeData = await getEquipeData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <EquipePage data={equipeData} />
      </main>
      <Footer />
    </div>
  );
}