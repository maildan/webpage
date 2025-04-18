import React, { useState, useCallback } from 'react';
import { useResponsive } from '../../hooks/useResponsive';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [input1, setInput1] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { isMobile, isTablet, isMobileOrTablet } = useResponsive();

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInput1(event.target.value);
  }, []);

  const handleDownloadClick = useCallback(() => {
    alert("Pressed!");
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <div className="row-view header">
      {isMobileOrTablet && (
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}

      <div className={`row-view2 ${mobileMenuOpen && isMobileOrTablet ? 'mobile-menu-open' : ''}`}>
        <span className="text">{"Docs"}</span>
        <span className="text2">{"Updates"}</span>
        <div className="column">
          <div className="view2">
            <span className="text3">{"FAQ"}</span>
          </div>
        </div>
        <span className="text4">{"GitHub Copilot"}</span>
      </div>
      
      {!isMobile && (
        <img
          src={
            "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/embfm61j_expires_30_days.png"
          }
          className="image"
          alt="Theme"
          loading="lazy"
        />
      )}
      
      <div className="row-view3">
        <img
          src={
            "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/77qe7xx5_expires_30_days.png"
          }
          className="image2"
          alt="Search icon"
          loading="lazy"
        />
        <input
          placeholder={"Search Docs"}
          value={input1}
          onChange={handleInputChange}
          className="input"
        />
      </div>
      
      <button
        className="button"
        onClick={handleDownloadClick}
      >
        <span className="text5">{isMobile ? "Download" : "Download"}</span>
      </button>
    </div>
  );
};

Header.displayName = 'Header';

export default Header;