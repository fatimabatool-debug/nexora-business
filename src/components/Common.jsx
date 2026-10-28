import { Code, PenTool, Palette, Bot, Megaphone, Compass, Gauge, MessageSquare, Layers, Cpu, Users, Circle } from 'lucide-react';

// Only icons listed here are bundled. To use a new icon, import it and add it to this map.
const ICONS = { Code, PenTool, Palette, Bot, Megaphone, Compass, Gauge, MessageSquare, Layers, Cpu, Users };
import { useInView, useCounter } from '../hooks/hooks.js';

/** Look up any Lucide icon by name (names are set in config/site.js). */
export const Icon = ({ name, size = 24, ...p }) => {
  const C = ICONS[name] || Circle;
  return <C size={size} aria-hidden="true" {...p} />;
};

export const Logo = ({ name }) => (
  <a className="logo" href="#home" aria-label={`${name} home`}>
    <svg width="34" height="34" viewBox="0 0 32 32" aria-hidden="true">
      <defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#7957FF" /><stop offset="1" stopColor="#36D9FF" /></linearGradient></defs>
      <rect width="32" height="32" rx="9" fill="#0B1020" />
      <path d="M9 23V9l14 14V9" stroke="url(#lg)" strokeWidth="3.4" fill="none" strokeLinejoin="round" />
    </svg>
    <span>{name}</span>
  </a>
);

/** Fades/slides children in once when scrolled into view. */
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, seen] = useInView();
  return <Tag ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`} style={{ '--d': `${delay}ms` }}>{children}</Tag>;
}

export function Counter({ value, suffix = '', decimals = 0 }) {
  const [ref, seen] = useInView(0.4);
  const v = useCounter(value, seen, decimals);
  return <span ref={ref}>{v}{suffix}</span>;
}

export const SectionHead = ({ id, title, text }) => (
  <Reveal className="sec-head"><h2 id={id}>{title}</h2>{text && <p>{text}</p>}</Reveal>
);

export const ProjectsSkeleton = () => (
  <section className="sec" aria-busy="true" aria-label="Loading projects">
    <div className="wrap"><div className="sk sk-h" /><div className="work-grid">{[0, 1, 2].map((i) => <div key={i} className="sk sk-card" />)}</div></div>
  </section>
);
