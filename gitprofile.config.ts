// gitprofile.config.ts — filled from CV (Oct 19, 2025)

const CONFIG = {
  github: {
    username: 'matin-mb', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/<USER>/<USER>.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/<USER>/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    external: {
      header: 'Selected Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'CORE-3D: Context-Aware Open-Vocabulary Retrieval by Embeddings in 3D',
          description:
            'First-author work on context-aware open-vocabulary object retrieval in reconstructed 3D scenes; under review at ICLR 2026 (2025).',
          imageUrl:
            'https://raw.githubusercontent.com/matin-mb/matin-mb.github.io/main/Pics/CORE3D-Edited.jpg',
          link: 'https://arxiv.org/abs/2509.24528',
        },
        {
          title: 'Autonomous Robotic Agent: 3D Mapping, Exploration, Retrieval',
          description:
            'Natural-language commands for 3D mapping and open-vocabulary retrieval; simulation in Webots and real-world deployment on a 4-wheeled robot with stereo vision.',
          // imageUrl:
          //   'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          imageUrl: 
            'https://raw.githubusercontent.com/matin-mb/matin-mb.github.io/main/Pics/Robot_Setup_Edited.jpg',
          link: 'https://github.com/matin-mb',
        },
        {
          title: 'Neural Decoding of Long-term Cortical Spiking (INL, EPFL)',
          description:
            'Transformer-based model predicting cursor velocity from motor/premotor cortical spike trains; collaboration at EPFL INL.',
          imageUrl:
            'https://raw.githubusercontent.com/matin-mb/matin-mb.github.io/main/Pics/Neural Decoding1.jpg',
          link: 'https://github.com/matin-mb/Neural-Decoding-Project',
        },
        // {
        //   title: 'Private Training and Machine Unlearning (SISA)',
        //   description:
        //     'Implementation and evaluation of SISA; compared MIA accuracy between standard and privacy-enhanced training pipelines.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://github.com/matin-mb',
        // },
        // {
        //   title: 'Benchmark Framework for Computational Efficiency in Trajectory Prediction',
        //   description:
        //     'benchmarking framework for trajectory prediction that evaluates both accuracy (ADE/FDE, miss/collision rates) and computational efficiency latency, GPU memory, scalability vs. batch size, energy)',
        //   imageUrl:
        //     'https://raw.githubusercontent.com/matin-mb/matin-mb.github.io/main/Pics/Mips.png',
        //   link: 'https://github.com/matin-mb/MIPS-Datapath-Implementation',
        // },
        {
          title: 'MIPS Datapath: Single- & Multi-Cycle (ModelSim)',
          description:
            'Designed and verified MIPS single- and multi-cycle datapaths supporting core R/I-type, branches, and jumps.',
          imageUrl:
            'https://raw.githubusercontent.com/matin-mb/matin-mb.github.io/main/Pics/Mips.png',
          link: 'https://github.com/matin-mb/MIPS-Datapath-Implementation',
        },
        {
          title: 'Head Football (C++ Minigame)',
          description:
            'C++ implementation inspired by HeadSoccer; course project (Basic Programming).',
          imageUrl:
            'https://raw.githubusercontent.com/matin-mb/matin-mb.github.io/main/Pics/HeadFootball.png',
          link: 'https://github.com/matin-mb/HeadFootball',
        },
      ],
    },

    github: {
      display: false, // Display GitHub projects?
      header: 'GitHub Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed.
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['matin-mb/Minnesota_BlockChain_HWs', 'matin-mb/resources'],
      },
    },
  },
  seo: { title: 'Matin M.babaei', description: 'B.Sc. Electrical Engineering @ Sharif | Quantization & Robotics | EPFL INL Research Intern', imageURL: '' },
  social: {
    linkedin: 'matinbabaei',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: 'https://github.com/matin-mb',
    phone: '+989120851827',
    email: 'mm.mirzababaei@ee.sharif.edu',
  },
  resume: {
    fileUrl: '/assets/CV_Mohammad_Matin_Mirzababaei.pdf', // Place your CV at this path in the repo to enable the button.
  },
  experiences: [
    {
      company: 'EPFL — Integrated Neurotechnologies Laboratory (INL)',
      position: 'Research Intern',
      from: 'July 2025',
      to: 'September 2025',
      companyLink: 'https://www.epfl.ch',
    },
    {
      company: 'Sharif University of Technology — STNL',
      position: 'Research Assistant',
      from: 'April 2024',
      to: 'Present',
      companyLink: 'https://www.sharif.edu',
    },
    {
      company: 'Kavoshcom Company',
      position: 'Smart Machines — Summer Intern',
      from: 'July 2024',
      to: 'October 2024',
      companyLink: 'https://kavoshcom.com',
    },
    {
      company: 'Teaching — Sharif University of Technology',
      position: 'Head TA / TA (Engineering Math; AI; Eng. Probability & Statistics; OOP)',
      from: 'February 2023',
      to: 'Present',
      companyLink: 'https://www.sharif.edu',
    },
    {
      company: 'University of Minnesota (Remote)',
      position: 'Teaching Assistant — Foundations of Blockchain',
      from: 'July 2023',
      to: 'January 2024',
      companyLink: 'https://twin-cities.umn.edu',
    },
  ],
  // skills: [
  //   'Python',
  //   'C/C++',
  //   'Java',
  //   'Matlab',
  //   'SQL',
  //   'Verilog',
  //   'MIPS Assembly',
  //   'PyTorch',
  //   'Machine Learning',
  //   'Robotics',
  //   'Webots',
  //   'Simulink',
  //   'ModelSim',
  //   'Xilinx ISE',
  //   'LTspice',
  //   'PSpice',
  //   'COMSOL',
  //   'EEGLAB',
  //   'PowerWorld',
  //   'LaTeX',
  //   'Photoshop',
  //   'Git',
  // ],
  certifications: [
    // Add certificates here if desired
  ],
  educations: [
    {
      institution: 'Sharif University of Technology',
      degree: 'B.Sc. Electrical Engineering (Top 5% — GPA 19.3/20)',
      from: '2021',
      to: 'Present',
    },
    {
      institution: 'Kamal High School',
      degree: 'Mathematics & Physics (GPA 19.99/20)',
      from: '2014',
      to: '2021',
    },
  ],
  // publications: [
  //   {
  //     title: 'CORE-3D: Context-Aware Open-Vocabulary Retrieval by Embeddings in 3D',
  //     conferenceName: 'ICLR (under review, 2026 — submitted 2025)',
  //     journalName: '',
  //     authors: 'Mohammad Matin Mirzababaei (First Author)',
  //     link: 'https://arxiv.org/abs/2509.24528',
  //     description:
  //       'Context-aware retrieval in 3D scenes reconstructed from stereo mapping; combines open-vocabulary alignment with 3D embeddings. Under review at ICLR 2026 (2025).',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/matin-mb"
      target="_blank"
      rel="noreferrer"
    >❤️`,

  enablePWA: true,
};

export default CONFIG;
