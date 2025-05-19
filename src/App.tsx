import React, { useState, useEffect } from 'react';
import './App.css';
import './responsive.css';
import './components/animations.css'; // 애니메이션 CSS 추가
// import { useResponsive } from './hooks/useResponsive'; // 필요할 때 주석 해제
import { ThemeProvider, useTheme } from './context/ThemeContext'; // ThemeContext 추가
import NavMenu from './components/layout/NavMenu';
import AlertBanner from './components/layout/AlertBanner';
import { Section, Container, Row, Column } from './components/layout/ResponsiveLayout';
import ResponsiveImage from './components/common/ResponsiveImage';
import NovelAppSection from './components/sections/NovelAppSection';
import ProAppSection from './components/sections/ProAppSection';
import CloudPageSection from './components/sections/CloudPageSection';
import FeatureSection from './components/sections/FeatureSection'; // FeatureSection 추가
import DownloadSection from './components/sections/DownloadSection';
import Footer from './components/layout/Footer';
import logo from './logo.svg';

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

// ThemeContext를 사용하는 내부 컴포넌트
function ThemedApp() {
  const { theme, toggleTheme } = useTheme();
  const [showAlert, setShowAlert] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  
  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  // VS Code 스타일 네비게이션 메뉴 아이템
  const navItems = [
    { id: 'home', label: '홈', href: '#hero' },
    { id: 'novel', label: 'Novel', href: '#novel-app' },
    { id: 'pro', label: 'Pro', href: '#pro-app' },
    { id: 'cloud', label: '클라우드', href: '#cloud-data' },
    { id: 'download', label: '다운로드', href: '#download' },
    { id: 'contact', label: '문의', href: '#contact' }
  ];

  // 알림 배너 닫기 이벤트 핸들러
  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div className={`App ${theme}-theme`}>
      {/* VS Code 스타일 내비게이션 */}
      <NavMenu 
        logo={logo} 
        logoAlt="Loop 로고" 
        items={navItems}
        isScrolled={scrolled}
      />
        
        {/* 알림 배너 */}
        {showAlert && (
          <AlertBanner
            message="Loop 1.0이 드디어 출시되었습니다! 지금 바로 경험해보세요."
            linkText="다운로드 하기"
            linkUrl="#download"
            variant="info"
            onClose={handleAlertClose}
          />
        )}
        
        {/* 히어로 섹션 */}
        <Section className="hero-section" id="hero">
          <Container>
            <Row justifyContent="between" alignItems="center" reverseOnMobile={true}>
              <Column md={6}>
                <h1 className="hero-title animate-fade-in">당신의 활동 데이터로 생산성을 높이세요</h1>
                <p className="hero-description animate-fade-in">
                  Loop는 사용자의 로그를 지속적으로 수집하고 분석하여 개인의 생산성을 향상시키는 데 도움을 주는 앱입니다.
                </p>
                <div className="cta-buttons animate-fade-in">
                  <a href="#download" className="btn btn-primary">다운로드</a>
                  <a href="#cloud-data" className="btn btn-outline">데이터 시각화 보기</a>
                </div>
              </Column>
              <Column md={6}>
                <ResponsiveImage 
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/o7lggksg_expires_30_days.png"
                  alt="Loop 앱 인터페이스"
                  className="hero-image animate-slide-in-right"
                />
              </Column>
            </Row>
          </Container>
        </Section>
        
        {/* Novel 앱 섹션 */}
        <NovelAppSection />
        
        {/* Pro 앱 섹션 */}
        <ProAppSection />
        
        {/* 클라우드 데이터 섹션 */}
        <Section className="cloud-data-section" id="cloud-data">
          <Container>
            <div className="section-header text-center">
              <h2>클라우드에서 데이터 확인</h2>
              <p>Loop로 수집된 모든 데이터를 클라우드에서 확인하고 분석하세요</p>
            </div>
            <CloudPageSection />
          </Container>
        </Section>
        
        {/* 다운로드 섹션 */}
        <DownloadSection />
        
        {/* 문의 섹션 */}
        <Section className="contact-section" id="contact">
          <Container>
            <div className="section-header text-center">
              <h2>문의하기</h2>
              <p>궁금한 점이 있으시면 언제든지 문의해주세요</p>
            </div>
            
            <Row justifyContent="center">
              <Column md={8}>
                <div className="contact-card">
                  <Row>
                    <Column md={6}>
                      <div className="contact-info">
                        <h3>연락처</h3>
                        <p><strong>이메일:</strong> info@loop-app.com</p>
                        <p><strong>지원:</strong> support@loop-app.com</p>
                        <p><strong>비즈니스:</strong> business@loop-app.com</p>
                        
                        <h3 className="mt-lg">찾아오시는 길</h3>
                        <p>서울특별시 강남구 테헤란로 123</p>
                        <p>루프타워 8층</p>
                      </div>
                    </Column>
                    
                    <Column md={6}>
                      <div className="contact-form">
                        <h3>메시지 보내기</h3>
                        <form>
                          <div className="form-group">
                            <label htmlFor="name">이름</label>
                            <input type="text" id="name" name="name" placeholder="이름을 입력하세요" />
                          </div>
                          
                          <div className="form-group">
                            <label htmlFor="email">이메일</label>
                            <input type="email" id="email" name="email" placeholder="이메일을 입력하세요" />
                          </div>
                          
                          <div className="form-group">
                            <label htmlFor="message">메시지</label>
                            <textarea id="message" name="message" rows={4} placeholder="메시지를 입력하세요"></textarea>
                          </div>
                          
                          <button type="submit" className="btn btn-primary">보내기</button>
                        </form>
                      </div>
                    </Column>
                  </Row>
                </div>
              </Column>
            </Row>
          </Container>
        </Section>
        
        {/* 특징 섹션을 푸터 바로 앞에 배치하여 통합 개선 */}
        <FeatureSection />
        
        {/* 푸터 - 테마 토글 기능 전달 */}
        <Footer isDarkMode={theme === 'dark'} onThemeToggle={toggleTheme} />
    </div>
  );
}

export default App;
