import React, { useState, useEffect } from 'react';
import { Section, Container, Row, Column } from '../layout/ResponsiveLayout';
import ResponsiveImage from '../common/ResponsiveImage';
import { useInView } from 'react-intersection-observer';
import '../animations.css'; // 애니메이션 CSS 불러오기

/**
 * Novel 앱 소개 섹션
 * 작가를 위한 텍스트 모니터링 및 AI 기능 소개
 * 애니메이션과 인터랙티브 요소 추가
 */
const NovelAppSection: React.FC = () => {
  // const { theme } = useTheme();
  const [activeFeature, setActiveFeature] = useState(0);
  
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
      title: "Google Docs 모니터링",
      description: "Novel은 Google Docs에 있는 문서들을 실시간으로 모니터링하여 안전하게 클라우드에 백업합니다. 작업 내용이 손실될 걱정 없이 창작에만 집중하세요.",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/o7lggksg_expires_30_days.png",
      list: [
        "Google Docs 실시간 모니터링",
        "자동 백업 및 버전 관리",
        "클라우드 동기화로 어디서나 접근 가능",
        "다중 기기 지원"
      ]
    },
    {
      title: "상세한 타자 통계",
      description: "Novel은 당신의 타자 속도, 작업 시간, 생산성 패턴을 정밀하게 분석합니다. 실시간 타자 수 모니터링과 일/주/월별 통계를 통해 작업 효율성을 높이세요.",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/1xar340x_expires_30_days.png",
      list: [
        "실시간 타자 속도 모니터링",
        "상세한 타이핑 통계 및 그래프",
        "일/주/월 단위 생산성 분석",
        "목표 설정 및 진행 상황 추적"
      ]
    },
    {
      title: "AI 기반 글쓰기 도우미",
      description: "Novel의 AI 기능은 맞춤법 검사부터 문장 구조 개선까지 작가의 글쓰기를 한 단계 높여줍니다. 더 나은 표현과 자연스러운 문장 흐름을 위한 추천을 받아보세요.",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/3wlp0z0z_expires_30_days.png",
      list: [
        "실시간 맞춤법 및 문법 검사",
        "문장 구조 개선 제안", 
        "자연스러운 표현 추천",
        "스타일 일관성 유지 도움"
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
    <Section className="novel-app-section" id="novel-app">
      <div ref={sectionRef} className="novel-app-container">
        <Container>
          <div className={`section-header text-center ${inView ? 'animate-fade-in' : ''}`}>
            <h2>Novel</h2>
            <p className="lead">작가들을 위한 완벽한 글쓰기 도우미</p>
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
                className={`feature-slide ${activeFeature % 2 === 1 ? 'reverse' : ''}`}
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

export default NovelAppSection;
