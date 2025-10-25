import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Services />
      <Portfolio />
    </PageTransition>
  );
}
