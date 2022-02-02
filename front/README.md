## 환경설정

next v12
next-wrapper v7
react v17

## next 설치

```
npx create-next-app . --typescript
```

## tailwind

```
npm install -D tailwindcss postcss autoprefixer --force
npx tailwindcss init -p
```

에러 발생시 `--force` 옵션 사용

`tailwind.config.js` 하단 코드 입력

```
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

`globals.css` 하단 코드 입력

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## redux

```
npm i redux react-redux redux-saga
npm i next-redux-wrapper
npm i -D redux-devtools-extension
```

## Emotion

```
npm i @emotion/react @emotion/styled
npm i -D @emotion/babel-plugin
```

### `babelrc`

```
{
  "presets": [
    [
      "next/babel",
      {
        "preset-react": {
          "runtime": "automatic",
          "importSource": "@emotion/react"
        }
      }
    ]
  ],
  "plugins": ["@emotion/babel-plugin"]
}
```

### `tsconfig.json`

```
"jsxImportSource": "@emotion/react",
```
