import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code2, Database, Server, Globe, Languages } from 'lucide-react';
import { translations, Language } from './translations';

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
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl sm:text-2xl font-bold text-gray-900">
              jenswodrich.de
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {(['home', 'about', 'projects', 'skills', 'contact'] as const).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-medium transition-colors ${
                    activeSection === section
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {t.nav[section]}
                </button>
              ))}
              <button
                onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
                className="flex items-center gap-1 text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                <Languages size={18} />
                {language.toUpperCase()}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
                className="flex items-center gap-1 p-2 text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm"
              >
                <Languages size={18} />
                {language.toUpperCase()}
              </button>
              <button
                className="p-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {(['home', 'about', 'projects', 'skills', 'contact'] as const).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-2 font-medium rounded-lg transition-colors ${
                    activeSection === section
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {t.nav[section]}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
                {t.home.greeting} {t.home.name.split(' ')[0]}<br />{t.home.name.split(' ')[1]}
              </h1>
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-700 mb-6">
                {t.home.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                {t.home.description}
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                {t.home.cta}
              </button>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <Code2 size={80} strokeWidth={1.5} />
                  <p className="mt-4 text-sm">{t.home.photoAlt}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">{t.about.heading}</h2>

          <div className="bg-slate-950 rounded-2xl p-8 sm:p-12 font-mono text-sm sm:text-base overflow-x-auto shadow-2xl border border-slate-700">
            <pre className="text-green-400">
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

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-100 via-purple-100 to-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12">{t.projects.heading}</h2>

          <div className="bg-white rounded-2xl p-8 sm:p-12 font-mono text-sm sm:text-base overflow-x-auto shadow-2xl border border-purple-200">
            <pre className="text-purple-700">
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

      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12">{t.skills.heading}</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.skills.cards[0].title}</h3>
              <p className="text-gray-600 text-sm">
                {t.skills.cards[0].description}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.skills.cards[1].title}</h3>
              <p className="text-gray-600 text-sm">
                {t.skills.cards[1].description}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-indigo-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Server className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.skills.cards[2].title}</h3>
              <p className="text-gray-600 text-sm">
                {t.skills.cards[2].description}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-slate-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.skills.cards[3].title}</h3>
              <p className="text-gray-600 text-sm">
                {t.skills.cards[3].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">{t.contact.heading}</h2>
          <p className="text-xl text-gray-300 mb-12">
            {t.contact.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="mailto:jens@jenswodrich.de"
              className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <Mail size={20} />
              {t.contact.email}
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={20} />
              {t.contact.linkedin}
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors"
            >
              <Github size={20} />
              {t.contact.github}
            </a>
          </div>

          <div className="bg-slate-950 rounded-xl p-8 font-mono text-sm text-left overflow-x-auto border border-slate-700">
            <pre className="text-cyan-400">
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

      <footer className="bg-slate-950 text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
