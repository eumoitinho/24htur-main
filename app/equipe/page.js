import Header from '../../components/Header';
import HeroEquipe from '../../components/equipe/HeroEquipe';
import TeamEquipe from '../../components/equipe/TeamEquipe';
import JoinTeamEquipe from '../../components/equipe/JoinTeamEquipe';
import Footer from '../../components/Footer';

export default function Equipe() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroEquipe />
        <TeamEquipe />
        <JoinTeamEquipe />
      </main>
      <Footer />
    </div>
  );
}