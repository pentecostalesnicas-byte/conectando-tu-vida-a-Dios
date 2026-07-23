import Navbar from "@/components/layout/Navbar";
import { Hero } from "@/components/home-v2";
import QuickLinks from "@/components/home/QuickLinks";
import Mission from "@/components/home/Mission";
import LatestContent from "@/components/home/LatestContent";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <QuickLinks />
        <Mission />
        <LatestContent />
      </main>
    </>
  );
}
