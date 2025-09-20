import HeroSection from "./Components/herosection";
import CardSection from "./Components/cardsection";
import StatsSection from "./Components/statssection";
import AboutUs from "./Components/aboutus";

export default function Home() {
  return (
    <div>
      <main>
      <HeroSection />
      <CardSection />
      <StatsSection />
      <AboutUs />
      </main>
    </div>
  );
}
