interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40">
      {children}
    </span>
  );
}