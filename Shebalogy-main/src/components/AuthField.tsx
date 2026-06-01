"use client";

export function AuthField({
  label,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">{label}</span>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl bg-white/50 border border-border px-4 py-2.5 outline-none focus:border-primary focus:bg-white transition"
      />
    </label>
  );
}
