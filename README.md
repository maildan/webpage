# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# loop_web

## Nginx 통합 서버 설정 가이드

### 개요
이 프로젝트는 Nginx를 사용하여 개발 서버를 외부에서 접근 가능하도록 설정하였습니다. Nginx는 React 개발 서버로 요청을 프록시하여 외부 IP와 도메인을 통해 애플리케이션에 접근할 수 있게 합니다.

### 필수 요구사항
- Node.js 및 npm 설치
- Nginx 설치 (C:\nginx 경로에 설치 필요)

### 설정 파일
- `nginx.conf`: Nginx 서버 설정 파일
- `run_server.bat`: React 개발 서버와 Nginx를 함께 실행하는 배치 스크립트

### 서버 실행 방법
1. `run_server.bat` 파일을 더블클릭하여 실행하거나 명령 프롬프트에서 다음 명령어를 실행합니다:
   ```
   run_server.bat
   ```

2. 또는 다음 단계를 수동으로 실행할 수 있습니다:
   ```
   # Nginx 설정 파일 복사
   copy nginx.conf C:\nginx\conf\nginx.conf
   
   # Nginx 서버 재시작
   cd C:\nginx
   nginx -s stop
   nginx
   
   # React 개발 서버 실행
   npm start
   ```

### 접속 주소
- 로컬 접속: http://localhost
- 외부 접속: 
  - 도메인: http://cloop.kro.kr 
  - IP: http://116.120.104.34

### 서버 설정 정보
- React 개발 서버: localhost:3001
- Nginx 리버스 프록시: 포트 80
- API 서버: http://116.120.104.34:3001/api/

### 주의사항
- 외부에서 접속하기 위해서는 방화벽에서 80 포트가 열려 있어야 합니다.
- 도메인(cloop.kro.kr)이 현재 IP로 올바르게 설정되어 있어야 합니다.
- 프로덕션 환경에서는 HTTPS 설정을 추가하는 것을 권장합니다.
