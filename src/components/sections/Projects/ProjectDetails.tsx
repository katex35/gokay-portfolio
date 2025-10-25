'use client';

import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectDetailsProps {
  project: Project;
  isExpanded: boolean;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, isExpanded }) => {
  const { t } = useLanguage();

  const projectDescription = useMemo(() => {
    const descriptionKey = `projects.${project.id}.description`;
    const translated = t(descriptionKey);
    return translated === descriptionKey ? project.description : translated;
  }, [project.description, project.id, t]);

  return (
    <AnimatePresence mode="wait">
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0, y: -20 }}
          animate={{ opacity: 1, height: 'auto', y: 0 }}
          exit={{ opacity: 0, height: 0, y: -20 }}
          transition={{ 
            duration: 0.5, 
            ease: 'easeInOut',
            height: { duration: 0.4 }
          }}
          className="mb-8 overflow-hidden"
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-abc-diatype">
              {projectDescription}
            </p>
            
            {/* Technologies */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech.id}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Project Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  {t('projects.actions.viewDemo')}
                </a>
              )}
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors"
                >
                  {t('projects.actions.viewSource')}
                </a>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails; 