import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code2, Database, Server, Globe, Languages, FileText, User, Briefcase, Wrench, Heart } from 'lucide-react';
import { translations, Language } from './translations';
import styles from './App.module.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState<Language>('de');

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'diverses', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.navContent}>
            <div className={styles.logo}>
              jenswodrich.de
            </div>

            <div className={styles.desktopMenu}>
              {(['home', 'about', 'projects', 'skills', 'diverses', 'contact'] as const).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`${styles.navButton} ${activeSection === section ? styles.active : ''}`}
                >
                  {t.nav[section]}
                </button>
              ))}
              <button
                onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
                className={styles.languageButton}
              >
                <Globe size={18} />
                {language.toUpperCase()}
              </button>
            </div>

            <div className={styles.mobileControls}>
              <button
                onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
                className={styles.languageButtonMobile}
              >
                <Globe size={18} />
                {language.toUpperCase()}
              </button>
              <button
                className={styles.menuButton}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuContent}>
              {(['home', 'about', 'projects', 'skills', 'diverses', 'contact'] as const).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`${styles.mobileNavButton} ${activeSection === section ? styles.active : ''}`}
                >
                  {t.nav[section]}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className={styles.homeSection}>
        <video
          className={styles.homeBgVideo}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/scrollingcode.mp4" type="video/mp4" />
        </video>
        <div className={styles.homeBgOverlay} />
        <div className={styles.sectionContainer}>
          <div className={styles.homeGrid}>
            <div>
              <h1 className={styles.homeTitle}>
                {t.home.name}
              </h1>
              <h2 className={styles.homeSubtitle}>
                {t.home.title}
              </h2>
              <p className={styles.homeDescription}>
                {t.home.description}
              </p>
              <div className={styles.homeActions}>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={styles.primaryButton}
                >
                  {t.home.cta}
                </button>
                <a
                  href={`/files/jens_wodrich_cv_${language}.pdf`}
                  download
                  className={styles.secondaryButton}
                >
                  <FileText size={20} />
                  {t.home.cvDownload}
                </a>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <img
                  src="/images/jens-wodrich-2024.png"
                  alt={t.home.photoAlt}
                  className={styles.profileImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={styles.aboutSection}>
        <div className={styles.sectionContainer}>
          <h2 className={`${styles.sectionHeading} ${styles.aboutHeading}`}>
            <User size={40} className="text-green-400" />
            {t.about.heading}
          </h2>

          <div className={styles.codeBlock}>
            <pre className={styles.codeBlockGreen}>
              <code>{`{
  "name": "${t.about.name}",
  "role": "${t.about.role}",
  "location": "${t.about.location}",
  "experience": {
    "years": "${t.about.experience.years}",
    "focus": [
      "${t.about.experience.focus[0]}",
      "${t.about.experience.focus[1]}",
      "${t.about.experience.focus[2]}",
      "${t.about.experience.focus[3]}"
    ]
  },
  "expertise": {
    "languages": [${t.about.expertise.languages.map(l => `"${l}"`).join(', ')}],
    "technologies": [${t.about.expertise.technologies.map(tech => `"${tech}"`).join(', ')}],
    "clouds": [${t.about.expertise.clouds.map(c => `"${c}"`).join(', ')}],
    "methodologies": [${t.about.expertise.methodologies.map(m => `"${m}"`).join(', ')}]
  },
  "passion": "${t.about.passion}",
  "availability": "${t.about.availability}"
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section id="projects" className={styles.projectsSection}>
        <div className={styles.sectionContainer}>
          <h2 className={`${styles.sectionHeading} ${styles.projectsHeading}`}>
            <Briefcase size={40} />
            {t.projects.heading}
          </h2>

          <div className={styles.projectsGrid}>
            {t.projects.items.map((station, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <Briefcase className={styles.projectIcon} size={28} />
                  <div>
                    <h3 className={styles.projectTitle}>{station.company}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.125rem' }}>
                      {station.period}
                    </p>
                  </div>
                </div>
                <p className={styles.projectDescription}>{station.role}</p>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {station.projects.map((proj, projIndex) => (
                    <li key={projIndex}>
                      <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '0.125rem' }}>
                        {proj.name}
                      </p>
                      <p style={{ fontSize: '0.8125rem', color: '#6b7280', marginBottom: '0.25rem' }}>
                        {proj.description}
                      </p>
                      <div className={styles.projectTechnologies}>
                        {proj.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className={styles.techBadge}>{tech}</span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className={styles.skillsSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionHeading}>
            <Wrench size={40} className="text-blue-600" />
            {t.skills.heading}
          </h2>

          <div className={styles.skillsGrid}>
            <div className={`${styles.skillCard} ${styles.skillCardBlue}`}>
              <div className={`${styles.skillIcon} ${styles.skillIconBlue}`}>
                <Code2 size={24} />
              </div>
              <h3 className={styles.skillTitle}>{t.skills.cards[0].title}</h3>
              <p className={styles.skillDescription}>
                {t.skills.cards[0].description}
              </p>
            </div>

            <div className={`${styles.skillCard} ${styles.skillCardPurple}`}>
              <div className={`${styles.skillIcon} ${styles.skillIconPurple}`}>
                <Database size={24} />
              </div>
              <h3 className={styles.skillTitle}>{t.skills.cards[1].title}</h3>
              <p className={styles.skillDescription}>
                {t.skills.cards[1].description}
              </p>
            </div>

            <div className={`${styles.skillCard} ${styles.skillCardIndigo}`}>
              <div className={`${styles.skillIcon} ${styles.skillIconIndigo}`}>
                <Server size={24} />
              </div>
              <h3 className={styles.skillTitle}>{t.skills.cards[2].title}</h3>
              <p className={styles.skillDescription}>
                {t.skills.cards[2].description}
              </p>
            </div>

            <div className={`${styles.skillCard} ${styles.skillCardSlate}`}>
              <div className={`${styles.skillIcon} ${styles.skillIconSlate}`}>
                <Globe size={24} />
              </div>
              <h3 className={styles.skillTitle}>{t.skills.cards[3].title}</h3>
              <p className={styles.skillDescription}>
                {t.skills.cards[3].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="diverses" className={styles.diversesSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionHeading}>
            <Heart size={40} className="text-blue-600" />
            {t.diverses.heading}
          </h2>
          <div className={styles.diversesGrid}>
            {t.diverses.items.map((item, index) => (
              <div key={index} className={styles.diversesItem}>
                <span className={styles.diversesLabel}>{item.label}</span>
                <p className={styles.diversesDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <h2 className={styles.contactHeading}>{t.contact.heading}</h2>
          <p className={styles.contactSubtitle}>
            {t.contact.subtitle}
          </p>

          <div className={styles.contactLinks}>
            <a
              href="mailto:info@jenswodrich.de"
              className={`${styles.contactLink} ${styles.contactLinkEmail}`}
            >
              <Mail size={20} />
              {t.contact.email}
            </a>
            <a
              href="https://www.linkedin.com/in/jens-wodrich-3446a7102/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactLink} ${styles.contactLinkLinkedin}`}
            >
              <Linkedin size={20} />
              {t.contact.linkedin}
            </a>
            <a
              href="https://www.xing.com/profile/Jens_Wodrich/cv"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactLink} ${styles.contactLinkXing}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.93c-.004-.006-.004-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.08.346.02.537l2.36 4.073c.003.011.003.016 0 .021L1.86 16.051c-.099.188-.093.381 0 .529.085.142.25.22.465.22h3.445c.517 0 .75-.328.937-.657l3.744-6.484-2.386-4.155c-.172-.315-.434-.664-.962-.664H3.648v.001z" />
              </svg>
              {t.contact.xing}
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactLink} ${styles.contactLinkGithub}`}
            >
              <Github size={20} />
              {t.contact.github}
            </a>
          </div>

          <div className={styles.contactCodeBlock}>
            <pre className={styles.contactCode}>
              <code>{`const contact = {
  email: "info@jenswodrich.de",
  location: "${t.about.location}",
  available: true,
  preferredContact: "email"
};

${t.contact.codeComment}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
