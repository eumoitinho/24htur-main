import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TrabalheConoscoPage from '../../components/trabalhe-conosco/TrabalheConoscoPage';
import { client } from '../../utils/lib/sanity';

async function getTrabalheConoscoData() {
  try {
    const query = `*[_type == "trabalheConoscoPage"][0]`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados da página trabalhe conosco:', error);
    return null;
  }
}

export default async function TrabalheConosco() {
  const trabalheConoscoData = await getTrabalheConoscoData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TrabalheConoscoPage data={trabalheConoscoData} />
      </main>
      <Footer />
    </div>
  );
}