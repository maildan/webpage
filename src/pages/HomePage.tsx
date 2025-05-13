import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeatureSection from '../components/sections/FeatureSection';
import CloudSection from '../components/sections/CloudSection';
import AISection from '../components/sections/AISection';
import FeatureGridSection from '../components/sections/FeatureGridSection';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeatureSection />
      <FeatureGridSection />
      <div className="app-showcase">
        <h2 className="section-title text-center">Loop 앱 제품군</h2>
        <div className="app-cards">
          <div className="app-card novel-app">
            <h3>Novel</h3>
            <p>작가를 위한 글쓰기 도우미</p>
            <ul>
              <li>Google Docs 문서 모니터링</li>
              <li>실시간 타자 수 및 작업 통계</li>
              <li>AI 기반 맞춤법 및 문장 추천</li>
              <li>클라우드 백업 및 동기화</li>
            </ul>
            <a href="/novel" className="btn btn-primary">더 알아보기</a>
          </div>
          <div className="app-card pro-app">
            <h3>Pro</h3>
            <p>일반 사용자를 위한 채팅 관리자</p>
            <ul>
              <li>카카오톡, Discord 채팅 로그 관리</li>
              <li>채팅방 내에서 메시지 전송</li>
              <li>AI 기반 대화 내용 요약</li>
              <li>클라우드 백업 및 동기화</li>
            </ul>
            <a href="/pro" className="btn btn-primary">더 알아보기</a>
          </div>
        </div>
      </div>
      <CloudSection />
      <AISection />
    </div>
  );
};

export default HomePage;
