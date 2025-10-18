import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EventosInfoPage from '../../components/eventos-info/EventosInfoPage';
import { client } from '../../utils/lib/sanity';

async function getEventosInfoData() {
  try {
    const query = `*[_type == "eventosInfoPage"][0]`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados da página eventos info:', error);
    return null;
  }
}

export default async function EventosInfo() {
  const eventosInfoData = await getEventosInfoData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <EventosInfoPage data={eventosInfoData} />
      </main>
      <Footer />
    </div>
  );
}