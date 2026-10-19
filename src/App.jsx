import { useEffect, useState } from 'react'

import './App.css'

import SIHSection from './components/SIHSection';

import GRISection from './components/GRISection'

const projects = [

  {

    number: '01',

    title: 'MediKiosk',

    category: 'HEALTHCARE TECHNOLOGY',

    description:

      'A healthcare kiosk interface designed to make medical information and document access easier to navigate.',

    tags: ['React', 'JavaScript', 'API Integration'],

    href: 'https://github.com/Abh1ck/MediKiosk',

    visual: 'medi',

  },

  {

    number: '02',

    title: '60-Day DSA Challenge',

    category: 'PROBLEM SOLVING',

    description:

      'A record of consistent coding practice focused on strengthening data structures, algorithms, and problem-solving.',

    tags: ['C++', 'DSA', 'GeeksforGeeks'],

    href: 'https://github.com/Abh1ck/DSA-GFG-60',

    visual: 'dsa',

  },

  {

    number: '03',

    title: 'Developer Portfolio',

    category: 'WEB DEVELOPMENT',

    description:

      'A personal portfolio built to present my projects, technical interests, and journey as a computer science student.',

    tags: ['React', 'Vite', 'CSS'],

    href: 'https://github.com/Abh1ck',

    visual: 'portfolio',

  },

]

const skillGroups = [
  { title: 'Languages', number: '01', skills: ['Python', 'C++', 'Java · fundamentals', 'JavaScript', 'SQL · fundamentals'] },
  { title: 'Python & Data', number: '02', skills: ['NumPy', 'Pandas', 'SQLite3', 'Matplotlib', 'Seaborn'] },
  { title: 'Frontend', number: '03', skills: ['HTML', 'CSS', 'React', 'Vite', 'Bootstrap', 'React Router', 'Responsive design'] },
  { title: 'Tools & Core', number: '04', skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'DSA', 'Problem solving'] },
]

const milestones = [

  {

    number: '01',

    title: 'GRI — Co-Lead',

    description: 'Supporting student coordination and activities with the Centre for Grassroots Research and Innovation.',

  },

  {

    number: '02',

    title: '60-Day DSA Challenge',

    description: 'Built consistency by practising coding problems and documenting the journey on GitHub.',

  },

  {

    number: '03',

    title: 'Hackathons & project work',

    description: 'Exploring practical problem-solving through team projects, prototypes, and collaborative events.',

  },

]

const focusAreas = [

  { title: 'Frontend development', text: 'Building clean, responsive interfaces with attention to usability.' },

  { title: 'Problem solving', text: 'Improving my logic and programming foundations one problem at a time.' },

  { title: 'AI / ML', text: 'Exploring how intelligent systems can solve useful real-world problems.' },

]

function Arrow() {

  return <span aria-hidden="true" className="arrow">↗</span>

}

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  const [activeSection, setActiveSection] = useState('home')

  const [formStatus, setFormStatus] = useState('')

  useEffect(() => {

    const sections = ['home', 'about', 'work', 'services', 'skills', 'milestones', 'gri', 'sih', 'contact']

    const onScroll = () => {

      const marker = window.scrollY + 140

      let current = 'home'

      sections.forEach((id) => {

        const section = document.getElementById(id)

        if (section && section.offsetTop <= marker) current = id

      })

      setActiveSection(current)

    }

    window.addEventListener('scroll', onScroll, { passive: true })

    onScroll()

    return () => window.removeEventListener('scroll', onScroll)

  }, [])

  useEffect(() => {

    const nodes = document.querySelectorAll('[data-reveal]')

    if (!('IntersectionObserver' in window)) {

      nodes.forEach((node) => node.classList.add('is-visible'))

      return

    }

    const observer = new IntersectionObserver(

      (entries) => entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add('is-visible')

          observer.unobserve(entry.target)

        }

      }),

      { threshold: 0.12 },

    )

    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()

  }, [])

  const closeMenu = () => setMenuOpen(false)

  
function handleContactSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.currentTarget);

  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!name || !email || !message) {
    setFormStatus("Please fill in all three fields.");
    return;
  }

  const recipient = "abhishekkumaramba89@gmail.com";
  const subject = `Portfolio message from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

  const gmailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    `&to=${encodeURIComponent(recipient)}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  const emailWindow = window.open(
    gmailUrl,
    "_blank",
    "noopener,noreferrer"
  );

  if (emailWindow) {
    setFormStatus("Gmail opened. Review your message and click Send.");
  } else {
    setFormStatus("Please allow pop-ups for this site and try again.");
  }
}


  return (

    <div className="site-shell" id="home">

      <div className="ambient ambient-one" aria-hidden="true" />

      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">

        <a className="brand" href="#home" onClick={closeMenu}>ABHISHEK<span>.</span></a>

        <button

          className="menu-toggle"

          type="button"

          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}

          aria-expanded={menuOpen}

          onClick={() => setMenuOpen(!menuOpen)}

        >

          <span /><span />

        </button>

        <nav className={`nav-menu ${menuOpen ? 'nav-menu-open' : ''}`} aria-label="Main navigation">

          {[

            ['home', 'Home'],

            ['work', 'Works'],

            ['services', 'Focus'],

            ['skills', 'Skills'],

            ['milestones', 'Milestones'],

            ['gri', 'GRI'],
            ['sih', 'SIH'],

          ].map(([id, label]) => (

            <a

              key={id}

              className={activeSection === id ? 'nav-link nav-link-active' : 'nav-link'}

              href={`#${id}`}

              onClick={closeMenu}

            >

              {label}

            </a>

          ))}

          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact me <Arrow /></a>

        </nav>

      </header>

      <main>

        <section className="hero section-wrap">

          <div className="hero-copy" data-reveal>

            <p className="eyebrow"><span className="status-dot" /> COMPUTER SCIENCE STUDENT · BENGALURU, INDIA</p>

            <h1>Exploring AI/ML.<br />Building with <span>code & curiosity.</span></h1>

            <p className="hero-description">

              I’m Abhishek Kumar, a second-year B.Tech Computer Science student at JAIN (Deemed-to-be University), Bengaluru. I’m strengthening my Python, data, and problem-solving foundations while building practical software projects and exploring AI/ML.

            </p>

            <div className="hero-actions">

              <a className="button button-green" href="#work">Explore my work <Arrow /></a>

              <a className="button button-outline" href="/images/resume.pdf" target="_blank" rel="noreferrer">View resume ↗</a>
              <a className="button button-outline" href="/images/resume.pdf" download="Abhishek-Kumar-Resume.pdf">Download CV ↓</a>

            </div>

            <div className="hero-socials">

              <a href="https://github.com/Abh1ck" target="_blank" rel="noreferrer">GitHub <Arrow /></a>

              <a href="https://www.linkedin.com/in/abhishek-kumar-b67742380" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>

              <a href="mailto:abhishekkumaramba89@gmail.com">Email <Arrow /></a>

            </div>

          </div>

          <div className="hero-visual" data-reveal>

            <div className="hero-image-glow" />

            <div className="hero-image-card">

              <div className="image-topline"><span>PROFILE / 2026</span><span>01 — AK</span></div>

              <div className="hero-photo-wrap">

                <img src="/images/abhishek.png" alt="Portrait of Abhishek Kumar" className="hero-photo" />

                <div className="photo-gradient" />

                <div className="photo-caption">

                  <span className="photo-caption-small">CURRENTLY LEARNING</span>

                  <strong>Build. Learn. Repeat.</strong>

                </div>

              </div>

              <div className="image-bottomline"><span>SOFTWARE · WEB · AI/ML</span><span className="online-mark">AVAILABLE TO COLLABORATE</span></div>

            </div>

            <div className="orbit-label orbit-label-top">C++ · PYTHON · REACT · JAVASCRIPT</div>

            <div className="floating-badge"><span>✳</span><div><strong>Curious mind</strong><small>Always learning</small></div></div>

          </div>

          <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>

        </section>

        <section className="about section-wrap section-block" id="about">

          <div className="section-kicker" data-reveal><span>01 / ABOUT ME</span><span>A little introduction</span></div>

          <div className="about-grid">

            <h2 data-reveal>Curious by nature.<br /><span>Driven to build.</span></h2>

            <div className="about-copy" data-reveal>

              <p>I’m pursuing a B.Tech in Computer Science and Engineering at JAIN (Deemed-to-be University), Bengaluru. I like learning by building, testing ideas, and improving through feedback.</p>

              <p>Right now, I’m strengthening my programming and DSA foundations while exploring frontend development and AI/ML. I’m looking for opportunities to contribute to meaningful projects and learn with other developers.</p>

              <a className="inline-link" href="#contact">Let’s connect <Arrow /></a>

            </div>

          </div>

          <div className="stats-row" data-reveal>

            <div><strong>01</strong><span>Build mindset</span></div>

            <div><strong>∞</strong><span>Things to learn</span></div>

            <div><strong>100%</strong><span>Curiosity driven</span></div>

          </div>

        </section>

        <section className="work section-wrap section-block" id="work">

          <div className="section-kicker" data-reveal><span>02 / SELECTED WORK</span><span>Ideas into practice</span></div>

          <div className="section-heading" data-reveal>

            <h2>View my <span>work.</span></h2>

            <p>Projects and learning milestones that reflect what I’m building and practising.</p>

          </div>

          <div className="project-grid">

            {projects.map((project) => (

              <article className="project-card" key={project.number} data-reveal>

                <a className={`project-art project-art-${project.visual}`} href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}>

                  <div className="project-art-top"><span>{project.category}</span><span>{project.number} <Arrow /></span></div>

                  {project.visual === 'medi' && <div className="medi-visual"><span className="medi-cross">+</span><span className="medi-circle">M</span><span className="medi-line medi-line-one" /><span className="medi-line medi-line-two" /><span className="medi-line medi-line-three" /></div>}

                  {project.visual === 'dsa' && <div className="code-visual"><span>while (learning) {'{'}</span><strong>solve<span>();</span></strong><span>{'}'} <i>// one problem at a time</i></span><div className="code-bars"><i /><i /><i /><i /><i /></div></div>}

                  {project.visual === 'portfolio' && <div className="portfolio-visual"><span>AK<span className="green-dot">.</span></span><div><i /><i /><i /></div><b>CREATIVE<br />DEVELOPER<br /><em>IN PROGRESS</em></b></div>}

                  <span className="project-open"><Arrow /></span>

                </a>

                <div className="project-info">

                  <p className="project-category">{project.category}</p>

                  <h3>{project.title}</h3>

                  <p className="project-description">{project.description}</p>

                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>

                  <a className="inline-link" href={project.href} target="_blank" rel="noreferrer">Explore repository <Arrow /></a>

                </div>

              </article>

            ))}

          </div>

        </section>

        <section className="focus section-wrap section-block" id="services">

          <div className="section-kicker" data-reveal><span>03 / WHAT I’M INTO</span><span>Areas I’m growing in</span></div>

          <div className="focus-grid">

            <div className="focus-intro" data-reveal>

              <h2>My interests<span>.</span></h2>

              <p>I’m learning by doing, and these are the areas I’m currently investing time in.</p>

              <a className="inline-link" href="#contact">Work on something together <Arrow /></a>

            </div>

            <div className="focus-list">

              {focusAreas.map((area, index) => (

                <article className="focus-item" key={area.title} data-reveal>

                  <span className="focus-index">0{index + 1}</span>

                  <div><h3>{area.title}</h3><p>{area.text}</p></div>

                  <Arrow />

                </article>

              ))}

            </div>

          </div>

        </section>

        <section className="skills section-wrap section-block" id="skills">

          <div className="section-kicker" data-reveal><span>04 / MY TOOLKIT</span><span>Learning every day</span></div>

          <div className="section-heading" data-reveal>

            <h2>Skills in <span>progress.</span></h2>

            <p>My current toolkit across programming, data analysis, frontend development, and core computer science.</p>

          </div>

          <div className="skills-grid">

            {skillGroups.map((group) => (

              <article className="skill-card" key={group.title} data-reveal>

                <div className="skill-card-top"><span>{group.number}</span><span>✳</span></div>

                <h3>{group.title}</h3>

                <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>

              </article>

            ))}

          </div>

        </section>

        <section className="milestones section-wrap section-block" id="milestones">

          <div className="section-kicker" data-reveal><span>05 / MILESTONES</span><span>Experience beyond code</span></div>

          <div className="milestones-grid">

            <div data-reveal><h2>Small steps.<br /><span>Real progress.</span></h2><p>Learning also happens through teamwork, consistency, and taking responsibility.</p></div>

            <div className="milestone-list">

              {milestones.map((item) => (

                <article className="milestone-item" key={item.number} data-reveal>

                  <span>{item.number}</span><div><h3>{item.title}</h3><p>{item.description}</p></div><Arrow />

                </article>

              ))}

            </div>

          </div>

        </section>

        
         
<GRISection />
        <SIHSection />



        <section className="contact section-wrap section-block" id="contact">
          <div className="section-kicker" data-reveal><span>07 / GET IN TOUCH</span><span>Have an idea? Let’s talk.</span></div>
          <div className="section-heading" data-reveal>
            <h2>Let’s build something <span>useful.</span></h2>
            <p>Have a project, opportunity, or idea to discuss? Send me a message.</p>
          </div>
          
<form
  className="contact-form"
  onSubmit={handleContactSubmit}
  data-reveal
>
  <label htmlFor="contact-name">Name</label>
  <input
    id="contact-name"
    name="name"
    type="text"
    autoComplete="name"
    required
  />

  <label htmlFor="contact-email">Email</label>
  <input
    id="contact-email"
    name="email"
    type="email"
    autoComplete="email"
    required
  />

  <label htmlFor="contact-message">Message</label>
  <textarea
    id="contact-message"
    name="message"
    rows="5"
    required
  />

  <button className="button button-green" type="submit">
    Open email draft ↗
  </button>

  {formStatus && (
    <p role="status" className="form-status">
      {formStatus}
    </p>
  )}
</form>

        </section>

      </main>

      <footer className="site-footer section-wrap">

        <a className="brand" href="#home">ABHISHEK<span>.</span></a>

        <p>Designed with purpose. Built with curiosity.</p>

        <a className="back-top" href="#home">Back to top ↑</a>

        <small>© {new Date().getFullYear()} Abhishek Kumar. Built with React.</small>

      </footer>

    </div>

  )

}

export default App
