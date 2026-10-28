import { lazy, Suspense, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Contact from './components/Contact.jsx';
import { Footer, ScrollUI } from './components/Footer.jsx';
import { TrustedBy, Services, Dashboard, Process, WhyUs, Testimonials, Pricing, FAQ } from './components/Sections.jsx';
import { ProjectsSkeleton } from './components/Common.jsx';
import { useTheme } from './hooks/hooks.js';

// Projects is code-split; the skeleton shows while it loads.
const Projects = lazy(() => import('./components/Projects.jsx'));

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [prefill, setPrefill] = useState(null);
  // Fill the contact form from a service card, pricing plan or project, then jump to it.
  const goContact = (service, message) => {
    setPrefill({ service: service || '', message: message || '', t: Date.now() });
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <ScrollUI />
      <Navbar theme={theme} onTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <TrustedBy />
        <Services onPick={(s) => goContact(s)} />
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects onInquire={(p) => goContact(p.services[0], `I'd like a project similar to "${p.title}" (demo case study).`)} />
        </Suspense>
        <Dashboard />
        <Process />
        <WhyUs />
        <Testimonials />
        <Pricing onPick={goContact} />
        <FAQ />
        <Contact prefill={prefill} />
      </main>
      <Footer />
    </>
  );
}
