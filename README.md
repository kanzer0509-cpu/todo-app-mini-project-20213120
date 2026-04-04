# 미니 프로젝트: 풀스택 Todo 리스트 앱 만들기 & Vercel 배포

## 프로젝트 소개
프론트엔드(React + Vite), 백엔드(Express), 데이터베이스(MongoDB Atlas)를 연결한 Todo 리스트 웹 앱입니다.
사용자는 할 일을 입력하여 추가, 완료 여부를 체크하고 삭제할 수 있습니다.

## Vercel 배포 링크
https://todo-app-mini-project-20213120.vercel.app

## 사용 기술
- frontend : React + Vive
- backend : Node.js + Express
- database : MongoDB Atlas
- deployment : Vercel

## 기능
- Todo 항목 추가
- Todo 목록 조회
- Todo 완료 체크
- Todo 항목 삭제

## 프로젝트 구조
todo-app
-frontend (React + Vive 프론트엔드)
-backend (Express API 서버)
-vercel.json (Vercel 배포 설정)
-README.md

## 프로젝트 실행 방법

- backend 실행
cd backend
npm install
npm run dev
API 확인용 : http://localhost:5000/api/todos

- frontend 실행
cd frontend
npm install
npm run dev
웹 접속 : http://localhost:5173

- backend, frontend 종료
각 터미널에서 Ctrl + c