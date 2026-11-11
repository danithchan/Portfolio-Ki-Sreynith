import type { MouseEvent } from "react";
import Reveal from "../component/Reveal";
import GlassCube from "../component/GlassCube";

type ContactCard = {
  label: string;
  value: string;
  sub: string;
  href?: string;
  icon: "mail" | "phone" | "location" | "telegram";
};

const contactCards: ContactCard[] = [
  {
    label: "EMAIL",
    value: "danithchan99@gmail.com",
    sub: "Drop me a line anytime",
    href: `https://mail.google.com/mail/?view=cm&to=${import.meta.env.VITE_GMAIL}`,
    icon: "mail",
  },
  {
    label: "PHONE",
    value: "+855 92 91 6500",
    sub: "Available for calls/WhatsApp",
    href: "tel:+85592916500",
    icon: "phone",
  },
  {
    label: "LOCATION",
    value: "Cambodia, Phnom Penh",
    sub: "Let's meet for coffee",
    icon: "location",
  },
  {
    label: "TELEGRAM",
    value: "@Ki_Sreynith",
    sub: "Message me directly",
    href: import.meta.env.VITE_TELEGRAM,
    icon: "telegram",
  },
];

function CardIcon({ name }: { name: ContactCard["icon"] }) {
  const common = "h-5 w-5";

  if (name === "mail")
    return (
      <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"
        />
      </svg>
    );

  if (name === "phone")
    return (
      <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5c0-1 1-2 2-2h2l2 5-2 1a11 11 0 005 5l1-2 5 2v2c0 1-1 2-2 2A16 16 0 013 5z"
        />
      </svg>
    );

  if (name === "location")
    return (
      <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21s7-6.4 7-11.5a7 7 0 10-14 0C5 14.6 12 21 12 21z"
        />
        <circle cx="12" cy="9.5" r="2.4" strokeWidth="1.8" />
      </svg>
    );

  return (
    <svg className={common} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 4L3 11l6 2m12-9l-4 16-8-6m12-10L9 13"
      />
    </svg>
  );
}

/* ───────────── Single contact card (mouse spotlight) ───────────── */

function ContactCardItem({ card }: { card: ContactCard }) {
  const Tag = card.href ? "a" : "div";
  const isExternal = card.href?.startsWith("http");

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      {...(card.href
        ? {
            href: card.href,
            ...(isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {}),
          }
        : {})}
      onMouseMove={handleMove}
      className="
        group relative flex h-full flex-col overflow-hidden rounded-2xl
        border border-white/10 bg-white/4 p-5 backdrop-blur-xl
        transition-all duration-300
        hover:-translate-y-1 hover:border-white/30
        focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white
      "
    >
      {/* mouse spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.14), transparent 65%)",
        }}
      />

      {/* top shine line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent"
      />

      {/* header: icon + arrow */}
      <div className="relative flex items-start justify-between">
        <div
          className="
            flex size-11 items-center justify-center rounded-xl
            border border-white/15 bg-white/8 text-white
            transition-all duration-300
            group-hover:scale-105 group-hover:border-white group-hover:bg-white group-hover:text-black
          "
        >
          <CardIcon name={card.icon} />
        </div>

        {card.href && (
          <span
            className="
              flex size-8 items-center justify-center rounded-full
              border border-white/10 text-sm text-slate-400
              transition-all duration-300
              group-hover:rotate-12 group-hover:border-white/40 group-hover:text-white
            "
          >
            ↗
          </span>
        )}
      </div>

      {/* text */}
      <div className="relative mt-6 min-w-0">
        <div className="font-mono text-[10px] tracking-[0.25em] text-white/50">
          {card.label}
        </div>

        <div className="mt-2 break-all text-[15px] font-bold leading-snug text-white sm:text-base">
          {card.value}
        </div>

        <div className="mt-1.5 text-xs text-slate-400">{card.sub}</div>
      </div>
    </Tag>
  );
}
export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative isolate flex min-h-screen w-full items-center justify-center
        overflow-hidden
        bg-linear-to-br from-[#050505] via-[#171717] to-[#080808]
        px-4 py-20 text-white sm:px-6 lg:px-10
      "
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -left-24 -top-20 size-56 rounded-full bg-white/10 blur-[90px] sm:size-80 sm:blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 size-64 rounded-full bg-slate-300/10 blur-[100px] sm:size-96 sm:blur-[130px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[110px]" />

      {/* Floating 3D Glass Cubes */}
      <GlassCube size={42} className="right-[5%] top-24 hidden animate-float sm:block" />
      <GlassCube size={28} className="left-[3%] top-[48%] hidden animate-float-slow md:block" />
      <GlassCube size={34} className="bottom-12 left-[44%] hidden animate-float lg:block" />
      <GlassCube size={22} className="left-[36%] top-16 hidden animate-float-slow lg:block" />
      <GlassCube size={26} className="bottom-20 right-[3%] hidden animate-float-slow md:block" />

      <div className="relative mx-auto w-full max-w-4xl">
        {/* Heading */}
        <Reveal>
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-mono text-xs tracking-[0.2em] text-white/90 backdrop-blur-xl">
              <span className="size-2 animate-pulse rounded-full bg-white" />
              CONTACT ME
            </span>

            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Let's Get In{" "}
              <span className="bg-linear-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,255,255,0.3)]">
                Touch
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Have a project or an idea? Feel free to contact me.
            </p>
          </div>
        </Reveal>

        {/* Cards grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {contactCards.map((card, i) => (
            <Reveal key={card.label} delayMs={i * 90}>
              <ContactCardItem card={card} />
            </Reveal>
          ))}
        </div>

        {/* Download my CV */}
        <Reveal delayMs={400}>
          <div className="mt-8 flex justify-center">
            <a
              href="/CV.pdf"
              download
              className="
                group inline-flex items-center justify-center gap-2
                rounded-full border border-white/30 bg-white/5
                px-8 py-3.5 font-mono text-xs font-bold tracking-wider
                text-white backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black
                hover:shadow-[0_0_34px_rgba(255,255,255,0.25)]
              "
            >
              DOWNLOAD MY CV
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}