export type Language = 'de' | 'en';

interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
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
      title: string;
      description: string;
      technologies: string[];
      impact: string;
    }>;
  };
  skills: {
    heading: string;
    cards: Array<{
      title: string;
      description: string;
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
      projects: 'Projekte',
      skills: 'Kompetenzen',
      contact: 'Kontakt',
    },
    home: {
      greeting: 'Hallo, ich bin',
      name: 'Jens Wodrich.',
      title: 'Software Engineer',
      description:
        'Ich bin ein erfahrener Software-Ingenieur, der sich auf die Entwicklung skalierbarer und zuverlässiger Backend-Systeme konzentriert.',
      cta: 'Kontakt aufnehmen',
      cvDownload: 'Lebenslauf herunterladen',
      photoAlt: 'Professionelles Foto',
    },
    about: {
      heading: 'Über mich',
      name: 'Jens Wodrich',
      role: 'Software Engineer',
      location: 'Berlin, Deutschland',
      experience: {
        years: '10+',
        focus: [
          'Backend-Entwicklung',
          'Systemarchitektur',
          'Cloud-Infrastruktur',
          'Datenbankdesign',
        ],
      },
      expertise: {
        languages: ['JavaScript', 'TypeScript', 'Python', 'Java'],
        technologies: ['Node.js', 'React', 'PostgreSQL', 'Docker'],
        clouds: ['AWS', 'Google Cloud', 'Azure'],
        methodologies: ['Agile', 'Microservices', 'CI/CD'],
      },
      passion: 'Entwicklung robuster und skalierbarer Lösungen',
      availability: 'Offen für neue Möglichkeiten',
    },
    projects: {
      heading: 'Projekte',
      items: [
        {
          title: 'E-Commerce-Plattform',
          description:
            'Backend-Entwicklung für eine groß angelegte E-Commerce-Plattform mit über 1 Million täglichen Transaktionen',
          technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Kubernetes'],
          impact: 'Systemleistung um 300% verbessert',
        },
        {
          title: 'Zahlungsverarbeitungssystem',
          description:
            'Microservices-Architektur für sichere Zahlungsabwicklung mit Echtzeit-Betrugserkennung',
          technologies: ['Java', 'Spring Boot', 'Apache Kafka', 'MongoDB'],
          impact: 'Über 50 Mio. € an Transaktionen verarbeitet',
        },
        {
          title: 'Cloud-Migrationsprojekt',
          description:
            'Migration von Legacy-Systemen in die Cloud-Infrastruktur mit Zero-Downtime-Deployment-Strategie',
          technologies: ['AWS', 'Docker', 'Terraform', 'Jenkins'],
          impact: 'Infrastrukturkosten um 40% reduziert',
        },
      ],
    },
    skills: {
      heading: 'Technische Kompetenzen',
      cards: [
        {
          title: 'Backend-Entwicklung',
          description:
            'Expertise im Aufbau skalierbarer APIs und Microservices-Architektur',
        },
        {
          title: 'Datenbankdesign',
          description:
            'Erfahrung mit SQL- und NoSQL-Datenbanken sowie Optimierungsexpertise',
        },
        {
          title: 'Cloud-Infrastruktur',
          description: 'Erfahrung mit AWS, Azure und Google Cloud Plattformen',
        },
        {
          title: 'Systemarchitektur',
          description: 'Design robuster und wartbarer verteilter Systeme',
        },
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
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    home: {
      greeting: "Hi, I'm",
      name: 'Jens Wodrich.',
      title: 'Software Engineer',
      description:
        "I'm an experienced software engineer focused on building scalable and reliable backend systems.",
      cta: 'Get In Touch',
      cvDownload: 'Download CV',
      photoAlt: 'Professional Photo',
    },
    about: {
      heading: 'About Me',
      name: 'Jens Wodrich',
      role: 'Software Engineer',
      location: 'Berlin, Germany',
      experience: {
        years: '10+',
        focus: [
          'Backend Development',
          'System Architecture',
          'Cloud Infrastructure',
          'Database Design',
        ],
      },
      expertise: {
        languages: ['JavaScript', 'TypeScript', 'Python', 'Java'],
        technologies: ['Node.js', 'React', 'PostgreSQL', 'Docker'],
        clouds: ['AWS', 'Google Cloud', 'Azure'],
        methodologies: ['Agile', 'Microservices', 'CI/CD'],
      },
      passion: 'Building robust and scalable solutions',
      availability: 'Open to opportunities',
    },
    projects: {
      heading: 'Projects',
      items: [
        {
          title: 'E-Commerce Platform',
          description:
            'Backend and development for large-scale e-commerce platform handling 1M+ daily transactions',
          technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Kubernetes'],
          impact: 'Improved system performance by 300%',
        },
        {
          title: 'Payment Processing System',
          description:
            'Microservices architecture for secure payment processing with real-time fraud detection',
          technologies: ['Java', 'Spring Boot', 'Apache Kafka', 'MongoDB'],
          impact: 'Processed over €50M in transactions',
        },
        {
          title: 'Cloud Migration Initiative',
          description:
            'Led migration of legacy systems to cloud infrastructure with zero downtime deployment strategy',
          technologies: ['AWS', 'Docker', 'Terraform', 'Jenkins'],
          impact: 'Reduced infrastructure costs by 40%',
        },
      ],
    },
    skills: {
      heading: 'Technical Skills',
      cards: [
        {
          title: 'Backend Development',
          description:
            'Expertise in building scalable APIs and microservices architecture',
        },
        {
          title: 'Database Design',
          description:
            'Proficient in SQL and NoSQL databases with optimization expertise',
        },
        {
          title: 'Cloud Infrastructure',
          description: 'Experience with AWS, Azure, and Google Cloud platforms',
        },
        {
          title: 'System Architecture',
          description: 'Designing robust and maintainable distributed systems',
        },
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
