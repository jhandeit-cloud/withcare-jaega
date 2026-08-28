/* 공통 Tailwind 설정 — cdn.tailwindcss.com 로드 후 실행 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#C9793C', deep: '#A85C3F', press: '#7A4526', soft: '#DDA23A' },
        accent: { DEFAULT: '#DDA23A', dark: '#B37E22' },
        sage: { light: '#EEF2E8', DEFAULT: '#7C9473', dark: '#57715A' },
        brand: { dark: '#3B2C21' },
        cream: '#FBF4E9',
        ink: { DEFAULT: '#3B2C21', secondary: '#5B4534', mute: '#8A7361' },
        canvas: { DEFAULT: '#FFFFFF', soft: '#FBF4E9', cream: '#F5E9D4' },
        hairline: { DEFAULT: '#EAD9C0', input: '#D7B78C' },
      },
      fontFamily: {
        display: ['"Gowun Batang"', '"Noto Serif KR"', 'serif'],
        sans: ['"Pretendard"', '"Noto Sans KR"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(120,72,30,0.08), 0 1px 2px rgba(120,72,30,0.04)',
        pop: '0 12px 28px rgba(120,72,30,0.14), 0 4px 10px rgba(120,72,30,0.07)',
        accent: '0 8px 24px rgba(201,121,60,0.22), 0 2px 6px rgba(120,72,30,0.10)',
      },
      maxWidth: { '6xl': '72rem' },
    },
  },
};
