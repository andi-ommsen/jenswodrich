import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, ArrowDown, FileText, MapPin } from 'lucide-react';
import { translations, Language } from './translations';
import styles from './App.module.css';
const sections = ['home', 'about', 'projects', 'skills', 'diverses', 'contact'] as const;
type Section = (typeof sections)[number];
const titleAnimationFrames = ['·', '··', '···'] as const;

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<Section>('home');
    const [language, setLanguage] = useState<Language>('de');
    const [showJson, setShowJson] = useState(false);
    const navigationTarget = useRef<Section | null>(null);
    const scrollEndTimeout = useRef<number | undefined>(undefined);
    const t = translations[language];
    const de = language === 'de';
    const profile = { name: t.about.name, role: t.about.role, location: t.about.location,
        experience: t.about.experience, expertise: t.about.expertise,
        passion: t.about.passion, availability: t.about.availability };
    useEffect(() => { document.documentElement.lang = language; }, [language]);
    useEffect(() => {
        const sectionTitle = t.nav[activeSection];
        const finalTitle = `${sectionTitle} | Jens Wodrich`;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.title = finalTitle;
            return;
        }

        let frame = 0;
        document.title = `${sectionTitle} ${titleAnimationFrames[frame]} Jens Wodrich`;
        const intervalId = window.setInterval(() => {
            frame += 1;
            if (frame < titleAnimationFrames.length) {
                document.title = `${sectionTitle} ${titleAnimationFrames[frame]} Jens Wodrich`;
                return;
            }

            document.title = finalTitle;
            window.clearInterval(intervalId);
        }, 120);

        return () => window.clearInterval(intervalId);
    }, [activeSection, t.nav]);
    useEffect(() => {
        const handleScroll = () => {
            if (navigationTarget.current) {
                window.clearTimeout(scrollEndTimeout.current);
                scrollEndTimeout.current = window.setTimeout(() => {
                    navigationTarget.current = null;
                }, 150);
                return;
            }

            if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) {
                setActiveSection(sections[sections.length - 1]);
                return;
            }

            const position = window.scrollY + window.innerHeight / 3;
            for (const section of [...sections].reverse()) {
                const element = document.getElementById(section);
                if (element && position >= element.offsetTop) {
                    setActiveSection(section);
                    break;
                }
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.clearTimeout(scrollEndTimeout.current);
        };
    }, []);
    useEffect(() => {
        const escape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
                document.getElementById('menu-toggle')?.focus();
            }
        };
        if (isMenuOpen)
            window.addEventListener('keydown', escape);
        return () => window.removeEventListener('keydown', escape);
    }, [isMenuOpen]);
    const selectSection = (section: Section) => {
        window.clearTimeout(scrollEndTimeout.current);
        navigationTarget.current = section;
        scrollEndTimeout.current = window.setTimeout(() => {
            navigationTarget.current = null;
        }, 150);
        setActiveSection(section);
        setIsMenuOpen(false);
    };
    const heading = (number: string, title: string) => <div className={styles.sectionHeading}><span className={styles.sectionNumber}>{number} /</span><h2>{title}</h2></div>;
    return (<div className={styles.container}>
      <a className={styles.skipLink} href="#main">{de ? 'Zum Inhalt' : 'Skip to content'}</a>
      <header className={styles.header}>
        <div className={styles.navContainer}>
          <a href="#home" className={styles.logo} aria-label="jenswodrich.de"><span className={styles.monogram}>jw<span>.</span></span><span className={styles.wordmark}>jenswodrich.de</span></a>
          <nav id="navigation" aria-label={de ? 'Hauptnavigation' : 'Main navigation'} className={`${styles.navigation} ${isMenuOpen ? styles.navigationOpen : ''}`}>
            {sections.map(section => <a key={section} href={`#${section}`} onClick={() => selectSection(section)} aria-current={activeSection === section ? 'location' : undefined}>{t.nav[section]}</a>)}
          </nav>
          <div className={styles.controls}>
            <button className={styles.languageButton} onClick={() => setLanguage(de ? 'en' : 'de')} aria-label={de ? 'Switch to English' : 'Auf Deutsch wechseln'}><span className={de ? styles.selectedLanguage : ''}>DE</span><span aria-hidden="true">/</span><span className={!de ? styles.selectedLanguage : ''}>EN</span></button>
            <button id="menu-toggle" className={styles.menuButton} aria-controls="navigation" aria-expanded={isMenuOpen} aria-label={de ? (isMenuOpen ? 'Menü schließen' : 'Menü öffnen') : (isMenuOpen ? 'Close menu' : 'Open menu')} onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </header>
      <main id="main">
        <section id="home" className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}><span className={styles.smallLine}/>{t.home.title}</p>
            <h1>{t.home.name.split(' ')[0]}<br />{t.home.name.split(' ').slice(1).join(' ')}</h1>
            <p className={styles.intro}>{t.home.description}</p>
            <div className={styles.actions}><a href="#contact" className={styles.primaryButton}>{t.home.cta}<ArrowUpRight size={19}/></a><a href={`/files/jens_wodrich_cv_${language}.pdf`} download className={styles.download}><FileText size={17}/>{t.home.cvDownload}</a></div>
          </div>
          <figure className={styles.portrait}>
            <div className={styles.photoFrame}><img src="/images/jens-wodrich-2024.png" alt={t.home.photoAlt}/><span className={styles.photoCorner} aria-hidden="true">&lt;/&gt;</span></div>
            <figcaption><span><MapPin size={14}/>{t.about.location}</span><span className={styles.mono}> // hello, world.</span></figcaption>
          </figure>
          <div className={styles.heroFoot}><span className={styles.availability}><span />{t.about.availability}</span><a href="#projects">{t.projects.heading}<ArrowDown size={16}/></a></div>
        </section>

        <section id="about" className={styles.section}>
          {heading('01', t.about.heading)}
          <div className={styles.profilePanel}>
            <div className={styles.panelToolbar}><span className={styles.mono}>jens.profile<span className={styles.muted}>.json</span></span><div className={styles.viewToggle} role="group" aria-label={de ? 'Profilansicht' : 'Profile view'}><button aria-pressed={!showJson} aria-controls="profile-content" onClick={() => setShowJson(false)}>{de ? 'Profil' : 'Profile'}</button><button aria-pressed={showJson} aria-controls="profile-content" onClick={() => setShowJson(true)}>{'{ }'} JSON</button></div></div>
            <div id="profile-content">
              {showJson ? <pre className={styles.json}><code>{JSON.stringify(profile, null, 2)}</code></pre> : <div className={styles.profileGrid}>
                <div className={styles.experience}><strong>{t.about.experience.years}</strong><span>{de ? 'Jahre Erfahrung' : 'Years of experience'}</span><p>{t.about.passion}</p></div>
                <div className={styles.profileDetails}><div className={styles.profileIdentity}><h3>{t.about.name}</h3><p>{t.about.role} · {t.about.location}</p></div><ul className={styles.focusList}>{t.about.experience.focus.map(focus => <li key={focus}>{focus}</li>)}</ul><dl className={styles.expertise}>{Object.entries(t.about.expertise).map(([key, values]) => <div key={key}><dt>{({ languages: de ? 'Sprachen' : 'Languages', technologies: de ? 'Technologien' : 'Technologies', clouds: 'Cloud', methodologies: de ? 'Methoden' : 'Methods' })[key]}</dt><dd>{values.join(' · ')}</dd></div>)}</dl><p className={styles.profileAvailability}>{t.about.availability}</p></div>
              </div>}
            </div>
          </div>
        </section>

        <section id="projects" className={styles.section}>
          {heading('02', t.projects.heading)}
          <div className={styles.career}>{t.projects.items.map((station, index) => <article className={styles.station} key={station.company}><div className={styles.stationMeta}><span className={styles.mono}>{station.period}</span><span className={styles.stationIndex} aria-hidden="true">0{index + 1}</span></div><div className={styles.stationContent}><h3>{station.company}</h3><p className={styles.role}>{station.role}</p><div className={styles.projectList}>{station.projects.map(project => <div key={project.name} className={styles.project}><h4>{project.name}</h4><p>{project.description}</p><ul className={styles.tags}>{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul></div>)}</div></div></article>)}</div>
        </section>

        <section id="skills" className={styles.section}>
          {heading('03', t.skills.heading)}
          <div className={styles.skillsGrid}>{t.skills.cards.map((card, index) => <article className={styles.skill} key={card.title}><span className={styles.skillSymbol} aria-hidden="true">{['{ }', '[ ]', '</>', '~/'][index]}</span><h3>{card.title}</h3><p>{card.description}</p></article>)}</div>
        </section>

        <section id="diverses" className={`${styles.section} ${styles.interestsSection}`}>
          {heading('04', t.diverses.heading)}
          <div className={styles.interests}>{t.diverses.items.map((item, index) => <article key={item.label}><span className={styles.interestNumber} aria-hidden="true">0{index + 1}</span><h3>{item.label}</h3><p>{item.description}</p></article>)}</div>
        </section>

        <section id="contact" className={styles.contactSection}>
          <div className={styles.contactInner}><div><p className={styles.contactComment}>{t.contact.codeComment}</p><h2>{t.contact.heading}<span aria-hidden="true">.</span></h2><p className={styles.contactSubtitle}>{t.contact.subtitle}</p><a href="mailto:info@jenswodrich.de" className={styles.email}>{t.contact.email}<ArrowUpRight /></a><div className={styles.socials}><a href="https://www.linkedin.com/in/jens-wodrich-3446a7102/" target="_blank" rel="noopener noreferrer">{t.contact.linkedin}<ArrowUpRight size={15}/></a><a href="https://www.xing.com/profile/Jens_Wodrich/cv" target="_blank" rel="noopener noreferrer">{t.contact.xing}<ArrowUpRight size={15}/></a></div></div><div className={styles.contactCode}><span className={styles.mono}>contact.ts</span><pre><code>{`const contact = {
  email: "info@jenswodrich.de",
  location: "${t.about.location}",
  available: true,
  preferredContact: "email"
};`}</code></pre></div></div>
        </section>
      </main>
      <footer className={styles.footer}><p>{t.footer.copyright}</p><a href="#home" aria-label={de ? 'Zurück nach oben' : 'Back to top'}>↑</a></footer>
    </div>);
}
export default App;
