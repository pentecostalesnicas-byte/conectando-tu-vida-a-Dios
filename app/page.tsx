import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import QuickLinks from "@/components/home/QuickLinks";
import Mission from "@/components/home/Mission";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <QuickLinks />
        <Mission />
      </main>
    </>
  );
}