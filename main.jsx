import React from "react";
import ReactDOM from "react-dom/client";
import { ArrowUpRight, ArrowRight, Check, ChevronUp, Copy, FileText, Mail, Phone, Linkedin, Globe, Quote } from "lucide-react";
import "./styles.css";

const nav = [
  ["Home", "home"], ["About", "about"], ["Services", "services"],
  ["Work", "work"], ["Experience", "experience"], ["Contact", "contact"]
];

const services = [
  { n:"01", title:"Administrative & Executive Support", desc:"Steady, detail-focused support for the work behind every productive day.", tags:["Calendar management","Inbox management","Scheduling","Documents","Research","Follow-ups"] },
  { n:"02", title:"Customer & Client Support", desc:"Responsive communication that helps clients feel informed and looked after.", tags:["Customer communication","Booking coordination","Client follow-ups","CRM updates","Issue resolution"] },
  { n:"03", title:"Digital Operations", desc:"Hands-on support across websites, e-commerce, and everyday digital systems.", tags:["WordPress","Elementor","Shopify","Website updates","Digital systems","Technical troubleshooting"] },
  { n:"04", title:"CRM & Automation", desc:"Organized systems and practical workflows that reduce repetitive work.", tags:["GoHighLevel","ManyChat","CRM management","Workflow support","Google Sheets","Process automation"] },
  { n:"05", title:"Email & Marketing Support", desc:"End-to-end campaign assistance, from first draft through final send.", tags:["Email campaign support","Copywriting","Email design & layout","ESP setup","Scheduling","Basic performance tracking"] }
];

const work = [
  ["01","Dutch Skincare","Digital & Technical Virtual Assistant","Website · E-commerce · Automation · CRM"],
  ["02","Elevated Connections","Virtual & AI-Driven Assistant","CRM · Automation · Marketing · Operations"],
  ["03","Digipad.id","Personal Assistant","Executive Support · Scheduling · Client Communication"],
  ["04","PT. Leassy Transportation Indonesia","Customer Service & Operations","Customer Service · Booking · Operations"],
  ["05","Dapur Nusantara","Website Project","Website · WordPress · Digital Presence"]
];

const experience = [
  ["Dutch Skincare","Netherlands · Remote","Digital & Technical Virtual Assistant","Apr 2026 – Present",true],
  ["Elevated Connections","Canada · Remote","Virtual & AI-Driven Assistant","Nov 2025 – Apr 2026"],
  ["Digipad.id","Denpasar, Indonesia","Personal Assistant","Aug 2025 – Nov 2025"],
  ["PT. Leassy Transportation Indonesia","Denpasar, Indonesia","Customer Service Representative","Jun 2024 – Aug 2025"],
  ["Mimosa Boutique","Denpasar, Indonesia","Administrative Assistant","Dec 2023 – Jun 2024"]
];

function Pill({children}) { return <span className="pill">{children}</span>; }

function Header() {
  return (
    <header className="header">
      <div className="nav-inner">
        <a className="brand" href="#home"><span className="brand-mark">A</span><span>ARWANDA</span></a>
        <nav>{nav.map(([label,id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <a className="nav-cta" href="#contact">Let's Work Together <ArrowUpRight size={13}/></a>
      </div>
    </header>
  );
}

function Hero() {
  return <section id="home" className="hero section">
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="eyebrow">REMOTE VIRTUAL ASSISTANT · BUSINESS SUPPORT · DIGITAL OPERATIONS</div>
        <h1>Reliable support<br/>that keeps your<br/><em>business moving.</em></h1>
        <p>I help founders, executives, and growing businesses stay organized, responsive, and operationally efficient — from administrative support and client communication to digital systems, websites, CRM, and marketing operations.</p>
        <div className="hero-buttons">
          <a className="button primary" href="#contact">Let's Work Together <ArrowRight size={14}/></a>
          <a className="button secondary" href="#work">View My Work <ArrowUpRight size={14}/></a>
        </div>
        <div className="status-row">
          <span><i className="dot"/>Available for remote opportunities</span>
          <span>◎ Bali, Indonesia · International clients</span>
        </div>
      </div>
      <div className="profile-card">
        <div className="card-top"><span>PERSONAL BRAND</span><span>2026</span></div>
        <div className="photo-placeholder"><span>Arwanda Nur Fatta Amalisa</span></div>
        <span className="location-chip">Based in Bali</span>
        <div className="profile-bottom">
          <strong>Arwanda Nur Fatta Amalisa</strong>
          <small>Virtual Assistant & Business Support Professional</small>
        </div>
      </div>
    </div>
    <div className="proof-strip">
      {["3+ Years Experience","International Clients","Remote Professional","English & Indonesian"].map(x=><div key={x}><Check size={12}/>{x}</div>)}
    </div>
  </section>;
}

function Services() {
  return <section id="services" className="section services">
    <div className="section-heading split">
      <div className="eyebrow">SERVICES</div>
      <div><h2>How I can support<br/>your business</h2><p>From keeping daily operations organized to managing digital systems and customer communication, I provide flexible support across the tasks that keep a business running.</p></div>
    </div>
    <div className="service-grid">
      {services.map(s=><article className="service-card" key={s.n}>
        <div className="card-number">{s.n}<ArrowUpRight size={13}/></div>
        <h3>{s.title}</h3><p>{s.desc}</p>
        <div className="tags">{s.tags.map(t=><Pill key={t}>{t}</Pill>)}</div>
      </article>)}
    </div>
  </section>;
}

function Portfolio() {
  return <section id="work" className="portfolio">
    <div className="section inner">
      <div className="section-heading split dark-heading">
        <div className="eyebrow">PORTFOLIO</div>
        <div><h2>Selected Work</h2><p>Selected projects across administration, digital operations, automation, customer support, and marketing.</p></div>
      </div>
      <div className="work-list">
        {work.map(([n,title,role,meta])=><div className="work-row" key={title}>
          <span className="work-number">{n}</span>
          <div className="work-title"><h3>{title}</h3><small>{role}</small></div>
          <div className="work-meta">{meta}</div>
          <a href="#contact">View Case Study <ArrowRight size={14}/></a>
        </div>)}
      </div>
    </div>
  </section>;
}

function EmailMarketing() {
  const steps=["Brief","Copy","Design","Setup","QA","Schedule","Track","Ready to send"];
  return <section className="section email-section">
    <div className="section-heading split">
      <div className="eyebrow">EMAIL MARKETING</div>
      <div><h2>Email marketing,<br/>from brief to send.</h2><p>I support brands with end-to-end email campaign execution — from copywriting and visual layout to ESP setup, QA testing, scheduling, and basic performance tracking.</p></div>
    </div>
    <div className="email-layout">
      <div className="campaign-card">
        <div className="campaign-head"><b>Campaign workspace</b><span>Screenshot placeholder</span></div>
        <div className="campaign-hero"></div><div className="skeleton long"></div><div className="skeleton short"></div>
        <div className="campaign-bottom"><div></div><div></div><div></div></div>
        <small>Real campaign imagery can be added here without invented results.</small>
      </div>
      <div className="process">
        <div className="eyebrow">A CLEAR, CAREFUL PROCESS</div>
        <div className="process-grid">{steps.map((x,i)=><div className={i===7?"ready":""} key={x}><small>0{i+1}</small><span>{i===7?"✣":""}</span><b>{x}</b></div>)}</div>
        <div className="eyebrow platforms-label">PLATFORMS</div>
        <div className="tags">{["MailerLite","Brevo","Mailchimp","Klaviyo","GoHighLevel"].map(x=><Pill key={x}>{x}</Pill>)}</div>
      </div>
    </div>
  </section>;
}

function Testimonials() {
  return <section className="section testimonials">
    <div className="section-heading split">
      <div className="eyebrow">CLIENT FEEDBACK</div>
      <div><h2>What Clients Say</h2><p>Real feedback from clients I've had the opportunity to support across different projects and business functions.</p></div>
    </div>
    <div className="quote-grid">
      {["DIGITAL OPERATIONS","BUSINESS SUPPORT","CLIENT COMMUNICATION"].map(x=><div className="quote-card" key={x}><Quote size={19}/><div className="feedback-placeholder"><FileText size={18}/><b>Client feedback screenshot</b><small>Ready for real feedback</small></div><div className="eyebrow">{x}</div></div>)}
    </div>
  </section>;
}

function Experience() {
  return <section id="experience" className="section experience">
    <div className="section-heading split">
      <div className="eyebrow">EXPERIENCE</div>
      <div><h2>Experience that goes<br/>beyond the title.</h2>
      <div className="experience-list">{experience.map(([company,loc,role,date,current])=><div className="experience-row" key={company}><span className="bullet">•</span><div><h3>{company}</h3><small>{loc}</small></div><div className="role">{role}</div><div className="date">{current&&<b>CURRENT</b>}{date}</div></div>)}</div>
      </div>
    </div>
  </section>;
}

function About() {
  return <section id="about" className="section about">
    <div className="about-top">
      <div className="eyebrow">ABOUT</div>
      <div className="about-content">
        <div className="about-card"><div className="card-top"><span>BALI, INDONESIA</span><span>REMOTE</span></div><strong>ANFA</strong><div className="about-card-bottom"><b>English & Indonesian</b><small>Working thoughtfully across teams, tools, and time zones.</small></div></div>
        <div className="about-copy"><h2>Detail-oriented by<br/>habit, not by title.</h2><p className="lead">I bring structure to busy workdays, communicate with care, and take ownership of the details that help a business run smoothly.</p><p>My experience spans executive assistance, customer service, digital operations, websites, CRM, automation, and marketing support. I adapt quickly, document clearly, and stay dependable when priorities shift.</p><div className="education"><div className="eyebrow">EDUCATION</div><b>Bachelor of English Language Literature & Letters</b><small>Universitas Terbuka · Denpasar, Indonesia<br/>Aug 2023 – Aug 2027 Expected · GPA 3.60 / 4.00</small></div></div>
      </div>
    </div>
    <div className="tools">
      <div><div className="eyebrow">TOOLS & TECHNOLOGY</div><h3>Comfortable in the systems<br/>behind the work.</h3></div>
      <div className="tool-columns">
        <ToolGroup title="Productivity" items={["Google Workspace","Microsoft Office","Trello","Canva"]}/>
        <ToolGroup title="CRM & Automation" items={["GoHighLevel","ManyChat","CRM systems","Google Sheets"]}/>
        <ToolGroup title="Website & E-commerce" items={["WordPress","Elementor","Shopify","Lovable"]}/>
        <ToolGroup title="Marketing" items={["MailerLite","Brevo","Mailchimp","Klaviyo"]}/>
        <ToolGroup title="AI" items={["AI-assisted research","Writing support","Workflow support"]}/>
      </div>
    </div>
  </section>;
}
function ToolGroup({title,items}) { return <div className="tool-group"><b>{title}</b><div className="tags">{items.map(x=><Pill key={x}>{x}</Pill>)}</div></div> }

function Recommendation() {
  return <section className="recommendation"><div className="section rec-inner"><div><div className="eyebrow">PROFESSIONAL RECOMMENDATION</div><h2>Trusted to support international<br/>clients.</h2><p>A professional recommendation letter from an Australian client is available for relevant opportunities.</p></div><a className="button light" href="mailto:arwandanva.amalisa@gmail.com?subject=Recommendation%20Letter%20Request">Recommendation Letter Available Upon Request <Mail size={13}/></a></div></section>;
}

function Contact() {
  const copy = async (text) => { try { await navigator.clipboard.writeText(text); } catch {} };
  return <section id="contact" className="contact"><div className="section contact-inner">
    <div className="contact-copy"><div className="eyebrow">CONTACT</div><h2>Need someone<br/>who can take<br/>things off<br/>your plate?</h2><p>Tell me what your team needs support with. I'll respond with thoughtful next steps for working together.</p>
      <div className="contact-links">
        <a href="mailto:arwandanva.amalisa@gmail.com"><Mail size={13}/>arwandanva.amalisa@gmail.com<button onClick={()=>copy("arwandanva.amalisa@gmail.com")}><Copy size={13}/></button></a>
        <a href="tel:+6285738645185"><Phone size={13}/>+62 857 3864 5185<button onClick={()=>copy("+62 857 3864 5185")}><Copy size={13}/></button></a>
        <a href="https://www.linkedin.com/in/arwanda-nur-fatta-amalisa/" target="_blank" rel="noreferrer"><Linkedin size={13}/>linkedin.com/in/arwanda-nur-fatta-amalisa<button onClick={()=>copy("https://www.linkedin.com/in/arwanda-nur-fatta-amalisa/")}><Copy size={13}/></button></a>
        <a href="https://workwitharwanda.my.id/" target="_blank" rel="noreferrer"><Globe size={13}/>workwitharwanda.my.id<button onClick={()=>copy("https://workwitharwanda.my.id/")}><Copy size={13}/></button></a>
      </div>
    </div>
    <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); const f=new FormData(e.currentTarget); const subject=encodeURIComponent(`Website inquiry from ${f.get("name")||"a potential client"}`); const body=encodeURIComponent(`Name: ${f.get("name")||""}\nCompany: ${f.get("company")||""}\nEmail: ${f.get("email")||""}\n\nHow can I help?\n${f.get("message")||""}`); window.location.href=`mailto:arwandanva.amalisa@gmail.com?subject=${subject}&body=${body}`;}}>
      <div className="form-row"><label>Your name<input name="name" placeholder="Name" required/></label><label>Company<input name="company" placeholder="Company or brand"/></label></div>
      <label>Email<input name="email" type="email" placeholder="you@company.com" required/></label>
      <label>How can I help?<textarea name="message" placeholder="Share a little about the support you need..." required></textarea></label>
      <button className="submit">Start a Conversation <ArrowRight size={14}/></button>
      <small>This opens your email app with your message ready to send.</small>
    </form>
  </div><footer><span>© 2026 Arwanda Nur Fatta Amalisa. All rights reserved.</span><a href="#home">Back to top ↑</a></footer></section>;
}

function App(){ return <><Header/><main><Hero/><Services/><Portfolio/><EmailMarketing/><Testimonials/><Experience/><About/><Recommendation/><Contact/></main></>; }

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
