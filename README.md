![로고](https://firebasestorage.googleapis.com/v0/b/whatssub-fce96.appspot.com/o/images%2Fetc%2Flogo.png?alt=media&token=db5bcc4c-7fdc-4168-94d8-79fbc37b46e9)

<br />

## 📬 배포 주소

https://what-ssub.vercel.app/

---

## 🗃️ 목차

1. [**개요**](#1)
2. [**아키 텍쳐**](#2)
3. [**주요 기능**](#3)
4. [**이슈 및 해결 방법**](#4)
5. [**회고**](#5)

<br />

---

<div id="1"></div>
<br />

## 📜 개요

### 📢 프로젝트 소개

서브웨이 주문 시 재료를 선택해서 음식을 주문하는 방식에 익숙하지 않은 사람들을 위한 재료 조합 생성 및 제공 커뮤니티 서비스

<br />

### 🎞 도입 배경

매주 스터디를 하면서 먹기 깔끔한 서브웨이를 자주 시켜 먹었다. 서브웨이에 익숙하지 않은 팀원들은 메뉴 선택을 할 때마다 “서브웨이 꿀조합”을 검색했다. 매번 검색할 때 마다 많은 시간이 소요 되었고 그렇기에 이러한 불편함을 해소하기 위해 **서브웨이 꿀조합 picker**프로젝트를 시작하게 되었다.

<br />

### 🎯 프로젝트 목표

- React18, React-router-dom v6.4, Recoil, Emotion 등 프론트엔드 최신 라이브러리 사용 능력 향상
- TypeScript 를 사용하여 코드의 가독성을 높이고 디버깅을 하기 편한 코드를 작성한다.
- 보일러플레이트 를 사용하지 않고 webpack를 직접 설정해 초기 세팅 경험
- Firebase를 이용한 Serverless 프로젝트 경험 (OAuth, realtime database)

<br />

### 💡 프로젝트 기획

- 브레인스토밍
  ![브레인스토밍_이미지](https://firebasestorage.googleapis.com/v0/b/whatssub-fce96.appspot.com/o/images%2Fetc%2F%E1%84%87%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%89%E1%85%B3%E1%84%90%E1%85%A9%E1%84%86%E1%85%B5%E1%86%BC.png?alt=media&token=43ad9466-84d2-4836-9ac6-725f43f27d2c)

### 기획

<ul>
 <li>디자인: 
 <a href="https://www.figma.com/file/eI2jrYfrVIDJlrbklrjJnN/Be-Real-FE-Dev?node-id=33%3A6&t=688n15HxUHCp3Dx8-0" target="_blank">Figma Wireframe</a>
 </li>
 <li>BDD(Behaviour-Driven-Development): 
 <a href="https://www.notion.so/Tasks-BDD-32ee18c200aa42249f328571cc2394d7" target="_blank">노션링크</a>
 </li>
 <li>SDD(Schema-Driven-Development): 
 <a href="https://www.notion.so/aaa724aa166c4c2b96392264fa700201" target="_blank">노션링크</a>
 </li>
<li>네이밍 컨벤션: 한글 변수 사용: 
<a href="https://www.notion.so/daaf58b9e2fa48048ff98c858253bfae" target="_blank">노션링크</a>
</li>
 <li>형상관리: 
 <a href="https://absorbed-leek-405.notion.site/Git-Convention-f451556383d943789d64d7c55029872b" target="_blank">노션링크</a>
 </li>
 <li>이슈관리: 
 <a href="https://github.com/harseille/WhatSsub/issues" target="_blank">github-issue</a>
 </li>
</ul>

<br />

### 📞 팀원 소개

<table class="tg">
<tbody>
  <tr>
    <td>Name</td>
    <td>김다빈</td>
    <td>박준하</td>
    <td>정세훈</td>
    <td>최원오</td>
    <td>황도은</td>
  </tr>
  <tr>
    <td >e-mail</td>
    <td ><a href="mailto:kdbj12003@gmail.com">Gmail</a></td>
    <td ><a href="mailto:joonhabaak@gmail.com">Gmail</a></td>
    <td ><a href="mailto:tpgns933@gmail.com">Gmail</a></td>
    <td ><a href="mailto:cwo1401@gmail.com">Gmail</a></td>
    <td ><a href="mailto:dehya0518@naver.com">Naver</a></td>
  </tr>
  <tr>
    <td>Github</td>
    <td><a href="https://github.com/davinahi" target="_blank">davinahi</a></td>
    <td><a href="https://github.com/harseille" target="_blank">harseille</a></td>
    <td><a href="https://github.com/jeong-se-hun" target="_blank">jeong-se-hun</a></td>
    <td><a href="https://github.com/choi1five" target="_blank">choi1five</a></td>
    <td><a href="https://github.com/dee0518" target="_blank">dee0518</a></td>
  </tr>
  <tr>
    <td>Blog</td>
    <td><a href="https://velog.io/@dadak" target="_blank">@dadak</a></td>
    <td><a href="https://velog.io/@dessin" target="_blank">@dessin</a></td>
    <td><a href="https://velog.io/@tpgns933" target="_blank">@tpgns933</a></td>
    <td><a href="https://velog.io/@o1_choi" target="_blank">@o1_choi</a></td>
    <td><a href="https://velog.io/@dee0518" target="_blank">@dee0518</a></td>
  </tr>
</tbody>
</table>

<br />

### 🛠️ 역할 분담

#### 공통

- 서비스 기획
- Figma 컴포넌트 디자인 및 마크업 개발
- 페이지별 반응형 UI 제공
- Webpack 설정 및 최적화
- Firebase Auth(구글, 페이스북), FireStore, Storage 연동
- vercel 배포 및 프로젝트 최적화

#### 김다빈

- 랜덤 룰렛 페이지
  - 애니메이션으로 룰렛 회전 기능 개발
  - 랜덤으로 재료를 선택하여 샌드위치 추천 알고리즘 개발
  - 랜덤 재료 팝업 모달 개발
- 마이페이지
  - Firestore query를 사용한 꿀조합 작성자 별 꿀조합 리스트 제공
  - 로그인한 사용자 기준 좋아요한 꿀조합 리스트 제공
  - 좋아요한 꿀조합 리스트 좋아요 변경 시 삭제대기 상태로 관리

#### 박준하

- 꿀조합 상세페이지
  - 동시성 제어를 고려한 꿀조합 삭제 기능 개발
  - Intl API 활용한 좋아요 수 utils 개발
  - 애니메이션을 적용한 SVG like 버튼 개발
- 댓글 기능
  - 댓글 추가 기능 개발
  - Firestore Query를 사용한 댓글 정렬
  - Firestore onSnapshot를 활용한 실시간 업데이트 기능 개발
  - 댓글 무한스크롤 기능 개발
- 로그인 페이지
  - Firebase OAuth custom hook 개발
  - recoil, recoil-persist를 활용한 로그인 정보 전역 상태관리
  - 로그인 여부에 따른 layout header 변경 처리 기능 개발
- 재사용 가능한 버튼, 뱃지 공통 컴포넌트 개발

#### 정세훈

- 커스텀 페이지
  - 페이지 마크업 & 스타일
  - 선택한 재료로 커스텀 기능(서버에 post)
- 전체 레이아웃
  - pc 및 mobile 용 헤더, 메뉴 제작
- recipe, ingredients 데이터 생성
- 이미지 최적화
- seo 최적화
- 접근성 최적화
- react-router 적용
- google & naver에 사이트 등록

#### 최원오

- 꿀조합 선택 페이지
  - 꿀조합 속성 필터링 Custom hook으로 관리
  - 선택한 속성 Query String으로 리스트페이지 전달
- 꿀조합 리스트 페이지
  - 전달받은 선택한 속성으로 필터링하여 꿀조합 리스트 제공
  - 좋아요 기능 Custom hook으로 관리
- Scroll Top
  - lodash-es의 debounce 메서드를 활용한 custom hook으로 관리
- 공통 Modal 컴포넌트
  - createPortal로 Modal과 Backdrop 제공
  - Confirm 과 Alert 으로 사용가능하도록 범용성을 고려하여 개발
- Progressive 이미지 제공으로 UX 개선

#### 황도은

- 메인 디자인
- 랭킹리스트
  - 메뉴탭에 따라 꿀조합 데이터를 필터링하여 리스트 제공 (좋아요 순, 최신 순)
  - 꿀조합 리스트 제공 시 InterSection Observer API를 이용한 무한 스크롤 적용
  - Sorting된 꿀조합 랭킹 뱃지 기능 개발
  - 당일 기준 꿀조합 new 뱃지 추가 기능 개발
  - 폴링 방식으로 랭킹 리스트 순위 업데이트

---

<br />
<div id="2"></div>
<br />

## 🏛️ 아키텍처

### 📂 폴더구조

```
📦 src
├── 📂 api
├── 📂 assets
│   ├── 📂 icons
│   └── 📂 images
├── 📂 components
│   ├── 📂 BestCombinationAttribute
│   ├── 📂 BestCombinationDetail
│   ├── 📂 BestCombinationList
│   ├── 📂 BestCombinationPick
│   ├── 📂 Comments
│   ├── 📂 Common
│   ├── 📂 CustomCombination
│   ├── 📂 Ingredient
│   ├── 📂 Login
│   ├── 📂 MyPage
│   ├── 📂 Ranking
│   └── 📂 Roulette
├── 📂 constants
├── 📂 data
├── 📂 hooks
├── 📂 layouts
├── 📂 pages
├── 📂 services
├── 📂 state
├── 📂 styles
├── 📂 typings
└── 📂 utils
```

<br />

### 🔨 기술스택

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Recoil](https://img.shields.io/badge/recoil-f26b00?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiB2aWV3Qm94PSIwIDAgNjAwIDYwMCI+PGxpbmsgeG1sbnM9IiIgdHlwZT0idGV4dC9jc3MiIGlkPSJkYXJrLW1vZGUiIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iIi8+PGcgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xNDIuNTM2IDE5OC44NThjMCAyNi4zNi0yMS4zNjggNDcuNzItNDcuNzIgNDcuNzItMjYuMzYgMC00Ny43MjItMjEuMzYtNDcuNzIyLTQ3LjcyczIxLjM2LTQ3LjcyIDQ3LjcyLTQ3LjcyYzI2LjM1NSAwIDQ3LjcyMiAyMS4zNiA0Ny43MjIgNDcuNzIiLz48cGF0aCBkPSJNNTA1LjE4IDQxNC4yMjVIMjM4LjEyNGMtMzUuMjUgMC02My45MjYtMjguNjc0LTYzLjkyNi02My45MjNzMjguNjc4LTYzLjkyNiA2My45MjYtNjMuOTI2aDEyMC43OGMyMC44MTYgMCAzNy43NTMtMTYuOTM4IDM3Ljc1My0zNy43NTZzLTE2LjkzOC0zNy43NTYtMzcuNzUzLTM3Ljc1Nkg5NC44MWMtNy4yMjcgMC0xMy4wODYtNS44Ni0xMy4wODYtMTMuMDg1IDAtNy4yMjcgNS44Ni0xMy4wODYgMTMuMDg1LTEzLjA4NmgyNjQuMDkzYzM1LjI1IDAgNjMuOTIzIDI4LjY3OCA2My45MjMgNjMuOTI2cy0yOC42NzQgNjMuOTIzLTYzLjkyMyA2My45MjNoLTEyMC43OGMtMjAuODIgMC0zNy43NTYgMTYuOTM4LTM3Ljc1NiAzNy43NiAwIDIwLjgxNiAxNi45MzggMzcuNzUzIDM3Ljc1NiAzNy43NTNINTA1LjE4YzcuMjI3IDAgMTMuMDg2IDUuODYgMTMuMDg2IDEzLjA4NSAwIDcuMjI2LTUuODU4IDEzLjA4NS0xMy4wODUgMTMuMDg1eiIvPjxwYXRoIGQ9Ik00NTcuNDY0IDQwMS4xNDJjMC0yNi4zNiAyMS4zNi00Ny43MiA0Ny43Mi00Ny43MnM0Ny43MiAyMS4zNiA0Ny43MiA0Ny43Mi0yMS4zNiA0Ny43Mi00Ny43MiA0Ny43Mi00Ny43Mi0yMS4zNi00Ny43Mi00Ny43MiIvPjwvZz48c3R5bGUgeG1sbnM9IiIgaWQ9ImRhcmstbW9kZS1jdXN0b20tY29sb3IiPgoJCTpyb290ewoJCQktLWJnLWNvbG9yOnJnYmEoMjYsMjYsMjYsMSk7CgkJCS0tdGV4dC1jb2xvcjpyZ2JhKDExMCwxMTAsMTEwLDEpOwoJCQktLWEtY29sb3I6cmdiYSg5MCwxMjAsMTIwLDEpOwoJCQktLWEtdmlzaXRlZC1jb2xvcjpyZ2JhKDEyMCwxMjAsOTAsMSk7CgkJCS0tYS1ob3Zlci1jb2xvcjpyZ2JhKDIxMSwyMTEsMjExLDEpOwoJCQktLWlucHV0LWJvcmRlci1jb2xvcjpyZ2JhKDIxMSwyMTEsMjExLDAuMik7CgkJCS0taW5wdXQtcGxhY2Vob2xkZXItY29sb3I6cmdiYSgxNzMsMjE2LDIzMCwxKTsKCQkJLS1kaWFsb2ctYmctY29sb3I6cmdiYSgzNiwzNiwzNiwwLjk1KTsKCQkJLS1iZy1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgyNiwyNiwyNiwxKSxyZ2JhKDI2LDI2LDI2LDEpKTsKCQl9Cgk8L3N0eWxlPjwvc3ZnPg==) ![Emotion](https://img.shields.io/badge/Emotion-FF69B4?style=for-the-badge)

![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

<br />

### ❓ 도입 이유

- React18
  - 뷰, 앵귤러 대비 리액트가 참고할 수 있는 레퍼런스가 많다.
- React-router-dom6.4
  - 새로추가된 loader, action 등 기능을 활용해 컴포넌트 구현부의 코드를 clean하게 만들기 위해 도입하였다.
- Recoil
  - React 자체 라이브러리로 상태 저장소가 외부에서 처리되지 않는다.
  - Redux 보다 가볍고 사용하기 쉽다. (비동기 처리를 위한 추가적인 라이브러리 설치가 필요없다.)
  - 상태를 구독한 컴포넌트만 리렌더링 되므로 불필요한 렌더링 발생이 줄어든다.
- Emotion
  - styled-component와 차이점을 알기 위해 사용하였다.
  - styled-component 대비 가볍고 작은 번들 사이즈를 가진다.
- Firebase
  - Front-end 개발자로만 이루어진 프로젝트이기 때문에 낮은 러닝커브로 서버 대체 가능하다는 장점이 있다.
  - OAuth, Realtime DB 제공한다.

---

<br />
<div id="3"></div>
<br />

## 📌 주요 기능

### 🌊 프로세스 플로우

![flow.png](https://firebasestorage.googleapis.com/v0/b/whatssub-fce96.appspot.com/o/images%2Fetc%2Fprocess%20flow%201.png?alt=media&token=e1f878a0-cd6b-41bf-9291-af967a91f6a1)

<br />

### ✨ 기능 소개

| 기능명        | 내용                                                                                                                                                       |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 꿀조합        | 맛, 재료, 추가사항 등 속성 별 필터링을 통해 원하는 꿀조합 목록을 제공한다.                                                                                 |
| 랜덤조합      | 룰렛의 버튼을 누르면 기본 메뉴인 샌드위치부터 소비자가 골라야 하는 재료 모두 랜덤으로 조합하여 완성된 하나의 샌드위치를 조합해 준다.                       |
| 맛잘알 랭킹   | 신규 조합과 좋아요 수에 따라 정렬하여 꿀조합 목록을 제공한다.                                                                                              |
| 나만의 꿀조합 | 사용자가 만든 꿀조합은 날짜 기준으로, 사용자가 좋아요를 누른 꿀조합은 총 좋아요 수를 기준으로 정렬하여 꿀조합 목록을 제공한다.                             |
| 커스텀        | 본인만의 꿀조합 레시피를 등록 하여 공유하기 위한 페이지 로 카테고리별 재료 선택 후 선택된 레시피를 서버에 post 해 공유할수있다.                            |
| 꿀조합 상세   | 선택된 서브웨이 꿀조합의 정보를 보여주는 페이지이다. 샌드위치 이름, 재료 정보 등을 확인할 수 있다. 댓글 기능을 통해 꿀조합에 대한 코멘트를 작성할 수 있다. |
| 로그인        | Firebase Authentication을 활용하여 Google, Facebook을 통한 소셜 로그인을 지원한다.                                                                         |

---

<br />
<div id="4"></div>
<br />

## 🚨 이슈 및 해결 방법

- env 환경변수
  - [server setting env error](https://github.com/harseille/WhatSsub/issues/86)
- 무한스크롤
  - [custom hook](https://github.com/harseille/WhatSsub/issues/142)
  - [ranking page](https://github.com/harseille/WhatSsub/issues/259)
  - [comment list](https://github.com/harseille/WhatSsub/issues/202)
- vercel 배포
  - [vercel root 설정](https://github.com/harseille/WhatSsub/issues/304)
- 최적화
  - [Tree-shaking](https://github.com/harseille/WhatSsub/issues/306)
  - [code splitting](https://github.com/harseille/WhatSsub/issues/305)

---

<br />
<div id="5"></div>
<br />

## 🍵 회고

<br />

<p>개인별 회고는 아래를 참고해주세요</p>
<ul>
<li><a href="https://velog.io/@dadak/React-%EC%99%94%EC%8D%B9-%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D" target="_blank">김다빈</a></li>
<li><a href="https://velog.io/@dessin/%ED%9A%8C%EA%B3%A0%EB%A1%9D-React-TypeScript-Recoil%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%9C-%EC%84%9C%EB%B8%8C%EC%9B%A8%EC%9D%B4-%EA%BF%80%EC%A1%B0%ED%95%A9-%EC%B6%94%EC%B2%9C-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0-%EA%B0%9C%EB%B0%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8" target="_blank">박준하</a></li>
<li><a href="https://working-gruyere-a9e.notion.site/c2b0789c3ab649998b9402bf69aa1a31" target="_blank">정세훈</a></li>
<li><a href="https://velog.io/@o1_choi/WhatSsub-%ED%9A%8C%EA%B3%A0" target="_blank">최원오</a></li>
<li><a href="https://velog.io/@dee0518/%EC%99%94%EC%8D%B9-%EB%A7%88%EB%AC%B4%EB%A6%AC-%ED%9A%8C%EA%B3%A0" target="_blank">황도은</a></li>
</ul>
