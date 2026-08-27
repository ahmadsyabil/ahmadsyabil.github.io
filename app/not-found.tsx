import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-[100svh] place-items-center px-6">
      <div className="text-center">
        <p className="font-mono text-sm tracking-[0.3em] text-accent">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Page not found</h1>
        <p className="mx-auto mt-3 max-w-sm text-pretty text-muted">
          That page does not exist. Everything on this site lives on one page.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to the portfolio
        </Link>
      </div>
    </main>
  );
}
