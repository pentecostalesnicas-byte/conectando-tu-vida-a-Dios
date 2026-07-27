import Navbar from "@/components/layout/Navbar";
import { Hero } from "@/components/home";
import QuickLinks from "@/components/home/QuickLinks";
import Identity from "@/components/home/Identity";
import LatestResources from "@/components/home/LatestResources";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <QuickLinks />
        <Identity />
        <LatestResources />
      </main>

      <Footer />
    </>
  );
}