import { useState } from 'react';
import { Check, Plus } from 'lucide-react';
import { Icon, Reveal, Counter, SectionHead } from './Common.jsx';
import { logos, services, dashboardStats, chartData, process, benefits, testimonials, plans, faqs } from '../config/site.js';
import { useInView } from '../hooks/hooks.js';

export const TrustedBy = () => (
  <section className="trust" aria-label="Sample client logos">
    <div className="wrap">
      <p className="fine center">Fictional placeholder brands for layout. No real partnerships implied.</p>
      <ul className="logos">{logos.map((l) => <li key={l}>{l}</li>)}</ul>
    </div>
  </section>
);

export const Services = ({ onPick }) => (
  <section id="services" className="sec" aria-labelledby="svc-h">
    <div className="wrap">
      <SectionHead id="svc-h" title="Everything you need to grow online" text="Six disciplines under one roof, working as a single team." />
      <div className="grid3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <article className="card svc" style={{ '--h': i * 45 }}>
              <span className="ico"><Icon name={s.icon} /></span>
              <h3>{s.title}</h3><p>{s.text}</p>
              <button className="link" onClick={() => onPick(s.title)}>Ask about this</button>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export function Dashboard() {
  const [ref, seen] = useInView(0.3);
  const max = Math.max(...chartData);
  return (
    <section className="sec alt" aria-labelledby="dash-h">
      <div className="wrap">
        <SectionHead id="dash-h" title="Results we aim for" text="Demo data only. This dashboard shows how your real metrics could look." />
        <div className="dash" ref={ref}>
          <div className="kpis">
            {dashboardStats.map((s) => <div className="card kpi" key={s.label}><b><Counter value={s.value} suffix={s.suffix} decimals={s.decimals || 0} /></b><span>{s.label}</span></div>)}
          </div>
          <div className="card chart" role="img" aria-label="Demo bar chart showing growth over twelve months">
            <div className="bars">{chartData.map((v, i) => <i key={i} className={seen ? 'up' : ''} style={{ '--h': `${(v / max) * 100}%`, '--d': `${i * 50}ms` }} />)}</div>
            <p className="fine">Demo data: illustrative growth index, 12 months</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Process = () => (
  <section className="sec" aria-labelledby="proc-h">
    <div className="wrap">
      <SectionHead id="proc-h" title="A clear path from idea to launch" />
      <ol className="timeline">
        {process.map((p, i) => (
          <Reveal as="li" key={p.title} delay={i * 100}><span className="num">{i + 1}</span><h3>{p.title}</h3><p>{p.text}</p></Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export const WhyUs = () => (
  <section id="about" className="sec alt" aria-labelledby="why-h">
    <div className="wrap">
      <SectionHead id="why-h" title="Why teams choose NEXORA" text="[Edit: your company story and promise goes here.]" />
      <div className="grid3">
        {benefits.map((b, i) => (
          <Reveal key={b.title} delay={i * 50}><div className="why"><Icon name={b.icon} /><h3>{b.title}</h3><p>{b.text}</p></div></Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const Testimonials = () => (
  <section className="sec" aria-labelledby="t-h">
    <div className="wrap">
      <SectionHead id="t-h" title="Kind words (demo content)" text="These are fictional sample testimonials, not real customer feedback." />
      <div className="grid3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}><figure className="card quote"><span className="demo">Demo</span><blockquote>{t.text}</blockquote><figcaption><b>{t.name}</b><br />{t.role}</figcaption></figure></Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const Pricing = ({ onPick }) => (
  <section id="pricing" className="sec alt" aria-labelledby="pr-h">
    <div className="wrap">
      <SectionHead id="pr-h" title="Transparent starting points" text="Placeholder prices. Final pricing depends on your project requirements." />
      <div className="grid3 plans">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <article className={`card plan ${p.featured ? 'feat' : ''}`}>
              {p.featured && <span className="demo pop">Most popular</span>}
              <h3>{p.name}</h3>
              <p className="price"><small>{p.note}</small> {p.price}</p>
              <ul>{p.features.map((f) => <li key={f}><Check size={16} aria-hidden="true" /> {f}</li>)}</ul>
              <button className={`btn ${p.featured ? '' : 'ghost'}`} onClick={() => onPick(null, `Interested in the ${p.name} package.`)}>{p.cta}</button>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="sec" aria-labelledby="faq-h">
      <div className="wrap narrow">
        <SectionHead id="faq-h" title="Frequently asked questions" />
        {faqs.map((f, i) => (
          <div className={`faq ${open === i ? 'open' : ''}`} key={f.q}>
            <h3><button aria-expanded={open === i} aria-controls={`faq-${i}`} id={`faq-b-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>{f.q}<Plus size={20} aria-hidden="true" /></button></h3>
            <div className="faq-a" id={`faq-${i}`} role="region" aria-labelledby={`faq-b-${i}`}><div><p>{f.a}</p></div></div>
          </div>
        ))}
      </div>
    </section>
  );
}
