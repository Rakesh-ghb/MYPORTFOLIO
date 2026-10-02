import { useEffect, useState } from 'react'
import Calculator from './Calculator.jsx'
import Weather from './Weather.jsx'
import {
  contact,
  projects,
  practice,
  experience,
  skills,
  education
} from './data.js'

const APPS = {
  '#/calculator': {
    title: 'Calculator',
    note: 'A React calculator. Type on your keyboard or tap the keys.',
    el: <Calculator />
  },

  '#/weather': {
    title: 'Weather App',
    note: 'Live weather and a seven-day forecast for any city.',
    el: <Weather />
  },
}

const Chips = ({ items }) => (
  <ul className="chips">
    {items.map((s) => (
      <li key={s}>{s}</li>
    ))}
  </ul>
)

function Home() {
  return (
    <>
      {/* =========================
          HERO SECTION
          ========================= */}
      <section className="hero">

        <div className="wrap hero-grid">

          {/* =========================
              LEFT - PROFILE PHOTO
              ========================= */}
          <div className="hero-profile">

            <div className="profile-frame">

              <img
                src="/linkedin.jpg"
                alt="Rakesh Gorre"
                className="profile-photo"
              />

            </div>

            <h2>Rakesh Gorre</h2>

            <p>Java Full Stack Developer</p>

            <p>Hyderabad, India</p>

          </div>


          {/* =========================
              CENTER - INTRODUCTION
              ========================= */}
          <div className="hero-content">

            <div className="badge-scroll">
              <p className="badge">
                <i aria-hidden="true" />
                Open to full time roles and freelance work
              </p>
            </div>

            <h1>
              Rakesh
              <br />
              Gorre
            </h1>

            <p className="role">
              Java Full Stack Developer. I build secure Spring Boot back
              ends and React front ends, and ship them live.
            </p>

            <div className="btn-row">

              <a
                className="btn btn-primary"
                href="#projects"
              >
                See my projects
              </a>

              <a
                className="btn btn-ghost"
                href="./Rakesh-Gorre-Resume.pdf"
                download
              >
                Download resume
              </a>

              <a
                className="btn btn-ghost"
                href="#contact"
              >
                Contact me
              </a>

            </div>

            <dl className="stats">

              <div>
                <dt>Internships</dt>
                <dd>2</dd>
              </div>

              <div>
                <dt>Live projects</dt>
                <dd>3</dd>
              </div>

              <div>
                <dt>MCA graduate</dt>
                <dd>2026</dd>
              </div>

            </dl>

          </div>


          {/* =========================
              RIGHT - STACK
              ========================= */}
          <dl
            className="spec"
            aria-label="Stack at a glance"
          >

            {[
              [
                'Role',
                'Java Full Stack Developer'
              ],

              [
                'Back end',
                'Java 21, Spring Boot 3, Spring Security, JWT'
              ],

              [
                'Front end',
                'React, JavaScript, Bootstrap'
              ],

              [
                'Data',
                'MySQL, PostgreSQL'
              ],

              [
                'Payments',
                'Razorpay'
              ],

              [
                'Ships to',
                'Railway and Vercel'
              ],

              [
                'Based in',
                'Hyderabad, India'
              ]

            ].map(([k, v]) => (

              <div key={k}>

                <dt>{k}</dt>

                <dd>{v}</dd>

              </div>

            ))}

          </dl>

        </div>

      </section>


      {/* =========================
          MAIN CONTENT
          ========================= */}
      <div className="wrap">


        {/* =========================
            PROJECTS
            ========================= */}
        <section id="projects">

          <h2>
            Selected projects
          </h2>

          <p className="lead">
            Two full stack Java projects and two React apps you can use right now.
          </p>

          <div className="bento">

            {projects.map((p) => (

              <article
                key={p.title}
                className={
                  'project clean-project-card' +
                  (p.featured ? ' featured' : '')
                }
              >

                <div className="project-main">

                  <div className="project-heading">

                    <span className="project-label">
                      {p.featured ? 'FEATURED PROJECT' : 'PROJECT'}
                    </span>

                    <h3>
                      {p.title}
                    </h3>

                    <p className="muted">
                      {p.tag}
                    </p>

                  </div>

                  <ul className="project-points">

                    {p.points.map((x) => (

                      <li key={x}>
                        {x}
                      </li>

                    ))}

                  </ul>

                </div>


                <div className="project-bottom">

                  <Chips items={p.stack} />

                  <div className="project-hover-actions">

                    {p.links.map((l) => (

                      <a
                        key={l.label}
                        href={l.href}
                        {...(
                          l.internal
                            ? {}
                            : {
                                target: '_blank',
                                rel: 'noopener noreferrer'
                              }
                        )}
                      >
                        {l.label}
                      </a>

                    ))}

                  </div>

                </div>

              </article>

            ))}

          </div>

          <h3 className="sub">
            Practice projects
          </h3>

          <ul className="practice">

            {practice.map(([n, t]) => (

              <li key={n}>

                <b>{n}</b>

                <span>{t}</span>

              </li>

            ))}

          </ul>

        </section>


        {/* =========================
            EXPERIENCE
            ========================= */}
        <section id="experience">

          <h2>
            Experience
          </h2>

          <ol className="timeline">

            {experience.map((e) => (

              <li key={e.role}>

                <h3>
                  {e.role}
                </h3>

                <p className="muted">
                  {e.org}. {e.when}.
                </p>

                <ul>

                  {e.points.map((x) => (

                    <li key={x}>
                      {x}
                    </li>

                  ))}

                </ul>

              </li>

            ))}

          </ol>

        </section>


        {/* =========================
            SKILLS
            ========================= */}
        <section id="skills">

          <h2>
            Skills
          </h2>

          <div className="skills">

            {Object.entries(skills).map(([k, v]) => (

              <div
                key={k}
                className="card"
              >

                <h3>
                  {k}
                </h3>

                <Chips items={v} />

              </div>

            ))}

          </div>

        </section>


        {/* =========================
            EDUCATION
            ========================= */}
        <section id="education">

          <h2>
            Education
          </h2>

          <div className="scroll">

            <table>

              <thead>

                <tr>
                  <th>Qualification</th>
                  <th>Institution</th>
                  <th>Years</th>
                  <th>Result</th>
                </tr>

              </thead>

              <tbody>

                {education.map((r) => (

                  <tr key={r[0]}>

                    {r.map((c) => (

                      <td key={c}>
                        {c}
                      </td>

                    ))}

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>


        {/* =========================
            CERTIFICATES
            ========================= */}
        <section id="certificates">

          <h2>
            Certificates & Internship
          </h2>

          <p className="lead">
            Professional certificates and internship documents — open any document directly.
          </p>

          <div className="certificate-grid">

            {/* ZIDIO DEVELOPMENT */}
            <article className="certificate-card zidio-card">

              <div className="certificate-icon">
                ZD
              </div>

              <div className="certificate-content">

                <p className="certificate-type">
                  ZIDIO DEVELOPMENT
                </p>

                <h3>
                  Java Full Stack
                </h3>

                <p className="muted">
                  Internship · Experience · Training
                </p>

                <p>
                  Java Full Stack internship, experience, and training credentials from Zidio Development.
                </p>

                <div className="zidio-options">

                  <a
                    href="/Zidio-Internship-Completion-Certificate-ZID-V-CC2360F8915D.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="zidio-option"
                  >
                    <span className="zidio-option-icon">📜</span>
                    <span>
                      <strong>Internship Certificate</strong>
                      <small>Open certificate →</small>
                    </span>
                  </a>

                  <a
                    href="/Zidio-Experience-Certificate-ZID-V-23EB022A7EDF.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="zidio-option"
                  >
                    <span className="zidio-option-icon">💼</span>
                    <span>
                      <strong>Experience Certificate</strong>
                      <small>Open certificate →</small>
                    </span>
                  </a>

                  <a
                    href="/Zidio-Training-Completion-Certificate-ZID-V-49EBCB1B7B5B.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="zidio-option"
                  >
                    <span className="zidio-option-icon">🎓</span>
                    <span>
                      <strong>Training Certificate</strong>
                      <small>Open certificate →</small>
                    </span>
                  </a>

                </div>

              </div>

            </article>

 {/* AI DATA ASSOCIATE */}
         <a
  href="/Rakesh%20%283%29%20%281%29.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="certificate-link"
>
  <article className="certificate-card">

    <div className="certificate-icon">
      AI
    </div>

    <div className="certificate-content">

      <p className="certificate-type">
        INTERNSHIP
      </p>

      <h3>
        AI Data Associate – Intern
      </h3>

      <p className="muted">
        The AI School · Learning Paths Technologies LLP
      </p>

      <p>
        Internship offer for the AI Data Associate position,
        commencing 10 June 2026.
      </p>

      <div className="certificate-details">

        <span>
          <b>Position</b>
          AI Data Associate
        </span>

        <span>
          <b>Location</b>
          Hitech City, Hyderabad
        </span>

        <span>
          <b>Start Date</b>
          10 June 2026
        </span>

      </div>

      <span className="certificate-open">
        📄 Open Internship Letter →
      </span>

    </div>

  </article>
</a>

          </div>

        </section>

        {/* =========================
            CONTACT
            ========================= */}
        <section id="contact">

          <div className="contact">

            <div>

              <h2>
                Let's work together
              </h2>

              <p>
                I'm looking for a Full Stack Java Developer role
                and open to freelance projects. Send a message and
                I'll reply quickly.
              </p>

            </div>


            <dl>

              <dt>
                Email
              </dt>

              <dd>

                <a href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>

              </dd>


              <dt>
                Phone
              </dt>

              <dd>

                <a href={`tel:${contact.phone}`}>
                  {contact.phoneText}
                </a>

              </dd>


              <dt>
                GitHub
              </dt>

              <dd>

                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener"
                >
                  github.com/rakesh-ghb
                </a>

              </dd>


              <dt>
                LinkedIn
              </dt>

              <dd>

                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener"
                >
                  Gorre Rakesh
                </a>

              </dd>

            </dl>

          </div>

        </section>

      </div>
    </>
  )
}


export default function App() {

  /* =========================
      HASH ROUTING
      ========================= */

  const [hash, setHash] = useState(
    window.location.hash
  )

  useEffect(() => {

    const on = () => {
      setHash(window.location.hash)
    }

    window.addEventListener(
      'hashchange',
      on
    )

    return () => {

      window.removeEventListener(
        'hashchange',
        on
      )

    }

  }, [])


  /* =========================
      THEME
      ========================= */

  const [theme, setTheme] = useState(() =>

    document.documentElement.dataset.theme ||

    (
      window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
        ? 'dark'
        : 'light'
    )

  )

  useEffect(() => {

    document.documentElement.dataset.theme =
      theme

  }, [theme])


  const app = APPS[hash]


  /* =========================
      SCROLL HANDLING
      ========================= */

  useEffect(() => {

    if (app) {

      window.scrollTo(0, 0)

    } else if (hash.length > 1) {

      document
        .querySelector(hash)
        ?.scrollIntoView()

    }

  }, [hash, app])


  return (
    <>

      {/* =========================
          HEADER
          ========================= */}
      <header className="site">

        <div className="wrap bar">

          <a
            className="brand"
            href="#"
          >
            Rakesh Gorre
          </a>


          <nav aria-label="Primary">

            {[
              'projects',
              'experience',
              'skills',
              'education',
              'certificates',
              'contact'
            ].map((s) => (

              <a
                key={s}
                href={`#${s}`}
              >
                {s[0].toUpperCase() + s.slice(1)}
              </a>

            ))}

          </nav>


          <button
            className="theme"
            onClick={() =>
              setTheme(
                theme === 'dark'
                  ? 'light'
                  : 'dark'
              )
            }
            aria-label={`Switch to ${
              theme === 'dark'
                ? 'light'
                : 'dark'
            } theme`}
          >

            {theme === 'dark'
              ? 'Light'
              : 'Dark'}

          </button>

        </div>

      </header>


      {/* =========================
          MAIN
          ========================= */}
      <main>

        {app ? (

          <div className="wrap app-page">

            <a
              className="back"
              href="#projects"
            >
              Back to projects
            </a>

            <h1>
              {app.title}
            </h1>

            <p className="muted">
              {app.note}
            </p>

            {app.el}

          </div>

        ) : (

          <Home />

        )}

      </main>


      {/* =========================
          FOOTER
          ========================= */}
      <footer className="site">

        <p>
          &copy; 2026 Rakesh Gorre.
          Hyderabad, India.
        </p>

      </footer>

    </>
  )
}