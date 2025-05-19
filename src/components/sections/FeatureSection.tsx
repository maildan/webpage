import React, { useCallback } from 'react';
import { Section, Container, Row, Column } from '../layout/ResponsiveLayout';
import { useResponsive } from '../../hooks/useResponsive';
import { useTheme } from '../../context/ThemeContext';
import ResponsiveImage from '../common/ResponsiveImage';
import './FeatureSection.css'; // FeatureSection CSS 추가

/**
 * VS Code 스타일의 특징 섹션 컴포넌트
 * 반응형 디자인으로 구현됨
 */
const FeatureSection = () => {
  const { isMobile } = useResponsive();
  const { theme } = useTheme();
  
  const handleCardClick = useCallback(() => {
    // 카드 클릭 시 처리 로직
    console.log('Feature card clicked');
  }, []);
  
  return (
    <Section className={`feature-section section ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} id="features">
      <Container>
        <div className="section-header text-center">
          <h2 className="animate-fade-in">Loop의 주요 기능</h2>
          <p className="lead animate-fade-in delay-100">다양한 기능으로 생산성을 높이세요</p>
        </div>
        
        <Row className="feature-row">
          <Column md={6} sm={12} className={`feature-column ${isMobile ? 'animate-fade-in' : 'animate-slide-up'} delay-200`}>
            <div className="feature-card">
              <h3>모든 로그를 하나로 보세요</h3>
              <p className="feature-description">
                Use AI models like Claude Sonnet out of the box, or bring your own key to access models from Azure, Anthropic, Google, Ollama, OpenAI, and OpenRouter.
              </p>
              <button className="btn btn-outline" onClick={handleCardClick}>자세히 보기</button>
            </div>
          </Column>
          
          <Column md={6} sm={12} className={`feature-image-column ${isMobile ? 'animate-fade-in delay-100' : 'animate-slide-up delay-300'}`}>
            <div className="image-container">
              <ResponsiveImage
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/jlgkh508_expires_30_days.png"
                alt="AI models"
                className="feature-image"
              />
            </div>
          </Column>
        </Row>
        
        <Row className={`feature-row ${isMobile ? '' : 'reverse'}`}>
          <Column md={6} sm={12} className={`feature-image-column ${isMobile ? 'animate-fade-in' : 'animate-slide-up delay-200'}`}>
            <div className="image-container">
              <ResponsiveImage
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/1mrgcw8t_expires_30_days.png"
                alt="Codebase expert"
                className="feature-image"
              />
            </div>
          </Column>
          
          <Column md={6} sm={12} className={`feature-column ${isMobile ? 'animate-fade-in delay-100' : 'animate-slide-up delay-300'}`}>
            <div className="feature-card">
              <h3>대화 내용 분석</h3>
              <p className="feature-description">
                Your codebase is indexed locally and remotely (on GitHub) to understand what's relevant, enabling fast, context-aware interactions.
              </p>
              <button className="btn btn-outline" onClick={handleCardClick}>자세히 보기</button>
            </div>
          </Column>
        </Row>
        
        <Row className="feature-row">
          <Column md={6} sm={12} className={`feature-column ${isMobile ? 'animate-fade-in' : 'animate-slide-up delay-200'}`}>
            <div className="feature-card">
              <h3>AI 를 사용하여 일상을 향상시키세요</h3>
              <p className="feature-description">
                Personalize interactions using custom instructions and reusable prompt files tailored to your workflows, tools, and projects.
              </p>
              <button className="btn btn-outline" onClick={handleCardClick}>자세히 보기</button>
            </div>
          </Column>
          
          <Column md={6} sm={12} className={`feature-image-column ${isMobile ? 'animate-fade-in delay-100' : 'animate-slide-up delay-300'}`}>
            <div className="image-container">
              <ResponsiveImage
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/3b9g6uic_expires_30_days.png"
                alt="Team workflow"
                className="feature-image"
              />
            </div>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

FeatureSection.displayName = 'FeatureSection';

export default FeatureSection;
