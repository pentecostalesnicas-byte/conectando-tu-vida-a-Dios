interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
  theme?: "light" | "dark";
}

export default function SectionTitle({
  badge,
  title,
  description,
  theme = "dark",
}: SectionTitleProps) {
  const isDark = theme === "dark";

  return (
    <div className="mx-auto mb-20 flex w-full max-w-5xl flex-col items-center text-center">
      {badge && (
        <div className="flex justify-center">
          <span
            className={`inline-flex rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] ${
              isDark
                ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
                : "border-amber-500/20 bg-amber-50 text-amber-700"
            }`}
          >
            {badge}
          </span>
        </div>
      )}

      <h2
        className={`mt-6 max-w-4xl text-center text-4xl font-bold tracking-tight md:text-5xl ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <div className="mt-6 flex w-full justify-center">
          <p
            className={`max-w-3xl text-center text-lg leading-9 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {description}
          </p>
        </div>
      )}
    </div>
  );
}