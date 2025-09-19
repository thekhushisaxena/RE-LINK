import Image from "next/image";
import HeroSection from "./Components/herosection";
import CardSection from "./Components/cardsection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CardSection />
      <main>
        Let's build a re-linking service!
      </main>
    </div>
  );
}
