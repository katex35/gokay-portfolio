'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectActionsProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const ProjectActions: React.FC<ProjectActionsProps> = ({ isExpanded, onToggle }) => {
  const { t } = useLanguage();
  return (
    <div className="text-center">
      <motion.button
        onClick={onToggle}
        className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-900 transition-all duration-200"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>{isExpanded ? t('projects.actions.showLess') : t('projects.actions.showMore')}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus size={20} />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ProjectActions; 