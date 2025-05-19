import React, { useState, useEffect } from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { useTheme } from '../../context/ThemeContext'; 
import './NavMenu.css';
import './theme-toggle.css';

// NavMenu 컴포넌트의 Props 타입 정의
interface NavMenuProps {
  logo: string;
  logoAlt: string;
  items: {
    id: string;
    label: string;
    href: string;
  }[];
  isScrolled?: boolean; // 외부에서 스크롤 상태를 받을 수 있도록 추가
  activeItemId?: string; // 현재 활성화된 아이템의 ID
}

/**
 * 현대적인 VS Code, Apple, Microsoft 스타일의 슬림 내비게이션 컴포넌트
 * 반응형으로 모든 화면 크기에 최적화
 */
const NavMenu: React.FC<NavMenuProps> = ({ logo, logoAlt, items, isScrolled: externalScrolled, activeItemId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalScrolled, setInternalScrolled] = useState(false);
  const { isMobile, isTablet } = useResponsive();
  const { theme, toggleTheme } = useTheme();
  
  // 외부에서 스크롤 상태를 받거나 내부적으로 계산
  const isScrolled = externalScrolled !== undefined ? externalScrolled : internalScrolled;

  // 스크롤 이벤트 감지 - 외부에서 스크롤 상태를 받지 않을 경우에만 내부적으로 계산
  useEffect(() => {
    // 외부에서 스크롤 상태를 받는 경우 내부 스크롤 이벤트 리스너를 등록하지 않음
    if (externalScrolled !== undefined) return;
    
    const handleScroll = () => {
      setInternalScrolled(window.scrollY > 10);
    };

    // 스크롤 이벤트 디바운싱으로 성능 개선
    let scrollTimer: ReturnType<typeof setTimeout>;
    const debouncedScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(scrollTimer);
    };
  }, [externalScrolled]);

  // 창 크기 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    const handleResize = () => {
      if (!isMobile && !isTablet && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, isTablet, isOpen]);

  // 모바일 메뉴 토글
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // 모바일 메뉴가 열려있을 때 스크롤 방지
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // 내비게이션 링크 클릭 시 모바일 메뉴 닫기
  const handleNavLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = '';
    }
  };
  return (
    <nav className={`vs-code-nav ${isScrolled ? 'scrolled' : ''} ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} aria-label="메인 내비게이션">
      <div className="nav-container">
        <div className="vs-code-logo">
          <a href="/" className="logo-link" aria-label={logoAlt}>
            <img
              src={logo}
              className="logo-image"
              alt={logoAlt}
              width="24"
              height="24"
            />
            <span className="logo-text">Loop</span>
          </a>
          {(isMobile || isTablet) && (
            <button 
              className={`hamburger-menu ${isOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={isOpen}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          )}
        </div>
        
        <div className={`vs-code-nav-items ${isOpen ? 'open' : ''} ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
          <ul className="vs-code-nav-list">            {items.map((item) => (
              <li key={item.id} className="vs-code-nav-item">
                <a 
                  href={item.href} 
                  className={`vs-code-nav-link ${activeItemId === item.id ? 'active' : ''}`}
                  onClick={handleNavLinkClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
            {/* 모바일 화면에서만 vs-code-nav-items 안에 액션 버튼 표시 */}
          {(isMobile || isTablet) && (
            <div className="vs-code-actions mobile">
              <button 
                onClick={toggleTheme} 
                className={`theme-toggle-button mobile ${theme === 'dark' ? 'dark-toggle' : 'light-toggle'}`}
                aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
              <a href="#download" className="vs-code-action-button primary" onClick={handleNavLinkClick}>
                다운로드
              </a>
              <a href="#web-version" className="vs-code-action-button secondary" onClick={handleNavLinkClick}>
                웹으로 사용
              </a>
            </div>
          )}
        </div>
          {/* 태블릿/데스크톱에서만 상단에 액션 버튼 표시 */}
        {!isMobile && !isTablet && (
          <div className={`vs-code-actions ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
            <button 
              onClick={toggleTheme} 
              className={`theme-toggle-button ${theme === 'dark' ? 'dark-toggle' : 'light-toggle'}`}
              aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <a href="#download" className="vs-code-action-button primary">다운로드</a>
            <a href="#web-version" className="vs-code-action-button secondary">웹으로 사용</a>
          </div>
        )}
      </div>
      
      {/* 모바일 메뉴 오픈 시 오버레이 */}
      {isOpen && (isMobile || isTablet) && (
        <div className={`menu-overlay ${theme === 'dark' ? 'dark-overlay' : 'light-overlay'}`} onClick={toggleMenu}></div>
      )}
    </nav>
  );
};

export default NavMenu;