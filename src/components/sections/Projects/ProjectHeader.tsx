'use client';

import React from 'react';
import { Project } from '@/types';

interface ProjectHeaderProps {
  project: Project;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-4 leading-tight font-abc-diatype">
        {project.title}
      </h2>
      <p className="text-lg text-gray-600 font-abc-diatype">
        {project.technologies.length} Technologies | {project.featured ? 'Featured Project' : 'Personal Project'}
      </p>
    </div>
  );
};

export default ProjectHeader; 