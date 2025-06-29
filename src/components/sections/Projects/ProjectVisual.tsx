'use client';

import React from 'react';
import { Project } from '@/types';

interface ProjectVisualProps {
  project: Project;
}

const ProjectVisual: React.FC<ProjectVisualProps> = ({ project }) => {
  const hasImages = project.images && project.images.length > 0;

  return (
    <div className="relative mb-12">
      <div className="aspect-[16/9] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-2xl">
        {hasImages ? (
          <img
            src={project.images[0].url}
            alt={project.images[0].alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500 text-lg">Project Preview</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectVisual; 