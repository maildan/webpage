// filepath: /Users/user/loop/loop_web/src/components/sections/HeroSection.tsx
import React, { useState } from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { useTheme } from '../../context/ThemeContext';
import { Section, Container, Row, Column } from '../layout/ResponsiveLayout';

/**
 * VS Code 스타일의 히어로 섹션 컴포넌트
 * 반응형 디자인으로 모든 화면 크기에 최적화
 */
const HeroSection = () => {
  const { theme } = useTheme();
  const { isMobile, isTablet } = useResponsive();
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const toggleVideo = () => {
    const video = document.querySelector('.hero-video') as HTMLVideoElement;
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };  
  
  return (
    <Section className={`hero-section section ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} id="hero">
      <div className="hero-bg"></div>
      <Container>
        <Row className={`hero-row ${isMobile ? 'reverse' : ''}`}>
          <Column md={6} className="hero-content animate-slide-up">
            <h1 className="hero-title">모든 채팅을 한 곳에</h1>
            <p className="hero-description">
              Loop는 Google Docs, Notion, Slack 등 다양한 플랫폼에서의 활동을 기록하고 분석하여
              당신의 생산성을 높여줍니다. AI 기반의 맞춤형 추천과 통계로 더 나은 작업 환경을 제공합니다.
            </p>
            <div className="cta-buttons">
              <a href="#download" className="btn btn-primary">
                무료로 시작하기
              </a>
              <a href="#features" className="btn btn-outline">
                주요 기능 살펴보기
              </a>
            </div>
          </Column>
          
          <Column md={6} className="hero-video-column animate-slide-up delay-200">
            <div className="hero-video-container">
              <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
                poster="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/wz2fzcpj_expires_30_days.png"
              >
                <source
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/oeawf5xr_expires_30_days.mp4"
                  type="video/mp4"
                />
              </video>
              <button
                className={`video-control ${isVideoPlaying ? 'pause' : 'play'}`}
                onClick={toggleVideo}
                aria-label={isVideoPlaying ? '동영상 일시정지' : '동영상 재생'}
              >
                {isVideoPlaying ? '∥' : '▶'}
              </button>
            </div>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export default HeroSection;
