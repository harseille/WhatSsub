## 목차

1. [**개요**](#1)
2. [**아키 텍쳐**](#2)
3. [**주요 기능**](#3)
4. [**이슈 및 해결 방법**](#4)
5. [** 회고**](#5)
   <br />

<div id="1"></div>
## 개요

### 프로젝트 소개

서브웨이와 같이 재료를 선택해서 음식을 주문하는 방식에 익숙하지 않은 사람들을 위한 재료 조합 생성 및 제공 커뮤니티 서비스

### 도입 배경

매주 스터디를 하면서 먹기 깔끔한 서브웨이를 자주 시켜 먹었다. 서브웨이에 익숙하지 않은 팀원들은 메뉴 선택을 할 때마다 “서브웨이 꿀조합”을 검색했다. 매번 검색할 때 마다 많은 시간이 소요 되었고 그렇기에 이러한 불편함을 해소하기 위해 [서브웨이 꿀조합 picker]프로젝트를 시작하게 되었다.

### 프로젝트 목표

- react18, react-router-dom6.4, recoil, emotion11 등 프론트엔드 최신 라이브러리 사용 능력 향상
- TypeScript 를 사용하여 코드의 가독성을 높이고 디버깅을 하기 편한 코드를 작성한다.
- 보일러플레이트 를 사용하지 않고 webpack를 직접 설정해 초기 세팅 경험
- Firebase를 이용한 Serverless 프로젝트 경험 (OAuth, realtime database)

### 프로젝트 기획

- 디자인: [새 탭에서 열기][figma wireframe](https://www.figma.com/file/eI2jrYfrVIDJlrbklrjJnN/Be-Real-FE-Dev?node-id=33%3A6&t=688n15HxUHCp3Dx8-0)
- BDD(Behaviour-Driven-Development): [새 탭에서 열기][노션링크](https://www.notion.so/Tasks-BDD-32ee18c200aa42249f328571cc2394d7)
- SDD(Schema-Driven-Development): [새 탭에서 열기][노션링크](https://www.notion.so/aaa724aa166c4c2b96392264fa700201)
- 네이밍 컨벤션: 한글 변수 사용: [새 탭에서 열기][집현전 프로젝트(한글 네이밍)](https://www.notion.so/daaf58b9e2fa48048ff98c858253bfae)
- 형상관리: [github-flow, gitmoji](https://absorbed-leek-405.notion.site/Git-Convention-f451556383d943789d64d7c55029872b)
- 이슈관리: [github-issue](https://github.com/harseille/WhatSsub/issues)

### 기획

### 팀원소개

### 팀원 소개

| 김다빈 | 박준하 | 정세훈 | 최원오 | 황도은 |
| ------ | ------ | ------ | ------ | ------ |
| e-mail | e-mail | e-mail | e-mail | e-mail |
| Github | Github | Github | Github | Github |

### 역할 분담

<div id="2"></div>
## 아키텍처

### 폴더구조

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

### 기술스택

- HTML, CSS, TypeScript
- React18, React-router-dom6.4, Recoil, Emotion11, Axios0.27
- Webpack5, Husky, Babel, ESlint, Prettier
- Firebase(Authentication, Realtime Database)

### 도입 이유

- React18:
- React-router-dom6.4
- Recoil
- Emotion
- Firebase

<div id="3"></div>

## 주요 기능

### 프로세스 플로우

![flow.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3a1e7735-d2c8-4cd0-b9ab-9b46c8f995fb/flow.png)

### 기능 소개

- 꿀조합:
- 랜덤조합
- 맛잘알랭킹: 좋아요 수와 신규 날짜에 따라
- 커스텀
- 로그인 OAuth

<div id="4"></div>
## 이슈 및 해결 방법
- env 환경변수
- 한글 컨벤션
- recoil: mutable
- useRef: mutableRef

<div id="5"></div>

## 회고

[보다 자세한 회고는 여기로](https://www.notion.so/69cf2d64c62749808891a83a552d4528)
