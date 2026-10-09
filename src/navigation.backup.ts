import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Aprende',
      links: [
        {
          text: 'Linux',
          href: getPermalink('/aprende/linux'),
        },
        {
          text: 'Docker',
          href: getPermalink('/aprende/docker'),
        },
        {
          text: 'Networking',
          href: getPermalink('/aprende/networking'),
        },
        {
          text: 'DevOps',
          href: getPermalink('/aprende/devops'),
        },
        {
          text: 'Security',
          href: getPermalink('/aprende/security'),
        },
        {
          text: 'Cloud',
          href: getPermalink('/aprende/cloud'),
        },
        {
          text: 'AI Infrastructure',
          href: getPermalink('/aprende/ai-infrastructure'),
        },
        {
          text: 'LLMOps',
          href: getPermalink('/aprende/llmops'),
        },
        {
          text: 'Observability',
          href: getPermalink('/aprende/observability'),
        },
        {
          text: 'Automation',
          href: getPermalink('/aprende/automation'),
        },
      ],
    },

    {
      text: 'Laboratorios',
      links: [
        {
          text: 'Todos los laboratorios',
          href: getPermalink('/laboratorios'),
        },
        {
          text: 'Proyectos prácticos',
          href: getPermalink('/proyectos'),
        },
        {
          text: 'GitHub',
          href: 'https://github.com/frainx-com',
          target: '_blank',
        },
      ],
    },

    {
      text: 'Recursos',
      links: [
        {
          text: 'Guías',
          href: getPermalink('/recursos/guias'),
        },
        {
          text: 'Cheat Sheets',
          href: getPermalink('/recursos/cheat-sheets'),
        },
        {
          text: 'Scripts',
          href: getPermalink('/recursos/scripts'),
        },
        {
          text: 'Configuraciones',
          href: getPermalink('/recursos/configuraciones'),
        },
        {
          text: 'Herramientas',
          href: getPermalink('/recursos/herramientas'),
        },
      ],
    },

    {
      text: 'Blog',
      links: [
        {
          text: 'Todos los artículos',
          href: getBlogPermalink(),
        },
      ],
    },

    {
      text: 'Servicios',
      links: [
        {
          text: 'Cloud & Infrastructure',
          href: getPermalink('/servicios/cloud-infrastructure'),
        },
        {
          text: 'DevOps & Automation',
          href: getPermalink('/servicios/devops-automation'),
        },
        {
          text: 'Security',
          href: getPermalink('/servicios/security'),
        },
        {
          text: 'AI Infrastructure',
          href: getPermalink('/servicios/ai-infrastructure'),
        },
      ],
    },
  ],

  actions: [
    {
      text: 'Explorar Labs',
      href: getPermalink('/laboratorios'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Aprende',
      links: [
        {
          text: 'Linux',
          href: getPermalink('/aprende/linux'),
        },
        {
          text: 'Docker',
          href: getPermalink('/aprende/docker'),
        },
        {
          text: 'DevOps',
          href: getPermalink('/aprende/devops'),
        },
        {
          text: 'Cloud',
          href: getPermalink('/aprende/cloud'),
        },
        {
          text: 'AI Infrastructure',
          href: getPermalink('/aprende/ai-infrastructure'),
        },
      ],
    },

    {
      title: 'Laboratorios',
      links: [
        {
          text: 'Laboratorios',
          href: getPermalink('/laboratorios'),
        },
        {
          text: 'Proyectos',
          href: getPermalink('/proyectos'),
        },
        {
          text: 'GitHub',
          href: 'https://github.com/frainx-com',
        },
      ],
    },

    {
      title: 'Recursos',
      links: [
        {
          text: 'Guías',
          href: getPermalink('/recursos/guias'),
        },
        {
          text: 'Cheat Sheets',
          href: getPermalink('/recursos/cheat-sheets'),
        },
        {
          text: 'Scripts',
          href: getPermalink('/recursos/scripts'),
        },
        {
          text: 'Herramientas',
          href: getPermalink('/recursos/herramientas'),
        },
      ],
    },

    {
      title: 'FRAINX',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'Servicios',
          href: getPermalink('/servicios'),
        },
        {
          text: 'Contacto',
          href: getPermalink('/contacto'),
        },
      ],
    },
  ],

  secondaryLinks: [
    {
      text: 'Términos',
      href: getPermalink('/terminos'),
    },
    {
      text: 'Privacidad',
      href: getPermalink('/privacidad'),
    },
  ],

  socialLinks: [
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/hola.frainx',
    },
    {
      ariaLabel: 'TikTok',
      icon: 'tabler:brand-tiktok',
      href: 'https://www.tiktok.com/@hola.frainx',
    },
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/company/frainx',
    },
    {
      ariaLabel: 'GitHub',
      icon: 'tabler:brand-github',
      href: 'https://github.com/frainx-com',
    },
    {
      ariaLabel: 'YouTube',
      icon: 'tabler:brand-youtube',
      href: 'https://www.youtube.com/@hola.frainx',
    },
  ],

  footNote: `
    © ${new Date().getFullYear()} FRAINX. Todos los derechos reservados.
  `,
};
