import React from 'react';
import ResponsiveImage from './ResponsiveImage';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * VS Code 스타일의 특징 카드 컴포넌트
 * 반응형 디자인으로 모든 화면 크기에 최적화
 */
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  onClick,
  className = '',
  style
}) => {
  return (
    <div 
      className={`feature-card ${className}`} 
      onClick={onClick}
      style={style}
    >
      <div className="feature-card-content">
        <h3 className="feature-card-title">{title}</h3>
        <p className="feature-card-description">{description}</p>
      </div>
      <div className="feature-card-image">
        <ResponsiveImage 
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default FeatureCard;