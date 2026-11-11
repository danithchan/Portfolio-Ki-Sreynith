import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, GraduationCap, Sparkles, Target } from "lucide-react";

import profile from "../assets/profile.png";

const aboutPoints = [
  {
    icon: GraduationCap,
    label: "Education",
    text: (
      <>
        <strong className="font-semibold text-white">
          Fourth-year Computer Science student
        </strong>{" "}
        at the Royal University of Phnom Penh (RUPP), Cambodia.
      </>
    ),
  },
  {
    icon: Sparkles,
    label: "What I Do",
    text: (
      <>
        I'm passionate about building{" "}
        <strong className="font-semibold text-white">
          modern, responsive websites
        </strong>{" "}
        and creating{" "}
        <strong className="font-semibold text-white">engaging videos</strong>{" "}
        with CapCut.
      </>
    ),
  },
  {
    icon: Target,
    label: "My Goal",
    text: (
      <>
        Looking for a{" "}
        <strong className="font-semibold text-white">
          Web Developer Internship
        </strong>{" "}
        to gain experience and grow as a developer.
      </>
    ),
  },
];

type Tag = { name: string; creative?: boolean };

const tags: Tag[] = [

];

/* Decorative barcode bar widths */
const bars = [2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 1, 2, 3, 1, 2, 1, 3, 2, 1, 2, 4];

const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------- Animation variants ---------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE },
  }),
};

const slideIn: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay, ease: EASE },
  }),
};

/* Reduced-motion version: fade only, no movement */
const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  show: (delay: number) => ({
    opacity: 1,
    transition: { duration: 0.4, delay: delay * 0.3 },
  }),
};

/* ---------- 3D Glass Cube (same as Home) ---------- */
const faces = [
  "rotateY(0deg)",
  "rotateY(90deg)",
  "rotateY(180deg)",
  "rotateY(-90deg)",
  "rotateX(90deg)",
  "rotateX(-90deg)",
];

function GlassCube({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute perspective-700px ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="animate-cube relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {faces.map((rot) => (
          <div
            key={rot}
            className="absolute inset-0 border border-white/30 bg-white/5 shadow-[inset_0_0_14px_rgba(255,255,255,0.2)] backdrop-blur-[2px]"
            style={{ transform: `${rot} translateZ(${size / 2}px)` }}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- Hanging ID badge ---------- */
function IdBadge() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-70 sm:max-w-77.5">
      {/* Strap */}
      <div
        aria-hidden
        className="absolute bottom-[calc(100%-8px)] left-1/2 z-0 h-[60vh] w-7 -translate-x-1/2 bg-linear-to-b from-white/70 via-white to-neutral-200 shadow-[0_0_18px_rgba(0,0,0,0.25)]"
      >
        <div className="absolute inset-y-0 left-1 w-px bg-neutral-300/80" />
        <div className="absolute inset-y-0 right-1 w-px bg-neutral-300/80" />
      </div>

      {/* Hover tilt */}
      <motion.div
        whileHover={reduce ? undefined : { rotate: 4, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        style={{ transformOrigin: "50% 0%" }}
        className="relative z-10"
      >
        {/* Idle swing + float */}
        <motion.div
          animate={
            reduce ? undefined : { rotate: [-1.8, 1.8, -1.8], y: [0, 6, 0] }
          }
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "50% 0%" }}
          className="flex flex-col items-center"
        >
          {/* Metal clip */}
          <div
            aria-hidden
            className="relative z-20 -mb-5 flex flex-col items-center"
          >
            <div className="h-5 w-10 rounded-t-md border border-neutral-400/60 bg-linear-to-b from-neutral-100 via-neutral-300 to-neutral-400 shadow-md" />
            <div className="h-9 w-12 rounded-b-xl border border-neutral-400/60 bg-linear-to-br from-neutral-100 via-neutral-300 to-neutral-500 shadow-[0_6px_14px_rgba(0,0,0,0.35)]">
              <div className="mx-auto mt-2 h-1.5 w-6 rounded-full bg-neutral-600/40" />
            </div>
          </div>

          {/* Card */}
          <div
            className="
              relative w-full rounded-3xl border border-white/70
              bg-linear-to-b from-white via-neutral-50 to-neutral-200
              px-4 pb-5 pt-9 text-neutral-900
              shadow-[0_25px_60px_rgba(0,0,0,0.45),0_0_50px_rgba(255,255,255,0.12)]
              sm:px-5
            "
          >
            {/* Lanyard slot */}
            <div
              aria-hidden
              className="absolute left-1/2 top-3 h-2.5 w-14 -translate-x-1/2 rounded-full bg-neutral-300 shadow-inner"
            />

            {/* Photo */}
            <div className="relative overflow-hidden rounded-2xl border border-neutral-300 bg-neutral-100 shadow-inner">
              <img
                src={profile}
                alt="Ki Sreynith - Web Developer & Video Editor"
                className="aspect-4/5 w-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-white/25" />
            </div>

            {/* Details */}
            <div className="mt-4 text-center">
              <h3 className="font-display text-lg font-black tracking-tight text-neutral-900">
                Ki Sreynith
              </h3>
              <p className="mt-0.5 font-mono text-[10px] font-semibold uppercase leading-snug tracking-[0.14em] text-neutral-600 sm:text-[11px] sm:tracking-[0.16em]">
                Web Developer &amp; Video Editor
              </p>
              <p className="mt-1 text-[11px] text-neutral-500">
                Computer Science · RUPP
              </p>
            </div>

            {/* Barcode */}
            <div
              aria-hidden
              className="mt-4 flex h-8 items-stretch justify-center gap-0.5 opacity-70"
            >
              {bars.map((w, i) => (
                <span
                  key={i}
                  className="bg-neutral-800"
                  style={{ width: `${w}px` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function About() {
  const reduce = useReducedMotion();

  const fade = reduce ? fadeOnly : fadeUp;
  const slide = reduce ? fadeOnly : slideIn;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="
        relative isolate flex min-h-screen items-center overflow-hidden
        bg-linear-to-br from-[#050505] via-[#151515] to-[#000000]
        px-4 py-20 sm:px-6 sm:py-24 lg:px-10
      "
    >
      {/* Tech grid background */}
      {/* <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-10 opacity-7
          bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
          bg-size-[48px_48px]
          mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]
        "
      /> */}

      {/* Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-20 size-56 rounded-full bg-white/10 blur-[90px] sm:size-80 sm:blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-20 size-64 rounded-full bg-neutral-400/10 blur-[100px] sm:size-96 sm:blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[110px]"
      />

      {/* Floating 3D Glass Cubes */}
      <GlassCube size={40} className="right-[6%] top-24 hidden animate-float sm:block" />
      <GlassCube size={28} className="left-[3%] top-[60%] hidden animate-float-slow md:block" />
      <GlassCube size={34} className="bottom-12 left-[46%] hidden animate-float lg:block" />
      <GlassCube size={22} className="left-[40%] top-16 hidden animate-float-slow lg:block" />
      <GlassCube size={26} className="bottom-24 right-[3%] hidden animate-float-slow md:block" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        {/* LEFT: ID badge */}
        <motion.div
          variants={fade}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="pt-16 lg:pt-24"
        >
          <IdBadge />
        </motion.div>

        {/* RIGHT: Animated glass content */}
        <motion.div
          variants={fade}
          custom={0.15}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative min-w-0"
        >
          {/* Soft pulsing aura behind the box */}
          <motion.div
            aria-hidden
            animate={
              reduce ? undefined : { opacity: [0.35, 0.7, 0.35], scale: [1, 1.03, 1] }
            }
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-linear-to-r from-white/15 via-neutral-400/10 to-white/15 blur-2xl"
          />

          {/* Rotating gradient border */}
          <div className="relative overflow-hidden rounded-3xl p-px shadow-[0_8px_60px_rgba(255,255,255,0.08)]">
            <motion.div
              aria-hidden
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.9)_70deg,transparent_140deg,transparent_200deg,rgba(180,180,180,0.8)_270deg,transparent_340deg)]"
            />

            {/* Inner glass panel */}
            <div className="relative rounded-[calc(1.5rem-1px)] bg-[#111111]/95 p-5 text-white backdrop-blur-2xl sm:p-8">
              {/* Inner highlight */}
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]" />

              {/* Scanning light line */}
              {!reduce && (
                <motion.div
                  aria-hidden
                  animate={{ y: ["-10%", "1100%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/70 to-transparent shadow-[0_0_14px_rgba(255,255,255,0.7)]"
                />
              )}

              {/* Terminal-style header */}
              <div className="mb-5 flex items-center justify-between">
                <div aria-hidden className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-neutral-400/80" />
                  <span className="size-2.5 rounded-full bg-neutral-300/80" />
                  <span className="size-2.5 rounded-full bg-white/80" />
                </div>
                <span
                  aria-hidden
                  className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-neutral-400"
                >
                  <span className="size-1.5 animate-pulse rounded-full bg-white" />
                  about.me
                </span>
              </div>

              <h2
                id="about-heading"
                className="mb-2 font-display text-[clamp(26px,3.8vw,38px)] font-bold tracking-tight text-white"
              >
                About{" "}
                <span className="bg-linear-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,255,255,0.3)]">
                  Me
                </span>
                <motion.span
                  aria-hidden
                  animate={reduce ? undefined : { opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-1 inline-block h-[0.9em] w-0.75 translate-y-0.75 bg-white"
                />
              </h2>

              {/* Subtitle */}
              <p className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400 sm:text-xs">
                Web Developer <span className="text-neutral-500">&amp;</span>{" "}
                Video Editor
              </p>

              {/* Info cards */}
              <div className="space-y-3">
                {aboutPoints.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      variants={slide}
                      custom={0.3 + i * 0.14}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      whileHover={reduce ? undefined : { x: 6 }}
                      className="
                        group relative flex items-center gap-4 overflow-hidden rounded-2xl
                        border border-white/10 bg-white/4 px-4 py-4
                        transition-colors duration-300
                        hover:border-white/40 hover:bg-white/8
                        sm:px-5 sm:py-5
                      "
                    >
                      {/* Left accent bar */}
                      <span
                        aria-hidden
                        className="absolute inset-y-0 left-0 w-0.5 bg-linear-to-b from-neutral-300 to-white opacity-40 shadow-[0_0_12px_rgba(255,255,255,0.7)] transition-opacity duration-300 group-hover:opacity-100"
                      />

                      {/* Icon */}
                      <div
                        aria-hidden
                        className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                      >
                        <Icon size={20} className="text-white" />
                      </div>

                      <div className="min-w-0">
                        <p className="mb-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                          0{i + 1} / {item.label}
                        </p>
                        <p className="text-sm leading-7 text-neutral-300 sm:text-base">
                          {item.text}
                        </p>
                      </div>

                      {/* Shine sweep on hover */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 -skew-x-12 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100"
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Button */}
              <motion.div
                variants={fade}
                custom={0.8}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <a
                  href="#projects"
                  className="
                    group relative mt-6 inline-flex w-full items-center justify-center gap-2
                    overflow-hidden rounded-xl bg-white
                    px-6 py-3.5 font-bold text-black
                    shadow-[0_0_28px_rgba(255,255,255,0.2)]
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-[0_0_44px_rgba(255,255,255,0.35)]
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
                    sm:w-auto
                  "
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 -skew-x-12 bg-neutral-300/60 opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100"
                  />
                  <span className="relative">Explore My Projects</span>
                  <ArrowUpRight
                    aria-hidden
                    size={18}
                    className="relative transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              {/* Tech tags (CapCut is dashed to mark it as the creative skill) */}
              <ul
                aria-label="Technologies and tools"
                className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5"
              >
                {tags.map((tag, i) => (
                  <motion.li
                    key={tag.name}
                    initial={{ opacity: 0, scale: reduce ? 1 : 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={
                      reduce
                        ? { duration: 0.3 }
                        : {
                            delay: 0.9 + i * 0.07,
                            type: "spring",
                            stiffness: 200,
                            damping: 14,
                          }
                    }
                    whileHover={reduce ? undefined : { y: -3, scale: 1.06 }}
                    className={`cursor-default rounded-full border bg-white/5 px-3 py-1 font-mono text-xs text-neutral-200 shadow-[0_0_14px_rgba(255,255,255,0.06)] transition-shadow hover:shadow-[0_0_22px_rgba(255,255,255,0.2)] ${
                      tag.creative
                        ? "border-dashed border-white/40"
                        : "border-white/25"
                    }`}
                  >
                    {tag.name}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}