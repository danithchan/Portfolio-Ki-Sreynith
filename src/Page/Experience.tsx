import { useEffect, useRef, useState } from "react";
import { GraduationCap, Code2 } from "lucide-react";
import Reveal from "../component/Reveal";
import GlassCube from "../component/GlassCube";

const experience = [
  {
    date: "2023 - Present",
    title: "Bachelor of Computer Science",
    description:
      "Currently studying Computer Science at the Royal University of Phnom Penh (RUPP), focusing on software development, web technologies, databases, and problem-solving.",
    icon: GraduationCap,
    number: "01",
  },
{
  date: "Currently",
  title: "Year 4 Student & Project Builder",
  description:
    "Currently a fourth-year Computer Science student at RUPP, continuing to build and improve full-stack web projects using React, TypeScript, Tailwind CSS, Node.js, Express.js, PostgreSQL, and Prisma ORM. Focused on authentication, dashboards, responsive UI, and deploying real-world applications while preparing for a Web Developer internship.",
  icon: Code2,
  number: "02",
}
];

/* Fires once when an element scrolls into view */
function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, shown };
}

function TimelineItem({
  item,
  index,
}: {
  item: (typeof experience)[number];
  index: number;
}) {
  const { ref, shown } = useInView<HTMLDivElement>();
  const Icon = item.icon;
  const left = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative pl-12 md:grid md:grid-cols-2 md:gap-20 md:pl-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-4 top-10 z-10 -translate-x-1/2 md:left-1/2">
        <span
          className={`block size-4 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.8)] ${
            shown ? "animate-pop-in" : "opacity-0"
          }`}
        />
        {shown && (
          <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
        )}
      </div>

      {/* Card */}
      <div
        className={`${left ? "md:col-start-1" : "md:col-start-2"} ${
          shown
            ? left
              ? "animate-slide-right"
              : "animate-slide-left"
            : "opacity-0"
        }`}
      >
        <article
          className="
            glow-border group relative flex h-full flex-col overflow-hidden
            rounded-3xl border border-white/15 bg-white/6 p-6
            backdrop-blur-2xl
            shadow-[0_8px_60px_rgba(255,255,255,0.07),inset_0_1px_0_rgba(255,255,255,0.15)]
            transition-all duration-500
            hover:-translate-y-2 hover:border-white/40
            hover:shadow-[0_15px_70px_rgba(255,255,255,0.14)]
            sm:p-8
          "
        >
          {/* Shine sweep on hover */}
          <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-1000 group-hover:left-[150%] group-hover:opacity-100" />

          {/* Card glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-white/10 opacity-0 blur-[65px] transition-opacity duration-500 group-hover:opacity-100" />

          {/* Number and date */}
          <div className="relative flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-sm text-neutral-400">
              / {item.number}
            </span>

            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-xs text-neutral-200 shadow-[0_0_14px_rgba(255,255,255,0.08)]">
              {item.date}
            </span>
          </div>

          {/* Icon */}
          <div
            className="animate-icon-bob relative mt-8 flex size-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.10)] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-white/50 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
            style={{ animationDelay: `${index * 400}ms` }}
          >
            <Icon
              size={30}
              strokeWidth={1.7}
              className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]"
            />
          </div>

          {/* Information */}
          <div className="relative mt-7">
            <h3 className="font-display text-xl font-bold text-white transition-colors duration-300 group-hover:text-neutral-300 sm:text-2xl">
              {item.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              {item.description}
            </p>
          </div>

          {/* Bottom accent */}
          <div className="relative mt-auto pt-7">
            <div className="h-px w-full bg-white/10">
              <div className="h-full w-0 bg-linear-to-r from-neutral-500 to-white transition-all duration-700 group-hover:w-full" />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref: lineRef, shown: lineShown } =
    useInView<HTMLDivElement>(0.1);

  return (
    <section
      id="experience"
      className="
        relative isolate flex min-h-screen items-center overflow-hidden
        bg-linear-to-br from-[#050505] via-[#171717] to-[#080808]
        px-4 py-20 text-white sm:px-6 lg:px-10
      "
    >
      {/* Tech grid background */}
      {/* <div
        className="
          pointer-events-none absolute inset-0 -z-10 opacity-7
          bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
          bg-size-[48px_48px]
          mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]
        "
      /> */}

      {/* Glow */}
      <div className="pointer-events-none absolute -left-24 -top-20 size-56 rounded-full bg-white/10 blur-[90px] sm:size-80 sm:blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 size-64 rounded-full bg-neutral-400/10 blur-[100px] sm:size-96 sm:blur-[130px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[110px]" />

      {/* Floating 3D Glass Cubes */}
      <GlassCube
        size={42}
        className="right-[5%] top-24 hidden animate-float sm:block"
      />
      <GlassCube
        size={28}
        className="left-[3%] top-[50%] hidden animate-float-slow md:block"
      />
      <GlassCube
        size={34}
        className="bottom-12 left-[46%] hidden animate-float lg:block"
      />
      <GlassCube
        size={22}
        className="left-[30%] top-16 hidden animate-float-slow lg:block"
      />
      <GlassCube
        size={26}
        className="bottom-20 right-[3%] hidden animate-float-slow md:block"
      />

      {/* Main content */}
      <div className="relative mx-auto w-full max-w-6xl">
        {/* Heading */}
        <Reveal>
          <div className="mb-14 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-mono text-xs font-semibold tracking-[0.2em] text-neutral-200 backdrop-blur-xl">
              <span className="size-2 animate-pulse rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
              MY JOURNEY
            </span>

            <h2 className="font-display text-[clamp(30px,5vw,48px)] font-bold tracking-tight text-white">
              Education{" "}
              <span className="bg-linear-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,255,255,0.25)]">
                & Experience
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              My academic journey and practical experience in computer science
              and software development.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div
          ref={lineRef}
          className="relative space-y-10 md:space-y-14"
        >
          {/* Center line (draws itself) */}
          <div
            className={`absolute bottom-0 left-4 top-0 w-px origin-top -translate-x-1/2 bg-linear-to-b from-white/80 via-white/30 to-transparent shadow-[0_0_12px_rgba(255,255,255,0.35)] md:left-1/2 ${
              lineShown ? "animate-line-grow" : "scale-y-0"
            }`}
          />

          {experience.map((item, index) => (
            <TimelineItem
              key={item.number}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* Bottom decoration */}
        <Reveal delayMs={300}>
          <div className="mt-12 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-linear-to-r from-transparent to-white/50" />
            <span className="size-1.5 animate-pulse rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            <span className="h-px w-12 bg-linear-to-l from-transparent to-white/50" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}