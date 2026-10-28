import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Logo } from './Common.jsx';
import { brand, nav, services } from '../config/site.js';

export const Footer = () => (
  <footer className="foot">
    <div className="wrap foot-grid">
      <div><Logo name={brand.name} /><p className="fine">A demo digital studio brand. Edit this description in Footer.jsx.</p></div>
      <nav aria-label="Footer"><h4>Explore</h4>{nav.map(([l, h]) => <a key={h} href={h}>{l}</a>)}</nav>
      <nav aria-label="Services"><h4>Services</h4>{services.map((s) => <a key={s.title} href="#services">{s.title}</a>)}</nav>
      <nav aria-label="Social"><h4>Connect</h4>{brand.social.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>)}<a href={`mailto:${brand.email}`}>{brand.email}</a></nav>
    </div>
    <p className="wrap fine copy">© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
  </footer>
);

export function ScrollUI() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => { const h = document.documentElement; setP(h.scrollTop / (h.scrollHeight - h.clientHeight || 1)); };
    addEventListener('scroll', f, { passive: true }); f();
    return () => removeEventListener('scroll', f);
  }, []);
  return (<>
    <div className="progress" style={{ transform: `scaleX(${p})` }} aria-hidden="true" />
    <button className={`totop ${p > 0.15 ? 'show' : ''}`} aria-label="Back to top" onClick={() => scrollTo({ top: 0 })} tabIndex={p > 0.15 ? 0 : -1}><ArrowUp size={20} /></button>
  </>);
}
