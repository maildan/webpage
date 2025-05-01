import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';

interface HeaderProps {
  // 필요한 props 정의
}

const Header: React.FC<HeaderProps> = () => {
  // isLargeScreen을 isLarge로 수정 (useResponsive 훅에서 이 이름으로 제공됨)
  const { isMobile, isLarge } = useResponsive();
  
  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          {/* 반응형 로고 처리 */}
          <img 
            src="/logo.svg" 
            alt="Loop Logo" 
            className={`logo ${isMobile ? 'logo-small' : ''}`} 
          />
        </div>
        
        <nav className={`nav-menu ${isMobile ? 'mobile-nav' : ''}`}>
          {/* 모바일 메뉴 토글 버튼 */}
          {isMobile && (
            <button className="mobile-menu-toggle" aria-label="메뉴 열기">
              <span className="menu-icon"></span>
            </button>
          )}
          
          {/* 데스크탑 메뉴는 항상 표시하고, 모바일에서는 토글 시 표시 */}
          <ul className={`nav-list ${isMobile ? 'nav-mobile' : ''}`}>
            <li className="nav-item"><a href="#features">기능</a></li>
            <li className="nav-item"><a href="#pricing">요금제</a></li>
            <li className="nav-item"><a href="#support">지원</a></li>
            {isLarge && (
              <li className="nav-item"><a href="#resources">리소스</a></li>
            )}
          </ul>
        </nav>
        
        <div className="header-actions">
          <button className="btn btn-login">로그인</button>
          {!isMobile && (
            <button className="btn btn-primary">시작하기</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;