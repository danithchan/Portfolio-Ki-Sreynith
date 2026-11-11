import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { useReducedMotion } from "framer-motion";
import { Code2, Film,
  Palette,
  FileText,
  Table,
  Bot, } from "lucide-react";
import {
  FaReact,

  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,

  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiPostman,
  SiPrisma,
} from "react-icons/si";

import Reveal from "../component/Reveal";

/* ============================== Types ============================== */

type IconComp = ComponentType<{ size?: number; className?: string }>;

type Skill = {
  name: string;
  icon: IconComp;
  note?: string;
};

type SkillGroup = {
  label: string;
  skills: Skill[];
};

/* ============================== Data =============================== */

const featured = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "PostgreSQL",
 
];

const rowA = [...featured, ...featured, ...featured];
const reversed = [...featured].reverse();
const rowB = [...reversed, ...reversed, ...reversed];

const skillGroups: SkillGroup[] = [
  {
    label: "Web Development",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
       { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma ORM", icon: SiPrisma },

    ],
  },
  {
    label: "Software Skill",
    skills: [
      { name: "CapCut", icon: Film, note: "Video Editing" },
    { name: "Canva", icon: Palette, note: "Graphic Design" },
    { name: "Microsoft Word", icon: FileText, note: "Document Creation" },
    { name: "Microsoft Excel", icon: Table, note: "Spreadsheets & Data" },
    { name: "AI Tools", icon: Bot, note: "AI-Assisted Productivity" },
     
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git & GitHub", icon: FaGitAlt },
      { name: "VS Code", icon: Code2 },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: FaFigma },
    ],
  },
];

/* ======================= 3D Glass Cube (same as Home) ======================= */

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
            className="absolute inset-0 border border-white/30 bg-white/5 shadow-[inset_0_0_14px_rgba(255,255,255,0.25)] backdrop-blur-[2px]"
            style={{ transform: `${rot} translateZ(${size / 2}px)` }}
          />
        ))}
      </div>
    </div>
  );
}

/* ======================= Fires once when scrolled into view ======================= */

function useInView<T extends HTMLElement>() {
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
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, shown };
}

/* ======================= Single skill tile ======================= */

function SkillTile({
  skill,
  shown,
  index,
  reduced,
}: {
  skill: Skill;
  shown: boolean;
  index: number;
  reduced: boolean;
}) {
  const tiltRef = useRef<HTMLDivElement>(null);
  const Icon = skill.icon;

  const handleMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Spotlight follows the cursor (kept even with reduced motion)
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);

    if (reduced) return;

    // Subtle tilt
    const rotateX = (y / rect.height - 0.5) * -8;
    const rotateY = (x / rect.width - 0.5) * 8;
    el.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
  };

  const handleLeave = () => {
    if (tiltRef.current) tiltRef.current.style.transform = "";
  };

  return (
    // Outer: pop-in animation. The last odd tile spans the row so no tile is left alone.
    <li
      className={`last:odd:col-span-2 ${shown ? "animate-pop-in" : "opacity-0"}`}
      style={{ animationDelay: `${index * 90}ms` }}
    >
      {/* Inner: mouse tilt */}
      <div
        ref={tiltRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="
          group relative flex h-full flex-col items-center gap-3
          overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50
          px-2 py-4 text-center backdrop-blur-xl
          transition-[transform,border-color,box-shadow] duration-200 ease-out
          hover:border-white/50
          hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
        "
      >
        {/* Mouse-following spotlight */}
        <div
          aria-hidden
          className="
            pointer-events-none absolute inset-0 opacity-0
            transition-opacity duration-300 group-hover:opacity-100
            bg-[radial-gradient(120px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,0.16),transparent_60%)]
          "
        />

        {/* White backlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-4 size-10 -translate-x-1/2 rounded-full bg-white/10 blur-xl transition-all duration-300 group-hover:bg-white/25"
        />

        <div
          aria-hidden
          className="animate-icon-bob relative"
          style={{ animationDelay: `${index * 350}ms` }}
        >
          <Icon
            size={30}
            className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.45)] transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <div className="relative">
          <span className="block font-mono text-[11px] font-medium leading-tight text-slate-200 sm:text-xs">
            {skill.name}
          </span>
          {skill.note && (
            <span className="mt-1 block font-mono text-[10px] leading-tight text-neutral-400">
              {skill.note}
            </span>
          )}
        </div>
      </div>
    </li>
  );
}

/* ======================= Group card ======================= */

function GroupCard({
  group,
  index,
  reduced,
}: {
  group: SkillGroup;
  index: number;
  reduced: boolean;
}) {
  const { ref, shown } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="
        glow-border relative h-full rounded-3xl border border-white/15
        bg-white/6 p-5 backdrop-blur-2xl
        shadow-[0_8px_60px_rgba(255,255,255,0.07),inset_0_1px_0_rgba(255,255,255,0.15)]
        sm:p-6
      "
    >
      <p className="mb-1 font-mono text-[11px] font-semibold tracking-[0.2em] text-neutral-400">
        0{index + 1}
      </p>
      <h3 className="mb-5 font-display text-lg font-bold text-white">
        {group.label}
      </h3>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3">
        {group.skills.map((skill, i) => (
          <SkillTile
            key={skill.name}
            skill={skill}
            shown={shown}
            index={i}
            reduced={reduced}
          />
        ))}
      </ul>
    </div>
  );
}

/* ======================= Marquee pill ======================= */

function Pill({ label }: { label: string }) {
  return (
    <span
      className="
        whitespace-nowrap rounded-xl border border-white/20
        bg-white/5 px-5 py-2.5
        font-mono text-[13px] font-semibold text-white
        backdrop-blur-xl
        shadow-[0_0_18px_rgba(255,255,255,0.08)]
        transition-all duration-300
        hover:-translate-y-1 hover:border-white/60
        hover:shadow-[0_0_28px_rgba(255,255,255,0.2)]
      "
    >
      {label}
    </span>
  );
}

/* ======================= Section ======================= */

export default function Skills() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="
        relative isolate flex min-h-screen items-center overflow-hidden
        bg-linear-to-br from-[#050505] via-[#171717] to-[#080808]
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
      <GlassCube size={44} className="right-[6%] top-24 hidden animate-float sm:block" />
      <GlassCube size={30} className="left-[4%] top-[55%] hidden animate-float-slow md:block" />
      <GlassCube size={36} className="bottom-16 left-[46%] hidden animate-float lg:block" />
      <GlassCube size={22} className="left-[38%] top-20 hidden animate-float-slow lg:block" />
      <GlassCube size={26} className="bottom-24 right-[4%] hidden animate-float-slow md:block" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Title */}
        <Reveal>
          <h2
            id="skills-heading"
            className="mb-8 font-display text-[clamp(24px,3.6vw,34px)] font-bold tracking-tight text-white"
          >
            Technical <span className="text-neutral-300">Skills</span>
          </h2>
        </Reveal>

        {/* Featured skills: marquee, or a static wrapped list with reduced motion */}
        <Reveal delayMs={80}>
          {reduced ? (
            <ul aria-label="Featured skills" className="mb-12 flex flex-wrap gap-3">
              {featured.map((label) => (
                <li key={label}>
                  <Pill label={label} />
                </li>
              ))}
            </ul>
          ) : (
            <>
              <ul className="sr-only">
                {featured.map((label) => (
                  <li key={label}>{label}</li>
                ))}
              </ul>

              <div
                aria-hidden
                className="mb-12 space-y-3 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
              >
                <div className="marquee">
                  <div className="marquee-content">
                    {rowA.map((skill, i) => (
                      <Pill key={i} label={skill} />
                    ))}
                  </div>
                </div>

                <div className="marquee marquee-reverse">
                  <div className="marquee-content">
                    {rowB.map((skill, i) => (
                      <Pill key={i} label={skill} />
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </Reveal>

        {/* Skill Groups */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delayMs={gi * 120}>
              <GroupCard group={group} index={gi} reduced={reduced} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}