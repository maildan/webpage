import React, { useState, useEffect } from 'react';
import { Section, Container, Row, Column } from '../layout/ResponsiveLayout';
import ResponsiveImage from '../common/ResponsiveImage';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import '../animations.css'; // 애니메이션 CSS 불러오기

/**
 * Pro 앱 소개 섹션
 * 일반 사용자를 위한 채팅 관리 솔루션
 * 애니메이션과 인터랙티브 요소 추가
 */
const ProAppSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const { theme } = useTheme();
  
  // 스크롤 애니메이션을 위한 Intersection Observer
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // 자동 기능 전환
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % 3);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [inView]);

  // 기능 데이터
  const features = [
    {
      title: "채팅 로그 통합 관리",
      description: "Pro는 카카오톡, Discord와 같은 다양한 메신저의 채팅 로그를 수집하고 한 곳에서 쉽게 관리할 수 있게 해줍니다. 중요한 대화를 놓칠 염려가 없습니다.",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/wz2fzcpj_expires_30_days.png",
      list: [
        "카카오톡, Discord 채팅 로그 수집",
        "통합 검색 및 필터링",
        "채팅방별 로그 관리",
        "클라우드 백업 및 동기화"
      ]
    },
    {
      title: "대화방 메시지 전송",
      description: "Pro를 통해 직접 채팅방으로 메시지를 전송할 수 있습니다. 앱 전환 없이 여러 대화방에 빠르게 응답하고 효율적으로 의사소통을 관리하세요.",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/1xar340x_expires_30_days.png",
      list: [
        "앱 내에서 직접 메시지 전송",
        "다중 채팅방 관리",
        "빠른 응답 템플릿",
        "첨부 파일 지원"
      ]
    },
    {
      title: "AI 대화 요약 및 분석",
      description: "AI 기술을 활용한 대화 내용 요약 기능으로 놓친 대화를 빠르게 따라잡으세요. 중요한 주제와 결정 사항을 자동으로 추출하여 시간을 절약합니다.",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/du9byp6k_expires_30_days.png",
      list: [
        "AI 기반 대화 내용 자동 요약",
        "중요 주제 및 결정사항 추출",
        "감정 분석 및 자동 분류",
        "맞춤형 알림 설정"
      ]
    }
  ];

  // 다음 기능으로 전환
  const handleNextFeature = () => {
    setActiveFeature((prev) => (prev + 1) % features.length);
  };

  // 이전 기능으로 전환
  const handlePrevFeature = () => {
    setActiveFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  // 특정 기능으로 바로 이동
  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
  };

  return (
    <Section className={`pro-app-section section ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} id="pro-app">
      <div ref={sectionRef} className="pro-app-container">
        <Container>
          <div className={`section-header text-center ${inView ? 'animate-fade-in' : ''}`}>
            <h2>Pro</h2>
            <p className="lead">일반 사용자를 위한 채팅 관리 솔루션</p>
          </div>
          
          <div className="feature-carousel">
            <div className="feature-navigation">
              <button 
                className="feature-nav-button prev" 
                onClick={handlePrevFeature}
                aria-label="이전 기능"
              >
                <span className="arrow-left"></span>
              </button>
              
              <div className="feature-indicators">
                {features.map((_, index) => (
                  <button
                    key={index}
                    className={`feature-indicator ${activeFeature === index ? 'active' : ''}`}
                    onClick={() => handleFeatureClick(index)}
                    aria-label={`${index + 1}번 기능`}
                    aria-current={activeFeature === index}
                  ></button>
                ))}
              </div>
              
              <button 
                className="feature-nav-button next" 
                onClick={handleNextFeature}
                aria-label="다음 기능"
              >
                <span className="arrow-right"></span>
              </button>
            </div>
            
            <div className="feature-slides">
              <Row 
                justifyContent="between" 
                alignItems="center" 
                className={`feature-slide ${activeFeature % 2 === 0 ? 'reverse' : ''}`}
              >
                <Column md={6}>
                  <div className={`app-features ${inView ? 'animate-slide-in-left' : ''}`}>
                    <h3>{features[activeFeature].title}</h3>
                    <p>{features[activeFeature].description}</p>
                    
                    <ul className="feature-list">
                      {features[activeFeature].list.map((item, index) => (
                        <li key={index} className="feature-item">{item}</li>
                      ))}
                    </ul>
                  </div>
                </Column>
                
                <Column md={6}>
                  <div className={`app-image-container ${inView ? 'animate-slide-in-right' : ''}`}>
                    <ResponsiveImage 
                      src={features[activeFeature].image}
                      alt={features[activeFeature].title}
                      className="app-feature-image"
                    />
                  </div>
                </Column>
              </Row>
            </div>
          </div>
          
          <div className="cta-section">
            <Row justifyContent="center">
              <Column md={8} className="text-center">
                <div className="cta-buttons mt-lg">
                  <a href="#cloud-data" className="btn btn-primary">데이터 확인하기</a>
                  <a href="#download" className="btn btn-outline">앱 다운로드</a>
                </div>
              </Column>
            </Row>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default ProAppSection;
