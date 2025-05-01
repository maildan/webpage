import React, { useState, useEffect } from 'react';
import './App.css';
import './responsive.css';
import { useResponsive } from './hooks/useResponsive';
import NavMenu from './components/layout/NavMenu';
import AlertBanner from './components/layout/AlertBanner';
import { Section, Container, Row, Column } from './components/layout/ResponsiveLayout';
import ResponsiveImage from './components/common/ResponsiveImage';
import CustomizeSection from './components/sections/CustomizeSection';
import CloudSection from './components/sections/CloudSection';
import logo from './logo.svg';
import linkImage from './link.png';

function App() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
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
    { id: 'home', label: '홈', href: '/' },
    { id: 'features', label: '기능', href: '#features' },
    { id: 'docs', label: '문서', href: '#docs' },
    { id: 'extensions', label: '확장', href: '#extensions' },
    { id: 'community', label: '커뮤니티', href: '#community' },
    { id: 'blog', label: '블로그', href: '#blog' }
  ];

  // 알림 배너 닫기 이벤트 핸들러
  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div className="App">
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
              <h1 className="hero-title animate-fade-in">모든 채팅을 한곳에. Loop</h1>
              <p className="hero-description animate-fade-in">
                안정적이고 빠른 코딩 환경. 모든 플랫폼에서 사용할 수 있습니다.
              </p>
              <div className="cta-buttons animate-fade-in">
                <a href="#download" className="btn btn-primary">다운로드</a>
                <a href="#web-version" className="btn btn-outline">무료웹으로 사용하기</a>
              </div>
            </Column>
            <Column md={6}>
              <ResponsiveImage 
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/o7lggksg_expires_30_days.png"
                alt="VS Code 인터페이스"
                className="hero-image animate-slide-right"
              />
            </Column>
          </Row>
        </Container>
      </Section>
      
      {/* 기능 섹션 */}
      <Section className="features-section" id="features">
        <Container>
          <div className="section-header text-center">
            <h2>강력한 기능</h2>
            <p>Loop가 제공하는 핵심 기능을 확인하세요</p>
          </div>
          
          <Row>
            <Column md={3} sm={6}>
              <div className="feature-card">
                <div className="feature-icon">
                  <img src="/icons/integrated-terminal.svg" alt="통합 터미널" />
                </div>
                <h3>통합 터미널</h3>
                <p>선호하는 쉘을 사용하세요.</p>
              </div>
            </Column>
            
            <Column md={3} sm={6}>
              <div className="feature-card">
                <div className="feature-icon">
                  <img src="/icons/run-code.svg" alt="코드 실행" />
                </div>
                <h3>코드 실행</h3>
                <p>에디터를 떠나지 않고 코드를 실행하세요.</p>
              </div>
            </Column>
            
            <Column md={3} sm={6}>
              <div className="feature-card">
                <div className="feature-icon">
                  <img src="/icons/version-control.svg" alt="버전 관리" />
                </div>
                <h3>버전 관리</h3>
                <p>Git 및 다른 버전 컨트롤 도구 내장.</p>
              </div>
            </Column>
            
            <Column md={3} sm={6}>
              <div className="feature-card">
                <div className="feature-icon">
                  <img src="/icons/build-tasks.svg" alt="빌드 태스크" />
                </div>
                <h3>빌드 태스크</h3>
                <p>VS Code 내에서 결과를 분석하세요.</p>
              </div>
            </Column>
          </Row>
        </Container>
      </Section>
      
      {/* 기능 하이라이트 섹션 (CustomizeSection으로 대체됨) */}
      <CustomizeSection />
      
      {/* 클라우드 섹션 추가 */}
      <CloudSection />
      
      {/* 확장 프로그램 섹션 */}
      <Section className="extensions-section" id="extensions">
        <Container>
          <div className="section-header text-center">
            <h2>확장 프로그램</h2>
            <p>원하는 기능을 추가하세요</p>
          </div>
          
          <Row alignItems="center">
            <Column md={6}>
              <div className="extensions-content">
                <h3>풍부한 확장 생태계</h3>
                <p>수천 개의 확장 프로그램으로 기능을 확장하고 맞춤화하세요. 프로그래밍 언어, 디버거, 도구 등 무엇이든 가능합니다.</p>
                <a href="#browse-extensions" className="btn btn-outline">확장 프로그램 살펴보기</a>
              </div>
            </Column>
            <Column md={6}>
              <ResponsiveImage 
                src="/images/extensions-marketplace.png" 
                alt="확장 프로그램 마켓플레이스"
                className="extensions-image"
              />
            </Column>
          </Row>
        </Container>
      </Section>
      
      {/* 다운로드 섹션 */}
      <Section className="download-section" id="download">
        <Container>
          <div className="section-header text-center">
            <h2>모든 채팅을 한곳에. Loop</h2>
            <p>지금 바로 다운로드하고 코딩을 시작하세요</p>
            <div className="download-options">
              <a href="#download-windows" className="download-button">
                Windows용 다운로드
              </a>
              <div className="platform-links">
                <a href="#download-mac" className="platform-link">macOS</a> |
                <a href="#download-linux" className="platform-link">Linux</a> |
                <a href="#download-web" className="platform-link">웹 버전</a> |
                <a href="#download-insider" className="platform-link">Insiders</a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* 푸터 */}
      <footer className="site-footer">
        <Container>
          <Row justifyContent="between">
            <Column md={4}>
              <div className="footer-brand">
                <img src={logo} alt="Loop 로고" className="footer-logo" />
                <p>프로그래머를 위한 코드 에디터</p>
              </div>
              <p>Loop는 모든 플랫폼에서 동일한 경험을 제공합니다.</p>
            </Column>
            
            <Column md={7}>
              <Row>
                <Column sm={4}>
                  <div className="footer-links">
                    <h4>제품</h4>
                    <ul>
                      <li><a href="#download">다운로드</a></li>
                      <li><a href="#pricing">라이센스</a></li>
                      <li><a href="#privacy">개인정보 처리방침</a></li>
                    </ul>
                  </div>
                </Column>
                
                <Column sm={4}>
                  <div className="footer-links">
                    <h4>개발자</h4>
                    <ul>
                      <li><a href="#docs">문서</a></li>
                      <li><a href="#api">API</a></li>
                      <li><a href="#extensions">확장 프로그램</a></li>
                    </ul>
                  </div>
                </Column>
                
                <Column sm={4}>
                  <div className="footer-links">
                    <h4>리소스</h4>
                    <ul>
                      <li><a href="#blog">블로그</a></li>
                      <li><a href="#updates">업데이트</a></li>
                      <li><a href="#twitter">Twitter</a></li>
                    </ul>
                  </div>
                </Column>
              </Row>
            </Column>
          </Row>
          
          <div className="footer-bottom">
            <p>&copy; 2025 Loop. All rights reserved.</p>
            <div className="footer-social">
              <a href="#github" aria-label="GitHub"><span className="sr-only">GitHub</span></a>
              <a href="#twitter" aria-label="Twitter"><span className="sr-only">Twitter</span></a>
              <a href="#youtube" aria-label="YouTube"><span className="sr-only">YouTube</span></a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;
