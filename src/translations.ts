export type Language = 'de' | 'en';

interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    diverses: string;
    contact: string;
  };
  home: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    cta: string;
    cvDownload: string;
    photoAlt: string;
  };
  about: {
    heading: string;
    name: string;
    role: string;
    location: string;
    experience: {
      years: string;
      focus: string[];
    };
    expertise: {
      languages: string[];
      technologies: string[];
      clouds: string[];
      methodologies: string[];
    };
    passion: string;
    availability: string;
  };
  projects: {
    heading: string;
    items: Array<{
      company: string;
      period: string;
      role: string;
      projects: Array<{
        name: string;
        description: string;
        technologies: string[];
      }>;
    }>;
  };
  skills: {
    heading: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
  };
  diverses: {
    heading: string;
    items: Array<{
      emoji: string;
      label: string;
    }>;
  };
  contact: {
    heading: string;
    subtitle: string;
    email: string;
    linkedin: string;
    github: string;
    codeComment: string;
  };
  footer: {
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  de: {
    nav: {
      home: 'Start',
      about: 'Über mich',
      projects: 'Berufliche Stationen',
      skills: 'Kompetenzen',
      diverses: 'Diverses',
      contact: 'Kontakt',
    },
    home: {
      greeting: 'Hallo, ich bin',
      name: 'Jens Wodrich.',
      title: 'Software Entwickler',
      description:
        'Ich bin ein erfahrener Software-Ingenieur, der sich auf die Entwicklung skalierbarer und zuverlässiger Backend-Systeme konzentriert. Programmieren ist lebenslanges Lernen. Diese Aussage bildet für mich gleichzeitig die Freude und den Schmerz an meiner Berufung ab. Ich könnte mir nichts Besseres vorstellen.',
      cta: 'Kontakt aufnehmen',
      cvDownload: 'Lebenslauf herunterladen',
      photoAlt: 'Professionelles Foto',
    },
    about: {
      heading: 'Über mich',
      name: 'Jens Wodrich',
      role: 'Software Entwickler',
      location: 'Hamburg, Deutschland',
      experience: {
        years: '20+',
        focus: [
          'Backend-Entwicklung',
          'Systemarchitektur',
          'Cloud-Infrastruktur',
          'Datenbankdesign',
        ],
      },
      expertise: {
        languages: ['PHP', 'Go', 'JavaScript'],
        technologies: ['Symfony','Laravel','PostgreSQL','Docker'],
        clouds: ['Google Cloud'],
        methodologies: ['Agile', 'Microservices', 'CI/CD'],
      },
      passion: 'Entwicklung robuster und skalierbarer Lösungen',
      availability: 'Offen für neue Möglichkeiten',
    },
    projects: {
      heading: 'Berufliche Stationen',
      items: [
        {
          company: 'E-Kontor24 / Skon AG',
          period: '07.2018 – heute',
          role: 'Backendentwickler',
          projects: [
            { name: 'praemienkontor.de – REST-API', description: 'Entwicklung einer Backend-Api auf Basis von Symfony. Weiterentwicklung geforderter Features.', technologies: ['Symfony', 'PHP', 'PostgreSQL', 'Docker'] },
            { name: 'Point of Sale Tool', description: 'Entwicklung der Backend-Api in Go lang.', technologies: ['Go', 'PostgreSQL', 'Docker'] },
            { name: 'Internes Tracking-Tool', description: 'Entwicklung einer Backend-Api auf Basis von Laravel.', technologies: ['Laravel', 'PHP', 'MySQL', 'Docker'] },
          ],
        },
        {
          company: 'Body Attack Sports Nutrition',
          period: '07.2012 – 07.2018',
          role: 'Webentwickler',
          projects: [
            { name: 'body-attack.de Online Shop', description: 'Entwicklung eines Shop und Kundensystems in PHP, HTML, CSS.', technologies: ['PHP', 'HTML', 'CSS', 'MySQL'] },
            { name: 'Intranet', description: 'Weiterentwicklung des Intranets in ColdFusion.', technologies: ['ColdFusion'] },
            { name: 'Lagerverwaltungssoftware', description: 'Entwicklung eines Lagerverwaltungs- und Logistiksystems in PHP.', technologies: ['PHP', 'MySQL'] },
          ],
        },
        {
          company: 'Selbstständig',
          period: '2006 – 06.2012',
          role: 'Webentwickler & IT-Trainer',
          projects: [
            { name: 'Webentwicklung', description: 'Webseitenkonzeption und -erstellung.', technologies: ['PHP', 'HTML', 'CSS'] },
            { name: 'IT-Training', description: 'Trainertätigkeiten.', technologies: [] },
            { name: 'Grafikdesign', description: 'Diverse Grafikaufträge.', technologies: ['Photoshop', 'Illustrator'] },
          ],
        },
      ],
    },
    skills: {
      heading: 'Kompetenzen',
      cards: [
        {
          title: 'Backend-Entwicklung',
          description:
            'PHP, Symfony, Laravel und Go für robuste Server-Anwendungen und REST-APIs',
        },
        {
          title: 'Datenbanken',
          description:
            'SQL und PostgreSQL – Datenbankdesign, -optimierung und komplexe Abfragen',
        },
        {
          title: 'Frontend & Design',
          description:
            'JavaScript, CSS und HTML sowie Grafiktools wie Photoshop und Illustrator',
        },
        {
          title: 'DevOps & Tooling',
          description:
            'Docker, Git und Composer für effiziente Entwicklungs- und Deployment-Prozesse',
        },
      ],
    },
    diverses: {
      heading: 'Diverses',
      items: [
        { emoji: '🎵', label: 'Musikliebhaber (Punkrock)' },
        { emoji: '🏍️', label: 'Zweiradfanatiker (mit Motor)' },
        { emoji: '🖤', label: 'Tattoosammler' },
      ],
    },
    contact: {
      heading: 'Kontakt aufnehmen',
      subtitle:
        'Interesse an einer Zusammenarbeit? Lassen Sie uns verbinden und besprechen, wie ich bei Ihrem Projekt helfen kann.',
      email: 'E-Mail senden',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      codeComment: '// Kontaktieren Sie mich gerne!',
    },
    footer: {
      copyright: '© 2026 Jens Wodrich. Erstellt mit React, TypeScript & Tailwind CSS.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Career',
      skills: 'Skills',
      diverses: 'Interests',
      contact: 'Contact',
    },
    home: {
      greeting: "Hi, I'm",
      name: 'Jens Wodrich.',
      title: 'Software Engineer',
      description:
        "I'm an experienced software engineer focused on building scalable and reliable backend systems. Programming is lifelong learning. This statement reflects both the joy and the pain of my vocation for me. I couldn't imagine anything better.",
      cta: 'Get In Touch',
      cvDownload: 'Download CV',
      photoAlt: 'Professional Photo',
    },
    about: {
      heading: 'About Me',
      name: 'Jens Wodrich',
      role: 'Software Engineer',
      location: 'Hamburg, Germany',
      experience: {
        years: '20+',
        focus: [
          'Backend Development',
          'System Architecture',
          'Database Design',
          'Cloud Infrastructure',
        ],
      },
      expertise: {
        languages: ['PHP', 'Go', 'JavaScript'],
        technologies: ['Symfony','Laravel','PostgreSQL','Docker'],
        clouds: ['Google Cloud'],
        methodologies: ['Agile', 'Microservices', 'CI/CD'],
      },
      passion: 'Building robust and scalable solutions',
      availability: 'Open to opportunities',
    },
    projects: {
      heading: 'Career',
      items: [
        {
          company: 'E-Kontor24 / Skon AG',
          period: '07.2018 – present',
          role: 'Backend Developer',
          projects: [
            { name: 'praemienkontor.de – REST API', description: 'Developed a backend API based on Symfony. Optimized existing systems.', technologies: ['Symfony', 'PHP', 'PostgreSQL', 'Docker'] },
            { name: 'Point of Sale Tool', description: 'Developed and conceptualized a backend API in Go Lang.', technologies: ['Go', 'PostgreSQL', 'Docker'] },
            { name: 'Internal Tracking Tool', description: 'Developed and conceptualized a backend API based on Laravel.', technologies: ['Laravel', 'PHP', 'MySQL', 'Docker'] },
          ],
        },
        {
          company: 'Body Attack Sports Nutrition',
          period: '07.2012 – 07.2018',
          role: 'Web Developer',
          projects: [
            { name: 'body-attack.de Online Shop', description: 'Developed and conceptualized the shop and CMS in PHP, HTML, CSS.', technologies: ['PHP', 'HTML', 'CSS', 'MySQL'] },
            { name: 'Intranet', description: 'Developed and conceptualized the intranet in ColdFusion.', technologies: ['ColdFusion'] },
            { name: 'Warehouse Management Software', description: 'Developed and conceptualized warehouse-management and logistic-system in PHP.', technologies: ['PHP', 'MySQL'] },
          ],
        },
        {
          company: 'Freelance',
          period: '2006 – 06.2012',
          role: 'Web Developer & IT Trainer',
          projects: [
            { name: 'Web Development', description: 'Website conception and development.', technologies: ['PHP', 'HTML', 'CSS'] },
            { name: 'IT Training', description: 'Training activities.', technologies: [] },
            { name: 'Graphic Design', description: 'Various graphic design projects.', technologies: ['Photoshop', 'Illustrator'] },
          ],
        },
      ],
    },
    skills: {
      heading: 'Skills',
      cards: [
        {
          title: 'Backend Development',
          description:
            'PHP, Symfony, Laravel and Go for robust server applications and REST APIs',
        },
        {
          title: 'Databases',
          description:
            'SQL and PostgreSQL – database design, optimization and complex queries',
        },
        {
          title: 'Frontend & Design',
          description:
            'JavaScript, CSS and HTML plus design tools like Photoshop and Illustrator',
        },
        {
          title: 'DevOps & Tooling',
          description:
            'Docker, Git and Composer for efficient development and deployment processes',
        },
      ],
    },
    diverses: {
      heading: 'Interests',
      items: [
        { emoji: '🎵', label: 'Music Enthusiast (Punkrock)' },
        { emoji: '🏍️', label: 'Bike Enthusiast (with motor)' },
        { emoji: '🖤', label: 'Tattoo Collector' },
      ],
    },
    contact: {
      heading: 'Get In Touch',
      subtitle:
        "Interested in working together? Let's connect and discuss how I can help with your project.",
      email: 'Email Me',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      codeComment: '// Feel free to reach out!',
    },
    footer: {
      copyright: '© 2026 Jens Wodrich. Built with React, TypeScript & Tailwind CSS.',
    },
  },
};
