import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: 'div' | 'section';
};

/**
 * Wraps content and fades/slides it up into view the first time it enters
 * the viewport. Pass `delayMs` to stagger multiple Reveal items in a list.
 */
export default function Reveal({ children, className = '', delayMs = 0, as = 'div' }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${delayMs}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
