import NavBar from '../components/NavBar';
import HeroBanner from '../components/HeroBanner';
import AboutHero from '../components/AboutHero';
import MissionValues from '../components/MissionValues';
import TeamSection from '../components/TeamSection';
import ServicesShowcase from '../components/ServicesShowcase';
import SuccessStories from '../components/SuccessStories';
import WhyWorkWithUs from '../components/whyworkwithus';
import Footer from '../components/Footer';
import Form from '../components/form'
export default function Home() {
  const sections = [
    { id: 'heroBanner', component:<HeroBanner /> },
    { id: 'about', component:<AboutHero /> },
    // { id: 'missionValues', component:<MissionValues /> },
    // { id: 'teamSection', component:<TeamSection /> },
    { id: 'services', component:<ServicesShowcase /> },
    { id: 'successStories', component:<SuccessStories /> },
    // { id: 'workwithus', component:<WhyWorkWithUs /> },
    // { id: 'contactForm', component:<Form formRef={formRef} /> },
  ];

  return (
    <div className="scroll-smooth">
      <NavBar />
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          {section.component}
        </section>
      ))}
      <Footer/>
    </div>
  );
}
