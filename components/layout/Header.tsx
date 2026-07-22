import Link from "next/link";

const menu = [
  { name: "Inicio", href: "/" },
  { name: "Sermones", href: "/sermones" },
  { name: "Estudios", href: "/estudios" },
  { name: "Oración", href: "/oracion" },
  { name: "Contacto", href: "/contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link href="/">
          <div>
            <h1 className="text-2xl font-bold text-blue-900">
              Conectando tu Vida a Dios
            </h1>

            <p className="text-sm text-gray-500">
              Ministerio Digital Cristiano
            </p>
          </div>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition hover:text-blue-700"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/donar"
          className="rounded-lg bg-amber-500 px-5 py-2 text-white transition hover:bg-amber-600"
        >
          Donar
        </Link>

      </div>
    </header>
  );
}
