import { useState, useEffect } from 'react';

// 화면 크기 기준점 정의
const BREAKPOINTS = {
  mobile: 576, // 모바일 기준점
  tablet: 768, // 태블릿 기준점
  desktop: 992, // 데스크톱 기준점
  large: 1200, // 대형 화면 기준점
};

interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLarge: boolean;
  windowWidth: number;
  windowHeight: number;
}

/**
 * 반응형 화면 크기에 따른 상태를 제공하는 커스텀 훅
 * 각 화면 크기별로 Boolean 값과 정확한 치수를 반환
 */
export const useResponsive = (): ResponsiveState => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    // 창 크기 변경 핸들러
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener('resize', handleResize);
    
    // 클린업 함수
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 각 화면 크기별 상태 계산
  const isMobile = windowSize.width < BREAKPOINTS.tablet;
  const isTablet = 
    windowSize.width >= BREAKPOINTS.tablet && 
    windowSize.width < BREAKPOINTS.desktop;
  const isDesktop = 
    windowSize.width >= BREAKPOINTS.desktop && 
    windowSize.width < BREAKPOINTS.large;
  const isLarge = windowSize.width >= BREAKPOINTS.large;

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLarge,
    windowWidth: windowSize.width,
    windowHeight: windowSize.height,
  };
};

export default useResponsive;