## 목차

1. [**개요**](#1)
2. [**아키 텍쳐**](#2)
3. [**주요 기능**](#3)
4. [**이슈 및 해결 방법**](#4)
5. [**회고**](#5)
   <br />

---

<div id="1"></div>

## 개요

### 프로젝트 소개

서브웨이 주문 시 재료를 선택해서 음식을 주문하는 방식에 익숙하지 않은 사람들을 위한 재료 조합 생성 및 제공 커뮤니티 서비스

### 도입 배경

매주 스터디를 하면서 먹기 깔끔한 서브웨이를 자주 시켜 먹었다. 서브웨이에 익숙하지 않은 팀원들은 메뉴 선택을 할 때마다 “서브웨이 꿀조합”을 검색했다. 매번 검색할 때 마다 많은 시간이 소요 되었고 그렇기에 이러한 불편함을 해소하기 위해 [서브웨이 꿀조합 picker]프로젝트를 시작하게 되었다.

### 프로젝트 목표

- react18, react-router-dom6.4, recoil, emotion11 등 프론트엔드 최신 라이브러리 사용 능력 향상
- TypeScript 를 사용하여 코드의 가독성을 높이고 디버깅을 하기 편한 코드를 작성한다.
- 보일러플레이트 를 사용하지 않고 webpack를 직접 설정해 초기 세팅 경험
- Firebase를 이용한 Serverless 프로젝트 경험 (OAuth, realtime database)

### 프로젝트 기획

- 디자인: <a href="https://www.figma.com/file/eI2jrYfrVIDJlrbklrjJnN/Be-Real-FE-Dev?node-id=33%3A6&t=688n15HxUHCp3Dx8-0" target="_blank">Figma Wireframe</a>
- BDD(Behaviour-Driven-Development): <a href="https://www.notion.so/Tasks-BDD-32ee18c200aa42249f328571cc2394d7" target="_blank">노션링크</a>
- SDD(Schema-Driven-Development): <a href="https://www.notion.so/aaa724aa166c4c2b96392264fa700201" target="_blank">노션링크</a>
- 네이밍 컨벤션: 한글 변수 사용: <a href="https://www.notion.so/daaf58b9e2fa48048ff98c858253bfae" target="_blank">노션링크</a>
- 형상관리: <a href="https://absorbed-leek-405.notion.site/Git-Convention-f451556383d943789d64d7c55029872b" target="_blank">노션링크</a>
- 이슈관리: <a href="https://github.com/harseille/WhatSsub/issues" target="_blank">github-issue</a>

### 팀원 소개

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
    <td ><a href="mailto:kdbj12003@gmail.com">kdbj12003@gmail.com</a></td>
    <td ><a href="mailto:joonhabaak@gmail.com">joonhabaak@gmail.com</a></td>
    <td ><a href="mailto:tpgns933@gmail.com">tpgns933@gmail.com</a></td>
    <td ><a href="mailto:cwo1401@gmail.com">cwo1401@gmail.com</a></td>
    <td ><a href="mailto:dehya0518@naver.com">dehya0518@naver.com</a></td>
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

### 역할 분담

---

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

---

<div id="3"></div>

## 주요 기능

### 프로세스 플로우

![flow.png](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3a1e7735-d2c8-4cd0-b9ab-9b46c8f995fb%2Fflow.png?table=block&id=699f0a99-6f20-42a2-8763-8bc43709a416&spaceId=a2ac351c-251d-4c62-86bd-40e368d410a5&width=2000&userId=1c23a479-d6dc-4c17-a240-67408e56fb9b&cache=v2)

### 기능 소개

- 꿀조합:
- 랜덤조합
- 맛잘알랭킹: 좋아요 수와 신규 날짜에 따라
- 커스텀
- 로그인 OAuth

---

<div id="4"></div>

## 이슈 및 해결 방법

- env 환경변수
- 한글 컨벤션
- recoil: mutable
- useRef: mutableRef

---

<div id="5"></div>

## 회고

보다 자세한 회고는 <a href="https://www.notion.so/69cf2d64c62749808891a83a552d4528" target="_blank">여기</a>로
