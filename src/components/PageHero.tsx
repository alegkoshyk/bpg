import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  image?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
  image = "/images/17.jpg",
}: PageHeroProps) {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/92 via-primary/85 to-primary/75" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1C182E] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          {breadcrumb && (
            <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4 block">
              {breadcrumb}
            </span>
          )}
          <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg text-white/50 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
