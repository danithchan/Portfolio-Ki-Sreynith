import { SiGithub, SiFacebook } from "@icons-pack/react-simple-icons";
import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

import GlassCube from "../component/GlassCube";
import { SiTelegram } from "react-icons/si";

const env = import.meta.env;

const mailHref = `https://mail.google.com/mail/?view=cm&to=${env.VITE_GMAIL}`;

const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const socialBtn = `
  flex size-11 items-center justify-center rounded-full
  border border-white/20 bg-white/8 text-white
  backdrop-blur-xl transition-all duration-300
  hover:-translate-y-1 hover:border-white/70
  hover:bg-white/15 hover:text-white
  hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]
`;

const contactLink = `
  group flex items-center gap-3 text-neutral-300
  transition-all duration-300 hover:translate-x-1 hover:text-white
`;

const iconBox = `
  flex size-9 items-center justify-center rounded-lg
  border border-white/20 bg-white/10 text-white
  transition-all duration-300
  group-hover:shadow-[0_0_18px_rgba(255,255,255,0.2)]
`;

export default function Footer() {
  return (
    <footer
      className="
        relative isolate overflow-hidden
        bg-linear-to-br from-[#050505] via-[#151515] to-[#000000]
        px-4 py-16 text-white sm:px-6 lg:px-10
      "
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -left-24 -top-20 size-56 rounded-full bg-white/10 blur-[90px] sm:size-80 sm:blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 size-64 rounded-full bg-neutral-400/10 blur-[100px] sm:size-96 sm:blur-[130px]" />

      {/* Floating 3D Glass Cubes */}
      <GlassCube size={40} className="right-[5%] top-10 hidden animate-float sm:block" />
      <GlassCube size={28} className="left-[4%] top-[35%] hidden animate-float-slow md:block" />
      <GlassCube size={34} className="bottom-10 left-[42%] hidden animate-float lg:block" />
      <GlassCube size={22} className="left-[30%] top-8 hidden animate-float-slow lg:block" />
      <GlassCube size={26} className="bottom-16 right-[3%] hidden animate-float-slow md:block" />

      <div className="relative mx-auto max-w-6xl">
        {/* Glass card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            grid grid-cols-1 gap-10 rounded-3xl
            border border-white/15 bg-white/5 p-6
            backdrop-blur-2xl sm:p-10 md:grid-cols-3
            shadow-[0_8px_60px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.15)]
          "
        >
          {/* Left */}
          <div>
            <h2 className="text-4xl font-black tracking-tight">
              Portfolio
              <span className="text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.7)]">
                .
              </span>
            </h2>

            <p className="mt-4 text-neutral-300">Feel free to contact me!</p>

            <div className="mt-6 flex gap-4">
              <a
                href={env.VITE_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={socialBtn}
              >
                <SiGithub size={20} />
              </a>

              <a
                href={env.VITE_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={socialBtn}
              >
                <SiFacebook size={20} />
              </a>

           <a
  href={env.VITE_TELEGRAM}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Telegram"
  className={socialBtn}
>
  <SiTelegram size={20} />
</a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold">Navigation</h3>

            <ul className="space-y-3 text-neutral-300">
              {navLinks.map(([name, link]) => (
                <li key={name}>
                  <a
                    href={link}
                    className="
                      inline-block transition-all duration-300
                      hover:translate-x-2 hover:text-white
                    "
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold">Contacts</h3>

            <ul className="space-y-4">
              <li>
                <a
                  href={env.VITE_TELEGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactLink}
                >
                  <span className={iconBox}>
                    <Send size={17} />
                  </span>
                  Telegram
                </a>
              </li>

              <li>
                <a href={mailHref } className={contactLink}>
                  <span className={iconBox}>
                    <Mail size={17} />
                  </span>
                  Email
                </a>
              </li>

              <li>
                <a
                  href={env.VITE_FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactLink}
                >
                  <span className={iconBox}>
                    <SiFacebook size={17} />
                  </span>
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href={env.VITE_GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactLink}
                >
                  <span className={iconBox}>
                    <SiGithub size={17} />
                  </span>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="
            mt-8 border-t border-white/10 pt-6
            text-center text-sm text-neutral-400
          "
        >
          © {new Date().getFullYear()}
          <span className="font-semibold text-white"> Ki Sreynith</span>
          . All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}