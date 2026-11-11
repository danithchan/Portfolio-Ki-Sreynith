
import type { ReactNode } from "react";
import Reveal from "../component/Reveal";

type Project = {
  title: string;
  badge: string;
  description: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
  demoLabel: string;
};

/* ───────────────────────── PROJECT DATA ───────────────────────── */

const projects: Project[] = [
  {
    title: "Chiro",
    badge: "PERSONAL PROJECT",
    description:
      "A personal e-commerce website project designed for an online gift shop. It includes product browsing, shopping cart, user authentication, order management, and an admin dashboard.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
    demoUrl: "#",
    codeUrl: "#",
    demoLabel: "Coming Soon",
  },
  {
    title: "JUL NOW",
    badge: "TEAM PROJECT",
    description:
      "A collaborative mobile app UI/UX design project created with a team. Focused on designing user-friendly interfaces, consistent visual layouts, and an intuitive user experience using Figma.",
    tags: [
      "Figma",
      "UI Design",
      "UX Design",
      "Prototyping",
      "Teamwork",
    ],
    demoUrl:
      "https://www.figma.com/design/uUcxCTURdJGi4X444NZ8Dp/UI-JUL-NOW?node-id=0-1&t=fIxSZHCeVoLnzczp-1",
    codeUrl: "#",
    demoLabel: "View Design",
  },
  {
    title: "Delivery Drone",
    badge: "ACADEMIC PROJECT",
    description:
      "An academic project exploring drone technology for smart delivery solutions. The concept focuses on innovative logistics, automation, and the use of technology to improve delivery efficiency.",
    tags: [
      "Drone Technology",
      "AI / IoT",
      "Smart Logistics",
      "Innovation",
    ],
    demoUrl:
      "https://drive.google.com/file/d/1j_ufk73Kw_lQ6Srya-bBr0BKASBrDKk5/view?usp=sharing",
    codeUrl: "#",
    demoLabel: "View Project",
  },
  // {
  //   title: "Student Room Rental Management System",
  //   badge: "FEATURED PROJECT",
  //   description:
  //     "A full-stack room rental management system built with React, Express.js, PostgreSQL, and Prisma ORM. Features include authentication, room management, dashboards, responsive UI, and secure backend APIs.",
  //   tags: [
  //     "React",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "Express.js",
  //     "PostgreSQL",
  //     "Prisma",
  //   ],
  //   demoUrl: "https://room-rental-project-gamma.vercel.app/",
  //   codeUrl: "https://github.com/danithchan/Room-Rental-Project",
  //   demoLabel: "Live Demo",
  // },
];

/* ───────────────────────── STYLES & KEYFRAMES ───────────────────────── */

const css = `
html, body {
  overflow-x: clip;
}

/* preview stage */
.pj-stage {
  background: radial-gradient(
    120% 90% at 50% 100%,
    rgba(255,255,255,.12),
    transparent 60%
  );
}

.pj-stage-grid {
  background-image:
    linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px);
  background-size: 28px 28px;
  -webkit-mask-image: radial-gradient(
    ellipse at center,
    #000 30%,
    transparent 75%
  );
  mask-image: radial-gradient(
    ellipse at center,
    #000 30%,
    transparent 75%
  );
}

.pj-scan {
  top: -6rem;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(255,255,255,.10),
    transparent
  );
  animation: pj-scan 5s ease-in-out infinite;
}

@keyframes pj-scan {
  0% { transform: translateY(0); }
  100% { transform: translateY(26rem); }
}

/* section background */

.pj-blob-a {
  animation: pj-drift-a 16s ease-in-out infinite alternate;
}

.pj-blob-b {
  animation: pj-drift-b 19s ease-in-out infinite alternate;
}

.pj-blob-c {
  animation: pj-drift-a 22s ease-in-out infinite alternate-reverse;
}

@keyframes pj-drift-a {
  to { transform: translate(90px, 70px) scale(1.15); }
}

@keyframes pj-drift-b {
  to { transform: translate(-100px, -60px) scale(1.1); }
}

/* heading shimmer */
.pj-title {
  background: linear-gradient(
    100deg,
    #fff 20%,
    #d4d4d4 40%,
    #a3a3a3 55%,
    #fff 75%
  );
  background-size: 250% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: pj-shimmer 6s linear infinite;
}

@keyframes pj-shimmer {
  to { background-position: -250% 0; }
}

/* button shimmer */
.pj-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    transparent 35%,
    rgba(255,255,255,.35) 50%,
    transparent 65%
  );
  transform: translateX(-120%);
  transition: transform .8s ease;
}

.pj-btn:hover::after {
  transform: translateX(120%);
}

/* app mockup motion */
.pj-float {
  animation: pj-float 6s ease-in-out infinite;
}

.pj-float-b {
  animation: pj-float 5s ease-in-out -1.5s infinite;
}

.pj-float-c {
  animation: pj-float 7s ease-in-out -3s infinite;
}

@keyframes pj-float {
  50% { translate: 0 -10px; }
}

.pj-bar {
  transform-origin: bottom;
  animation:
    pj-grow 1.1s cubic-bezier(.2,.8,.2,1) both,
    pj-pulse 3.5s ease-in-out 1.2s infinite;
}

@keyframes pj-grow {
  from { transform: scaleY(0); }
}

@keyframes pj-pulse {
  50% { opacity: .65; }
}

.pj-row {
  animation: pj-slide .7s ease-out both;
}

@keyframes pj-slide {
  from {
    opacity: 0;
    transform: translateX(-14px);
  }
}

.pj-ping {
  box-shadow: 0 0 0 0 rgba(255,255,255,.5);
  animation: pj-ping 1.8s ease-out infinite;
}

@keyframes pj-ping {
  to {
    box-shadow: 0 0 0 9px rgba(255,255,255,0);
  }
}

/* drone motion */
.pj-drone {
  animation: pj-hover 4.5s ease-in-out infinite;
}

@keyframes pj-hover {
  50% { transform: translateY(-9px) rotate(-1.5deg); }
}

.pj-rotor {
  transform-box: fill-box;
  transform-origin: center;
  animation: pj-rotor .12s linear infinite alternate;
}

@keyframes pj-rotor {
  from { transform: scaleX(1); }
  to { transform: scaleX(.35); }
}

.pj-swing {
  transform-box: fill-box;
  transform-origin: 50% 0;
  animation: pj-swing 3.2s ease-in-out infinite;
}

@keyframes pj-swing {
  50% { transform: rotate(3deg); }
  0%, 100% { transform: rotate(-3deg); }
}

.pj-blink {
  animation: pj-blink 1.4s steps(2, jump-none) infinite;
}

@keyframes pj-blink {
  50% { opacity: .15; }
}

.pj-dash {
  animation: pj-dash 1.4s linear infinite;
}

@keyframes pj-dash {
  to { stroke-dashoffset: -22; }
}

.pj-ring {
  transform-box: fill-box;
  transform-origin: center;
  animation: pj-ring 3s ease-out infinite;
}

.pj-ring-2 {
  animation-delay: 1.5s;
}

@keyframes pj-ring {
  from {
    transform: scale(.4);
    opacity: 1;
  }
  to {
    transform: scale(1.6);
    opacity: 0;
  }
}

.pj-pin {
  transform-box: fill-box;
  transform-origin: center;
  animation: pj-pin 2s ease-out infinite;
}

@keyframes pj-pin {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(3);
    opacity: 0;
  }
}

/* spinning glass cubes */
.pj-cube {
  animation: pj-cube 16s linear infinite;
}

@keyframes pj-cube {
  from {
    transform: rotateX(-20deg) rotateY(0deg);
  }
  to {
    transform: rotateX(340deg) rotateY(360deg);
  }
}

/* card hover */
.pj-card {
  transition:
    transform .35s ease,
    border-color .35s ease,
    box-shadow .35s ease;
}

.pj-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255,255,255,.3);
  box-shadow: 0 20px 55px -25px rgba(255,255,255,.22);
}

/* reduced motion */
@media (prefers-reduced-motion: reduce) {
  .pj-scan,
  .pj-blob,
  .pj-title,
  .pj-float,
  .pj-float-b,
  .pj-float-c,
  .pj-bar,
  .pj-row,
  .pj-ping,
  .pj-drone,
  .pj-rotor,
  .pj-swing,
  .pj-blink,
  .pj-dash,
  .pj-ring,
  .pj-pin,
  .pj-cube {
    animation: none !important;
  }

  .pj-card {
    transition: none;
  }
}
`;

/* ───────────────────────── 3D GLASS CUBE ───────────────────────── */

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
  duration = 16,
}: {
  size?: number;
  className?: string;
  duration?: number;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      style={{
        width: size,
        height: size,
        perspective: 700,
      }}
    >
      <div
        className="pj-cube relative h-full w-full"
        style={{
          transformStyle: "preserve-3d",
          animationDuration: `${duration}s`,
        }}
      >
        {faces.map((rot) => (
          <div
            key={rot}
            className="absolute inset-0 border border-white/30 bg-white/5 shadow-[inset_0_0_14px_rgba(255,255,255,0.25)] backdrop-blur-[2px]"
            style={{
              transform: `${rot} translateZ(${size / 2}px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── PREVIEW MOCKUPS ───────────────────────── */

/* Generic website / dashboard preview */
function AppMockup() {
  const bars = [38, 62, 48, 80, 58, 92, 70];

  const rows = [
    { w: "w-24", pill: "bg-neutral-300/80" },
    { w: "w-20", pill: "bg-white/80" },
    { w: "w-28", pill: "bg-neutral-400/80" },
  ];

  return (
    <div className="relative flex h-full w-full items-center justify-center perspective-[1000px]">
      {/* floating chips */}
      <div className="pj-float-b absolute left-[4%] top-[14%] z-20 hidden rounded-xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md sm:block">
        <div className="mb-1 h-1.5 w-10 rounded-full bg-white/50" />
        <div className="h-1.5 w-6 rounded-full bg-neutral-300/80" />
      </div>

      <div className="pj-float-c absolute bottom-[10%] right-[4%] z-20 hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-md sm:flex">
        <span className="pj-ping h-2 w-2 rounded-full bg-white" />
        <span className="h-1.5 w-12 rounded-full bg-white/50" />
      </div>

      {/* browser window */}
      <div
        className="pj-float relative w-[88%] max-w-107.5 overflow-hidden rounded-xl border border-white/15 bg-[#171717]/95 shadow-[0_40px_90px_-25px_rgba(255,255,255,0.15)]"
        style={{
          transform: "rotateX(9deg) rotateY(-14deg) rotateZ(1.5deg)",
        }}
      >
        {/* title bar */}
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/4 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/80" />
          <span className="h-2 w-2 rounded-full bg-neutral-400/70" />
          <span className="h-2 w-2 rounded-full bg-neutral-500/70" />
          <span className="ml-3 h-3.5 flex-1 rounded-full bg-white/[0.07]" />
        </div>

        <div className="flex">
          {/* sidebar */}
          <div className="flex w-11 flex-col items-center gap-2.5 border-r border-white/10 py-3">
            <span className="h-5 w-5 rounded-md bg-linear-to-br from-white to-neutral-500" />

            {[0, 1, 2, 3].map((n) => (
              <span
                key={n}
                className="h-4 w-4 rounded bg-white/10"
              />
            ))}
          </div>

          {/* main content */}
          <div className="flex-1 space-y-3 p-3">
            <div className="grid grid-cols-3 gap-2">
              {[
                "from-white/25",
                "from-neutral-300/25",
                "from-neutral-500/25",
              ].map((g, n) => (
                <div
                  key={n}
                  className={`rounded-lg border border-white/10 bg-linear-to-br ${g} to-transparent p-2`}
                >
                  <div className="mb-2 h-1.5 w-8 rounded-full bg-white/40" />
                  <div className="h-3 w-10 rounded bg-white/70" />
                </div>
              ))}
            </div>

            {/* chart */}
            <div className="flex h-20 items-end gap-1.5 rounded-lg border border-white/10 bg-white/3 p-2">
              {bars.map((h, n) => (
                <div
                  key={n}
                  className="pj-bar flex-1 rounded-t bg-linear-to-t from-neutral-500 to-white"
                  style={{
                    height: `${h}%`,
                    animationDelay: `${n * 120}ms`,
                  }}
                />
              ))}
            </div>

            {/* rows */}
            <div className="space-y-1.5">
              {rows.map((r, n) => (
                <div
                  key={n}
                  className="pj-row flex items-center justify-between rounded-md bg-white/4 px-2 py-1.5"
                  style={{
                    animationDelay: `${600 + n * 150}ms`,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded bg-white/15" />
                    <span
                      className={`h-1.5 rounded-full bg-white/40 ${r.w}`}
                    />
                  </div>

                  <span className={`h-2 w-8 rounded-full ${r.pill}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Delivery drone preview */
function DroneMockup() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <svg
        viewBox="0 0 320 240"
        className="h-full w-full max-w-115"
        role="img"
        aria-label="Illustration of a delivery drone carrying a parcel"
      >
        <defs>
          <linearGradient id="pjBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#737373" />
          </linearGradient>

          <linearGradient id="pjPath" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          <radialGradient id="pjGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* radar rings */}
        <g fill="none" stroke="#ffffff" strokeOpacity="0.35">
          <ellipse
            className="pj-ring"
            cx="238"
            cy="200"
            rx="46"
            ry="12"
          />
          <ellipse
            className="pj-ring pj-ring-2"
            cx="238"
            cy="200"
            rx="46"
            ry="12"
          />
          <ellipse
            cx="238"
            cy="200"
            rx="22"
            ry="6"
            strokeOpacity="0.7"
          />
        </g>

        <circle cx="238" cy="200" r="3.5" fill="#ffffff" />

        {/* flight path */}
        <path
          className="pj-dash"
          d="M20 190 C 70 120, 120 150, 160 100 S 230 60, 238 196"
          fill="none"
          stroke="url(#pjPath)"
          strokeWidth="1.8"
          strokeDasharray="5 6"
        />

        {/* drone */}
        <g className="pj-drone">
          <ellipse
            cx="160"
            cy="100"
            rx="70"
            ry="48"
            fill="url(#pjGlow)"
          />

          {/* arms */}
          <g
            stroke="#cbd5e1"
            strokeOpacity="0.75"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <line x1="160" y1="94" x2="112" y2="76" />
            <line x1="160" y1="94" x2="208" y2="76" />
            <line x1="160" y1="102" x2="116" y2="118" />
            <line x1="160" y1="102" x2="204" y2="118" />
          </g>

          {/* rotors */}
          {[
            [112, 72],
            [208, 72],
            [116, 114],
            [204, 114],
          ].map(([x, y], n) => (
            <g key={n}>
              <circle
                cx={x}
                cy={y + 3}
                r="3"
                fill="#94a3b8"
              />

              <ellipse
                className="pj-rotor"
                style={{ animationDelay: `${n * 40}ms` }}
                cx={x}
                cy={y}
                rx="22"
                ry="3.2"
                fill="#e2e8f0"
                fillOpacity="0.55"
              />
            </g>
          ))}

          {/* body */}
          <rect
            x="138"
            y="82"
            width="44"
            height="30"
            rx="12"
            fill="url(#pjBody)"
          />

          <rect
            x="146"
            y="90"
            width="28"
            height="9"
            rx="4.5"
            fill="#171717"
            fillOpacity="0.55"
          />

          <circle
            className="pj-blink"
            cx="160"
            cy="95"
            r="2.4"
            fill="#ffffff"
          />

          {/* parcel */}
          <g className="pj-swing">
            <line
              x1="152"
              y1="112"
              x2="152"
              y2="128"
              stroke="#94a3b8"
              strokeWidth="1.5"
            />

            <line
              x1="168"
              y1="112"
              x2="168"
              y2="128"
              stroke="#94a3b8"
              strokeWidth="1.5"
            />

            <rect
              x="141"
              y="128"
              width="38"
              height="28"
              rx="4"
              fill="#f8fafc"
              fillOpacity="0.92"
            />

            <rect
              x="141"
              y="128"
              width="38"
              height="8"
              rx="2"
              fill="#d4d4d4"
            />

            <line
              x1="160"
              y1="128"
              x2="160"
              y2="156"
              stroke="#171717"
              strokeOpacity="0.25"
              strokeWidth="2"
            />
          </g>
        </g>

        {/* destination pin */}
        <circle
          className="pj-pin"
          cx="238"
          cy="196"
          r="6"
          fill="none"
          stroke="#ffffff"
        />
      </svg>
    </div>
  );
}

/* ───────────────────────── PROJECT VISUALS ───────────────────────── */

const visuals: Record<string, ReactNode> = {
  Chiro: <AppMockup />,
  "JUL NOW": <AppMockup />,
  "Delivery Drone": <DroneMockup />,
  "Student Room Rental Management System": <AppMockup />,
};

/* ───────────────────────── PROJECT CARD ───────────────────────── */

function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const hasCode = project.codeUrl !== "#";
  const hasDemo = project.demoUrl !== "#";

  return (
    <div className="group h-full">
      <article className="pj-card relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#111111]/80 backdrop-blur-xl">

        {/* Preview */}
        <div className="pj-stage relative h-60 overflow-hidden border-b border-white/10 sm:h-72">
          <div
            aria-hidden
            className="pj-stage-grid absolute inset-0"
          />

          <div
            aria-hidden
            className="pj-scan absolute inset-x-0 h-24"
          />

          <div className="relative h-full w-full p-4 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
            {visuals[project.title]}
          </div>

          {/* Badge */}
          <span className="absolute right-4 top-4 z-20 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
            {project.badge}
          </span>
        </div>

        {/* Project Information */}
        <div className="relative z-20 flex flex-1 flex-col p-6 sm:p-8">

          <h3 className="font-display text-2xl font-extrabold uppercase leading-[1.1] tracking-tight text-white sm:text-[1.75rem]">
            {project.title}
          </h3>

          <p className="mt-4 text-[15px] leading-7 text-neutral-300/90">
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-neutral-200 transition-colors duration-300 hover:border-white/50 hover:bg-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-auto flex flex-wrap items-center gap-3 pt-8 font-medium">

            {hasDemo ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pj-btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-white to-neutral-300 px-6 py-3 text-sm font-bold text-neutral-950 shadow-[0_0_30px_-4px_rgba(255,255,255,0.25)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_44px_-2px_rgba(255,255,255,0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {project.demoLabel}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ) : (
              <span className="inline-flex cursor-default items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-neutral-400">
                {project.demoLabel}
              </span>
            )}

            {hasCode && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-neutral-200 transition-all duration-300 hover:border-white/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                GitHub →
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

/* ───────────────────────── PROJECT SECTION ───────────────────────── */

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        pj-section relative left-1/2 flex w-screen
        -translate-x-1/2 items-center overflow-hidden
        border-b border-white/10
        bg-linear-to-br from-[#050505] via-[#171717] to-[#080808]
        py-16 text-white
      "
    >
      <style>{css}</style>

      {/* Background Effects */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="pj-blob pj-blob-a absolute -left-32 top-0 h-112 w-md rounded-full bg-white/10 blur-[120px]" />

        <div className="pj-blob pj-blob-b absolute -right-24 bottom-0 h-128 w-lg rounded-full bg-neutral-400/10 blur-[130px]" />

        <div className="pj-blob pj-blob-c absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-[110px]" />

        {/* Glass Cubes */}
        <GlassCube
          size={44}
          duration={18}
          className="pj-float right-[6%] top-24 hidden sm:block"
        />

        <GlassCube
          size={30}
          duration={14}
          className="pj-float-b left-[4%] top-[55%] hidden md:block"
        />

        <GlassCube
          size={36}
          duration={20}
          className="pj-float-c bottom-16 left-[46%] hidden lg:block"
        />

        <GlassCube
          size={22}
          duration={12}
          className="pj-float-b left-[38%] top-20 hidden lg:block"
        />

        <GlassCube
          size={26}
          duration={16}
          className="pj-float right-[4%] bottom-24 hidden md:block"
        />

        <div className="pj-bg-grid absolute inset-0" />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">

        <Reveal>
          <h2 className="font-display text-[clamp(28px,5vw,56px)] font-extrabold leading-tight tracking-tight">
            <span className="pj-title">
              Featured Projects
            </span>
          </h2>

          <p className="mb-12 mt-5 max-w-2xl text-neutral-400 sm:mb-16">
            A showcase of projects I’ve built while developing my skills in frontend and full-stack development. From web applications to creative UI/UX designs, each project reflects my passion for creating modern, responsive, and meaningful digital experiences.
          </p>
        </Reveal>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delayMs={i * 120}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
