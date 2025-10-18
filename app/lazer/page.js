import LandingPageHeader from '../../components/LandingPageHeader';
import Footer from '../../components/Footer';
import LazerPage from '../../components/lazer/LazerPage';
import { client } from '../../utils/lib/sanity';

async function getLazerData() {
  try {
    const query = `*[_type == "lazerPage"][0]`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados da página de lazer:', error);
    return null;
  }
}

export default async function Lazer() {
  const lazerData = await getLazerData();

  return (
    <div className="min-h-screen bg-white">
      <LandingPageHeader pageType="lazer" />
      <main>
        <LazerPage data={lazerData} />
      </main>
      <Footer />
    </div>
  );
}