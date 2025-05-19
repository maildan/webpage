import { useEffect, useRef } from 'react';

/**
 * 스크롤 애니메이션을 위한 커스텀 훅 - 개선된 버전
 * IntersectionObserver를 사용하여 성능 최적화
 * DOM 트리 한 번만 적용되도록 최적화
 * @param {string} selector - 애니메이션을 적용할 요소의 CSS 선택자
 * @param {string} animationClass - 적용할 애니메이션 클래스명
 * @param {Object} options - 추가 옵션 객체
 * @param {number} options.threshold - 요소가 얼마나 보여야 하는지 (0~1)
 * @param {string} options.rootMargin - 관찰 영역의 마진
 * @param {boolean} options.triggerOnce - 한 번만 트리거할지 여부
 * @param {boolean} options.forceVisible - 요소를 강제로 보이게 할지 여부
 */
export const useElementAnimation = (
  selector: string, 
  animationClass: string = 'animated',
  options = {
    threshold: 0.1, // 더 적은 영역이 보여도 트리거
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
    forceVisible: false // 강제 가시성 옵션
  }
) => {
  // 이미 초기화 되었는지 추적
  const initializedRef = useRef(false);
  // 애니메이션이 적용된 요소 추적
  const animatedElementsRef = useRef(new Set<Element>());
  // observer 인스턴스 저장
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // 이미 초기화된 경우 중복 실행 방지
    if (initializedRef.current) return;
    initializedRef.current = true;
    
    // DOM이 완전히 로드된 후 실행
    const onDomReady = () => {
      const elements = document.querySelectorAll(selector);
      if (elements.length === 0) return;
      
      // 요소들이 테마 전환 시 사라지는 문제 해결을 위한 스타일 적용
      elements.forEach(el => {
        if (options.forceVisible) {
          (el as HTMLElement).style.visibility = 'visible';
          (el as HTMLElement).style.display = el.tagName.toLowerCase() === 'div' ? 'block' : 'flex';
          (el as HTMLElement).style.opacity = '1';
        }
      });
      
      // 이전 observer가 있으면 정리
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // 요소가 뷰포트에 들어왔고 아직 애니메이션이 적용되지 않았을 때
          if (entry.isIntersecting && !animatedElementsRef.current.has(entry.target)) {
            entry.target.classList.add(animationClass);
            
            // 강제 가시성 적용
            if (options.forceVisible) {
              (entry.target as HTMLElement).style.visibility = 'visible';
              (entry.target as HTMLElement).style.display = entry.target.tagName.toLowerCase() === 'div' ? 'block' : 'flex';
              (entry.target as HTMLElement).style.opacity = '1';
            }
            
            if (options.triggerOnce) {
              // 한 번만 실행할 경우 Set에 추가하고 관찰 중단
              animatedElementsRef.current.add(entry.target);
              observerRef.current?.unobserve(entry.target);
            }
          } else if (!entry.isIntersecting && !options.triggerOnce && animatedElementsRef.current.has(entry.target)) {
            // 한 번만 실행이 아닐 경우 뷰포트에서 나가면 클래스 제거 (하지만 가시성은 유지)
            entry.target.classList.remove(animationClass);
            animatedElementsRef.current.delete(entry.target);
          }
        });
      }, {
        threshold: options.threshold,
        rootMargin: options.rootMargin
      });
      
      // 모든 대상 요소 관찰 시작
      elements.forEach(element => observerRef.current?.observe(element));
    };

    // DOM이 이미 로드되었는지 확인하고 적절한 시점에 초기화
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', onDomReady);
    } else {
      onDomReady();
    }
    
    // 클린업 시 관찰 종료
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      
      // DOMContentLoaded 이벤트 리스너 제거
      document.removeEventListener('DOMContentLoaded', onDomReady);
    };
  }, [selector, animationClass, options.threshold, options.rootMargin, options.triggerOnce, options.forceVisible]);
};
