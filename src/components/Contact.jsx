import { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';
import { SectionHead } from './Common.jsx';
import { brand, services, budgets } from '../config/site.js';

const empty = { name: '', email: '', company: '', service: '', budget: '', message: '' };
const rules = {
  name: (v) => (v.trim().length < 2 ? 'Enter your full name.' : ''),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? '' : 'Enter a valid email like name@company.com.'),
  company: () => '',
  service: (v) => (v ? '' : 'Choose a service.'),
  budget: (v) => (v ? '' : 'Choose a budget range.'),
  message: (v) => (v.trim().length < 20 ? 'Describe your project in at least 20 characters.' : ''),
};

export default function Contact({ prefill }) {
  const [f, setF] = useState(empty);
  const [err, setErr] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error | unconfigured

  useEffect(() => { if (prefill) setF((s) => ({ ...s, service: prefill.service || s.service, message: prefill.message || s.message })); }, [prefill]);

  const set = (k) => (e) => { setF({ ...f, [k]: e.target.value }); if (err[k]) setErr({ ...err, [k]: rules[k](e.target.value) }); };
  const blur = (k) => () => setErr((x) => ({ ...x, [k]: rules[k](f[k]) }));
  const summary = Object.entries(f).map(([k, v]) => `${k}: ${v || '–'}`).join('\n');

  async function submit(e) {
    e.preventDefault();
    const errs = Object.fromEntries(Object.keys(rules).map((k) => [k, rules[k](f[k])]));
    setErr(errs);
    const bad = Object.keys(errs).find((k) => errs[k]);
    if (bad) return document.getElementById(`f-${bad}`)?.focus();
    // No endpoint configured: never pretend the message was sent.
    if (!brand.formEndpoint) return setStatus('unconfigured');
    setStatus('loading');
    try {
      const res = await fetch(brand.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(f) });
      if (!res.ok) throw new Error(res.status);
      setStatus('success'); setF(empty);
    } catch { setStatus('error'); }
  }

  const field = (k, label, el) => (
    <div className="field">
      <label htmlFor={`f-${k}`}>{label}</label>
      {el}
      <p className="err" id={`e-${k}`} role="alert">{err[k]}</p>
    </div>
  );
  const a = (k) => ({ id: `f-${k}`, value: f[k], onChange: set(k), onBlur: blur(k), 'aria-invalid': !!err[k], 'aria-describedby': `e-${k}` });

  return (
    <section id="contact" className="sec alt" aria-labelledby="c-h">
      <div className="wrap contact">
        <div>
          <SectionHead id="c-h" title="Let's build something remarkable" text="Tell us about your project and we'll suggest a next step." />
          <p><Mail size={18} aria-hidden="true" style={{ verticalAlign: '-3px' }} /> <a href={`mailto:${brand.email}`}>{brand.email}</a> <span className="fine">(placeholder)</span></p>
        </div>
        <form className="card form" onSubmit={submit} noValidate>
          {field('name', 'Full name', <input {...a('name')} autoComplete="name" />)}
          {field('email', 'Email', <input {...a('email')} type="email" autoComplete="email" />)}
          {field('company', 'Company name (optional)', <input {...a('company')} autoComplete="organization" />)}
          <div className="two">
            {field('service', 'Service', <select {...a('service')}><option value="">Choose…</option>{services.map((s) => <option key={s.title}>{s.title}</option>)}</select>)}
            {field('budget', 'Project budget', <select {...a('budget')}><option value="">Choose…</option>{budgets.map((b) => <option key={b}>{b}</option>)}</select>)}
          </div>
          {field('message', 'Project description', <textarea {...a('message')} rows="4" />)}
          <button className="btn" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Send enquiry'}</button>
          <div aria-live="polite" className="status">
            {status === 'success' && <p className="ok">Thanks. Your enquiry was delivered to our form service.</p>}
            {status === 'error' && <p className="bad">Something went wrong and your message was not sent. Please try again or email us.</p>}
            {status === 'unconfigured' && (
              <p className="bad">Nothing has been sent. This demo has no form backend yet (see <code>brand.formEndpoint</code> in config/site.js). You can{' '}
                <a href={`mailto:${brand.email}?subject=${encodeURIComponent('Project enquiry')}&body=${encodeURIComponent(summary)}`}>open the enquiry in your email app</a>.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
