import type { Metadata } from "next";
import { Container } from "./components/Container";
import { Button } from "./components/Button";
import { AppShell } from "./components/AppShell";
import { getContent } from "./lib/content";
import { FeatureCard } from "./components/FeatureCard";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const features = getContent("en").features;
  return (
    <AppShell locale="en">
      <div className="relative overflow-hidden">
        <div className="brand-glow pointer-events-none absolute inset-0 opacity-70" />
        <Container className="relative flex flex-col items-center py-24 text-center sm:py-32">
          <span className="text-6xl font-bold text-gradient">404</span>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            This page wandered off
          </h1>
          <p className="mt-4 max-w-md text-lg text-muted">
            The page you’re looking for doesn’t exist or has moved. Let’s get you
            back to creating.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/" size="lg">
              Back to home
            </Button>
            <Button href="/features" variant="secondary" size="lg">
              Browse features
            </Button>
          </div>

          <div className="mt-16 grid w-full max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.slug} feature={feature} />
            ))}
          </div>
        </Container>
      </div>
    </AppShell>
  );
}
