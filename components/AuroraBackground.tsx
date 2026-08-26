/**
 * Decorative background: two slow gradient blobs plus a masked grid.
 * Pure CSS — no canvas, no rAF loop, no cost on the main thread.
 */
export default function AuroraBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-[0.45]" />
      <div
        className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full opacity-70 blur-[120px] animate-float"
        style={{
          background:
            'radial-gradient(circle, rgb(var(--glow-a) / var(--glow-strength)) 0%, transparent 68%)',
        }}
      />
      <div
        className="absolute right-[-10%] top-1/4 h-[30rem] w-[30rem] rounded-full opacity-70 blur-[110px] animate-drift"
        style={{
          background:
            'radial-gradient(circle, rgb(var(--glow-b) / var(--glow-strength)) 0%, transparent 68%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 h-full w-full"
        style={{
          background:
            'linear-gradient(to bottom, transparent 55%, rgb(var(--bg)) 100%)',
        }}
      />
    </div>
  );
}
