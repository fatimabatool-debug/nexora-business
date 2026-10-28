/* ============================================================
   CUSTOMISE EVERYTHING HERE: brand, copy, projects, prices, FAQ.
   Components read from this file, so most rebrands need no other edits.
   ============================================================ */
export const brand = {
  name: 'NEXORA DIGITAL',
  email: 'hello@nexora.example', // placeholder: replace with your real address
  // FORM INTEGRATION POINT: paste a form endpoint (Formspree, Getform, your own API...).
  // The form POSTs JSON to it. While this is empty the form will NOT claim to send anything.
  formEndpoint: '',
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'X', href: 'https://x.com' },
  ],
};

export const nav = [
  ['Home', '#home'], ['Services', '#services'], ['Work', '#work'],
  ['About', '#about'], ['Pricing', '#pricing'], ['Contact', '#contact'],
];

// icon = lucide-react icon name (looked up in components/Common.jsx)
export const services = [
  { title: 'Web Development', icon: 'Code', cat: 'Web', text: 'Fast, accessible sites and web apps built on modern frameworks.' },
  { title: 'UI/UX Design', icon: 'PenTool', cat: 'Design', text: 'Research-led interfaces that feel obvious to use and hard to forget.' },
  { title: 'Brand Identity', icon: 'Palette', cat: 'Branding', text: 'Logos, visual systems and guidelines that make you recognisable.' },
  { title: 'AI Automation', icon: 'Bot', cat: 'AI', text: 'Workflows and assistants that remove repetitive work from your team.' },
  { title: 'Digital Marketing', icon: 'Megaphone', cat: 'Marketing', text: 'SEO, content and campaigns tied to measurable growth.' },
  { title: 'Business Consulting', icon: 'Compass', cat: 'Consulting', text: 'Clear digital roadmaps before a single line of code is written.' },
];

export const categories = ['All', 'Web', 'Design', 'Branding', 'AI', 'Marketing', 'Consulting'];

// DEMO projects (fictional). Replace with real case studies.
export const projects = [
  { id: 'p1', title: 'Lumen Health', industry: 'Healthcare (demo)', cats: ['Web', 'Design'], services: ['Web Development', 'UI/UX Design'], size: 'wide', hue: ['#7957FF', '#36D9FF'], text: 'A booking platform concept that cuts appointment steps from seven to three.', detail: 'Demo case study: replace with the real brief, approach and outcome. Describe the problem, what you built and the result you can honestly evidence.' },
  { id: 'p2', title: 'Ostra Coffee', industry: 'Retail (demo)', cats: ['Branding', 'Marketing'], services: ['Brand Identity', 'Digital Marketing'], size: 'tall', hue: ['#FF7A59', '#7957FF'], text: 'A rebrand and launch campaign for a specialty roaster.', detail: 'Demo case study: explain the brand strategy, deliverables and campaign results here.' },
  { id: 'p3', title: 'Flowdesk AI', industry: 'SaaS (demo)', cats: ['AI', 'Web', 'Consulting'], services: ['AI Automation', 'Business Consulting'], size: 'wide', hue: ['#36D9FF', '#2B6BFF'], text: 'Support-ticket triage automation with a reporting dashboard.', detail: 'Demo case study: describe the workflow you automated, tools used and measured impact.' },
];

// ILLUSTRATIVE numbers only. Do not publish as real statistics.
export const heroStats = [
  { value: 120, suffix: '+', label: 'Sample: projects' },
  { value: 98, suffix: '%', label: 'Sample: satisfaction' },
  { value: 14, suffix: ' days', label: 'Sample: avg. delivery' },
];
export const dashboardStats = [
  { value: 248, suffix: '%', label: 'Traffic growth' },
  { value: 63, suffix: '%', label: 'Faster page loads' },
  { value: 41, suffix: 'h', label: 'Hours saved / week' },
  { value: 3.8, suffix: 'x', label: 'Lead volume', decimals: 1 },
];
export const chartData = [32, 38, 35, 46, 52, 49, 63, 71, 68, 84, 92, 100]; // demo monthly index

export const logos = ['Northwind Labs', 'Arcadia Co.', 'Helio Group', 'Quanta Foods', 'Verde Studio', 'Pinnacle Co.'];

export const process = [
  { title: 'Discover', text: 'We learn your goals, audience and constraints through focused workshops.' },
  { title: 'Strategize', text: 'You get a roadmap, scope and success metrics before design begins.' },
  { title: 'Design & Build', text: 'Iterative design and development with regular, visible progress.' },
  { title: 'Launch & Optimize', text: 'We ship, measure and keep improving based on real data.' },
];

export const benefits = [
  { icon: 'Compass', title: 'Strategy before execution', text: 'Every build starts with a clear plan and measurable goals.' },
  { icon: 'Gauge', title: 'Fast, responsive websites', text: 'Performance and mobile experience are built in, not bolted on.' },
  { icon: 'MessageSquare', title: 'Transparent communication', text: 'Clear timelines, honest updates and one point of contact.' },
  { icon: 'Layers', title: 'Scalable solutions', text: 'Architecture that grows with your product and traffic.' },
  { icon: 'Cpu', title: 'Modern technology', text: 'Current tools chosen for fit, not fashion.' },
  { icon: 'Users', title: 'User-centred design', text: 'Decisions backed by how real people behave.' },
];

// DEMO testimonials (fictional)
export const testimonials = [
  { name: 'Sample Person A', role: 'Founder, fictional company', text: 'Demo testimonial: replace with a real review you have permission to publish.' },
  { name: 'Sample Person B', role: 'Marketing lead, fictional company', text: 'Demo testimonial: this card shows how a longer quote will look in the layout.' },
  { name: 'Sample Person C', role: 'Operations director, fictional company', text: 'Demo testimonial: add real names, roles and quotes, or remove this section.' },
];

// PLACEHOLDER pricing. Edit freely.
export const plans = [
  { name: 'Starter', price: '$2,500', note: 'from', features: ['Up to 5 pages', 'Responsive design', 'Basic SEO setup', '2 revision rounds'], cta: 'Start with Starter' },
  { name: 'Growth', price: '$7,500', note: 'from', featured: true, features: ['Custom design system', 'CMS integration', 'Analytics and SEO', 'One AI automation', '3 revision rounds'], cta: 'Choose Growth' },
  { name: 'Enterprise', price: 'Custom', note: '', features: ['Full product build', 'Dedicated team', 'Advanced automation', 'Priority support', 'Custom SLAs'], cta: 'Talk to us' },
];

export const faqs = [
  { q: 'How long does a typical project take?', a: 'Placeholder answer: small sites often take 3 to 6 weeks, larger builds longer. Edit to match your process.' },
  { q: 'How is pricing decided?', a: 'Placeholder answer: prices above are starting points. Final pricing depends on scope, complexity and timeline.' },
  { q: 'How many revisions are included?', a: 'Placeholder answer: each package lists included revision rounds; more can be added.' },
  { q: 'Which technologies do you use?', a: 'Placeholder answer: React, modern CMS platforms and automation tools, chosen to fit your needs.' },
  { q: 'Do you offer maintenance?', a: 'Placeholder answer: optional monthly support covers updates, monitoring and small improvements.' },
  { q: 'How do we get started?', a: 'Send the form below with a short description. We reply to arrange a discovery call.' },
];

export const budgets = ['Under $2,500', '$2,500 – $7,500', '$7,500 – $20,000', '$20,000+', 'Not sure yet'];
