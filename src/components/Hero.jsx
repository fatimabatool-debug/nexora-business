import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Counter } from './Common.jsx';
import { heroStats } from '../config/site.js';
import { prefersReducedMotion } from '../hooks/hooks.js';

export default function Hero() {
  const ref = useRef(null);
  // Cursor glow: desktop (hover-capable) only, skipped for reduced motion.
  const onMove = (e) => {
    if (prefersReducedMotion() || !matchMedia('(hover: hover)').matches) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`);
    ref.current.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <section id="home" className="hero" ref={ref} onPointerMove={onMove}>
      <div className="grid-bg" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div>
          <p className="badge"><i /> Digital studio · demo brand</p>
          <h1>We Turn Bold Ideas Into <span className="grad">Digital Experiences.</span></h1>
          <p className="lead">We help ambitious businesses grow with powerful websites, intelligent automation, and thoughtful digital design.</p>
          <div className="row">
            <a className="btn" href="#work">Explore Our Work <ArrowUpRight size={18} /></a>
            <a className="btn ghost" href="#contact">Start a Project</a>
          </div>
          <dl className="hero-stats">
            {heroStats.map((s) => <div key={s.label}><dt><Counter value={s.value} suffix={s.suffix} /></dt><dd>{s.label}</dd></div>)}
          </dl>
          <p className="fine">Illustrative placeholder figures, not real results.</p>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

/* Pure SVG/CSS visual: floating panels around a glowing core. */
function HeroVisual() {
  return (
    <div className="hv" aria-hidden="true">
      <div className="core" />
      <div className="panel p-main">
        <div className="dots"><i /><i /><i /></div>
        <svg viewBox="0 0 300 130">
          <defs><linearGradient id="hl" x1="0" x2="1"><stop stopColor="#7957FF" /><stop offset="1" stopColor="#36D9FF" /></linearGradient></defs>
          <path d="M0 105 C40 90 60 40 100 60 S160 100 200 50 S260 20 300 30" fill="none" stroke="url(#hl)" strokeWidth="3" strokeLinecap="round" />
          {[30, 62, 94, 126, 158, 190, 222, 254].map((x, i) => <rect key={x} x={x} y={125 - (18 + ((i * 37) % 40))} width="14" rx="4" height={18 + ((i * 37) % 40)} fill="currentColor" opacity=".18" />)}
        </svg>
        <span className="tag">Demo dashboard</span>
      </div>
      <div className="panel p-code"><code><b>const</b> idea = <u>bold</u>;<br /><b>launch</b>(idea);</code></div>
      <div className="panel p-chip"><span className="pulse" /> Automation live</div>
      <div className="panel p-score"><b>98</b><small>Perf. score (demo)</small></div>
    </div>
  );
}
