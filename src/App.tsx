import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code2, Database, Server, Globe, Languages, FileText, User, FolderOpen, Wrench } from 'lucide-react';
import { translations, Language } from './translations';
import styles from './App.module.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState<Language>('de');

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
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
              {(['home', 'about', 'projects', 'skills', 'contact'] as const).map((section) => (
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
              {(['home', 'about', 'projects', 'skills', 'contact'] as const).map((section) => (
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
        <div className={styles.sectionContainer}>
          <div className={styles.homeGrid}>
            <div>
              <h1 className={styles.homeTitle}>
                {t.home.greeting} {t.home.name.split(' ')[0]}<br />{t.home.name.split(' ')[1]}
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
                  href="/cv.pdf"
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
                <div className={styles.imageInner}>
                  <div
                    className={styles.imageFrame}
                    style={{ backgroundImage: 'url(/public/images/jens-wodrich-2024.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
                  </div>
                </div>
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
            <FolderOpen size={40} className="text-purple-700" />
            {t.projects.heading}
          </h2>

          <div className={styles.projectsCodeBlock}>
            <pre className={styles.projectsCode}>
              <code>{`<projects>
${t.projects.items.map((project, index) => `  <project id="${index + 1}">
    <title>${project.title}</title>
    <description>
      ${project.description}
    </description>
    <technologies>
${project.technologies.map(tech => `      <tech>${tech}</tech>`).join('\n')}
    </technologies>
    <impact>${project.impact}</impact>
  </project>`).join('\n\n')}
</projects>`}</code>
            </pre>
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

      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <h2 className={styles.contactHeading}>{t.contact.heading}</h2>
          <p className={styles.contactSubtitle}>
            {t.contact.subtitle}
          </p>

          <div className={styles.contactLinks}>
            <a
              href="mailto:jens@jenswodrich.de"
              className={`${styles.contactLink} ${styles.contactLinkEmail}`}
            >
              <Mail size={20} />
              {t.contact.email}
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactLink} ${styles.contactLinkLinkedin}`}
            >
              <Linkedin size={20} />
              {t.contact.linkedin}
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
  email: "jens@jenswodrich.de",
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
