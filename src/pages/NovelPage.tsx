import React from 'react';
import { Section, Container, Row, Column } from '../components/layout/ResponsiveLayout';
import ResponsiveImage from '../components/common/ResponsiveImage';

const NovelPage: React.FC = () => {
  return (
    <div className="novel-page">
      <Section className="novel-hero">
        <Container>
          <Row justifyContent="between" alignItems="center" reverseOnMobile={true}>
            <Column md={6}>
              <h1>Novel</h1>
              <p className="hero-subtitle">작가를 위한 완벽한 글쓰기 도우미</p>
              <p className="hero-description">
                Google Docs에서 작업하는 모든 문서를 자동으로 모니터링하여 백업하고,
                타자 속도와 작업 패턴을 분석하여 당신의 글쓰기 습관을 개선하세요.
                AI를 활용한 맞춤법 검사와 문장 추천으로 더 나은 글쓰기가 가능합니다.
              </p>
              <div className="cta-buttons">
                <a href="/download" className="btn btn-primary">다운로드</a>
                <a href="/cloud" className="btn btn-outline">클라우드 보기</a>
              </div>
            </Column>
            <Column md={6}>
              <ResponsiveImage 
                src="/images/novel-app-screenshot.png" 
                alt="Novel 앱 스크린샷"
                className="hero-image"
              />
            </Column>
          </Row>
        </Container>
      </Section>
      
      <Section className="features-section">
        <Container>
          <h2 className="section-title text-center">Novel 주요 기능</h2>
          
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="icon-docs"></i>
              </div>
              <div className="feature-content">
                <h3>Google Docs 실시간 모니터링</h3>
                <p>
                  Novel은 Google Docs에서 작업 중인 문서를 자동으로 감지하고 모니터링합니다.
                  문서가 변경될 때마다 안전하게 백업되어 작업 내용이 손실되지 않습니다.
                </p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <i className="icon-stats"></i>
              </div>
              <div className="feature-content">
                <h3>상세한 타자 분석</h3>
                <p>
                  분당 타자 수, 하루 총 타자 수, 작업 시간 등 다양한 통계를 그래프로 제공합니다.
                  언제 가장 생산적인지, 어떤 패턴으로 작업하는지 파악하세요.
                </p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <i className="icon-ai"></i>
              </div>
              <div className="feature-content">
                <h3>AI 기반 글쓰기 도우미</h3>
                <p>
                  맞춤법과 문법 오류를 자동으로 감지하고 수정 제안을 제공합니다.
                  더 나은 문장 구조와 표현을 위한 대안을 추천받을 수 있습니다.
                </p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <i className="icon-cloud"></i>
              </div>
              <div className="feature-content">
                <h3>클라우드 백업 및 동기화</h3>
                <p>
                  모든 문서가 클라우드에 자동으로 백업되어 어디서든 접근할 수 있습니다.
                  여러 기기에서 작업해도 항상 최신 상태를 유지합니다.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      <Section className="workflow-section">
        <Container>
          <h2 className="section-title text-center">작가를 위한 완벽한 워크플로우</h2>
          
          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="step-number">1</div>
              <h3>앱 설치 및 연결</h3>
              <p>Novel 앱을 설치하고 Google 계정에 연결하세요.</p>
            </div>
            
            <div className="workflow-step">
              <div className="step-number">2</div>
              <h3>문서 모니터링 시작</h3>
              <p>모니터링하고 싶은 문서 폴더를 선택하거나 자동 감지 기능을 활성화하세요.</p>
            </div>
            
            <div className="workflow-step">
              <div className="step-number">3</div>
              <h3>평소처럼 글쓰기</h3>
              <p>Google Docs에서 평소와 같이 글을 쓰세요. Novel이 백그라운드에서 모든 것을 처리합니다.</p>
            </div>
            
            <div className="workflow-step">
              <div className="step-number">4</div>
              <h3>통계 및 개선점 확인</h3>
              <p>Novel 앱이나 Loop 웹사이트에서 통계와 AI 추천 사항을 확인하세요.</p>
            </div>
          </div>
        </Container>
      </Section>
      
      <Section className="testimonials-section">
        <Container>
          <h2 className="section-title text-center">작가들의 리뷰</h2>
          
          <div className="testimonials">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Novel 덕분에 글쓰기 습관이 완전히 바뀌었어요. 매일 얼마나 작업했는지 확인하는 것이 큰 동기부여가 됩니다."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="/images/author1.jpg" alt="작가 이미지" />
                </div>
                <div className="author-info">
                  <h4>김민지</h4>
                  <p>소설가</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"AI 기반 맞춤법 검사와 문장 추천 기능이 정말 훌륭해요. 전문 교정 편집자가 옆에 있는 것 같은 느낌입니다."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="/images/author2.jpg" alt="작가 이미지" />
                </div>
                <div className="author-info">
                  <h4>이준호</h4>
                  <p>웹소설 작가</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"자동 백업 기능 덕분에 한 번의 문서 손실도 경험하지 않았어요. 작가에게는 정말 필수적인 도구입니다."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="/images/author3.jpg" alt="작가 이미지" />
                </div>
                <div className="author-info">
                  <h4>박서연</h4>
                  <p>시나리오 작가</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      <Section className="cta-section">
        <Container>
          <div className="cta-content text-center">
            <h2>지금 바로 Novel로 더 효율적인 글쓰기를 경험하세요</h2>
            <p>30일 무료 체험으로 Novel의 모든 기능을 사용해 보세요.</p>
            <a href="/download" className="btn btn-lg btn-primary">다운로드</a>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default NovelPage;
