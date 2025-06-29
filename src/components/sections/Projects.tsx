'use client';

import React from 'react';
import { PROJECTS } from '@/constants/personal-data';
import ProjectItem from './Projects/ProjectItem';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {PROJECTS.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            index={index}
            isLastProject={index === PROJECTS.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects; 