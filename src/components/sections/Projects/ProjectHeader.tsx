'use client';

import React, { useMemo } from 'react';
import { Project } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectHeaderProps {
  project: Project;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  const { t } = useLanguage();

  const projectTitle = useMemo(() => {
    const titleKey = `projects.${project.id}.title`;
    const translated = t(titleKey);
    return translated === titleKey ? project.title : translated;
  }, [project.id, project.title, t]);

  const projectTypeLabel = project.featured
    ? t('projects.featuredLabel')
    : t('projects.personalLabel');

  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-4 leading-tight font-abc-diatype">
        {projectTitle}
      </h2>
      <p className="text-lg text-gray-600 font-abc-diatype">
        {project.technologies.length} {t('projects.technologiesLabel')} | {projectTypeLabel}
      </p>
    </div>
  );
};

export default ProjectHeader; 