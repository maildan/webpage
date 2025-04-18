import React, { useCallback } from 'react';
import FeatureCard from '../ui/FeatureCard';

const FeatureSection = () => {
  const handleCardClick = useCallback(() => {
    alert("Pressed!");
  }, []);

  return (
    <div className="row-view7">
      <FeatureCard
        title="모든 로그를 하나로 보세요."
        description="Use AI models like Claude Sonnet out of the\nbox, or bring your own key to access models\nfrom Azure, Anthropic, Google, Ollama,\nOpenAI, and OpenRouter."
        imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/jlgkh508_expires_30_days.png"
        imageAlt="AI models"
        onClick={handleCardClick}
        className="button-column"
      />
      <div className="column4">
        <span className="text20">{"로그에서 신속하게 다른 앱으로."}</span>
        <span className="text21">
          {
            "Your codebase is indexed locally and remotely (on\nGitHub) to understand what's relevant, enabling\nfast, context-aware interactions."
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
        description="Personalize interactions using custom\ninstructions and reusable prompt files tailored\nto your workflows, tools, and projects."
        imageSrc="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/3b9g6uic_expires_30_days.png"
        imageAlt="Team workflow"
        onClick={handleCardClick}
        className="button-column2"
      />
    </div>
  );
};

FeatureSection.displayName = 'FeatureSection';

export default FeatureSection;