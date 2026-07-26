"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeartHandshake } from "lucide-react";

const menuItems = [
  { label: "Inicio", href: "/" },
  { label: "Sermones", href: "/sermons" },
  { label: "Estudios", href: "/studies" },
  { label: "Videos", href: "/videos" },
  { label: "Biblioteca", href: "/library" },
  { label: "Contacto", href: "/contact" },
];

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // Navbar compacto
      setCompact(current > 80);

      // Siempre visible al volver arriba
      if (current < 80) {
        setHidden(false);
      } else {
        // Bajando
        if (current > lastScrollY + 8) {
          setHidden(true);
        }

        // Subiendo
        if (current < lastScrollY - 8) {
          setHidden(false);
        }
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        border-b border-white/10
        bg-slate-950/80
        backdrop-blur-xl
        transition-all duration-300 ease-in-out
        ${
          hidden
            ? "-translate-y-full"
            : "translate-y-0"
        }
        ${
          compact
            ? "shadow-2xl"
            : ""
        }
      `}
    >
      <div
        className={`
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-8
          transition-all
          duration-300
          ${
            compact
              ? "h-20"
              : "h-28"
          }
        `}
      >
        {/* ================= LOGO ================= */}

        <Link
          href="/"
          className="flex items-center gap-5 transition duration-300 hover:opacity-90"
        >
          <Image
            src="/images/logo/logo-ipun-betel.png"
            alt="Sendero de Luz"
            width={72}
            height={72}
            priority
            unoptimized
            className={`
              object-contain
              transition-all
              duration-300
              ${
                compact
                  ? "h-12 w-12"
                  : "h-16 w-16"
              }
            `}
          />

          <div className="leading-none -mt-1">
            <h1
              className={`
                font-black tracking-tight
                transition-all duration-300
                ${
                  compact
                    ? "text-3xl"
                    : "text-4xl"
                }
              `}
            >
              <span className="text-white">
                Sendero
              </span>

              <span className="ml-2 text-amber-400">
                de Luz
              </span>
            </h1>

            <p
              className={`
                mt-2
                uppercase
                tracking-[0.38em]
                text-slate-300
                transition-all
                duration-300
                ${
                  compact
                    ? "text-[10px]"
                    : "text-xs"
                }
              `}
            >
              Conectando tu Vida a Dios
            </p>
          </div>
        </Link>

        {/* ================= MENÚ ================= */}

        <nav
          className={`
            hidden
            md:flex
            items-center
            transition-all
            duration-300
            ${
              compact
                ? "gap-7"
                : "gap-10"
            }
          `}
        >
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`
                relative
                font-semibold
                text-white
                transition-all
                duration-300
                hover:text-amber-400
                after:absolute
                after:-bottom-2
                after:left-0
                after:h-[2px]
                after:w-0
                after:bg-amber-400
                after:transition-all
                after:duration-300
                hover:after:w-full
                ${
                  compact
                    ? "text-base"
                    : "text-lg"
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ================= BOTÓN ================= */}

        <Link
          href="/prayer"
          className={`
            inline-flex
            items-center
            rounded-full
            bg-gradient-to-r
            from-amber-500
            to-yellow-400
            font-semibold
            text-slate-900
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-2xl
            ${
              compact
                ? "gap-2 px-6 py-2.5"
                : "gap-3 px-8 py-3"
            }
          `}
        >
          <div
            className={`
              flex
              items-center
              justify-center
              rounded-full
              bg-white/25
              transition-all
              duration-300
              ${
                compact
                  ? "h-8 w-8"
                  : "h-10 w-10"
              }
            `}
          >
            <HeartHandshake
              className={`
                transition-all
                duration-300
                ${
                  compact
                    ? "h-4 w-4"
                    : "h-5 w-5"
                }
              `}
            />
          </div>

          <span className="whitespace-nowrap">
            Pedir Oración
          </span>
        </Link>
      </div>
    </header>
  );
}