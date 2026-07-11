import { AppStoreButton } from "./AppStoreButton";
import { Button } from "./Button";
import { StarIcon } from "./Icons";
import { Container } from "./Container";
import { RATING, USERS } from "../lib/site";

/** Reusable "download" conversion band used near the foot of most pages. */
export function CTA({
  title = "Start creating in seconds",
  description = "Download Photix free and turn your first idea into share-ready art today. No account, no design skills — just your imagination.",
  secondary,
}: {
  title?: string;
  description?: string;
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-12">
          <div className="brand-glow pointer-events-none absolute inset-0 opacity-70" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
            <p className="text-lg text-muted">{description}</p>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <AppStoreButton />
              {secondary ? (
                <Button href={secondary.href} variant="secondary" size="lg">
                  {secondary.label}
                </Button>
              ) : null}
            </div>
            <p className="flex items-center gap-2 text-sm text-muted">
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-brand-pink" />
                ))}
              </span>
              Rated {RATING} by {USERS} happy users
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
