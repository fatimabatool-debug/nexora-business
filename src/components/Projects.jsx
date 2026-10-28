import { useEffect, useRef, useState } from 'react';
import { Search, X, ArrowUpRight } from 'lucide-react';
import { SectionHead, Reveal } from './Common.jsx';
import { projects, categories } from '../config/site.js';

/* Loaded lazily from App.jsx (React.lazy), so Suspense shows a real skeleton while it downloads. */
export default function Projects({ onInquire }) {
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');
  const [active, setActive] = useState(null);
  const list = projects.filter((p) => (cat === 'All' || p.cats.includes(cat)) &&
    (p.title + p.text + p.industry + p.services.join(' ')).toLowerCase().includes(q.trim().toLowerCase()));
  return (
    <section id="work" className="sec" aria-labelledby="work-h">
      <div className="wrap">
        <SectionHead id="work-h" title="Selected work (demo projects)" text="Fictional sample projects. Replace them in config/site.js." />
        <div className="tools">
          <label className="search"><Search size={18} aria-hidden="true" /><span className="sr">Search projects</span>
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects…" /></label>
          <div className="chips" role="group" aria-label="Filter by service">
            {categories.map((c) => <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}
          </div>
        </div>
        <div className="work-grid" aria-live="polite">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={i * 80} className={`w-${p.size}`}>
              <article className="card proj">
                <Mock p={p} />
                <div className="proj-body">
                  <p className="fine">{p.industry} · {p.services.join(', ')}</p>
                  <h3>{p.title}</h3><p>{p.text}</p>
                  <button className="link" onClick={() => setActive(p)}>View Case Study <ArrowUpRight size={16} aria-hidden="true" /></button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {!list.length && <p className="empty">No projects match. Clear the search or choose another filter.</p>}
      </div>
      {active && <CaseModal p={active} onClose={() => setActive(null)} onInquire={() => { onInquire(active); setActive(null); }} />}
    </section>
  );
}

const Mock = ({ p }) => (
  <div className="mock" aria-hidden="true" style={{ '--a': p.hue[0], '--b': p.hue[1] }}>
    <div className="m-win"><i /><i /><i /></div>
    <div className="m-body"><b /><b /><b /><em /></div>
  </div>
);

function CaseModal({ p, onClose, onInquire }) {
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current; d.showModal();
    const prev = document.activeElement;
    return () => { d.open && d.close(); prev?.focus?.(); };
  }, []);
  return (
    <dialog ref={ref} className="modal" aria-labelledby="m-title" onClose={onClose} onClick={(e) => e.target === ref.current && onClose()}>
      <div className="modal-in">
        <button className="icon-btn x" onClick={onClose} aria-label="Close case study"><X size={18} /></button>
        <Mock p={p} />
        <p className="fine">{p.industry}</p>
        <h3 id="m-title">{p.title}</h3>
        <p>{p.detail}</p>
        <p className="fine">Services: {p.services.join(', ')}. Demo content.</p>
        <button className="btn" onClick={onInquire}>Start a similar project</button>
      </div>
    </dialog>
  );
}
