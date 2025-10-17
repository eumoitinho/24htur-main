import Header from '../../components/Header';
import ThankYouContent from '../../components/obrigado/ThankYouContent';
import Footer from '../../components/Footer';

export default function Obrigado() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <ThankYouContent />
      </main>
      <Footer />
    </div>
  );
}