import Link from "next/link";
import { Heart } from "lucide-react";

export default function FooterBottom() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:px-8">

        {/* Copyright */}
        <div className="text-center lg:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            IPUN BETEL
          </span>
          {" · "}
          Conectando tu Vida a Dios
        </div>

        {/* Enlaces */}
        <div className="flex flex-wrap items-center justify-center gap-6">

          <Link
            href="/privacidad"
            className="transition-colors hover:text-amber-300"
          >
            Política de Privacidad
          </Link>

          <Link
            href="/terminos"
            className="transition-colors hover:text-amber-300"
          >
            Términos de Uso
          </Link>

        </div>

        {/* Mensaje */}
        <div className="flex items-center gap-2 text-center">
          <Heart
            size={15}
            className="fill-amber-400 text-amber-400"
          />

          <span>
            Hecho para la gloria de Jesucristo.
          </span>
        </div>

      </div>
    </section>
  );
}