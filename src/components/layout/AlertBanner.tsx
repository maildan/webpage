import React, { useState, useEffect, useCallback } from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { useTheme } from '../../context/ThemeContext';
import './AlertBanner.css';

interface AlertBannerProps {
  message?: string;
  linkText?: string;
  linkUrl?: string;
  variant?: 'info' | 'warning' | 'success' | 'error';
  onClose?: () => void;
  autoClose?: boolean;
  autoCloseTime?: number;
}

/**
 * VS Code 스타일의 알림 배너 컴포넌트
 * 반응형으로 구현되어 모든 화면 크기에 최적화됨
 */
const AlertBanner: React.FC<AlertBannerProps> = ({ 
  message = "Loop의 최신 업데이트가 출시되었습니다!",
  linkText = "지금 확인하기",
  linkUrl = "#download",
  variant = "info",
  onClose,
  autoClose = false,
  autoCloseTime = 5000
}) => {  
  const [isVisible, setIsVisible] = useState(true);
  const { isMobile } = useResponsive();
  const { theme } = useTheme();
  
  // 배너 닫기 핸들러 - useCallback으로 메모이제이션
  const handleClose = useCallback(() => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  }, [onClose]);
  
  // 자동 닫기 타이머 설정
  useEffect(() => {
    if (autoClose && isVisible) {
      const timer = setTimeout(handleClose, autoCloseTime);
      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseTime, isVisible, handleClose]);
  
  // 배너가 보이지 않으면 null 반환
  if (!isVisible) {
    return null;
  }
  
  // 배너 색상 설정
  const getVariantStyles = () => {
    switch(variant) {
      case 'warning':
        return 'alert-banner-warning';
      case 'success':
        return 'alert-banner-success';
      case 'error':
        return 'alert-banner-error';
      case 'info':
      default:
        return 'alert-banner-info';
    }
  };  return (
    <div className={`alert-banner ${getVariantStyles()} ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <div className="alert-container">
        <div className="alert-content">
          <span className="alert-message">
            {message}
          </span>
          
          {/* 태블릿/데스크톱에서만 구분자 표시 */}
          {!isMobile && (
            <span className="alert-separator">•</span>
          )}
          
          <a href={linkUrl} className="alert-link">
            {linkText}
          </a>
          
          <button 
            className="alert-close" 
            onClick={handleClose}
            aria-label="알림 닫기"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertBanner;