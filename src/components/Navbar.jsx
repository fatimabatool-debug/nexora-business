import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Logo } from './Common.jsx';
import { brand, nav } from '../config/site.js';

export default function Navbar({ theme, onTheme }) {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const onScroll = () => setStuck(scrollY > 12);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('keydown', onKey);
    return () => { removeEventListener('scroll', onScroll); removeEventListener('keydown', onKey); };
  }, []);
  return (
    <header className={`nav ${stuck ? 'stuck' : ''}`}>
      <div className="wrap nav-in">
        <Logo name={brand.name} />
        <nav id="main-nav" className={open ? 'open' : ''} aria-label="Main">
          {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
        <div className="nav-tools">
          <button className="icon-btn" onClick={onTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="btn btn-sm talk" href="#contact">Let's Talk</a>
          <button className="icon-btn burger" aria-expanded={open} aria-controls="main-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
