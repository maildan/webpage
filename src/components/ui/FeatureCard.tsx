import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  onClick?: () => void;
  className?: string;
}

const FeatureCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  onClick,
  className
}: FeatureCardProps) => (
  <button
    className={className}
    onClick={onClick}
  >
    <span className="text18">{title}</span>
    <span className="text19">{description}</span>
    <img
      src={imageSrc}
      className="image4"
      alt={imageAlt}
      loading="lazy"
    />
  </button>
);

FeatureCard.displayName = 'FeatureCard';

export default FeatureCard;