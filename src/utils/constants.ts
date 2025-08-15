// application constants

export const APP_CONFIG = {
  // performance
  ANIMATION_DURATION: 0.6,
  STAGGER_DELAY: 0.1,
  
  // scroll behavior
  SCROLL_THRESHOLD: 100,
  SCROLL_OFFSET: 80,
  
  // responsive breakpoints (matching tailwind)
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536,
  },
  
  // theme
  THEME_COLOR: '#ff894d', // orange color matching buttons
} as const;

export const SECTION_IDS = ['home', 'about', 'projects', 'contact'] as const;

export const TECH_CATEGORIES = {
  PROGRAMMING_LANGUAGE: 'Programming Languages',
  FRAMEWORK: 'Frameworks & Libraries',
  DATABASE: 'Databases',
  TOOL: 'Tools & Technologies',
  CLOUD_SERVICE: 'Cloud Services',
} as const;

export const PROJECT_CATEGORIES = {
  WEB_DEVELOPMENT: 'Web Development',
  MOBILE_DEVELOPMENT: 'Mobile Development',
  DATA_SCIENCE: 'Data Science',
  ARTIFICIAL_INTELLIGENCE: 'AI/ML',
  GAME_DEVELOPMENT: 'Game Development',
  DESKTOP_APPLICATION: 'Desktop Applications',
  OTHER: 'Other',
} as const;

// color palette (matching tailwind config)
export const COLORS = {
  PRIMARY: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  GRAY: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  ORANGE: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
} as const; 