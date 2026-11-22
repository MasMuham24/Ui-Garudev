export default function SectionLoader() {
  return (
    <div className="flex min-h-[320px] w-full items-center justify-center py-24">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex h-11 w-11 items-center justify-center">
          <span className="absolute h-full w-full animate-ping rounded-full bg-blue-400 opacity-25" />
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/35">
            <span className="h-2.5 w-2.5 rounded-full bg-white animate-pulse" />
          </span>
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-widest text-blue-600/70 animate-pulse">
          Memuat Konten...
        </span>
      </div>
    </div>
  );
}
