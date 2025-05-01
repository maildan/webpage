import React, { useState } from 'react';
import { useResponsive } from '../../hooks/useResponsive';

/**
 * VS Code 스타일의 히어로 섹션 컴포넌트
 * 반응형 디자인으로 모든 화면 크기에 최적화
 */
const HeroSection = () => {
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
    <div className="hero-section full-width">
      <div className="container">
        <div className={`row ${isMobile ? 'reverseOnMobile' : ''}`}>
          <div className="column md-6 animate-slide-up">
            <h1 className="hero-title">개발을 더 쉽게, 더 빠르게</h1>
            <p className="hero-description">
              Loop는 개발자를 위한 강력한 도구입니다. 코드 에디터부터 통합 개발 환경까지 모든 기능을 갖춘 플랫폼으로 개발 효율성을 극대화하세요.
            </p>
            <div className="cta-buttons">
              <a href="#download" className="btn btn-primary">
                무료로 시작하기
              </a>
              <a href="#features" className="btn btn-outline">
                주요 기능 살펴보기
              </a>
            </div>
          </div>
          <div className="column md-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
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
                  src="https://code.visualstudio.com/Videos/home-concept-video.mp4"
                  type="video/mp4"
                />
              </video>
              <button 
                className="pause-button" 
                onClick={toggleVideo}
                aria-label={isVideoPlaying ? "비디오 정지" : "비디오 재생"}
              >
                {isVideoPlaying ? "II" : "▶"}
              </button>
            </div>
            {!isMobile && !isTablet && (
              <div className="platform-links">
                사용 가능한 플랫폼:
                <a href="#windows" className="platform-link">Windows</a>
                <a href="#mac" className="platform-link">Mac</a>
                <a href="#linux" className="platform-link">Linux</a>
                <a href="#web" className="platform-link">웹 브라우저</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;