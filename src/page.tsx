import React from "react";
import "./index.css";
import "./App.css";
import "./responsive.css"; // 반응형 CSS 파일 추가

// 레이아웃 컴포넌트 임포트
import Header from "./components/layout/Header";
import AlertBanner from "./components/layout/AlertBanner";
import Footer from "./components/layout/Footer";

// 섹션 컴포넌트 임포트
import HeroSection from "./components/sections/HeroSection";
import FeatureSection from "./components/sections/FeatureSection";
import LogSection from "./components/sections/LogSection";
import CloudSection from "./components/sections/CloudSection";
import AISection from "./components/sections/AISection";
import LanguageSection from "./components/sections/LanguageSection";
import CustomizeSection from "./components/sections/CustomizeSection";
import CodeAnywhereSection from "./components/sections/CodeAnywhereSection";
import FeatureGridSection from "./components/sections/FeatureGridSection";

export interface ElementLightProps {
  // 필요한 경우 props 타입 정의
}

/**
 * 메인 페이지 컴포넌트
 */
export const ElementLight = (props: ElementLightProps) => {
  return (
    <div className="contain">
      <div className="scroll-view">
        <div className="view">
          <Header />
        </div>
        <AlertBanner />
        <HeroSection />
        <FeatureSection />
        <LogSection />
        <CloudSection />
        <AISection />
        <LanguageSection />
        <CustomizeSection />
        <CodeAnywhereSection />
        <FeatureGridSection />
        <Footer />
      </div>
    </div>
  );
};

export default ElementLight;