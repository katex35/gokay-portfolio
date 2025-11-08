import {
  Contact,
  Education,
  Experience,
  Project,
  ProjectCategory,
  ProficiencyLevel,
  SocialPlatform,
  Technology,
  TechnologyCategory,
} from '@/types';

// Personal Information
export const PERSONAL_INFO = {
  name: 'Gökay Şahin',
  title: 'Frontend Developer',
  subtitle: 'Frontend Developer & Web3 Specialist',
  bio: 'Frontend Developer specializing in React, Next.js, and Web3 technologies. I create modern, responsive web applications with exceptional user experiences. Expert in TypeScript, Tailwind CSS, and blockchain integration. Passionate about building innovative digital solutions that make a difference.',
  email: 'gokay285@gmail.com', 
  location: 'Turkey, Izmir',
  resumeUrl: '/resume.pdf',
  status: 'Available for freelance projects and full-time opportunities',
};

// Social Links
export const CONTACT: Contact = {
  email: PERSONAL_INFO.email,
  location: PERSONAL_INFO.location,
  socialLinks: [
    {
      platform: SocialPlatform.GITHUB,
      url: 'https://github.com/katex35', 
      username: 'katex35',
    },
    {
      platform: SocialPlatform.LINKEDIN,
      url: 'https://linkedin.com/in/gokaysahin35', 
      username: 'gokaysahin35',
    },
    // more social links
  ],
};

// Technologies
export const TECHNOLOGIES: Technology[] = [
  // Programming Languages
  {
    id: 'javascript',
    name: 'JavaScript',
    category: TechnologyCategory.PROGRAMMING_LANGUAGE,
    proficiency: ProficiencyLevel.ADVANCED,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: TechnologyCategory.PROGRAMMING_LANGUAGE,
    proficiency: ProficiencyLevel.INTERMEDIATE,
  },
  {
    id: 'python',
    name: 'Python',
    category: TechnologyCategory.PROGRAMMING_LANGUAGE,
    proficiency: ProficiencyLevel.INTERMEDIATE,
  },
  {
    id: 'java',
    name: 'Java',
    category: TechnologyCategory.PROGRAMMING_LANGUAGE,
    proficiency: ProficiencyLevel.INTERMEDIATE,
  },
  {
    id: 'cpp',
    name: 'C++',
    category: TechnologyCategory.PROGRAMMING_LANGUAGE,
    proficiency: ProficiencyLevel.INTERMEDIATE,
  },

  // Frameworks & Libraries
  {
    id: 'react',
    name: 'React',
    category: TechnologyCategory.FRAMEWORK,
    proficiency: ProficiencyLevel.ADVANCED,
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: TechnologyCategory.FRAMEWORK,
    proficiency: ProficiencyLevel.INTERMEDIATE,
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: TechnologyCategory.FRAMEWORK,
    proficiency: ProficiencyLevel.INTERMEDIATE,
  },
  {
    id: 'express',
    name: 'Express.js',
    category: TechnologyCategory.FRAMEWORK,
    proficiency: ProficiencyLevel.INTERMEDIATE,
  },

  // Databases
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: TechnologyCategory.DATABASE,
    proficiency: ProficiencyLevel.INTERMEDIATE,
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: TechnologyCategory.DATABASE,
    proficiency: ProficiencyLevel.BEGINNER,
  },

  // Tools
  {
    id: 'git',
    name: 'Git',
    category: TechnologyCategory.TOOL,
    proficiency: ProficiencyLevel.INTERMEDIATE,
  },
  {
    id: 'docker',
    name: 'Docker',
    category: TechnologyCategory.TOOL,
    proficiency: ProficiencyLevel.BEGINNER,
  },
  // Web3 & Blockchain
  {
    id: 'solana',
    name: 'Solana',
    category: TechnologyCategory.FRAMEWORK,
    proficiency: ProficiencyLevel.INTERMEDIATE,
  },
  {
    id: 'wagmi',
    name: 'Wagmi',
    category: TechnologyCategory.FRAMEWORK,
    proficiency: ProficiencyLevel.INTERMEDIATE,
  },
  {
    id: 'ethers',
    name: 'Ethers.js',
    category: TechnologyCategory.FRAMEWORK,
    proficiency: ProficiencyLevel.INTERMEDIATE,
  },
  // UI Libraries
  {
    id: 'tailwindcss',
    name: 'TailwindCSS',
    category: TechnologyCategory.FRAMEWORK,
    proficiency: ProficiencyLevel.ADVANCED,
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    category: TechnologyCategory.FRAMEWORK,
    proficiency: ProficiencyLevel.INTERMEDIATE,
  },
  {
    id: 'sanity',
    name: 'Sanity CMS',
    category: TechnologyCategory.FRAMEWORK,
    proficiency: ProficiencyLevel.INTERMEDIATE,
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: TechnologyCategory.DATABASE,
    proficiency: ProficiencyLevel.INTERMEDIATE,
  },
];

// Education
export const EDUCATION: Education[] = [
  {
    id: 'computer-engineering',
    title: 'Bachelor of Science in Computer Engineering',
    description: 'Currently pursuing a comprehensive education in computer science and engineering principles.',
    institution: 'Your University Name', // Replace with your university
    degree: 'Bachelor of Science',
    field: 'Computer Engineering',
    startDate: new Date('2022-09-01'), // Adjust dates as needed
    endDate: new Date('2026-06-01'),
    achievements: [
      'Relevant coursework: Data Structures, Algorithms, Object-Oriented Programming',
      'Strong foundation in mathematics and engineering principles',
      'Active participation in coding competitions and technical projects',
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Sample Projects - Replace with your actual projects
export const PROJECTS: Project[] = [
  {
    id: 'fdas',
    title: 'Ferhat Değer AŞ - Corporate Platform',
    description: 'Developed a comprehensive multilingual corporate web platform for Ferhat Değer Holding using Next.js 15, TypeScript, and Tailwind CSS 4. Integrated Sanity CMS for dynamic content management and Supabase for backend services. Built a complete career management system with secure CV upload functionality featuring rate limiting and Cloudflare Turnstile protection. Implemented an admin dashboard for managing job positions and applications, SSR-based authentication, and SEO optimization to ensure enterprise-level scalability, security, and high performance.',
    technologies: [
      TECHNOLOGIES.find(t => t.id === 'nextjs')!,
      TECHNOLOGIES.find(t => t.id === 'typescript')!,
      TECHNOLOGIES.find(t => t.id === 'tailwindcss')!,
      TECHNOLOGIES.find(t => t.id === 'sanity')!,
      TECHNOLOGIES.find(t => t.id === 'supabase')!,
    ],
    images: [
      {
        id: 'fdas-1',
        url: '/projects/fdas.png',
        alt: 'Ferhat Değer AŞ Corporate Platform',
        order: 1,
      },
    ],
    demoUrl: 'https://fdas.gokaysahin.com',
    sourceUrl: undefined,
    featured: true,
    category: ProjectCategory.WEB_DEVELOPMENT,
    createdAt: new Date('2025-10-01'),
    updatedAt: new Date(),
  },
  {
    id: 'evre-music',
    title: 'Evre Music - Music Promotion Platform',
    description: 'Built a modern music promotion website for Evre Music using Next.js and TypeScript. Features an interactive album showcase with dynamic hover effects and audio playback functionality. Implemented responsive design with Framer Motion animations and Tailwind CSS, creating an engaging user experience for music discovery. Integrated dynamic album release tracking, event management system, DJ profiles, toast notifications, and social media links while ensuring optimal performance and accessibility standards.',
    technologies: [
      TECHNOLOGIES.find(t => t.id === 'nextjs')!,
      TECHNOLOGIES.find(t => t.id === 'typescript')!,
      TECHNOLOGIES.find(t => t.id === 'tailwindcss')!,
      TECHNOLOGIES.find(t => t.id === 'framer-motion')!,
    ],
    images: [
      {
        id: 'evre-1',
        url: '/projects/evre-music.png',
        alt: 'Evre Music Platform',
        order: 1,
      },
    ],
    demoUrl: 'https://www.evremusic.com',
    sourceUrl: undefined,
    featured: true,
    category: ProjectCategory.WEB_DEVELOPMENT,
    createdAt: new Date('2025-07-01'),
    updatedAt: new Date(),
  },
  {
    id: 'tayfur-pehlivan',
    title: 'Tayfur Pehlivan - Real Estate Portfolio',
    description: 'Developed a full-stack real estate web application for industrial real estate specialist Tayfur Pehlivan. Built both frontend and backend components with React, TypeScript, and Node.js. Implemented responsive UI components with Tailwind CSS and Framer Motion for property listings, sidebar navigation, and interactive elements. Created RESTful APIs to handle property data processing, filtering, and user interactions. The application ensures cross-device compatibility and optimal performance in a modern web environment with property search and contact management.',
    technologies: [
      TECHNOLOGIES.find(t => t.id === 'react')!,
      TECHNOLOGIES.find(t => t.id === 'typescript')!,
      TECHNOLOGIES.find(t => t.id === 'nodejs')!,
      TECHNOLOGIES.find(t => t.id === 'tailwindcss')!,
      TECHNOLOGIES.find(t => t.id === 'framer-motion')!,
    ],
    images: [
      {
        id: 'tayfur-1',
        url: '/projects/tayfur-pehlivan.png',
        alt: 'Tayfur Pehlivan Real Estate Portfolio',
        order: 1,
      },
    ],
    demoUrl: 'https://www.tayfurpehlivan.com',
    sourceUrl: undefined,
    featured: true,
    category: ProjectCategory.WEB_DEVELOPMENT,
    createdAt: new Date('2025-07-01'),
    updatedAt: new Date(),
  },
  {
    id: 'monaliens',
    title: 'Monaliens - Web3 Gaming & DApp Ecosystem',
    description: 'Developed a comprehensive NFT collection and DApp ecosystem on the MONAD Network using React.js, ethers.js, wagmi, and Web3Modal. Built interactive UI components with React Router, Styled Components, and Framer Motion. Implemented core Web3 features including wallet connectivity, NFT gallery with minting capabilities, staking mechanism, raffle system, P2P marketplace, and user profile management. Utilized component-based architecture and context-based state management for optimal performance and scalability.',
    technologies: [
      TECHNOLOGIES.find(t => t.id === 'react')!,
      TECHNOLOGIES.find(t => t.id === 'typescript')!,
      TECHNOLOGIES.find(t => t.id === 'wagmi')!,
      TECHNOLOGIES.find(t => t.id === 'ethers')!,
      TECHNOLOGIES.find(t => t.id === 'framer-motion')!,
    ],
    images: [
      {
        id: 'monaliens-1',
        url: '/projects/monaliens.png',
        alt: 'Monaliens DApp Interface',
        order: 1,
      },
    ],
    demoUrl: 'https://monaliens.xyz',
    sourceUrl: undefined,
    featured: true,
    category: ProjectCategory.WEB_DEVELOPMENT,
    createdAt: new Date('2025-03-01'),
    updatedAt: new Date(),
  },
  {
    id: 'lutr-ai',
    title: 'Lutr AI - DeFi Intelligence Platform',
    description: 'Developed a cutting-edge React.js and TypeScript application for DeFi decision-making with a modern and highly responsive UI. Featured advanced CSS animations, WebGL-powered particle effects for immersive visual experiences, and interactive glassmorphism components. Implemented custom scroll-based animations, parallax effects, and sophisticated micro-interactions. Applied responsive design principles across all breakpoints and optimized asset loading strategies to deliver a buttery-smooth user experience with minimal performance overhead.',
    technologies: [
      TECHNOLOGIES.find(t => t.id === 'react')!,
      TECHNOLOGIES.find(t => t.id === 'typescript')!,
      TECHNOLOGIES.find(t => t.id === 'framer-motion')!,
    ],
    images: [
      {
        id: 'lutr-1',
        url: '/projects/lutr-ai.png',
        alt: 'Lutr AI Platform Interface',
        order: 1,
      },
    ],
    demoUrl: 'https://www.lutr.ai',
    sourceUrl: undefined,
    featured: true,
    category: ProjectCategory.WEB_DEVELOPMENT,
    createdAt: new Date('2024-12-01'),
    updatedAt: new Date(),
  },
  {
    id: 'osol-ai',
    title: 'OSOL.AI - Decentralized ETF Platform',
    description: 'Developed a React-based web application for a decentralized ETF platform on Solana blockchain. The project involved implementing real-time market data visualization using custom hooks and Zustand for state management, while building responsive UI components with Geist UI and Framer Motion. Integrated Solana wallet connectivity and Jupiter Terminal for DEX trading functionality, and created performance tracking features including NAV calculations and asset allocation charts.',
    technologies: [
      TECHNOLOGIES.find(t => t.id === 'react')!,
      TECHNOLOGIES.find(t => t.id === 'typescript')!,
      TECHNOLOGIES.find(t => t.id === 'solana')!,
      TECHNOLOGIES.find(t => t.id === 'framer-motion')!,
    ],
    images: [
      {
        id: 'osol-1',
        url: '/projects/osol-ai.png',
        alt: 'OSOL.AI Platform Homepage',
        order: 1,
      },
    ],
    demoUrl: 'https://osol.ai',
    sourceUrl: undefined,
    featured: true,
    category: ProjectCategory.WEB_DEVELOPMENT,
    createdAt: new Date('2024-12-01'),
    updatedAt: new Date(),
  },
];

// Sample Experience - Replace with your actual experience
export const EXPERIENCE: Experience[] = [
  // Add your internships, part-time jobs, or personal projects here
  // Example:
  // {
  //   id: 'internship-1',
  //   title: 'Software Development Intern',
  //   description: 'Developed web applications and gained experience in full-stack development.',
  //   company: 'Tech Company',
  //   position: 'Software Development Intern',
  //   location: 'Istanbul, Turkey',
  //   startDate: new Date('2024-06-01'),
  //   endDate: new Date('2024-08-01'),
  //   responsibilities: [
  //     'Developed responsive web applications using React and Node.js',
  //     'Collaborated with senior developers on feature implementation',
  //     'Participated in code reviews and agile development processes',
  //   ],
  //   technologies: [
  //     TECHNOLOGIES.find(t => t.id === 'react')!,
  //     TECHNOLOGIES.find(t => t.id === 'nodejs')!,
  //   ],
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // },
];

// Navigation items
export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]; 