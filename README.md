# nextjs_study

## React

### 환경 구축

#### [Create React App](https://create-react-app.dev/)

- `npx create-react-app [프로젝트명]`
- `--template` 인수를 통해, 다른 코드 템플릿을 사용하여 프로젝트 작성 가능
  - `npx create-react-app [프로젝트명] --template typescript`
- 이번엔 이하를 생성
  - `npx create-react-app react-sample --template typescript`

## Next.js

### 프로젝트 셋업

#### [Create Next App](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

- `npx create-next-app@latest [프로젝트명]`
- `--ts` 옵션을 붙이면 타입스크립트용 프로젝트 생성
  - `npx create-next-app@latest [프로젝트명] --ts`
- 이번엔 이하를 생성
  - `npx create-next-app@latest nextjs-sample --ts`

```text
$ npx create-next-app@latest nextjs-sample --ts
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … No
```
