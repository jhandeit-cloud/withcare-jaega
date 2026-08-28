// 위드케어 재가노인복지센터 - 사이트 설정
// Supabase 키는 배포 시 실제 값으로 교체하세요 (Phase 3).
window.SITE_CONFIG = {
  centerName: '위드케어 재가노인복지센터',
  centerShort: '위드케어',
  rep: '홍길동',
  tel: '010-9013-0482',
  telHref: 'tel:010-9013-0482',
  email: 'jhanicm@naver.com',
  addressCity: '인천 계양구',
  serviceAreas: ['인천 계양구', '인천 서구', '인천 부평구'],
  kakaoChannel: '', // 카카오톡 채널 URL (있으면 입력)
  // Supabase (상담신청 저장) — publishable 키는 공개되어도 안전 (RLS로 보호)
  SUPABASE_URL: 'https://qtaiqqtzddjlyxpzypro.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_Vtg30YSUKnooQJO_LL2dxg_Hr_58dHC',
};
