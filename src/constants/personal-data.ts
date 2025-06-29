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
  name: 'Gokay Sahin',
  title: 'Computer Engineering Student',
  subtitle: '3rd Year Computer Engineering Student',
  bio: 'Passionate computer engineering student with a strong foundation in software development, data structures, and algorithms. Currently in my 3rd year, I focus on building scalable applications and exploring emerging technologies. I enjoy solving complex problems and contributing to innovative projects.',
  email: 'gokay285@gmail.com', 
  location: 'Turkey, Izmir',
  resumeUrl: '/resume.pdf',
  status: 'Currently seeking internship and collaboration opportunities',
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
  {
    id: 'monaliens',
    title: 'Monaliens - Web3 Gaming & Messaging DApp',
    description: 'Built a comprehensive decentralized application on Monad Testnet featuring three core functionalities: NFT-based spin wheel gaming, raffle system, and encrypted messaging platform. Implemented advanced Web3 integration with React 18, TypeScript, and modern blockchain technologies. Created responsive, mobile-first UI with wallet connectivity, smart contract integration, and real-time blockchain data management.',
    technologies: [
      TECHNOLOGIES.find(t => t.id === 'react')!,
      TECHNOLOGIES.find(t => t.id === 'typescript')!,
      TECHNOLOGIES.find(t => t.id === 'wagmi')!,
      TECHNOLOGIES.find(t => t.id === 'tailwindcss')!,
      TECHNOLOGIES.find(t => t.id === 'ethers')!,
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
    createdAt: new Date('2024-11-01'),
    updatedAt: new Date(),
  },
//   {
//     id: 'portfolio-website',
//     title: 'Portfolio Website',
//     description: 'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations with Framer Motion, custom fonts, and optimized performance. Follows SOLID principles and modern React patterns.',
//     technologies: [
//       TECHNOLOGIES.find(t => t.id === 'nextjs')!,
//       TECHNOLOGIES.find(t => t.id === 'typescript')!,
//       TECHNOLOGIES.find(t => t.id === 'react')!,
//       TECHNOLOGIES.find(t => t.id === 'tailwindcss')!,
//       TECHNOLOGIES.find(t => t.id === 'framer-motion')!,
//     ],
//     images: [
//       {
//         id: 'portfolio-1',
//         url: '/projects/portfolio-1.jpg',
//         alt: 'Portfolio website homepage',
//         order: 1,
//       },
//     ],
//     demoUrl: 'https://gokaysahin.dev',
//     sourceUrl: 'https://github.com/katex35/gokay-portfolio',
//     featured: false,
//     category: ProjectCategory.WEB_DEVELOPMENT,
//     createdAt: new Date('2024-01-01'),
//     updatedAt: new Date(),
//   },
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
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]; 