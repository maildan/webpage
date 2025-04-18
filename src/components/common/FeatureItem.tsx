import React from 'react';

interface FeatureItemProps {
  title: string;
  description: React.ReactNode;
  className?: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ 
  title, 
  description, 
  className = "column17" 
}) => (
  <div className={className}>
    <span className="text31">{title}</span>
    {description}
  </div>
);