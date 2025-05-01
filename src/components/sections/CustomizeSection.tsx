import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { Section, Container, Row, Column } from '../layout/ResponsiveLayout';
import ResponsiveImage from '../common/ResponsiveImage';

/**
 * 메인 기능 섹션 컴포넌트
 * 반응형 디자인으로 모든 화면 크기에 최적화
 */
const CustomizeSection: React.FC = () => {
  const { isMobile, isTablet } = useResponsive();
  
  return (
    <Section className="features-highlight-section" id="features-highlight">
      <Container>
        <div className="section-header text-center">
          <h2 className="text29">강력한 기능</h2>
          <p className="text30">
            최고의 코딩 경험을 위한 Loop의 특별한 기능
          </p>
        </div>
        
        <Row justifyContent="between" alignItems="center" reverseOnMobile={isMobile}>
          <Column md={5}>
            <div className="features-content">
              <h3>AI 기반 코드 완성</h3>
              <p>
                Loop의 AI 어시스턴트가 코드를 더 빠르고 정확하게 작성할 수 있도록 도와줍니다.
              </p>
              
              <ul className="feature-list">
                <li>실시간 코드 제안 및 자동 완성</li>
                <li>컨텍스트 기반 코드 분석</li>
                <li>코드 품질 및 보안 개선 제안</li>
              </ul>
            </div>
          </Column>
          
          <Column md={6}>
            <ResponsiveImage 
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/1mrgcw8t_expires_30_days.png"
              alt="AI 기반 코드 완성"
              className="features-image"
            />
          </Column>
        </Row>
        
        <Row justifyContent="between" alignItems="center" className="mt-5" reverseOnMobile={!isMobile}>
          <Column md={6}>
            <ResponsiveImage 
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ncTSX1FLQH/jlgkh508_expires_30_days.png"
              alt="실시간 협업 기능"
              className="features-image"
            />
          </Column>
          
          <Column md={5}>
            <div className="features-content">
              <h3>실시간 협업</h3>
              <p>
                팀과 함께 실시간으로 코드를 작성하고 편집할 수 있습니다.
              </p>
              
              <ul className="feature-list">
                <li>다중 사용자 동시 편집</li>
                <li>실시간 코멘트 및 코드 리뷰</li>
                <li>화면 공유 및 원격 디버깅</li>
              </ul>
            </div>
          </Column>
        </Row>
        
        {/* 모바일에서만 보이는 CTA 버튼 */}
        {isMobile && (
          <div className="text-center mt-4">
            <a href="#download" className="btn btn-primary">
              지금 시작하기
            </a>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default CustomizeSection;