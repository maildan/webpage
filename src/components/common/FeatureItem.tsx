import React from 'react';

interface FeatureItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

/**
 * VS Code 스타일의 특징 아이템 컴포넌트
 * 커스터마이즈 섹션이나 기능 목록에서 사용
 */
export const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  icon,
  onClick,
  className = ''
}) => {
  return (
    <div 
      className={`feature-item ${className}`}
      onClick={onClick}
    >
      {icon && <div className="feature-item-icon">{icon}</div>}
      
      <div className="feature-item-content">
        <h4 className="feature-item-title">{title}</h4>
        <p className="feature-item-description">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;