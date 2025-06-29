'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import ProjectHeader from './ProjectHeader';
import ProjectVisual from './ProjectVisual';
import ProjectDetails from './ProjectDetails';
import ProjectActions from './ProjectActions';
import ProjectSeparator from './ProjectSeparator';

interface ProjectItemProps {
  project: Project;
  index: number;
  isLastProject: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, index, isLastProject }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      key={project.id}
      className="mb-20 last:mb-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <ProjectHeader project={project} />
      <ProjectVisual project={project} />
      <ProjectDetails project={project} isExpanded={isExpanded} />
      <ProjectActions isExpanded={isExpanded} onToggle={handleToggle} />
      
      {!isLastProject && <ProjectSeparator />}
    </motion.div>
  );
};

export default ProjectItem; 