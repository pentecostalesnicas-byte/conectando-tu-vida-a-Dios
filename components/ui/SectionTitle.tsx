interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  badge,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-20 w-full max-w-5xl text-center">
      {badge && (
        <div className="flex justify-center">
          <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            {badge}
          </span>
        </div>
      )}

      <h2 className="mt-6 text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}