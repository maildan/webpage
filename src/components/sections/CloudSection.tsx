import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { useTheme } from '../../context/ThemeContext';
import { Section, Container, Row, Column } from '../layout/ResponsiveLayout';
import ResponsiveImage from '../common/ResponsiveImage';

/**
 * 클라우드 기능 소개 섹션
 * 반응형 디자인으로 모든 화면 크기에 최적화
 */
const CloudSection: React.FC = () => {
  const { isMobile, isTablet } = useResponsive();
  const { theme } = useTheme();
  
  return (
    <Section className={`cloud-section ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} id="cloud-features">
      <Container>
        <div className="section-header text-center">
          <h2>클라우드로 손쉽게 저장</h2>
          <p>
            어디서나 안전하게 코드와 설정을 동기화하고 액세스하세요
          </p>
        </div>
        
        <Row justifyContent="between" alignItems="center" reverseOnMobile={true}>
          <Column md={6}>
            <div className="cloud-content">
              <h3>어디서나 동일한 환경</h3>
              <p>
                Loop의 클라우드 동기화 기능으로 모든 기기에서 자신의 개발 환경을 그대로 유지할 수 있습니다. 설정, 확장 프로그램, 사용자 스니펫까지 모두 동기화됩니다.
              </p>
              
              <ul className="feature-list">
                <li>모든 설정과 사용자 정의 항목 백업</li>
                <li>여러 기기 간 원활한 전환</li>
                <li>암호화된 데이터 저장으로 보안 유지</li>
                <li>팀과의 설정 공유 지원</li>
              </ul>
              
              <a href="#cloud-sync" className="btn btn-outline">
                클라우드 동기화 시작하기
              </a>
            </div>
          </Column>
          
          <Column md={5}>
            <ResponsiveImage 
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/du9byp6k_expires_30_days.png"
              alt="클라우드 동기화"
              className="cloud-image animate-slide-left"
            />
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

CloudSection.displayName = 'CloudSection';

export default CloudSection;