import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { useTheme } from '../../context/ThemeContext';
import { useElementAnimation } from '../../hooks/useElementAnimation'; // 애니메이션 훅 추가
import './Footer.css';
import '../../responsive.css'; // 반응형 CSS 추가
import '../animations.css'; // 애니메이션 CSS 추가

interface FooterProps {
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
  // 애니메이션 및 반응형 옵션
  animate?: boolean;
  responsiveLayout?: 'mobile' | 'tablet' | 'desktop';
}

// 스크롤 애니메이션 클래스 구현 - IntersectionObserver 사용으로 최적화
const useFooterAnimation = (animate: boolean) => {
  React.useEffect(() => {
    if (!animate) return;
    
    const footer = document.querySelector('.vs-code-footer');
    if (!footer) return;
    
    // 한 번만 애니메이션 실행
    let animationTriggered = false;
    
    // IntersectionObserver를 사용하여 스크롤 이벤트 최적화
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      
      // 요소가 뷰포트에 들어왔고 아직 애니메이션이 실행되지 않았을 때만 실행
      if (entry.isIntersecting && !animationTriggered) {
        footer.classList.add('footer-animated');
        animationTriggered = true;
        
        // 애니메이션을 실행한 후 관찰 종료
        observer.disconnect();
      }
    }, {
      // 요소가 20% 이상 보일 때 애니메이션 시작
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px' // 화면 하단에서 100px 위에 있을 때 트리거
    });
    
    // 푸터 요소 관찰 시작
    observer.observe(footer);
    
    // 클린업 시 관찰 종료
    return () => {
      observer.disconnect();
    };
  }, [animate]);
};

const Footer: React.FC<FooterProps> = ({ 
  isDarkMode, 
  onThemeToggle, 
  animate = true,  // 기본적으로 애니메이션 활성화
  responsiveLayout
}) => {
  const { isMobile, isTablet } = useResponsive();
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  // 스크롤 애니메이션 훅 사용(기존)
  useFooterAnimation(animate);
  
  // 최적화된 엘리먼트 애니메이션 사용 - 강제 가시성 활성화
  useElementAnimation('.vs-code-footer', 'footer-animated', {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
    forceVisible: true
  });
  
  // 푸터 내부 요소들 가시성 보장
  useElementAnimation('.footer-top', 'visible', { 
    threshold: 0.1, 
    rootMargin: '0px',
    triggerOnce: true,
    forceVisible: true 
  });
  
  useElementAnimation('.footer-middle', 'visible', { 
    threshold: 0.1, 
    rootMargin: '0px',
    triggerOnce: true,
    forceVisible: true 
  });
  
  useElementAnimation('.footer-bottom', 'visible', { 
    threshold: 0.1, 
    rootMargin: '0px',
    triggerOnce: true,
    forceVisible: true 
  });

  // 반응형 레이아웃 결정 (props로 지정하지 않았을 경우 자동 감지)
  const currentLayout = responsiveLayout || (isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop');
  const shouldUseCompactLayout = currentLayout === 'mobile' || currentLayout === 'tablet';

  // PC 환경 감지 클래스
  const isPCEnvironment = !isMobile && !isTablet;
  const pcClassModifier = isPCEnvironment ? 'desktop-layout' : '';
  // 푸터 내비게이션 링크 그룹
  const footerLinks = [
    {
      title: "제품",
      links: [
        { label: "다운로드", href: "#download" },
        { label: "기능", href: "#features" },
        { label: "변경 내역", href: "#changelog" },
        { label: "Extension API", href: "#api" }
      ]
    },
    {
      title: "리소스",
      links: [
        { label: "문서", href: "#docs" },
        { label: "커뮤니티", href: "#community" },
        { label: "블로그", href: "#blog" },
        { label: "자주 묻는 질문", href: "#faq" }
      ]
    },
    {
      title: "법률",
      links: [
        { label: "라이선스", href: "#license" },
        { label: "개인정보 보호정책", href: "#privacy" },
        { label: "이용약관", href: "#terms" },
        { label: "트레이드마크", href: "#trademark" }
      ]
    }  ];
    return (
    <footer 
      className={`vs-code-footer ${theme === 'dark' ? 'dark-theme' : 'light-theme'} ${shouldUseCompactLayout ? 'compact-layout' : pcClassModifier}`}
      style={{
        visibility: 'visible',
        display: 'block',
        opacity: 1,
        width: '100%',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img 
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/06gvyj3x_expires_30_days.png" 
                alt="Loop 로고" 
                className="footer-logo-image" 
              />
              <span className="footer-logo-text">Loop</span>
            </div>
            
            {/* 테마 토글 버튼 */}
            {onThemeToggle && (
              <button 
                className={`theme-toggle-button ${theme === 'dark' ? 'dark-toggle' : 'light-toggle'}`}
                onClick={onThemeToggle}
                aria-label={isDarkMode ? "라이트 모드로 전환" : "다크 모드로 전환"}
              >
                {isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
                <span className="theme-toggle-text">
                  {isDarkMode ? "라이트 모드" : "다크 모드"}
                </span>
              </button>
            )}          </div>
            {/* 반응형 푸터 네비게이션 */}
          <div className="footer-nav">
            {footerLinks.map((group, groupIndex) => (
              <div className={`footer-nav-group ${animate ? `animate-fade-in delay-${groupIndex * 100}` : ''}`} key={groupIndex}>
                <h3 className="footer-nav-title">{group.title}</h3>
                <ul className="footer-nav-list">
                  {group.links.map((link, linkIndex) => (
                    <li className="footer-nav-item" key={linkIndex}>
                      <a 
                        href={link.href} 
                        className={`footer-nav-link ${animate ? `animate-fade-in delay-${(groupIndex * 100) + (linkIndex * 50)}` : ''}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="footer-middle">          <div className="partner-logos">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`partner-logo-link ${animate ? 'animate-fade-in delay-100' : ''}`}>
              <img 
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/3ronyp9z_expires_30_days.png" 
                alt="GitHub 로고" 
                className="partner-logo" 
              />
            </a>
            <a href="https://microsoft.com" target="_blank" rel="noopener noreferrer" className={`partner-logo-link ${animate ? 'animate-fade-in delay-200' : ''}`}>
              <img 
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/j1m2e4c1_expires_30_days.png" 
                alt="Microsoft 로고" 
                className="partner-logo"
              />
            </a>
            <a href="https://visualstudio.com" target="_blank" rel="noopener noreferrer" className={`partner-logo-link ${animate ? 'animate-fade-in delay-300' : ''}`}>
              <img 
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/06gvyj3x_expires_30_days.png" 
                alt="Visual Studio 로고" 
                className="partner-logo"
              />
            </a>
            <a href="https://azure.com" target="_blank" rel="noopener noreferrer" className={`partner-logo-link ${animate ? 'animate-fade-in delay-400' : ''}`}>
              <img 
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/ltsl2qj2_expires_30_days.png" 
                alt="Azure 로고" 
                className="partner-logo"
              />
            </a>
          </div>
            <div className="social-links">
            <a href="https://github.com/loop" target="_blank" rel="noopener noreferrer" className={`social-link ${animate ? 'animate-fade-in delay-100' : ''}`} aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://twitter.com/loop" target="_blank" rel="noopener noreferrer" className={`social-link ${animate ? 'animate-fade-in delay-200' : ''}`} aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
              </svg>
            </a>
            <a href="https://linkedin.com/company/loop" target="_blank" rel="noopener noreferrer" className={`social-link ${animate ? 'animate-fade-in delay-300' : ''}`} aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://discord.gg/loop" target="_blank" rel="noopener noreferrer" className={`social-link ${animate ? 'animate-fade-in delay-400' : ''}`} aria-label="Discord">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
            </a>
          </div>
        </div>
          <div className="footer-bottom">
          <div className={`copyright ${animate ? 'animate-fade-in delay-300' : ''}`}>
            <p>© {currentYear} Loop. All rights reserved.</p>
            <p className="made-with">Made with <span className="heart">♥</span> by developers for developers</p>
          </div>
          
          <div className={`language-selector ${animate ? 'animate-fade-in delay-400' : ''}`}>
            <select className="language-select" aria-label="언어 선택">
              <option value="ko">한국어</option>
              <option value="en">English</option>
              <option value="ja">日本語</option>
              <option value="zh">中文</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;