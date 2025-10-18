import LandingPageHeader from '../../components/LandingPageHeader';
import Footer from '../../components/Footer';
import EventosPage from '../../components/eventos/EventosPage';
import { client } from '../../utils/lib/sanity';

async function getEventosData() {
  try {
    const query = `*[_type == "eventosPage"][0]`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados da página de eventos:', error);
    return null;
  }
}

export default async function Eventos() {
  const eventosData = await getEventosData();

  return (
    <div className="min-h-screen bg-white">
      <LandingPageHeader pageType="eventos" />
      <main>
        <EventosPage data={eventosData} />
      </main>
      <Footer />
    </div>
  );
}