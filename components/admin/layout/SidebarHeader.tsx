export default function SidebarHeader() {
  return (
    <div className="border-b border-slate-800 px-6 py-7">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-lg font-bold text-slate-950 shadow-lg">
          B
        </div>

        <div>
          <h1 className="text-lg font-bold tracking-wide text-white">
            BETEL ADN
          </h1>

          <p className="text-sm text-slate-400">
            Ministerio Digital
          </p>
        </div>
      </div>
    </div>
  );
}