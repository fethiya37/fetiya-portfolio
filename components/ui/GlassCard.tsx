type Props = {
  children: React.ReactNode;
};

export default function GlassCard({
  children,
}: Props) {
  return (
    <div
      className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-md
      p-6
    "
    >
      {children}
    </div>
  );
}