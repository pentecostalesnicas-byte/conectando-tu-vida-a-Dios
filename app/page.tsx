import Navbar from "@/components/layout/Navbar";
import { Hero } from "@/components/home-v2";
import QuickLinks from "@/components/home/QuickLinks";
import Identity from "@/components/home/Identity";
import LatestResources from "@/components/home/LatestResources";

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
    </>
  );
}