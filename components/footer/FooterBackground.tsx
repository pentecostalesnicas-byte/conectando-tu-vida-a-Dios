export default function FooterBackground() {
  return (
    <>
      {/* Fondo principal */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />

      {/* Luz azul superior izquierda */}
      <div className="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-sky-500/15 blur-[140px]" />

      {/* Luz dorada superior derecha */}
      <div className="absolute top-24 -right-24 h-[320px] w-[320px] rounded-full bg-amber-400/10 blur-[120px]" />

      {/* Luz inferior central */}
      <div className="absolute bottom-0 left-1/2 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[170px]" />

      {/* Viñeta */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,.55)_100%)]" />

      {/* Línea superior */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

      {/* Patrón de puntos */}
      <div
        className="
          absolute inset-0 opacity-[0.04]
          [background-image:radial-gradient(circle,rgba(255,255,255,.8)_1px,transparent_1px)]
          [background-size:26px_26px]
        "
      />
    </>
  );
}