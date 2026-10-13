type Props = {
  title: string;
  eyebrow?: string;
};

export default function SectionTitle({ title, eyebrow }: Props) {
  return (
    <div className="mb-10 sm:mb-12 lg:mb-14">
      {eyebrow && (
        <span className="text-xs font-medium tracking-widest text-amber-400 sm:text-sm">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 sm:mt-5 sm:w-20" />
    </div>
  );
}