import Header from '../components/Header';
import Footer from '../components/Footer';
import Homepage from '../components/Homepage';
import { client } from '../utils/lib/sanity';

async function getHomepageData() {
  try {
    const query = `*[_type == "homepage"][0]`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados da homepage:', error);
    return null;
  }
}

export default async function Home() {
  const homepageData = await getHomepageData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Homepage data={homepageData} />
      </main>
      <Footer />
    </div>
  );
}