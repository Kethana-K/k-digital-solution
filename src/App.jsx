import React, { useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, Layers3,
  Menu, MessageCircle, MonitorSmartphone, Palette, Send, Sparkles,
  Smartphone, X, Zap, Globe, MousePointer2, ShieldCheck, Instagram, Linkedin, Github, Facebook, Mail, Phone, MapPin
} from 'lucide-react';

const WHATSAPP_NUMBER = '919071108783'; // International format: country code + number, no plus sign.
const EMAIL_ADDRESS = 'kethanakoppala27@gmail.com';
const INSTAGRAM_URL = 'https://www.instagram.com/k_digital_solution/';

const services = [
  { icon: MonitorSmartphone, number: '01', title: 'Websites & Web Apps', description: 'Business websites, landing pages, portfolios, dashboards and web apps designed to work beautifully across devices.', tags: ['Business sites', 'Landing pages', 'Web apps'] },
  { icon: Smartphone, number: '02', title: 'Mobile App Solutions', description: 'Practical app concepts and MVPs that help turn an idea into a usable digital product.', tags: ['MVP planning', 'App UI', 'Prototypes'] },
  { icon: Sparkles, number: '03', title: 'AI & Automation', description: 'AI-enabled workflows, chat assistants, document helpers and repetitive-task automation tailored to real business needs.', tags: ['AI integrations', 'Chatbots', 'Workflow automation'] },
  { icon: ShieldCheck, number: '04', title: 'Cybersecurity Basics', description: 'Security-minded setup reviews, website hardening guidance, access-control checks and practical security hygiene.', tags: ['Security review', 'Best practices', 'Hardening guidance'] },
  { icon: Globe, number: '05', title: 'Cloud Solutions', description: 'Cloud setup and deployment support for websites and apps, with practical guidance on reliability and cost awareness.', tags: ['Cloud setup', 'Deployment', 'Cost awareness'] },
  { icon: Code2, number: '06', title: 'DevOps & CI/CD', description: 'Build and deployment workflows using containers, automation and repeatable infrastructure practices.', tags: ['Docker', 'CI/CD pipelines', 'Infrastructure as code'] },
  { icon: Layers3, number: '07', title: 'UI/UX & Brand Design', description: 'Clean interfaces, responsive layouts and visual assets that make your product easier to understand and use.', tags: ['UI/UX', 'Wireframes', 'Brand assets'] },
  { icon: MousePointer2, number: '08', title: 'Digital Content & Growth', description: 'Website copy, social content, short-form creative assets and digital presence support for small businesses.', tags: ['Content', 'Social creatives', 'Copywriting'] },
  { icon: Zap, number: '09', title: 'Small Tech Tasks', description: 'Need a quick fix or a little technical help? Get support for website updates, bug fixes, forms, integrations and setup tasks.', tags: ['Bug fixes', 'Website updates', 'Integrations'] },
  { icon: ShieldCheck, number: '10', title: 'Data & Analytics', description: 'Dashboards, reporting, data cleanup and simple analytics workflows to make information easier to use.', tags: ['Dashboards', 'Data cleanup', 'Reports'] },
  { icon: Code2, number: '11', title: 'Maintenance & Support', description: 'Ongoing updates, content changes, troubleshooting and practical help keeping your digital presence current.', tags: ['Updates', 'Troubleshooting', 'Support'] },
  { icon: MessageCircle, number: '12', title: 'Consulting & Training', description: 'Friendly technical guidance, project planning and beginner-focused workshops for teams and individuals.', tags: ['Tech guidance', 'Project planning', 'Workshops'] },
];

const initialForm = { name: '', business: '', email: '', service: 'Website Development', budget: 'Not sure yet', timeline: 'Within a month', details: '' };

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [chatMessages, setChatMessages] = useState([{ from: 'bot', text: "Hi! 👋 I'm K Digital Assistant. How can I help you today?" }]);

  const openContact = (service = 'Website Development') => {
    setForm(prev => ({ ...prev, service }));
    setSubmitted(false);
    setContactOpen(true);
    setMenuOpen(false);
  };

  const updateForm = (key, value) => setForm(prev => ({ ...prev, [key]: value }));

  const submitEnquiry = (event) => {
    event.preventDefault();
    const message = [
      'Hello K Digital Solutions! I would like to discuss a project.',
      '',
      `Name: ${form.name}`,
      `Business: ${form.business || 'Not provided'}`,
      `Email: ${form.email || 'Not provided'}`,
      `Service needed: ${form.service}`,
      `Budget: ${form.budget}`,
      `Timeline: ${form.timeline}`,
      `Project details: ${form.details || 'I would like to discuss my requirements.'}`
    ].join('\n');
    const number = WHATSAPP_NUMBER.replace(/\D/g, '');
    if (number && !number.includes('XXXXXXXXXX') && number.length >= 10) {
      window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
      setSubmitted(true);
    } else {
      const subject = encodeURIComponent(`New project enquiry — ${form.service}`);
      window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${encodeURIComponent(message)}`;
      setSubmitted(true);
    }
  };

  const closeContact = () => setContactOpen(false);

  const handleChatChoice = (choice) => {
    const original = choice.trim();
    const normalized = original.toLowerCase().replace(/[^a-z0-9\s₹$&+.-]/g, ' ').replace(/\s+/g, ' ');
    const has = (...terms) => terms.some(term => normalized.includes(term));
    let reply = '';
    let openQuote = false;
    let scrollToWork = false;

    if (has('hello', 'hi ', 'hey', 'namaste', 'good morning', 'good afternoon', 'good evening')) {
      reply = 'Hi! 👋 Welcome to K Digital Solutions. I can help you explore services, understand our project process, prepare a quote request, or find our demo work. What are you planning to build?';
    } else if (has('service', 'what do you do', 'what can you do', 'offer', 'మీరు ఏమి', 'services')) {
      reply = 'We support 12 areas: (1) Websites & web apps, (2) mobile app solutions, (3) AI & automation, (4) cybersecurity basics, (5) cloud solutions, (6) DevOps & CI/CD, (7) UI/UX & brand design, (8) digital content, (9) small tech fixes, (10) data & analytics, (11) maintenance, and (12) consulting/training. Which one fits your goal?';
    } else if (has('price', 'pricing', 'cost', 'budget', 'how much', 'quote', 'estimate', 'rate', 'ధర', 'ఎంత')) {
      reply = 'Project cost depends on the features, complexity, integrations, content, and delivery timeline. We don’t want to give you a misleading fixed price before understanding the scope. Tell me: what do you need, which features are essential, and what budget range are you considering? You can also choose “Get a quote” below to prepare an enquiry. No payment is taken here.';
      openQuote = has('quote', 'get a quote', 'estimate', 'quotation');
    } else if (has('process', 'how do you work', 'how it works', 'steps', 'timeline', 'how long', 'delivery time', 'ఎలా చేస్తారు')) {
      reply = 'Our typical workflow is: 1) understand your goal, 2) confirm scope and deliverables, 3) agree on a timeline and estimate, 4) design/build in stages, 5) review and test, 6) hand over with agreed support. Timing depends on project scope; we confirm it before work starts. What are you looking to build?';
    } else if (has('portfolio', 'demo', 'show work', 'your work', 'projects', 'speakup', 'case study')) {
      reply = 'Our current showcase includes SpeakUp, a concept/demo project. It should be treated as demo work, not a paid client case study. Scroll to the “Our work” section to explore it. If you have a reference website, you can also share it in your enquiry.';
      scrollToWork = true;
    } else if (has('contact', 'talk to', 'human', 'team', 'email', 'whatsapp', 'reach you', 'start a project', 'contact us')) {
      reply = 'Sure — I can open the project enquiry form. Add your name, the service you need, a budget range and a short description. It prepares a WhatsApp message for you to review before sending.';
      openQuote = true;
    } else if (has('website', 'web design', 'landing page', 'business site', 'redesign', 'wordpress', 'ecommerce', 'e-commerce', 'online store')) {
      reply = 'For a website, we can discuss the pages, mobile layout, content, enquiry/contact flow, integrations, and hosting. To guide you better: is this a new website or a redesign, and what should visitors do on it — contact you, book, buy, or learn?';
    } else if (has('mobile app', 'android', 'ios', 'application', 'app development', 'play store', 'app store')) {
      reply = 'For a mobile app, first define the target users and the smallest useful feature set (MVP). We can discuss screens, login, notifications, backend/API needs, and launch requirements. Do you need Android, iOS, or both?';
    } else if (has('chatbot', 'ai', 'artificial intelligence', 'automation', 'llm', 'assistant bot')) {
      reply = 'For an AI/chatbot project, we should first define the job it needs to do, the information it can use, and where it will run (website, WhatsApp, or internal tool). A rule-based bot can be low-cost; AI responses generally need a secure backend and an AI API, which may have usage costs. What should your bot help users do?';
    } else if (has('cloud', 'aws', 'azure', 'deployment', 'hosting', 'server')) {
      reply = 'For cloud and deployment work, we can discuss your current stack, traffic expectations, data/storage needs, uptime requirements, and monthly budget. Cloud provider charges are separate from development fees. Are you deploying a new project or fixing an existing deployment?';
    } else if (has('devops', 'ci/cd', 'pipeline', 'docker', 'kubernetes', 'terraform', 'github actions')) {
      reply = 'For DevOps/CI-CD, possible scope includes build-and-deploy automation, Docker, environment configuration, cloud deployment, monitoring, and infrastructure as code. The right setup depends on your stack and hosting target. Which platform are you using now?';
    } else if (has('design', 'ui', 'ux', 'figma', 'branding', 'logo')) {
      reply = 'For UI/UX and branding, we can clarify the audience, brand style, key screens, accessibility, and mobile behaviour first. Do you need a new design, a redesign, or a clickable prototype?';
    } else if (has('data', 'analytics', 'dashboard', 'report', 'power bi', 'visualization')) {
      reply = 'For data and analytics, we can discuss the source files/databases, key metrics, dashboard users, refresh frequency, and desired output. Please don’t paste private customer data into this chat; a sample with sensitive details removed is safer.';
    } else if (has('security', 'cybersecurity', 'secure', 'hack', 'vulnerability')) {
      reply = 'We can discuss basic website security hygiene, access controls, dependency updates, backups, and deployment configuration. A proper security assessment needs an agreed scope and authorization; we don’t claim a system is secure without testing.';
    } else if (has('maintenance', 'bug', 'error', 'fix', 'support', 'broken', 'white screen')) {
      reply = 'We can discuss website updates, bug fixes, forms, integrations, and troubleshooting. To narrow it down, tell me what should happen, what happens instead, and any error message. Remove passwords, API keys, and private customer information before sharing logs.';
    } else if (has('thank', 'thanks', 'ధన్యవాద')) {
      reply = 'You’re welcome! 😊 If you tell me your goal and the service you’re interested in, I’ll help you work out the next step.';
    } else if (has('telugu', 'తెలుగు', 'english', 'language')) {
      reply = 'I can help with common project questions in English and some Telugu/English phrasing. For best results, describe the project in one or two sentences. For complex or unusual questions, I may ask a follow-up rather than guess.';
    } else {
      reply = `I may need a little more detail to answer “${original}” accurately. Could you tell me which area this is about — website, mobile app, AI/chatbot, cloud/DevOps, design, analytics, or a technical fix? I’ll guide you from there.`;
    }

    setChatMessages(prev => [...prev, { from: 'user', text: original }, { from: 'bot', text: reply }]);
    if (scrollToWork) {
      window.setTimeout(() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }), 80);
    }
    if (openQuote) openContact('Not sure yet');
  };

  const sendChatMessage = (event) => {
    event.preventDefault();
    const text = chatInput.trim();
    if (!text) return;
    setChatInput('');
    handleChatChoice(text);
  };

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="nav-wrap">
        <a className="brand" href="#home" aria-label="K Digital Solutions home">
          <span className="brand-mark">K<span>.</span></span>
          <span className="brand-name">K DIGITAL <b>SOLUTIONS</b></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links nav-links-open' : 'nav-links'}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Our work</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Our approach</a>
          <button className="nav-cta" onClick={() => openContact('Not sure yet')}>Let's talk <ArrowUpRight size={15} /></button>
        </nav>
      </header>

      <main>
        <section className="hero section-container" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> YOUR DIGITAL ENGINEERING PARTNER</div>
            <h1>Build a better<br />digital future<br /><span className="gradient-text">for your business.</span></h1>
            <p className="hero-description">From high-performing websites and web apps to AI workflows, cloud and DevOps, we turn your next idea into a practical digital experience.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => openContact('Not sure yet')}>Discuss your project <ArrowRight size={17} /></button>
              <a className="button button-quiet" href="#services">Explore services <ArrowDownRight size={17} /></a>
            </div>
            <div className="hero-proof">
              <div className="proof-icon"><ShieldCheck size={18} /></div>
              <p><strong>Clear communication. Practical solutions.</strong><span>Small-business friendly, from first idea to launch.</span></p>
            </div>
          </div>
          <div className="hero-visual" aria-label="Abstract digital interface illustration">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="hero-glow" />
            <div className="floating-chip chip-top"><span className="chip-pulse" /> Strategy <span className="chip-separator">/</span> Design</div>
            <div className="visual-card main-visual-card">
              <div className="mock-window-bar"><span /><span /><span /><div className="mock-url">yourbrand.site</div></div>
              <div className="mock-content">
                <div className="mock-mini-brand"><span>K.</span> YOUR BRAND</div>
                <div className="mock-headline">Make your next<br /><em>move matter.</em></div>
                <div className="mock-line" /><div className="mock-line short" />
                <div className="mock-button">Let's get started <ArrowUpRight size={12} /></div>
                <div className="mock-art"><div className="art-ring ring-one" /><div className="art-ring ring-two" /><div className="art-core">K</div><div className="art-star">✳</div></div>
                <div className="mock-bottom"><span>DESIGNED WITH INTENT</span><span>01 — 04</span></div>
              </div>
            </div>
            <div className="floating-chip chip-bottom"><Zap size={14} /> Clear. Modern. Effective.</div>
            <div className="visual-spark spark-one">✳</div><div className="visual-spark spark-two">✦</div>
          </div>
          <a className="scroll-cue" href="#services"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="trust-strip">
          <div className="section-container trust-inner"><span>DESIGNED FOR THE NEXT STEP</span><div className="trust-divider" /><p>Web & Apps <b>·</b> AI <b>·</b> Cybersecurity <b>·</b> Cloud & DevOps <b>·</b> Small tech tasks</p></div>
        </section>

        <section className="section-container section-block" id="services">
          <div className="section-heading">
            <div><div className="eyebrow">WHAT WE CAN BUILD</div><h2>Digital solutions,<br /><span className="muted-heading">made meaningful.</span></h2></div>
            <p className="section-intro">Need a complete product, a specialist service, or one small task handled well? Explore our service areas and tell us what you need.</p>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, number, title, description, tags }) => (
              <article className="service-card" key={number}>
                <div className="service-top"><span className="service-icon"><Icon size={21} /></span><span className="service-number">{number}</span></div>
                <h3>{title}</h3><p>{description}</p>
                <div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <button className="text-link" onClick={() => openContact(title)}>Discuss this service <ArrowUpRight size={15} /></button>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-container section-block">
            <div className="section-heading work-heading">
              <div><div className="eyebrow">A WORK IN PROGRESS, WITH PURPOSE</div><h2>Selected <span className="gradient-text">work.</span></h2></div>
              <p className="section-intro">A look at what we're building. Demo concepts are clearly labelled, and we only present real client work when it exists.</p>
            </div>
            <article className="project-card">
              <div className="project-preview">
                <div className="speakup-window">
                  <div className="speakup-top"><span className="speakup-logo"><MessageCircle size={15} /> SpeakUp</span><span className="preview-pill">DEMO PROJECT</span></div>
                  <div className="speakup-body">
                    <span className="mini-label">WORDS CONNECT US</span>
                    <h3>Say it in<br /><span>another language.</span></h3>
                    <p>Translate your thoughts. Hear every word.</p>
                    <div className="translation-ui"><div><small>FROM · ENGLISH</small><b>Hello, how are you?</b></div><ArrowRight size={17} /><div><small>TO · TELUGU</small><b>నమస్కారం</b></div></div>
                    <div className="speakup-footer"><span>✦ Translation interface concept</span><span>EN ↔ TE</span></div>
                  </div>
                </div>
                <div className="preview-orb" />
              </div>
              <div className="project-info">
                <div className="project-meta"><span>WEB APPLICATION</span><span className="meta-dot">•</span><span>CONCEPT / DEMO</span></div>
                <h3>SpeakUp</h3>
                <p>A language helper concept that brings translation and text-to-speech into a simple, approachable experience. Built as a demo project to explore practical, people-first utility.</p>
                <div className="project-tags"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>API integration</span></div>
                <button className="button button-outline" onClick={() => openContact('Website Development')}>Build a project like this <ArrowUpRight size={16} /></button>
                <p className="project-note">Demo concept — not presented as a paid client project.</p>
              </div>
            </article>
            <div className="work-note"><Sparkles size={17} /><span>More work is on the way. Have an idea? Let's build the next project together.</span><button onClick={() => openContact('Not sure yet')}>Share your idea <ArrowRight size={15} /></button></div>
          </div>
        </section>

        <section className="section-container section-block" id="process">
          <div className="section-heading">
            <div><div className="eyebrow">SIMPLE, COLLABORATIVE, CLEAR</div><h2>From first idea<br />to <span className="gradient-text">launch day.</span></h2></div>
            <p className="section-intro">You don't need a perfect brief to get started. We'll help you shape the idea and agree on the scope before work begins.</p>
          </div>
          <div className="process-grid">
            {[['01','Listen & understand','We learn about your business, technical need, audience and what you want to achieve.'],['02','Plan the right solution','We align on features, timeline and a clear project scope.'],['03','Design & build','We deliver the agreed solution, from a digital experience to a focused technical task.'],['04','Review & hand over','You review the work, share feedback and prepare for launch.']].map(([n,t,d]) => <div className="process-step" key={n}><span className="process-number">{n}</span><div className="process-line" /><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </section>

        <section className="cta-section section-container">
          <div className="cta-panel"><div className="cta-orb cta-orb-one" /><div className="cta-orb cta-orb-two" />
            <div className="cta-content"><div className="eyebrow"><span className="status-dot" /> YOUR NEXT CHAPTER STARTS HERE</div><h2>Have a good idea?<br /><span>Let's make it real.</span></h2><p>Tell us about the outcome you need, whether it's a new website, an AI workflow, a cloud deployment or a small technical task.</p><button className="button button-light" onClick={() => openContact('Not sure yet')}>Tell us about your project <ArrowRight size={17} /></button></div>
            <div className="cta-decoration"><div className="cta-decoration-ring" /><div className="cta-decoration-core"><Send size={33} /></div><span className="cta-decoration-star">✳</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-inner">
          <div className="footer-main-grid">
            <div className="footer-about">
              <a className="brand footer-brand" href="#home" aria-label="K Digital Solutions home"><span className="brand-mark">K<span>.</span></span><span className="brand-name">K DIGITAL <b>SOLUTIONS</b></span></a>
              <p className="footer-description">We help startups, small businesses and creators build a stronger digital presence with thoughtful websites, useful apps and practical technology solutions.</p>
              <div className="footer-socials" aria-label="Social links">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
                <a href={`mailto:${EMAIL_ADDRESS}`} aria-label="Email us"><Mail size={18} /></a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Services</h3>
              <a href="#services">Web Development</a>
              <a href="#services">Mobile App Solutions</a>
              <a href="#services">AI & Automation</a>
              <a href="#services">Cloud & DevOps</a>
              <a href="#services">UI/UX & Design</a>
              <a href="#services">Maintenance & Support</a>
            </div>
            <div className="footer-column">
              <h3>Company</h3>
              <a href="#home">About K Digital</a>
              <a href="#work">Our Projects</a>
              <a href="#process">Our Process</a>
              <button type="button" onClick={() => openContact('Not sure yet')}>Start a Project <ArrowUpRight size={14} /></button>
              <a href={`mailto:${EMAIL_ADDRESS}`}>Contact Us</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a>
            </div>
            <div className="footer-newsletter">
              <h3>Stay Connected</h3>
              <p>Have an idea or want occasional updates? Leave your email and prepare a message to our team.</p>
              <form className="footer-newsletter-form" onSubmit={(event) => { event.preventDefault(); const email = newsletterEmail.trim(); if (!email) return; window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent('K Digital Solutions updates')}&body=${encodeURIComponent(`Hi K Digital Solutions, please contact me at ${email} with updates and information.`)}`; }}>
                <label className="sr-only" htmlFor="footer-email">Your email address</label>
                <input id="footer-email" type="email" placeholder="Your email address" value={newsletterEmail} onChange={(event) => setNewsletterEmail(event.target.value)} required />
                <button type="submit">Get in Touch <Send size={16} /></button>
              </form>
              <a className="footer-whatsapp" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello K Digital Solutions! I would like to discuss a project.')}`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Chat on WhatsApp <ArrowUpRight size={14} /></a>
            </div>
          </div>
          <div className="footer-locations"><MapPin size={16} /><span>Based in India · Open to working with clients worldwide</span><span className="footer-location-separator">•</span><a href={`mailto:${EMAIL_ADDRESS}`}><Mail size={14} /> {EMAIL_ADDRESS}</a></div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} K Digital Solutions. All rights reserved.</span><span>Build · Design · Grow</span><button type="button" onClick={() => openContact('Not sure yet')}>Let’s talk <ArrowUpRight size={14} /></button></div>
        </div>
      </footer>

      {contactOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) closeContact(); }}>
        <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title">
          <button className="modal-close" onClick={closeContact} aria-label="Close contact form"><X size={20} /></button>
          {submitted ? <div className="success-state"><span className="success-icon"><Check size={28} /></span><div className="eyebrow">NEXT STEP</div><h2>Your enquiry is ready.</h2><p>If WhatsApp or your email app opened, review the message and send it to complete your enquiry. We'll be ready to discuss your idea.</p><button className="button button-primary" onClick={closeContact}>Back to website <ArrowRight size={16} /></button></div> :
          <>
            <div className="modal-kicker"><span className="status-dot" /> LET'S TALK ABOUT YOUR PROJECT</div>
            <h2 id="contact-title">What can we<br /><span className="gradient-text">help you build?</span></h2>
            <p className="modal-intro">Share a few details. We'll use them to start a useful conversation — not send you a generic pitch.</p>
            <form onSubmit={submitEnquiry}>
              <div className="form-row"><label>Your name *<input required value={form.name} onChange={e => updateForm('name', e.target.value)} placeholder="e.g. Priya Sharma" /></label><label>Business / brand<input value={form.business} onChange={e => updateForm('business', e.target.value)} placeholder="Your business name" /></label></div>
              <label>Email (optional)<input type="email" value={form.email} onChange={e => updateForm('email', e.target.value)} placeholder="you@company.com" /></label>
              <label>What service do you need? *
                <select required value={form.service} onChange={e => updateForm('service', e.target.value)}>
                  <option>Website Development</option><option>Web App Development</option><option>Mobile App Solutions</option><option>AI & Automation</option><option>Cybersecurity Basics</option><option>Cloud Solutions</option><option>DevOps & CI/CD</option><option>UI/UX & Brand Design</option><option>Digital Content & Growth</option><option>Small Tech Task / Bug Fix</option><option>Data & Analytics</option><option>Maintenance & Support</option><option>Consulting & Training</option><option>Website redesign</option><option>eCommerce website</option><option>Coaching institute website</option><option>Not sure yet</option><option>Something else</option>
                </select>
              </label>
              <div className="form-row"><label>Estimated budget<select value={form.budget} onChange={e => updateForm('budget', e.target.value)}><option>Not sure yet</option><option>Under ₹5,000</option><option>₹5,000–₹10,000</option><option>₹10,000–₹25,000</option><option>₹25,000+</option></select></label><label>When do you need it?<select value={form.timeline} onChange={e => updateForm('timeline', e.target.value)}><option>As soon as possible</option><option>Within a month</option><option>In 1–3 months</option><option>Just exploring</option></select></label></div>
              <label>Tell us a little about your idea<textarea rows="3" value={form.details} onChange={e => updateForm('details', e.target.value)} placeholder="What are you trying to build? Any features, references or goals?" /></label>
              <button className="button button-primary submit-button" type="submit">Continue to contact <ArrowRight size={17} /></button>
              <p className="form-privacy">Your details are used to prepare this enquiry message. Nothing is sent until you review and send it in your email or messaging app.</p>
            </form>
          </>}
        </div>
      </div>}
      {supportOpen && <aside className="support-panel" aria-label="K Digital Assistant chatbot">
        <div className="support-panel-head"><span className="bot-avatar"><Sparkles size={17} /></span><div><strong>K Digital Assistant</strong><small><span className="support-online-dot" /> Online · Instant guidance</small></div><button onClick={() => setSupportOpen(false)} aria-label="Close chatbot"><X size={17} /></button></div>
        <div className="chat-messages" aria-live="polite">
          {chatMessages.map((message, index) => <div className={`chat-row ${message.from === 'user' ? 'chat-row-user' : ''}`} key={`${index}-${message.from}`}>
            {message.from === 'bot' && <span className="chat-avatar"><Sparkles size={14} /></span>}
            <p className={`chat-bubble ${message.from === 'user' ? 'chat-bubble-user' : ''}`}>{message.text}</p>
          </div>)}
          <div className="chat-quick-replies">
            {['Our Services', 'Project Cost', 'Development Process', 'View Portfolio', 'Contact Us'].map(option => <button key={option} onClick={() => handleChatChoice(option)}>{option}</button>)}
          </div>
        </div>
        <form className="chat-composer" onSubmit={sendChatMessage}>
          <input aria-label="Type your message" value={chatInput} onChange={e => setChatInput(e.target.value)} placeholder="Type your message…" />
          <button type="submit" aria-label="Send message"><Send size={17} /></button>
        </form>
        <div className="chat-footer"><button onClick={() => { setSupportOpen(false); openContact('Not sure yet'); }}>Get a quote <ArrowRight size={13} /></button><a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello K Digital Solutions! I would like to discuss a project.')}`} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={13} /></a></div>
      </aside>}
      <button className="floating-contact" onClick={() => setSupportOpen(v => !v)} aria-label="Open K Digital Assistant chatbot"><MessageCircle size={20} /><span>{supportOpen ? 'Close chat' : 'Chat with us'}</span></button>
    </div>
  );
}

export default App;