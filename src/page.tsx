import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import "./index.css";
import "./App.css";
import "./responsive.css"; // 반응형 CSS 파일 추가

// 레이아웃 컴포넌트 임포트
import AlertBanner from "./components/layout/AlertBanner";
import Footer from "./components/layout/Footer";
import NavMenu from "./components/layout/NavMenu";

// 섹션 컴포넌트 임포트
import HeroSection from "./components/sections/HeroSection";
import FeatureSection from "./components/sections/FeatureSection";
import LogSection from "./components/sections/LogSection";
import CloudSection from "./components/sections/CloudSection";
import AISection from "./components/sections/AISection";
import { LanguageSection } from "./components/sections/LanguageSection";
import CustomizeSection from "./components/sections/CustomizeSection";
import CodeAnywhereSection from "./components/sections/CodeAnywhereSection";
import FeatureGridSection from "./components/sections/FeatureGridSection";
import NovelAppSection from "./components/sections/NovelAppSection";
import ProAppSection from "./components/sections/ProAppSection";
import CloudPageSection from "./components/sections/CloudPageSection";
import DownloadSection from "./components/sections/DownloadSection";

export interface ElementLightProps {
  // 필요한 경우 props 타입 정의
}

// VS Code 스타일 네비게이션 메뉴 아이템
const navItems = [
  { id: 'home', label: '홈', href: '#hero' },
  { id: 'novel', label: 'Novel', href: '#novel-app' },
  { id: 'pro', label: 'Pro', href: '#pro-app' },
  { id: 'cloud', label: '클라우드', href: '#cloud-data' },
  { id: 'download', label: '다운로드', href: '#download' },
  { id: 'contact', label: '문의', href: '#contact' }
];

/**
 * 메인 페이지 컴포넌트 - 반응형 디자인
 */
export const ElementLight = (props: ElementLightProps) => {
  const [showAlert, setShowAlert] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  // 스크롤 이벤트 처리 및 현재 활성 섹션 업데이트
  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 상태 감지
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // 현재 보이는 섹션 감지
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          if (activeSection !== sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, activeSection]);
  
  // 알림 배너 닫기 이벤트 핸들러
  const handleAlertClose = () => {
    setShowAlert(false);
  };
  return (
    <div className="contain">
      <div className="scroll-view">        {/* VS Code 스타일 내비게이션 */}
        <NavMenu 
          logo="/logo.svg" 
          logoAlt="Loop 로고" 
          items={navItems}
          isScrolled={scrolled}
          activeItemId={activeSection === 'hero' ? 'home' : activeSection.split('-')[0]}
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

        {/* 메인 섹션들 - 컨테이너로 감싸 반응형 디자인 적용 */}
        <section className="hero-section" id="hero">
          <div className="container">
            <HeroSection />
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="container">
            <FeatureSection />
          </div>
        </section>

        <section className="log-section" id="logs">
          <div className="container">
            <LogSection />
          </div>
        </section>

        <section className="cloud-section" id="cloud">
          <div className="container">
            <CloudSection />
          </div>
        </section>

        <section className="ai-section" id="ai">
          <div className="container">
            <AISection />
          </div>
        </section>

        <section className="language-section" id="languages">
          <div className="container">
            <LanguageSection />
          </div>
        </section>

        <section className="customize-section" id="customize">
          <div className="container">
            <CustomizeSection />
          </div>
        </section>

        <section className="code-anywhere-section" id="code-anywhere">
          <div className="container">
            <CodeAnywhereSection />
          </div>
        </section>

        <section className="feature-grid-section" id="more-features">
          <div className="container">
            <FeatureGridSection />
          </div>
        </section>

        <section className="novel-app-section" id="novel-app">
          <div className="container">
            <NovelAppSection />
          </div>
        </section>

        <section className="pro-app-section" id="pro-app">
          <div className="container">
            <ProAppSection />
          </div>
        </section>

        <section className="cloud-page-section" id="cloud-page">
          <div className="container">
            <CloudPageSection />
          </div>
        </section>

        <section className="download-section" id="download">
          <div className="container">
            <DownloadSection />
          </div>
        </section>

        <footer className="site-footer">
          <div className="container">
            <Footer />
            <div className="footer-bottom">
              <p>&copy; 2025 Loop. All rights reserved.</p>
              <div className="footer-social">
                <a href="#github" aria-label="GitHub"><span className="sr-only">GitHub</span></a>
                <a href="#twitter" aria-label="Twitter"><span className="sr-only">Twitter</span></a>
                <a href="#youtube" aria-label="YouTube"><span className="sr-only">YouTube</span></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ElementLight;