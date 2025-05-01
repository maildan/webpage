import { render, screen } from '@testing-library/react';
import App from './App';

global.IntersectionObserver = class IntersectionObserver {
  

  disconnect() {
  return null;
  }

  observe() {
  return null;
  }

  takeRecords() {
  return null;
  }

  unobserve() {
  return null;
  }
};

test('renders learn react link', () => {
  render(<App />);
  // h1 태그를 명시적으로 찾아 테스트합니다.
  const linkElement = screen.getByRole('heading', { level: 1, name: /모든 채팅을 한곳에. Loop/i });
  expect(linkElement).toBeInTheDocument();
});
