import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

interface RowProps {
  children: ReactNode;
  className?: string;
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around';
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  reverseOnMobile?: boolean;
}

interface ColumnProps {
  children: ReactNode;
  className?: string;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

/**
 * 섹션 컴포넌트 - 페이지의 주요 섹션을 나타냅니다.
 */
export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section className={className} id={id}>
      {children}
    </section>
  );
};

/**
 * 컨테이너 컴포넌트 - 콘텐츠의 최대 너비를 제한합니다.
 */
export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  );
};

/**
 * 로우 컴포넌트 - 플렉스 기반 행 레이아웃을 만듭니다.
 */
export const Row: React.FC<RowProps> = ({ 
  children, 
  className = '', 
  justifyContent = 'start', 
  alignItems = 'start',
  reverseOnMobile = false
}) => {
  const justifyClass = justifyContent === 'start' 
    ? 'justify-content-start'
    : justifyContent === 'center'
      ? 'justify-content-center'
      : justifyContent === 'end'
        ? 'justify-content-end'
        : justifyContent === 'between'
          ? 'justify-content-between'
          : 'justify-content-around';

  const alignClass = alignItems === 'start'
    ? 'align-items-start'
    : alignItems === 'center'
      ? 'align-items-center'
      : alignItems === 'end'
        ? 'align-items-end'
        : alignItems === 'stretch'
          ? 'align-items-stretch'
          : 'align-items-baseline';

  return (
    <div className={`row ${justifyClass} ${alignClass} ${reverseOnMobile ? 'reverseOnMobile' : ''} ${className}`}>
      {children}
    </div>
  );
};

/**
 * 칼럼 컴포넌트 - 반응형 그리드 시스템의 열을 만듭니다.
 */
export const Column: React.FC<ColumnProps> = ({ 
  children, 
  className = '',
  xs, 
  sm, 
  md, 
  lg, 
  xl
}) => {
  const xsClass = xs ? `col-${xs}` : '';
  const smClass = sm ? `sm-${sm}` : '';
  const mdClass = md ? `md-${md}` : '';
  const lgClass = lg ? `lg-${lg}` : '';
  const xlClass = xl ? `xl-${xl}` : '';

  return (
    <div className={`column ${xsClass} ${smClass} ${mdClass} ${lgClass} ${xlClass} ${className}`}>
      {children}
    </div>
  );
};

export default {
  Section,
  Container,
  Row,
  Column
};