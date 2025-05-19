import { useEffect } from 'react';

/**
 * 스크롤 애니메이션을 위한 커스텀 훅
 * IntersectionObserver를 사용하여 성능 최적화
 * @param {string} selector - 애니메이션을 적용할 요소의 CSS 선택자
 * @param {string} animationClass - 적용할 애니메이션 클래스명
 * @param {Object} options - 추가 옵션 객체
 * @param {number} options.threshold - 요소가 얼마나 보여야 하는지 (0~1)
 * @param {string} options.rootMargin - 관찰 영역의 마진
 * @param {boolean} options.triggerOnce - 한 번만 트리거할지 여부
 */
export const useScrollAnimation = (
  selector: string, 
  animationClass: string = 'animated',
  options = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true
  }
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;
    
    // 이미 애니메이션이 적용된 요소 추적
    const animatedElements = new Set<Element>();
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // 요소가 뷰포트에 들어왔고 아직 애니메이션이 적용되지 않았을 때
        if (entry.isIntersecting && !animatedElements.has(entry.target)) {
          entry.target.classList.add(animationClass);
          
          if (options.triggerOnce) {
            // 한 번만 실행할 경우 Set에 추가하고 관찰 중단
            animatedElements.add(entry.target);
            observer.unobserve(entry.target);
          }
        } else if (!entry.isIntersecting && !options.triggerOnce && animatedElements.has(entry.target)) {
          // 한 번만 실행이 아닐 경우 뷰포트에서 나가면 클래스 제거
          entry.target.classList.remove(animationClass);
          animatedElements.delete(entry.target);
        }
      });
    }, {
      threshold: options.threshold,
      rootMargin: options.rootMargin
    });
    
    // 모든 대상 요소 관찰 시작
    elements.forEach(element => observer.observe(element));
    
    // 클린업 시 관찰 종료
    return () => {
      observer.disconnect();
    };
  }, [selector, animationClass, options.threshold, options.rootMargin, options.triggerOnce]);
};
