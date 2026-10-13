type Props = {
  title: string;
  eyebrow?: string;
};

export default function SectionTitle({ title, eyebrow }: Props) {
  return (
    <div className="mb-14">
      {eyebrow && (
        <span className="text-sm font-medium tracking-widest text-amber-400">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-100 md:text-5xl">
        {title}
      </h2>

      <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
    </div>
  );
}