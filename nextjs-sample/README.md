# Next.js

## 프로젝트 구성

v12이하의 Next.js 프로젝트의 프로젝트 구성 확인

- pages
  - 페이지 컴포넌트나 API코드가 배치
- public
  - 이미지 등 정적 파일 배치
- styles
  - css파일 배치

## 페이지와 렌더링

### 페이지

#### 개념

pages 아래에 배치된 tsx 파일 1개가 페이지 1개에 대응

실습 : `pages/sample.tsx`를 작성하고, `localhost:3000/sample`에 접속

### StoryBook

#### Install

`npx sb@latest init`

#### Run

`npm run storybook`

### React Testing Library

DOM Testing Library를 사용해 컴포넌트의 테스트를 진행
컴포넌트를 실제로 화면에 그리고, 그 결과의 DOM에 접근해서 올바른 화면이 그려져 있는지 테스트

```text
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```

jest.setup.js, jest.config.js를 설정 후, package.json에 스크립트 추가
이하를 통해 기동 가능

`npm run test`
