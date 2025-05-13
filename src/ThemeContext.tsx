import React, { createContext, useContext, useState, useEffect } from 'react';

// 테마 타입 정의
export type ThemeType = 'light' | 'dark';

// 테마 컨텍스트 인터페이스 정의
interface ThemeContextProps {
  theme: ThemeType;
  toggleTheme: () => void;
}

// 테마 컨텍스트 생성
export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {},
});

// 테마 컨텍스트 사용을 위한 훅
export const useTheme = () => useContext(ThemeContext);

// 테마 제공자 컴포넌트
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 로컬 스토리지에서 테마 값을 읽어오거나 기본값으로 'light' 사용
  const [theme, setTheme] = useState<ThemeType>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as ThemeType;
      return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  // 테마 전환 함수
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // 테마 변경 시 로컬 스토리지에 저장하고 body 클래스 업데이트
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
      
      // body에 테마 클래스 적용
      document.body.classList.remove('light-theme', 'dark-theme');
      document.body.classList.add(`${theme}-theme`);
    }
  }, [theme]);

  // 브라우저의 색 구성표 변경 감지
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e: MediaQueryListEvent) => {
        setTheme(e.matches ? 'dark' : 'light');
      };
      
      // 변경 이벤트 리스너 등록
      mediaQuery.addEventListener('change', handleChange);
      
      // 정리 함수
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};