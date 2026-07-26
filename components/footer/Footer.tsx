import FooterBackground from "./FooterBackground";
import FooterCTA from "./FooterCTA";
import FooterColumns from "./FooterColumns";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <FooterBackground />

      <div className="relative z-10">
        <FooterCTA />
        <FooterColumns />
        <FooterBottom />
      </div>
    </footer>
  );
}