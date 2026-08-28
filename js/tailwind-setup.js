/* 공통 Tailwind 설정 — cdn.tailwindcss.com 로드 후 실행
   정다운 디자인 시스템: 따뜻한 가을빛 팔레트 + 또렷한 타이포 스케일 + 갈색틴트 레이어드 그림자 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        /* 브랜드 테라코타 */
        primary: {
          50: '#FCF3EA', 100: '#F6E1CB', 200: '#EDC59D', 300: '#E0A671',
          DEFAULT: '#C9793C', deep: '#A85C3F', press: '#7A4526', soft: '#DDA23A',
        },
        /* 골드 액센트 */
        accent: { DEFAULT: '#DDA23A', dark: '#B37E22', soft: '#F1DBAE', deep: '#8A6017' },
        /* 세이지 그린 — 신뢰/돌봄 */
        sage: { 50: '#F4F7F0', light: '#EBF1E3', DEFAULT: '#7C9473', dark: '#57715A', deep: '#3F5642' },
        /* 리듬용 보조 웜톤 */
        clay: { DEFAULT: '#B8654A', deep: '#8F4A35' },
        /* 잉크(텍스트) */
        ink: { DEFAULT: '#3B2C21', secondary: '#5C4636', mute: '#8B7360', soft: '#A89283' },
        /* 지면 */
        paper: { DEFAULT: '#FDFBF7', cream: '#FBF4E9', deep: '#F5E9D4', warm: '#F8EEDD' },
        cream: '#FBF4E9',
        canvas: { DEFAULT: '#FFFFFF', soft: '#FBF4E9', cream: '#F5E9D4' },
        brand: { dark: '#33241A', darker: '#2A1D14' },
        /* 라인 */
        hairline: { DEFAULT: '#ECDFCB', strong: '#DEC8A6', input: '#D3B489' },
      },
      fontFamily: {
        display: ['"Gowun Batang"', '"Noto Serif KR"', 'serif'],
        sans: ['"Pretendard"', '"Noto Sans KR"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['0.75rem', { lineHeight: '1', letterSpacing: '0.14em', fontWeight: '700' }],
        'display-2xl': ['clamp(2.5rem, 1.7rem + 3.6vw, 3.9rem)', { lineHeight: '1.12', letterSpacing: '-0.022em' }],
        'display-xl': ['clamp(2rem, 1.45rem + 2.4vw, 2.9rem)', { lineHeight: '1.17', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(1.6rem, 1.3rem + 1.3vw, 2.15rem)', { lineHeight: '1.24', letterSpacing: '-0.014em' }],
        'display-md': ['1.375rem', { lineHeight: '1.4', letterSpacing: '-0.006em' }],
        lead: ['1.1875rem', { lineHeight: '1.75' }],
      },
      letterSpacing: { tightest: '-0.03em' },
      borderRadius: { xl: '1.125rem', '2xl': '1.5rem', '3xl': '2rem', '4xl': '2.75rem' },
      spacing: { 4.5: '1.125rem', 13: '3.25rem', 18: '4.5rem', 22: '5.5rem', 26: '6.5rem', 30: '7.5rem' },
      maxWidth: { '6xl': '72rem', prose: '46rem' },
      boxShadow: {
        xs: '0 1px 2px rgba(122,69,38,0.06)',
        sm: '0 2px 6px -1px rgba(122,69,38,0.10), 0 1px 2px rgba(122,69,38,0.05)',
        card: '0 4px 16px -6px rgba(122,69,38,0.13), 0 2px 5px -2px rgba(122,69,38,0.07)',
        md: '0 14px 32px -10px rgba(122,69,38,0.17), 0 5px 12px -6px rgba(122,69,38,0.09)',
        pop: '0 28px 60px -18px rgba(122,69,38,0.26), 0 10px 24px -14px rgba(122,69,38,0.13)',
        accent: '0 16px 36px -12px rgba(201,121,60,0.48), 0 4px 12px -4px rgba(122,69,38,0.16)',
        glow: '0 0 0 1px rgba(201,121,60,0.10), 0 20px 44px -14px rgba(201,121,60,0.32)',
        ring: '0 0 0 1px rgba(122,69,38,0.07)',
      },
      transitionTimingFunction: { swift: 'cubic-bezier(.22,.61,.36,1)' },
    },
  },
};
