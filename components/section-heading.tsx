export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string; }) {
  return (
    <div className="space-y-3">
      {eyebrow ? <p className="text-[0.75rem] uppercase tracking-[0.36em] text-smoke">{eyebrow}</p> : null}
      <h2 className="max-w-3xl text-3xl font-medium leading-tight text-charcoal sm:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-base leading-8 text-smoke">{description}</p> : null}
    </div>
  );
}
