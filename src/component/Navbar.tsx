
import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { icon: FaGithub, href:import.meta.env.VITE_GIHUB, label: 'GitHub' },
  { icon: FaLinkedinIn, href:import.meta.env.VITE_LINKEDIN, label: 'LinkedIn' },
  { icon: FaFacebookF, href:import.meta.env.VITE_FACEBOOK, label: 'Facebook' },
  { icon: FaInstagram, href:import.meta.env.VITE_INSTAGRAM, label: 'Instagram' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  // Make the bar a little more solid once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on desktop size or Escape
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  const barStyle = scrolled
    ? 'border-white/15 bg-[#111111]/85 shadow-[0_8px_40px_rgba(255,255,255,0.10),inset_0_1px_0_rgba(255,255,255,0.12)]'
    : 'border-white/15 bg-white/[0.06] shadow-[0_8px_40px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.12)]';

  const linkBase = 'text-slate-200 hover:bg-white/10 hover:text-white';
  const linkActive = 'bg-white/10 text-white';

  const circleBtn =
    'border-white/20 text-slate-100 hover:border-white/60 hover:bg-white/10 hover:text-white';

  const resumeBtn =
    'bg-linear-to-r from-white to-neutral-300 text-black shadow-[0_0_24px_rgba(255,255,255,0.2)] hover:shadow-[0_0_36px_rgba(255,255,255,0.35)]';

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav className="mx-auto w-full max-w-7xl">
        <div
          className={`
            flex items-center justify-between gap-2 sm:gap-4
            rounded-2xl border px-3 py-3 backdrop-blur-2xl
            transition-all duration-300 sm:px-5 md:px-6
            ${barStyle}
          `}
        >
          {/* Logo */}
          <a href="#home" className="shrink-0">
            <span className="text-xl font-black tracking-wider text-white sm:text-2xl">
              Nikkie<span className="text-neutral-400">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`
                  rounded-xl px-2.5 py-2 text-xs font-semibold
                  transition-all duration-300 xl:px-3 xl:text-sm
                  ${active === item.href ? linkActive : linkBase}
                `}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            {/* Social Links */}
            <div className="hidden items-center gap-1.5 md:flex">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`
                    flex size-9 items-center justify-center rounded-full
                    border transition-all duration-300 hover:-translate-y-1
                    ${circleBtn}
                  `}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download="KI_SREY_NITH_CV.pdf"
              className={`
                hidden items-center gap-1.5 rounded-xl px-3 py-2
                text-xs font-bold transition-all
                hover:-translate-y-0.5 sm:flex lg:hidden xl:flex
                ${resumeBtn}
              `}
            >
              Resume <ArrowUpRight size={14} />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={isMenuOpen}
              className={`
                flex size-9 items-center justify-center rounded-full
                border transition-all lg:hidden
                ${circleBtn}
              `}
            >
              {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Navigation */}
        {isMenuOpen && (
          <div
            className="
              mt-2 overflow-hidden rounded-2xl
              border border-white/15 bg-[#111111]/95 p-2
              shadow-[0_8px_40px_rgba(255,255,255,0.10)] backdrop-blur-2xl
              lg:hidden
            "
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  flex items-center justify-between rounded-xl
                  px-4 py-3 text-sm font-medium transition-all
                  hover:bg-white/10 hover:text-white
                  ${active === item.href ? 'bg-white/10 text-white' : 'text-slate-200'}
                `}
              >
                {item.label}
                <ArrowUpRight size={16} />
              </a>
            ))}

            {/* Resume (phones only, since it's hidden in the bar below sm) */}
            <a
              href="/resume.pdf"
              download="KI_SREY_NITH_CV.pdf"
              className="
                mt-2 flex items-center justify-center gap-2 rounded-xl
                bg-linear-to-r from-white to-neutral-300
                px-4 py-3 text-sm font-bold text-black sm:hidden
              "
            >
              Resume <ArrowUpRight size={16} />
            </a>

            {/* Social Links on small screens */}
            <div className="mt-2 flex items-center gap-2 border-t border-white/10 px-3 pt-3 pb-1 md:hidden">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    flex size-9 items-center justify-center rounded-full
                    border border-white/20 text-slate-200
                    hover:border-white/60 hover:text-white
                  "
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
