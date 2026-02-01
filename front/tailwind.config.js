/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // 이 부분이 없으면 JSX 파일 클래스 적용 안됨
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}