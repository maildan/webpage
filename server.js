// /**
//  * MCP(Model Context Protocol) 서버 구현
//  * GitHub Copilot과 같은 AI 도구와의 통신을 위한 SSE(Server-Sent Events) 엔드포인트 제공
//  */
// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const http = require('http');
// const WebSocket = require('ws');
// require('dotenv').config(); // .env 파일 로드

// // 환경 변수 설정 - MCP 서버는 별도 포트 사용
// const MCP_PORT = process.env.MCP_PORT || 52698; // MCP 전용 포트 사용 (React 포트 3001과 다름)

// // Express 앱 생성
// const app = express();
// console.log('MCP 서버 앱 생성됨');

// // HTTP 서버 생성
// const server = http.createServer(app);

// // WebSocket 서버 설정
// const wss = new WebSocket.Server({ server });
// console.log('WebSocket 서버 설정됨');

// // CORS 설정
// app.use(cors({
//   origin: '*', // 모든 도메인에서 접근 허용
//   methods: ['GET', 'POST', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));
// console.log('CORS 미들웨어 설정됨'); // 추가 로그

// // Express 내장 body-parser 사용
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ extended: true, limit: '50mb' }));
// console.log('Body parser 미들웨어 설정됨'); // 추가 로그

// // --- 라우트 정의 시작 ---

// // 루트 경로 테스트 핸들러 (디버깅용)
// app.get('/', (req, res) => {
//   console.log('루트 경로 (/) GET 요청 수신'); // 추가 로그
//   res.send('서버가 정상 작동 중입니다. (디버깅용)');
// });

// // WebSocket 연결 처리
// wss.on('connection', (ws) => {
//   console.log('새로운 WebSocket 연결 수립됨');
  
//   // 연결 성공 메시지 전송
//   ws.send(JSON.stringify({
//     type: 'connection',
//     status: 'established',
//     server: 'Loop Server',
//     timestamp: Date.now()
//   }));
  
//   // 메시지 수신 이벤트 처리
//   ws.on('message', (message) => {
//     console.log('메시지 수신:', message.toString());
    
//     try {
//       const data = JSON.parse(message.toString());
      
//       // 메시지 타입에 따른 처리
//       if (data.type === 'ping') {
//         ws.send(JSON.stringify({
//           type: 'pong',
//           timestamp: Date.now()
//         }));
//       }
//     } catch (err) {
//       console.error('메시지 처리 중 오류 발생:', err);
//     }
//   });
  
//   // 연결 종료 이벤트 처리
//   ws.on('close', () => {
//     console.log('WebSocket 연결 종료됨');
//   });
  
//   // 에러 이벤트 처리
//   ws.on('error', (error) => {
//     console.error('WebSocket 에러 발생:', error);
//   });
  
//   // 30초마다 핑 메시지 전송 (연결 유지)
//   const pingInterval = setInterval(() => {
//     if (ws.readyState === ws.OPEN) {
//       ws.send(JSON.stringify({ type: 'ping', timestamp: Date.now() }));
//     } else {
//       clearInterval(pingInterval);
//     }
//   }, 30000);
// });

// // MCP 엔드포인트: SSE 스트림 제공
// app.get('/mcp/', (req, res) => {
//   console.log(`>>>>>> /mcp/ GET 요청 수신! (${req.originalUrl}) <<<<<<`);
//   // SSE 헤더 설정
//   res.setHeader('Content-Type', 'text/event-stream');
//   res.setHeader('Cache-Control', 'no-cache');
//   res.setHeader('Connection', 'keep-alive');
//   res.status(200); // 명시적으로 200 상태 코드 설정

//   const intervalId = setInterval(() => {
//     res.write(`data: ${JSON.stringify({ type: 'ping', timestamp: Date.now() })}\n\n`);
//   }, 30000);

//   req.on('close', () => {
//     clearInterval(intervalId);
//     console.log('클라이언트 연결 종료 (/mcp/)');
//   });

//   res.write(`data: ${JSON.stringify({
//     type: 'connection',
//     status: 'established',
//     server: 'Loop MCP Server',
//     timestamp: Date.now()
//   })}\n\n`);

//   console.log(`SSE 스트림 시작됨 (${req.originalUrl})`);
// });

// // MCP POST 엔드포인트
// app.post('/mcp/', (req, res) => {
//   console.log(`>>>>>> /mcp/ POST 요청 수신! (${req.originalUrl}) <<<<<<`);
//   res.json({ message: 'POST 요청 처리됨' });
// });

// // Static 파일 서빙 (React 빌드 결과물)
// app.use(express.static(path.join(__dirname, 'build')));

// // 일반 경로 요청을 React 앱으로 포워딩 (SPA 지원)
// app.get('/*', (req, res, next) => {
//   // /mcp로 시작하는 요청은 MCP 핸들러로 넘김
//   if (req.path.startsWith('/mcp')) {
//     return next();
//   }
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// // --- 라우트 정의 끝 ---

// // 서버 시작
// server.listen(PORT, () => {
//   console.log(`====================================================`);
//   console.log(`서버가 시작되었습니다: http://localhost:${PORT}/`);
//   console.log(`WebSocket 엔드포인트: ws://localhost:${PORT}/`);
//   console.log(`MCP 엔드포인트: http://localhost:${PORT}/mcp/`);
//   console.log(`====================================================`);
// });

// // 오류 처리 미들웨어 (선택적)
// app.use((err, req, res, next) => {
//   console.error("오류 발생:", err.stack);
//   res.status(500).send('서버 오류 발생!');
// });