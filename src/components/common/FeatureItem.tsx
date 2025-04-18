import React from 'react';
import type { ReactNode } from 'react';

interface FeatureItemProps {
  title: string;
  description: ReactNode;
  className?: string;
}

export const FeatureItem = ({ 
  title, 
  description, 
  className = "column17" 
}: FeatureItemProps) => (
  <div className={className}>
    <span className="text31">{title}</span>
    {description}
  </div>
);