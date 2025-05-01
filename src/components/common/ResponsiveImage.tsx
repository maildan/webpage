import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  loading?: 'lazy' | 'eager';
  srcSet?: string;
  sizes?: string;
  onClick?: () => void;
}

/**
 * 반응형 이미지 컴포넌트
 * - 모든 화면 크기에 최적화된 이미지 표시
 * - 기본적으로 지연 로딩 적용
 * - 다양한 화면 크기에 대한 srcSet 지원
 */
const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  srcSet,
  sizes,
  onClick
}) => {
  const { isMobile, isTablet } = useResponsive();

  // 화면 크기에 따른 기본 크기 설정 (필요한 경우)
  const getDefaultSize = () => {
    if (isMobile) {
      return { width: '100%', height: 'auto' };
    } else if (isTablet) {
      return { width: '100%', height: 'auto' };
    } else {
      return { width: width || 'auto', height: height || 'auto' };
    }
  };

  const defaultSize = getDefaultSize();

  return (
    <img
      src={src}
      alt={alt}
      className={`responsive-image ${className}`}
      width={width || defaultSize.width}
      height={height || defaultSize.height}
      loading={loading}
      srcSet={srcSet}
      sizes={sizes}
      onClick={onClick}
      style={{
        maxWidth: '100%',
        height: 'auto',
        display: 'block'
      }}
    />
  );
};

export default ResponsiveImage;