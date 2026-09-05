// 정다운재가노인복지센터 - 사이트 설정
// Supabase 키는 배포 시 실제 값으로 교체하세요 (Phase 3).
window.SITE_CONFIG = {
  centerName: '정다운재가노인복지센터',
  centerShort: '정다운',
  rep: '서광열',                              // 대표자 성함
  tel: '010-8246-9662',                      // 대표 전화 (휴대폰)
  telHref: 'tel:010-8246-9662',
  tel2: '032-555-9662',                      // 사무실 전화
  tel2Href: 'tel:032-555-9662',
  email: 'fluteokk@naver.com',
  address: '인천광역시 계양구 계양산로 15, 2층',
  addressCity: '인천 계양구',
  serviceAreas: ['전국'],
  // 지도 (구글 지도 임베드 — API 키 불필요)
  mapEmbed: 'https://www.google.com/maps?q=%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B3%84%EC%96%91%EA%B5%AC%20%EA%B3%84%EC%96%91%EC%82%B0%EB%A1%9C%2015&z=17&hl=ko&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B3%84%EC%96%91%EA%B5%AC%20%EA%B3%84%EC%96%91%EC%82%B0%EB%A1%9C%2015',
  kakaoChannel: '', // 카카오톡 채널 URL (있으면 입력)
  // Supabase (상담신청 저장) — publishable 키는 공개되어도 안전 (RLS로 보호)
  SUPABASE_URL: 'https://qtaiqqtzddjlyxpzypro.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_Vtg30YSUKnooQJO_LL2dxg_Hr_58dHC',
};
