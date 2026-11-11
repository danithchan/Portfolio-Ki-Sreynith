import { type MouseEvent as ReactMouseEvent } from 'react';

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion';

import profile from '../assets/2.png';
import TypingText from '../component/TypingText';

import {
  ArrowUpRight,
  Code2,
  Palette,
  Film,
  PenTool,
  GitBranch,
  Send,
  type LucideIcon,
} from 'lucide-react';

const skills: { name: string; icon: LucideIcon }[] = [
  { name: 'VS Code', icon: Code2 },
  { name: 'GitHub', icon: GitBranch },
  { name: 'Figma', icon: PenTool },
  { name: 'Canva', icon: Palette },
  { name: 'CapCut', icon: Film },
  { name: 'Postman', icon: Send },
];

const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------- Animation variants ---------- */
const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/* ---------- 3D Glass Cube ---------- */
const faces = [
  'rotateY(0deg)',
  'rotateY(90deg)',
  'rotateY(180deg)',
  'rotateY(-90deg)',
  'rotateX(90deg)',
  'rotateX(-90deg)',
];

function GlassCube({
  size = 48,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute perspective-700px ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="animate-cube relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
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

/* ---------- Code card ---------- */
function CodeCard() {
  return (
    <div className="w-60 overflow-hidden rounded-xl border border-white/20 bg-black/50 shadow-[0_8px_40px_rgba(255,255,255,0.08)] backdrop-blur-xl sm:w-64">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <span className="font-mono text-[11px] text-neutral-300">
          {'</>'} Code
        </span>
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-white" />
        </span>
      </div>

      <pre className="overflow-x-auto px-4 py-3 font-mono text-[11px] leading-5 text-neutral-400">
        <span className="text-neutral-300">const</span>{' '}
        <span className="text-white">developer</span> = {'{'}
        {'\n'}
        {'  '}name: <span className="text-neutral-200">"Ki Sreynith"</span>,
        {'\n'}
        {'  '}role: <span className="text-neutral-200">"Web Developer"</span>,
        {'\n'}
        {'  '}skills: [<span className="text-neutral-200">"React"</span>,{' '}
        <span className="text-neutral-200">"Node"</span>],
        {'\n'}
        {'  '}passion:{' '}
        <span className="text-neutral-200">"Building the web"</span>
        {'\n'}
        {'}'};
      </pre>
    </div>
  );
}

/* ---------- Hand-drawn arrow ---------- */
function CurvedArrow({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 70 90"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M58 82 C 20 80, 4 52, 22 22 C 26 15, 30 11, 34 8" />
      <path d="M20 14 L34 8 L36 24" />
    </svg>
  );
}

/* ---------- Portrait ---------- */
function Portrait() {
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const px = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), {
    stiffness: 120,
    damping: 18,
  });
  const py = useSpring(useTransform(my, [-0.5, 0.5], [-14, 14]), {
    stiffness: 120,
    damping: 18,
  });

  const handleMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative mx-auto flex min-h-112 w-full max-w-md items-center justify-center lg:min-h-136 lg:max-w-none"
    >
      {/* Big circle behind portrait */}
      <div className="absolute right-2 top-4 size-60 rounded-full border border-white/20 bg-linear-to-br from-white/20 to-neutral-500/5 shadow-[0_0_80px_rgba(255,255,255,0.12)] min-[400px]:size-72 sm:right-10 sm:size-96" />

      {/* Ripple pulse */}
      {!reduce && (
        <motion.div
          aria-hidden
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1.25, opacity: 0 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
          className="pointer-events-none absolute right-2 top-4 size-60 rounded-full border border-white/30 min-[400px]:size-72 sm:right-10 sm:size-96"
        />
      )}

      {/* Dotted pattern */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute right-0 top-0 hidden size-24 sm:block
          bg-[radial-gradient(rgba(255,255,255,0.45)_1.5px,transparent_1.5px)]
          bg-size-[14px_14px]
        "
      />

      {/* Hand-drawn arrow */}
      <CurvedArrow className="pointer-events-none absolute bottom-16 left-0 hidden h-20 w-16 text-white/60 md:block" />

      {/* Portrait (parallax wrapper + float) */}
      <motion.div style={{ x: px, y: py }} className="relative z-10">
        <motion.div
          animate={reduce ? undefined : { y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative h-88 w-60 min-[400px]:h-104 min-[400px]:w-72 sm:h-120 sm:w-80"
        >
          <motion.div
            animate={
              reduce
                ? undefined
                : { opacity: [0.3, 0.6, 0.3], scale: [0.95, 1.06, 0.95] }
            }
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -inset-4 rounded-4xl bg-white/20 blur-2xl"
          />

          <img
            src={profile}
            alt="Ki Sreynith - Web Developer"
            className="
              relative h-full w-full
              rounded-3xl
              border border-white/30
              object-cover object-center
              shadow-[0_15px_50px_rgba(255,255,255,0.15)]
            "
          />
        </motion.div>
      </motion.div>

      {/* Code card (hidden on phones) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.1, type: 'spring', stiffness: 160, damping: 14 }}
        className="absolute bottom-10 -right-2 z-20 hidden sm:block lg:-right-6"
      >
        <div className="animate-float-slow">
          <CodeCard />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="
        relative isolate flex min-h-svh items-center overflow-hidden
        bg-linear-to-br from-[#050505] via-[#151515] to-[#000000]
        px-4 pb-12 pt-28
        sm:px-6 sm:pb-16 sm:pt-32
        lg:px-10 lg:pb-20
      "
    >
      {/* Tech grid background (slowly drifting) */}
      {/* <motion.div
        aria-hidden
        animate={reduce ? undefined : { backgroundPosition: ['0px 0px', '48px 48px'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        className="
          pointer-events-none absolute inset-0 -z-10 opacity-7
          bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
          bg-size-[48px_48px]
          mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]
        "
      /> */}

      {/* Background Glow (breathing) */}
      <motion.div
        aria-hidden
        animate={reduce ? undefined : { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-24 -top-20 size-56 rounded-full bg-white/10 blur-[90px] sm:size-80 sm:blur-[120px]"
      />

      <motion.div
        aria-hidden
        animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="pointer-events-none absolute -bottom-20 -right-20 size-64 rounded-full bg-neutral-400/10 blur-[100px] sm:size-96 sm:blur-[130px]"
      />

      <motion.div
        aria-hidden
        animate={reduce ? undefined : { scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="pointer-events-none absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[110px]"
      />

      {/* Floating 3D Glass Cubes */}
      <GlassCube size={44} className="right-[6%] top-24 hidden animate-float sm:block" />
      <GlassCube size={30} className="left-[4%] top-[55%] hidden animate-float-slow md:block" />
      <GlassCube size={36} className="bottom-16 left-[46%] hidden animate-float lg:block" />
      <GlassCube size={22} className="left-[38%] top-20 hidden animate-float-slow lg:block" />
      <GlassCube size={26} className="bottom-24 right-[4%] hidden animate-float-slow md:block" />

      {/* Main Content */}
      <div
        className="
          relative mx-auto grid w-full max-w-7xl
          grid-cols-1 items-center gap-12
          lg:grid-cols-2 lg:gap-10
        "
      >
        {/* LEFT: Text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 min-w-0 text-white"
        >
          {/* Availability pill */}
          <motion.div
            variants={itemUp}
            className="
              relative mb-6 inline-flex max-w-full items-center gap-2
              overflow-hidden rounded-full border border-white/20
              bg-white/10 px-3 py-2
              text-xs text-white backdrop-blur-xl
              sm:px-4 sm:text-sm
            "
          >
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-white" />
            </span>
            <span>Available for Internship Opportunities</span>
          </motion.div>

          <motion.p
            variants={itemUp}
            className="mb-2 font-mono text-xs tracking-[0.2em] text-neutral-400 sm:text-sm sm:tracking-[0.25em]"
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            variants={itemUp}
            className="mb-3 text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl xl:text-7xl"
          >
            Ki{' '}
            <span className="bg-linear-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,255,255,0.25)]">
              <TypingText
                text="Sreynith"
                speed={150}
                deleteSpeed={70}
                startDelay={400}
              />
            </span>
            <span className="text-white">.</span>
          </motion.h1>

          <motion.h2
            variants={itemUp}
            className="mb-5 text-2xl font-bold tracking-tight text-white sm:text-3xl xl:text-4xl"
          >
            Web Developer
            <motion.span
              animate={reduce ? undefined : { opacity: [1, 0.3, 1], scale: [1, 1.25, 1] }}
              transition={{ duration: 2.4, repeat: Infinity }}
              className="inline-block text-neutral-400"
            >
              {' '}
              &{' '}
            </motion.span>
            Video Editor
          </motion.h2>

          <motion.p
            variants={itemUp}
            className="mb-8 max-w-xl text-sm leading-7 text-neutral-300 sm:text-base sm:leading-8"
          >
            I'm a fourth-year Computer Science student at the Royal University of Phnom Penh, passionate about building modern, responsive, and user-friendly web applications, as well as creating engaging video content through creative video editing.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemUp}
            className="mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={reduce ? undefined : { y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="
                group relative inline-flex w-full items-center
                justify-center gap-2 overflow-hidden rounded-xl
                bg-white px-5 py-3.5 font-bold text-black
                shadow-[0_0_28px_rgba(255,255,255,0.2)]
                transition-shadow duration-300
                hover:shadow-[0_0_44px_rgba(255,255,255,0.35)]
                sm:w-auto sm:px-6
              "
            >
              <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 -skew-x-12 bg-neutral-300/60 opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
              <span className="relative">View Projects</span>
              <ArrowUpRight
                size={18}
                className="relative transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={reduce ? undefined : { y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="
                inline-flex w-full items-center
                justify-center gap-2 rounded-xl
                border border-white/30 bg-white/5
                px-5 py-3.5 font-semibold text-white
                shadow-[0_0_20px_rgba(255,255,255,0.08)]
                backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-300
                hover:border-white/70
                hover:bg-white/10 hover:shadow-[0_0_34px_rgba(255,255,255,0.18)]
                sm:w-auto sm:px-6
              "
            >
              Contact Me
              <ArrowUpRight size={18} />
            </motion.a>
          </motion.div>

          {/* Software I work with */}
          <motion.div variants={itemUp}>
            <p className="mb-4 font-mono text-[11px] font-semibold tracking-[0.2em] text-neutral-400">
              SOFTWARE I WORK WITH
            </p>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    aria-label={skill.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.08, duration: 0.5, ease: EASE }}
                    whileHover={reduce ? undefined : { y: -4, scale: 1.05 }}
                    className="
                      group relative flex h-11 items-center gap-2 rounded-xl
                      border border-white/20 bg-white/8 px-3
                      backdrop-blur-xl transition-colors duration-300
                      hover:border-white/50 hover:bg-white/15
                      sm:size-12 sm:justify-center sm:px-0
                    "
                  >
                    <Icon size={18} className="shrink-0 text-white" />
                    <span className="text-xs font-semibold text-white sm:hidden">
                      {skill.name}
                    </span>
                    <span
                      className="
                        pointer-events-none absolute -bottom-7 left-1/2 hidden -translate-x-1/2
                        whitespace-nowrap rounded-md bg-white px-2 py-0.5
                        text-[10px] font-semibold text-black opacity-0
                        transition-opacity duration-200 group-hover:opacity-100 sm:block
                      "
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Portrait + code card */}
        <Portrait />
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-400">
          SCROLL
        </span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/40 pt-1.5">
          <motion.span
            animate={reduce ? undefined : { y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="size-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]"
          />
        </span>
      </motion.a>
    </section>
  );
}