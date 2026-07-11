import { ART_STYLES } from "../lib/content";

/** Grid of the ten built-in art styles. `detailed` adds the use-case line. */
export function StyleGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {ART_STYLES.map((style) => (
        <li key={style.name} className="card card-hover flex flex-col gap-2 p-5">
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-brand-gradient shadow-[0_0_12px_var(--brand)]"
            />
            <h3 className="font-semibold tracking-tight">{style.name}</h3>
          </div>
          <p className="text-sm leading-relaxed text-muted">{style.feel}</p>
          {detailed ? (
            <p className="mt-1 text-sm leading-relaxed text-muted-strong">
              <span className="font-medium text-foreground">Great for: </span>
              {style.use}
            </p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
