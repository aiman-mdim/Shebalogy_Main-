import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

export function Hero({
  bg,
  icon: Icon,
  title,
  sub,
}: {
  bg: string | StaticImageData;
  icon: LucideIcon;
  title: string;
  sub: string;
}) {
  const bgSrc = typeof bg === "string" ? bg : bg.src;

  return (
    <section className="relative px-4 sm:px-6 pt-8 pb-12">
      <div className="relative mx-auto max-w-7xl rounded-3xl overflow-hidden shadow-soft min-h-[400px] flex items-end">
        <img
          src={bgSrc}
          alt=""
          width={1536}
          height={1024}
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.07_258/0.92)] via-[oklch(0.18_0.07_258/0.6)] to-[oklch(0.18_0.07_258/0.3)]" />
        <div className="relative p-8 sm:p-12 text-white max-w-3xl animate-fade-up">
          <div className="glass rounded-2xl size-14 flex items-center justify-center mb-4">
            <Icon className="size-7" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{title}</h1>
          <p className="mt-3 text-white/80 text-base sm:text-lg max-w-2xl">{sub}</p>
        </div>
      </div>
    </section>
  );
}
