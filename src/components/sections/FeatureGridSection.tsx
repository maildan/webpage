import React from 'react';
import { Section, Container, Row, Column } from '../layout/ResponsiveLayout';
import { useTheme } from '../../context/ThemeContext';
import { useResponsive } from '../../hooks/useResponsive';
import './FeatureGridSection.css';

interface FeatureGridItemProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  className?: string;
  delay?: string;
}

const FeatureGridItem = ({
  imageSrc,
  imageAlt,
  title,
  description,
  className = '',
  delay = ''
}: FeatureGridItemProps) => {
  const { isMobile } = useResponsive();
  
  return (
    <Column md={3} sm={6} className={`feature-grid-item ${className} ${isMobile ? '' : `animate-fade-in ${delay}`}`}>
      <div className="feature-grid-card">
        <img
          src={imageSrc}
          className="feature-grid-image"
          alt={imageAlt}
          loading="lazy"
        />
        <h3 className="feature-grid-title">{title}</h3>
        <p className="feature-grid-description">{description}</p>
      </div>
    </Column>
  );
};

const FeatureGridSection = () => {
  const { theme } = useTheme();
  const { isMobile } = useResponsive();
  
  return (
    <Section className={`feature-grid-section section ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} id="feature-grid">
      <Container>
        <div className="section-header text-center">
          <h2 className="section-title">Loop 의 다양한 앱들</h2>
          <p className="section-subtitle lead">
            There's a lot more to an editor. Whether it's using built-in features or
            rich extensions, there's something for everyone.
          </p>
        </div>
        
        <Row justifyContent="between" className="feature-grid-row">
          <FeatureGridItem
            imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/jn6dhmj5_expires_30_days.png"
            imageAlt="Integrated terminal"
            title="Integrated terminal"
            description="Use your favorite shell whether it's zsh, pwsh, or git bash, all inside the editor."
            delay="delay-100"
          />
          <FeatureGridItem
            imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/xlzm8ahj_expires_30_days.png"
            imageAlt="Run code"
            title="Run code"
            description="Run and debug your code without leaving your editor."
            delay="delay-200"
          />
          <FeatureGridItem
            imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/wz1lwntk_expires_30_days.png"
            imageAlt="Version control"
            title="Version control"
            description="Built-in support for git and many other source control providers."
            delay="delay-300"
          />
          <FeatureGridItem
            imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/pkxvogvt_expires_30_days.png"
            imageAlt="Build tasks"
            title="Build tasks"
            description="Run tools and analyze their results from within VS Code."
            delay="delay-400"
          />
        </Row>
          <Row justifyContent="between" className="feature-grid-row mt-lg">
          <FeatureGridItem
            imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/gicfrmnw_expires_30_days.png"
            imageAlt="Local history"
            title="Local history"
            description="Never lose your changes with automatically tracked local history."
            delay="delay-500"
          />
          <FeatureGridItem
            imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/zkagpy1r_expires_30_days.png"
            imageAlt="Themes"
            title="Themes"
            description="Your theme is an extension of your personality. Add some flair to your editor and add your touch."
            delay="delay-600"
          />
          <FeatureGridItem
            imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/glyoadv3_expires_30_days.png"
            imageAlt="Accessibility"
            title="Accessibility"
            description="Optimized experience for screen readers, high contrast themes, and keyboard-only navigation."
            delay="delay-700"
          />
          <FeatureGridItem
            imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/hj86jcdu_expires_30_days.png"
            imageAlt="Web support"
            title="Web support"
            description="Whether you are on your phone, tablet, or desktop, you can access your code from anywhere."
            delay="delay-800"
          />
        </Row>
      </Container>
    </Section>
  );
};

FeatureGridSection.displayName = 'FeatureGridSection';

export default FeatureGridSection;