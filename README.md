![로고](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8b39fda9-f2e5-4bca-92d9-019546593ea5/Group_34925_%282%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221120T092634Z&X-Amz-Expires=86400&X-Amz-Signature=0a699120c02b586de84b63c23836c7acea065d3eb9914dca864f0b2f21ba398d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Group%252034925%2520%282%29.png%22&x-id=GetObject)

<br />

## 🗃️목차

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
  ![브레인스토밍_이미지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17006918-ebac-4f48-b45e-97db4ba7013b/%EB%B8%8C%EB%A0%88%EC%9D%B8%EC%8A%A4%ED%86%A0%EB%B0%8D.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221120T083901Z&X-Amz-Expires=86400&X-Amz-Signature=c27348282822410fb5b23668226766d80c160ad658810c99759847e06b8bc157&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25EB%25B8%258C%25EB%25A0%2588%25EC%259D%25B8%25EC%258A%25A4%25ED%2586%25A0%25EB%25B0%258D.png%22&x-id=GetObject)

- 디자인: <a href="https://www.figma.com/file/eI2jrYfrVIDJlrbklrjJnN/Be-Real-FE-Dev?node-id=33%3A6&t=688n15HxUHCp3Dx8-0" target="_blank">Figma Wireframe</a>
- BDD(Behaviour-Driven-Development): <a href="https://www.notion.so/Tasks-BDD-32ee18c200aa42249f328571cc2394d7" target="_blank">노션링크</a>
- SDD(Schema-Driven-Development): <a href="https://www.notion.so/aaa724aa166c4c2b96392264fa700201" target="_blank">노션링크</a>
- 네이밍 컨벤션: 한글 변수 사용: <a href="https://www.notion.so/daaf58b9e2fa48048ff98c858253bfae" target="_blank">노션링크</a>
- 형상관리: <a href="https://absorbed-leek-405.notion.site/Git-Convention-f451556383d943789d64d7c55029872b" target="_blank">노션링크</a>
- 이슈관리: <a href="https://github.com/harseille/WhatSsub/issues" target="_blank">github-issue</a>

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

#### 김다빈

- 1
- 2

#### 박준하

- 1
- 2

#### 정세훈

- 1
- 2

#### 최원오

- 1
- 2

#### 황도은

- 1
- 2

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
│   ├── 📂 Comments
│   ├── 📂 Common
│   │   ├── 📂 Button
│   │   └── 📂 Cards
│   ├── 📂 CustomCombination
│   ├── 📂 Ingredient
│   ├── 📂 Ranking
│   ├── 📂 Roulette
│   ├── 📂 Sandwich
│   └── 📂 UI
├── 📂 constants
├── 📂 data
├── 📂 hooks
├── 📂 layouts
├── 📂 pages
├── 📂 state
├── 📂 styles
├── 📂 types
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

![flow.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7d665171-c683-4d32-81e6-2e065fd68297/process_flow.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221120T084118Z&X-Amz-Expires=86400&X-Amz-Signature=303000ca20512c2b2108b87da84299489966b080b94b36cb82c86d4d88549226&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22process%2520flow.png%22&x-id=GetObject)

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

## 🚨 이슈 및 해결 방법 (문서 작성 후 링크 연결 예정)

- env 환경변수
- 한글 컨벤션
- recoil: mutable
- useRef: mutableRef

---

<br />
<div id="5"></div>
<br />

## 🍵 회고

<br />

보다 자세한 회고는 <a href="https://www.notion.so/69cf2d64c62749808891a83a552d4528" target="_blank">여기</a>로
