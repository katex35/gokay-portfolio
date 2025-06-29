import React from 'react';

// core interfaces following interface segregation principle
export interface BaseEntity {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project extends BaseEntity {
  technologies: Technology[];
  images: ProjectImage[];
  demoUrl?: string;
  sourceUrl?: string;
  featured: boolean;
  category: ProjectCategory;
}

export interface Experience extends BaseEntity {
  company: string;
  position: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  responsibilities: string[];
  technologies: Technology[];
}

export interface Education extends BaseEntity {
  institution: string;
  degree: string;
  field: string;
  gpa?: number;
  startDate: Date;
  endDate: Date | null;
  achievements: string[];
}

export interface Technology {
  id: string;
  name: string;
  category: TechnologyCategory;
  proficiency: ProficiencyLevel;
  icon?: string;
}

export interface ProjectImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  order: number;
}

export interface Contact {
  email: string;
  phone?: string;
  location: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  username: string;
}

// enums for type safety
export enum ProjectCategory {
  WEB_DEVELOPMENT = 'web-development',
  MOBILE_DEVELOPMENT = 'mobile-development',
  DATA_SCIENCE = 'data-science',
  ARTIFICIAL_INTELLIGENCE = 'artificial-intelligence',
  GAME_DEVELOPMENT = 'game-development',
  DESKTOP_APPLICATION = 'desktop-application',
  OTHER = 'other',
}

export enum TechnologyCategory {
  PROGRAMMING_LANGUAGE = 'programming-language',
  FRAMEWORK = 'framework',
  DATABASE = 'database',
  TOOL = 'tool',
  CLOUD_SERVICE = 'cloud-service',
  OTHER = 'other',
}

export enum ProficiencyLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  EXPERT = 'expert',
}

export enum SocialPlatform {
  GITHUB = 'github',
  LINKEDIN = 'linkedin',
  TWITTER = 'twitter',
  INSTAGRAM = 'instagram',
  YOUTUBE = 'youtube',
  MEDIUM = 'medium',
  PERSONAL_WEBSITE = 'personal-website',
}

// component props interfaces
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

// api response interfaces
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: Date;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    current: number;
    total: number;
    limit: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
} 