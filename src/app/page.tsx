import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Frameworks from "@/components/Frameworks";
import Models from "@/components/Models";
import Integrations from "@/components/Integrations";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Frameworks />
        <Models />
        <Integrations />
        <Process />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
