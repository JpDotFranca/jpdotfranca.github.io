// gitprofile.config.js

const config = {
  github: {
    username: 'JpDotFranca', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['jpdotfranca.github.io'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'JpDotFranca',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    youtube: 'JpDotFranca',
    medium: 'JpDotFranca',
    dev: '',
    stackoverflow: '20514018/JpDotFranca', // format: userid/username
    website: '',
    phone: '+55 51 98536-8933',
    email: 'JpDotFranca@gmail.com',
  },
  resume: {
    fileUrl: 'https://drive.google.com/file/d/1pwBfjHJ9JDo1Wyt6_dJkCeJlVYNJCwY1/view?usp=share_link.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    '.NET',
    'Azure',
    'Azure Service Bus',
    'SQL Server',
    'Angular',
    'React.js',
    'Git',
    'Javascript',
    'HTML/CSS'
  ],
  experiences: [
    {
      company: 'Safe2Pay Intermediação de Pagamentos',
      position: '.NET Developer',
      from: 'Setembro 2020',
      to: 'Present',
      companyLink: 'https://safe2pay.com.br/',
    },
    {
      company: 'Safeweb Segurança da Informação',
      position: '.NET Developer',
      from: 'Novembro 2017',
      to: 'Setembro 2020',
      companyLink: 'https://safeweb.com.br/',
    },
  ],
  education: [
    {
      institution: 'PUCRS',
      degree: 'Graduação Sistemas de Informação',
      from: '2016',
      to: '2021',
    },
    {
      institution: 'UNISINOS',
      degree: 'Graduação Análise e Desenvolvimento de Sistemas (incompleto)',
      from: '2015',
      to: '2016',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'jpdotfranca', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'halloween',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
