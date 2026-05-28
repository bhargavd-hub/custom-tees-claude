export default function Loading() {
  return (
    <div className="grid min-h-[40vh] place-items-center bg-white py-24">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-brand" />
        <p className="text-sm font-medium text-ink-muted">Loading…</p>
      </div>
    </div>
  );
}
