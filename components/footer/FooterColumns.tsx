import Image from "next/image";
import Link from "next/link";

import {
  Compass,
  BookOpen,
  Share2,
  ChevronRight,
} from "lucide-react";
import {
  SiInstagram,
  SiFacebook,
  SiTiktok,
  SiWhatsapp,
} from "react-icons/si";

export default function FooterColumns() {
  return (
    <section className="relative z-20 mx-auto -mt-28 max-w-7xl px-6 pb-16 lg:px-8">

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-900/70 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,.60)]">

        {/* Luces */}
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-[140px]" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-amber-400/10 blur-[140px]" />

        <div className="relative z-10 grid grid-cols-1 gap-16 px-14 py-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div className="flex items-center justify-center">

            <Image
              src="/images/branding/logo-footer.png"
              alt="Sendero de Luz"
              width={340}
              height={110}
              priority
              className="object-contain drop-shadow-[0_0_25px_rgba(251,191,36,.18)]"
            />

          </div>

          {/* Explora */}
          <div>

            <div className="mb-8">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">

                  <Compass
                    size={20}
                    className="text-amber-400"
                  />

                </div>

                <h3 className="text-xl font-bold text-white">
                  Explora
                </h3>

              </div>

              <div className="mt-4 h-px w-28 bg-gradient-to-r from-amber-400 via-amber-300/50 to-transparent" />

            </div>

            <ul className="space-y-5">

              {[
                "Inicio",
                "Sermones",
                "Estudios",
                "Videos",
                "Biblioteca",
              ].map((item) => (

                <li key={item}>

                  <Link
                    href="/"
                    className="group flex items-center gap-3 text-slate-300 transition-all duration-300 hover:text-amber-300"
                  >

                    <ChevronRight
                      size={17}
                      className="-ml-2 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100 text-amber-400"
                    />

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {item}
                    </span>

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Recursos */}
          <div>

            <div className="mb-8">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">

                  <BookOpen
                    size={20}
                    className="text-amber-400"
                  />

                </div>

                <h3 className="text-xl font-bold text-white">
                  Recursos
                </h3>

              </div>

              <div className="mt-4 h-px w-28 bg-gradient-to-r from-amber-400 via-amber-300/50 to-transparent" />

            </div>

            <ul className="space-y-5">

              {[
                "Devocionales",
                "Estudios Bíblicos",
                "Consejería",
                "Preguntas Bíblicas",
                "Recursos Gratuitos",
              ].map((item) => (

                <li key={item}>

                  <Link
                    href="/"
                    className="group flex items-center gap-3 text-slate-300 transition-all duration-300 hover:text-amber-300"
                  >

                    <ChevronRight
                      size={17}
                      className="-ml-2 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100 text-amber-400"
                    />

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {item}
                    </span>

                  </Link>

                </li>

              ))}

            </ul>

          </div>
                  {/* Contacto */}
<div>

  <div className="mb-8">

    <div className="flex items-center gap-3">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">

        <Share2
          size={20}
          className="text-amber-400"
        />

      </div>

      <h3 className="text-xl font-bold text-white">
        Síguenos
      </h3>

    </div>

    <div className="mt-4 h-px w-28 bg-gradient-to-r from-amber-400 via-amber-300/50 to-transparent" />

  </div>

  <div className="grid grid-cols-2 gap-4">

    {/* Instagram */}
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:bg-pink-500/10"
    >
      <SiInstagram
        size={24}
        className="text-pink-500"
      />

      <span className="text-sm font-medium text-slate-200">
        Instagram
      </span>

    </a>

    {/* Facebook */}
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10"
    >
      <SiFacebook
        size={24}
        className="text-blue-500"
      />

      <span className="text-sm font-medium text-slate-200">
        Facebook
      </span>

    </a>

    {/* TikTok */}
    <a
      href="https://tiktok.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
    >
      <SiTiktok
        size={24}
        className="text-white"
      />

      <span className="text-sm font-medium text-slate-200">
        TikTok
      </span>

    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/50557592638"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:bg-green-500/10"
    >
      <SiWhatsapp
        size={24}
        className="text-green-500"
      />

      <span className="text-sm font-medium text-slate-200">
        WhatsApp
      </span>

    </a>

  </div>

</div>

        </div>

      </div>

    </section>
  );
}