import { useMediaQuery } from 'react-responsive';

// 반응형 디자인을 위한 브레이크포인트 정의
const breakpoints = {
  mobile: 480,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
};

// 반응형 디자인을 위한 커스텀 훅
export const useResponsive = () => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.mobile });
  const isTablet = useMediaQuery({ minWidth: breakpoints.mobile + 1, maxWidth: breakpoints.tablet });
  const isLaptop = useMediaQuery({ minWidth: breakpoints.tablet + 1, maxWidth: breakpoints.laptop });
  const isDesktop = useMediaQuery({ minWidth: breakpoints.laptop + 1 });

  return {
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    // 헬퍼 함수
    isMobileOrTablet: isMobile || isTablet,
    isDesktopOrLaptop: isDesktop || isLaptop,
  };
};

// 윈도우 크기 변화 감지를 위한 커스텀 훅
export const useWindowSize = () => {
  const isClient = typeof window === 'object';
  
  const isMobile = useMediaQuery({ maxWidth: breakpoints.mobile });
  const isTablet = useMediaQuery({ minWidth: breakpoints.mobile + 1, maxWidth: breakpoints.tablet });
  const isLaptop = useMediaQuery({ minWidth: breakpoints.tablet + 1, maxWidth: breakpoints.laptop });
  const isDesktop = useMediaQuery({ minWidth: breakpoints.laptop + 1 });

  // 현재 디바이스 타입 반환
  const getDeviceType = () => {
    if (isMobile) return 'mobile';
    if (isTablet) return 'tablet';
    if (isLaptop) return 'laptop';
    if (isDesktop) return 'desktop';
    return 'unknown';
  };

  return {
    isMobile,
    isTablet,
    isLaptop, 
    isDesktop,
    getDeviceType,
  };
};