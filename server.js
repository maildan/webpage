/**
 * MCP(Model Context Protocol) 서버 구현
 * GitHub Copilot과 같은 AI 도구와의 통신을 위한 SSE(Server-Sent Events) 엔드포인트 제공
 */
const express = require('express');
const cors = require('cors');
const path = require('path'); // path는 여전히 필요할 수 있음

// 환경 변수 설정
const PORT = process.env.PORT || 52698; // MCP 기본 포트

// Express 앱 생성
const app = express();
console.log('Express 앱 생성됨'); // 추가 로그

// CORS 설정
app.use(cors({
  origin: '*', // 모든 도메인에서 접근 허용
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
console.log('CORS 미들웨어 설정됨'); // 추가 로그

// Express 내장 body-parser 사용
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
console.log('Body parser 미들웨어 설정됨'); // 추가 로그

// --- 라우트 정의 시작 ---

// 루트 경로 테스트 핸들러 (디버깅용)
app.get('/', (req, res) => {
  console.log('루트 경로 (/) GET 요청 수신'); // 추가 로그
  res.send('MCP 서버 루트 응답 (디버깅용)');
});

// MCP 엔드포인트: SSE 스트림 제공
app.get('/mcp/', (req, res) => {
  console.log(`>>>>>> /mcp/ GET 요청 수신! (${req.originalUrl}) <<<<<<`);
  // SSE 헤더 설정
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.status(200); // 명시적으로 200 상태 코드 설정

  const intervalId = setInterval(() => {
    res.write(`data: ${JSON.stringify({ type: 'ping', timestamp: Date.now() })}\n\n`);
  }, 30000);

  req.on('close', () => {
    clearInterval(intervalId);
    console.log('클라이언트 연결 종료 (/mcp/)');
  });

  res.write(`data: ${JSON.stringify({
    type: 'connection',
    status: 'established',
    server: 'Loop MCP Server',
    timestamp: Date.now()
  })}\n\n`);

  console.log(`SSE 스트림 시작됨 (${req.originalUrl})`);
});

// MCP POST 엔드포인트
app.post('/mcp/', (req, res) => {
  console.log(`>>>>>> /mcp/ POST 요청 수신! (${req.originalUrl}) <<<<<<`);
  res.json({ message: 'POST 요청 처리됨' });
});

// Static 파일 서빙 (React 빌드 결과물)
app.use(express.static(path.join(__dirname, 'build')));

// --- Catch-all 라우트 임시 제거 ---

// --- 라우트 정의 끝 ---

// 서버 시작
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`MCP 서버가 시작되었습니다: http://localhost:${PORT}/`);
  console.log(`MCP 엔드포인트: http://localhost:${PORT}/mcp/`);
  console.log(`====================================================`);
});

// 오류 처리 미들웨어 (선택적)
app.use((err, req, res, next) => {
  console.error("오류 발생:", err.stack);
  res.status(500).send('서버 오류 발생!');
});