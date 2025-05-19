import React from 'react';
import { Section, Container, Row, Column } from '../layout/ResponsiveLayout';
import ResponsiveImage from '../common/ResponsiveImage';
import { useTheme } from '../../context/ThemeContext';
import { useResponsive } from '../../hooks/useResponsive';
import { useElementAnimation } from '../../hooks/useElementAnimation';
import './DownloadSection.css';

/**
 * 다운로드 페이지 섹션
 * 앱 다운로드 링크와 정보 제공
 */
const DownloadSection: React.FC = () => {
  const { theme } = useTheme();
  const { isMobile } = useResponsive();
  
  // 다운로드 섹션 요소 애니메이션 적용
  useElementAnimation('.download-section', 'section-visible', { 
    threshold: 0.1, 
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
    forceVisible: true 
  });
  
  // 설치 도움말 요소가 사라지는 문제 해결
  useElementAnimation('.installation-help', 'visible', {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
    forceVisible: true
  });
  
  // 시스템 요구 사항 행 요소가 사라지는 문제 해결
  useElementAnimation('.requirements-row', 'visible', {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
    forceVisible: true
  });
  
  return (
    <Section className={`download-section section ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} id="download">
      <Container>
        <div className="section-header text-center">
          <h2 className="section-title animate-fade-in">Loop 앱 다운로드</h2>
          <p className="section-subtitle animate-fade-in delay-100">당신에게 필요한 앱을 선택하세요</p>
        </div>
        
        <div className="download-options">
          <Row className="download-row">
            <Column md={6} sm={12} xs={12} className={`download-card-column ${isMobile ? 'animate-fade-in' : 'animate-slide-up delay-200'}`}>
              <div className="download-card">
                <div className="download-card-header">
                  <h3>Novel</h3>
                  <p className="subtitle">작가를 위한 글쓰기 도우미</p>
                </div>
                
                <div className="download-card-body">
                  <div className="app-icon">
                    <ResponsiveImage 
                      src="/images/novel-app-icon.png" 
                      alt="Novel 앱 아이콘"
                    />
                  </div>
                  
                  <ul className="feature-list">
                    <li>Google Docs 문서 모니터링</li>
                    <li>타자 속도 및 작업 패턴 분석</li>
                    <li>AI 기반 맞춤법 및 문장 추천</li>
                    <li>클라우드 백업 및 동기화</li>
                  </ul>
                  
                  <div className="platform-downloads">
                    <Row className="platform-row">
                      <Column md={4} sm={12} xs={12} className="download-platform-column">
                        <div className="download-platform">
                          <h4>Windows</h4>
                          <a href="#download-novel-windows" className="btn btn-primary btn-download">
                            다운로드
                          </a>
                          <span className="version">v1.2.5</span>
                        </div>
                      </Column>
                      
                      <Column md={4} sm={12} xs={12} className="download-platform-column">
                        <div className="download-platform">
                          <h4>macOS</h4>
                          <a href="#download-novel-mac" className="btn btn-primary btn-download">
                            다운로드
                          </a>
                          <span className="version">v1.2.5</span>
                        </div>
                      </Column>
                      
                      <Column md={4} sm={12} xs={12} className="download-platform-column">
                        <div className="download-platform">
                          <h4>Linux</h4>
                          <a href="#download-novel-linux" className="btn btn-primary btn-download">
                            다운로드
                          </a>
                          <span className="version">v1.2.5</span>
                        </div>
                      </Column>
                    </Row>
                  </div>
                </div>
                
                <div className="download-card-footer">
                  <a href="#novel-release-notes" className="link-release-notes">릴리스 노트</a>
                  <a href="#novel-older-versions" className="link-older-versions">이전 버전</a>
                </div>
              </div>
            </Column>
            
            <Column md={6} sm={12} xs={12} className={`download-card-column ${isMobile ? 'animate-fade-in delay-100' : 'animate-slide-up delay-300'}`}>
              <div className="download-card">
                <div className="download-card-header">
                  <h3>Pro</h3>
                  <p className="subtitle">채팅 로그 관리 솔루션</p>
                </div>
                
                <div className="download-card-body">
                  <div className="app-icon">
                    <ResponsiveImage 
                      src="/images/pro-app-icon.png" 
                      alt="Pro 앱 아이콘"
                    />
                  </div>
                  
                  <ul className="feature-list">
                    <li>카카오톡, Discord 채팅 로그 관리</li>
                    <li>앱 내에서 메시지 전송</li>
                    <li>AI 기반 대화 내용 요약</li>
                    <li>클라우드 백업 및 동기화</li>
                  </ul>
                  
                  <div className="platform-downloads">
                    <Row className="platform-row">
                      <Column md={4} sm={12} xs={12} className="download-platform-column">
                        <div className="download-platform">
                          <h4>Windows</h4>
                          <a href="#download-pro-windows" className="btn btn-primary btn-download">
                            다운로드
                          </a>
                          <span className="version">v1.3.2</span>
                        </div>
                      </Column>
                      
                      <Column md={4} sm={12} xs={12} className="download-platform-column">
                        <div className="download-platform">
                          <h4>macOS</h4>
                          <a href="#download-pro-mac" className="btn btn-primary btn-download">
                            다운로드
                          </a>
                          <span className="version">v1.3.2</span>
                        </div>
                      </Column>
                      
                      <Column md={4} sm={12} xs={12} className="download-platform-column">
                        <div className="download-platform">
                          <h4>Linux</h4>
                          <a href="#download-pro-linux" className="btn btn-primary btn-download">
                            다운로드
                          </a>
                          <span className="version">v1.3.2</span>
                        </div>
                      </Column>
                    </Row>
                  </div>
                </div>
                
                <div className="download-card-footer">
                  <a href="#pro-release-notes" className="link-release-notes">릴리스 노트</a>
                  <a href="#pro-older-versions" className="link-older-versions">이전 버전</a>
                </div>
              </div>
            </Column>
          </Row>
        </div>
        
        <div className="system-requirements mt-lg">
          <h3 className="requirements-title animate-fade-in">시스템 요구 사항</h3>
          
          <Row className="requirements-row">
            <Column md={4} sm={12} xs={12} className={`requirements-column ${isMobile ? 'animate-fade-in' : 'animate-fade-in delay-300'}`}>
              <div className="requirements-platform">
                <h4>Windows</h4>
                <ul>
                  <li>Windows 10 이상</li>
                  <li>4GB RAM 이상</li>
                  <li>500MB 디스크 공간</li>
                  <li>인터넷 연결</li>
                </ul>
              </div>
            </Column>
            
            <Column md={4} sm={12} xs={12} className={`requirements-column ${isMobile ? 'animate-fade-in delay-100' : 'animate-fade-in delay-400'}`}>
              <div className="requirements-platform">
                <h4>macOS</h4>
                <ul>
                  <li>macOS 11.0 이상</li>
                  <li>4GB RAM 이상</li>
                  <li>500MB 디스크 공간</li>
                  <li>인터넷 연결</li>
                </ul>
              </div>
            </Column>
            
            <Column md={4} sm={12} xs={12} className={`requirements-column ${isMobile ? 'animate-fade-in delay-200' : 'animate-fade-in delay-500'}`}>
              <div className="requirements-platform">
                <h4>Linux</h4>
                <ul>
                  <li>Ubuntu 20.04 이상</li>
                  <li>4GB RAM 이상</li>
                  <li>500MB 디스크 공간</li>
                  <li>인터넷 연결</li>
                </ul>
              </div>
            </Column>
          </Row>
        </div>
        
        <div className="installation-help mt-lg text-center">
          <h3 className="installation-title animate-fade-in">설치에 도움이 필요하세요?</h3>
          <p className="installation-desc animate-fade-in delay-100">Loop 앱 설치 및 설정에 관한 자세한 안내는 우리의 문서 센터를 참조하세요.</p>
          <a href="#installation-guide" className="btn btn-outline animate-fade-in delay-200">설치 가이드 보기</a>
        </div>
      </Container>
    </Section>
  );
};

export default DownloadSection;
