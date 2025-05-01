import React, { useCallback } from 'react';
import FeatureCard from '../common/FeatureCard';
import { useResponsive } from '../../hooks/useResponsive';

/**
 * VS Code 스타일의 특징 섹션 컴포넌트
 * 반응형 디자인으로 구현됨
 */
const FeatureSection = () => {
  const { isMobile } = useResponsive();
  
  const handleCardClick = useCallback(() => {
    // 카드 클릭 시 처리 로직
    console.log('Feature card clicked');
  }, []);

  return (
    <div className="row-view7">
      <FeatureCard
        title="모든 로그를 하나로 보세요."
        description="Use AI models like Claude Sonnet out of the box, or bring your own key to access models from Azure, Anthropic, Google, Ollama, OpenAI, and OpenRouter."
        imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/jlgkh508_expires_30_days.png"
        imageAlt="AI models"
        onClick={handleCardClick}
        className="button-column animate-slide-up"
      />
      <div className={`column4 ${isMobile ? '' : 'animate-slide-up'}`} style={{ animationDelay: '0.2s' }}>
        <span className="text21">
          {
            "Your codebase is indexed locally and remotely (on GitHub) to understand what's relevant, enabling fast, context-aware interactions."
          }
        </span>
        <img
          src={
            "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/1mrgcw8t_expires_30_days.png"
          }
          className="image5"
          alt="Codebase expert"
          loading="lazy"
        />
      </div>
      <FeatureCard
        title="AI 를 사용하여 일상을 향상시키세요."
        description="Personalize interactions using custom instructions and reusable prompt files tailored to your workflows, tools, and projects."
        imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/3b9g6uic_expires_30_days.png"
        imageAlt="Team workflow"
        onClick={handleCardClick}
        className="button-column2 animate-slide-up"
        style={{ animationDelay: '0.4s' }}
      />
    </div>
  );
};

FeatureSection.displayName = 'FeatureSection';

export default FeatureSection;