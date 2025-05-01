import React from "react";
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

export interface ElementLightProps {
  // 필요한 경우 props 타입 정의
}

// VS Code 스타일 네비게이션 메뉴 아이템
const navItems = [
  { id: 'home', label: '홈', href: '/' },
  { id: 'features', label: '기능', href: '#features' },
  { id: 'docs', label: '문서', href: '#docs' },
  { id: 'extensions', label: '확장', href: '#extensions' },
  { id: 'community', label: '커뮤니티', href: '#community' },
  { id: 'blog', label: '블로그', href: '#blog' }
];

/**
 * 메인 페이지 컴포넌트 - 반응형 디자인
 */
export const ElementLight = (props: ElementLightProps) => {
  return (
    <div className="contain">
      <div className="scroll-view">
        {/* VS Code 스타일 내비게이션 */}
        <NavMenu 
          logo="/logo.svg" 
          logoAlt="Loop 로고" 
          items={navItems}
        />
        <AlertBanner />

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