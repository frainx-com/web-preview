import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Nosotros',
      href: getPermalink('/nosotros'),
    },

    {
      text: 'Servicios',
      links: [
        {
          text: 'Infraestructura y Cloud',
          href: getPermalink('/servicios/cloud-infrastructure'),
        },
        {
          text: 'DevOps y Automatización',
          href: getPermalink('/servicios/devops-automation'),
        },
        {
          text: 'Seguridad',
          href: getPermalink('/servicios/security'),
        },
        {
          text: 'Infraestructura de IA',
          href: getPermalink('/servicios/ai-infrastructure'),
        },
        {
          text: 'Páginas Web',
          href: getPermalink('/servicios/paginas-web'),
        },
      ],
    },

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
          text: 'Kubernetes',
          href: getPermalink('/aprende/kubernetes'),
        },
        {
          text: 'Redes',
          href: getPermalink('/aprende/networking'),
        },
        {
          text: 'DevOps',
          href: getPermalink('/aprende/devops'),
        },
        {
          text: 'Seguridad',
          href: getPermalink('/aprende/security'),
        },
        {
          text: 'Cloud',
          href: getPermalink('/aprende/cloud'),
        },
        {
          text: 'Infraestructura de IA',
          href: getPermalink('/aprende/ai-infrastructure'),
        },
        {
          text: 'LLMOps',
          href: getPermalink('/aprende/llmops'),
        },
        {
          text: 'Observabilidad',
          href: getPermalink('/aprende/observability'),
        },
        {
          text: 'Automatización',
          href: getPermalink('/aprende/automation'),
        },
      ],
    },

    {
      text: 'Actualidad',
      href: getBlogPermalink(),
    },

    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
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
