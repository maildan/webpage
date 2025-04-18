@echo off
REM 서버 시작 스크립트

REM 현재 디렉토리 경로 저장
set APP_DIR=%cd%

REM 환경 변수 설정 - OpenSSL 레거시 프로바이더 사용
set NODE_OPTIONS=--openssl-legacy-provider
REM 환경 변수 설정 - HOST를 172.16.1.235로 설정하여 내부 IP에서 실행
set HOST=172.16.1.235
set PORT=3001
set REACT_APP_DOMAIN=cloop.kro.kr
set PUBLIC_URL=http://cloop.kro.kr
set DANGEROUSLY_DISABLE_HOST_CHECK=true
set BROWSER=none

REM Nginx 경로 설정
set NGINX_DIR=C:\nginx

REM React 앱 빌드 (프로덕션 환경에서 사용)
echo React 앱 빌드 중...
npm run build

REM Nginx 설정 파일 복사
echo Nginx 설정 파일 복사 중...
copy /Y "%APP_DIR%\nginx.conf" "%NGINX_DIR%\conf\nginx.conf"

REM Nginx 재시작
echo Nginx 재시작 중...
cd %NGINX_DIR%
taskkill /F /IM nginx.exe 2>nul
timeout /t 1 >nul
start nginx

REM 원래 디렉토리로 돌아오기
cd %APP_DIR%

REM 외부 접속 안내
echo.
echo Nginx가 성공적으로 시작되었습니다.
echo 다음 주소로 애플리케이션에 접속할 수 있습니다:
echo   - 외부 접속:
echo     - http://cloop.kro.kr 또는 http://116.120.104.34
echo   - 로컬 테스트:
echo     - http://localhost:8080
echo.

REM React 개발 서버 시작
echo React 개발 서버 시작 중...
start "" npm start

REM 5초 대기 후 브라우저에서 도메인으로 접속
echo 5초 후 브라우저에서 애플리케이션을 열고 있습니다...
timeout /t 5 >nul
start http://cloop.kro.kr