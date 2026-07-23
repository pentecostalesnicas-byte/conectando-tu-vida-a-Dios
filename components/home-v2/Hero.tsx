import Background from "./Background";
import HeroCard from "./HeroCard";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Background />

      <div className="relative z-10 mx-auto max-w-[1400px] px-10 sm:px-12 lg:px-20 xl:px-24">
        <div className="grid min-h-[680px] grid-cols-1 items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Izquierda */}
          <div className="flex justify-center lg:justify-start pl-16 xl:pl-24">
            <HeroContent />
          </div>

      {/* Derecha */}
<div className="hidden lg:flex justify-center">
  <HeroCard />
</div>

        </div>
      </div>
    </section>
  );
}