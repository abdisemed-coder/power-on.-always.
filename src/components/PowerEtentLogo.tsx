export function PowerEtentLogo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-2 ${className}`} aria-label="PowerEtent home">
      <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-amber amber-pulse" aria-hidden />
      <span className="font-display text-[1.05rem] font-semibold tracking-tight text-paper">
        Power<span className="text-amber">Etent</span>
      </span>
    </a>
  );
}
