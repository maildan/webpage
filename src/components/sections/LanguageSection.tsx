import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';

// 언어 항목 인터페이스 정의 - 실제로 사용하도록 수정
interface LanguageItemProps {
  name: string;
  icon: string;
  description: string;
}

// 재사용 가능한 언어 항목 컴포넌트
const LanguageItem: React.FC<LanguageItemProps> = ({ name, icon, description }) => (
  <div className="language-item">
    <img src={icon} alt={`${name} 아이콘`} className="language-icon" />
    <h3 className="language-name">{name}</h3>
    <p className="language-description">{description}</p>
  </div>
);

interface LanguageSectionProps {
  title?: string;
  description?: string;
}

export const LanguageSection: React.FC<LanguageSectionProps> = ({ 
  title = "지원하는 프로그래밍 언어", 
  description = "다양한 프로그래밍 언어를 지원합니다."
}) => {
  const { isMobile, isTablet } = useResponsive();

  // 샘플 언어 데이터
  const languages = [
    { name: 'JavaScript', icon: '/icons/js.svg', description: '웹 개발의 핵심 언어입니다.' },
    { name: 'TypeScript', icon: '/icons/ts.s  vg', description: '타입 안전성이 강화된 JavaScript입니다.' },
    { name: 'Python', icon: '/icons/python.svg', description: '데이터 사이언스와 백엔드에 적합합니다.' },
    { name: 'Java', icon: '/icons/java.svg', description: '엔터프라이즈 애플리케이션 개발에 사용됩니다.' }
  ];

  // 뷰포트에 따른 표시할 언어 수 결정
  const displayCount = isMobile ? 2 : isTablet ? 3 : 4;
  const displayedLanguages = languages.slice(0, displayCount);

  return (
    <section className="language-section">
      <div className="section-container">
        <h2 className="section-title">{title}</h2>
        <p className="section-description">{description}</p>
        
        <div className="language-grid">
          {displayedLanguages.map((lang, index) => (
            <LanguageItem
              key={index}
              name={lang.name}
              icon={lang.icon}
              description={lang.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};