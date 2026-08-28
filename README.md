# 위드케어 재가노인복지센터 홈페이지

인천 계양구·서구·부평구 대상 재가노인복지센터 소개형 웹사이트.
참고 사이트(`칠곡방문요양.com`)와 동일한 메뉴 구조를 현대적 반응형 디자인으로 재구성.

## 폴더 구조

```
jaega_center/
├── index.html               메인
├── pages/
│   ├── about.html            센터소개 > 인사말
│   ├── location.html         센터소개 > 오시는 길
│   ├── ltci-info.html        노인장기요양보험 > 제도 안내
│   ├── ltci-process.html     노인장기요양보험 > 신청 절차
│   ├── service-care.html     서비스안내 > 방문요양
│   ├── service-bath.html     서비스안내 > 방문목욕
│   ├── service-nursing.html  서비스안내 > 방문간호
│   ├── notice.html           고객지원 > 공지사항
│   ├── contact.html          고객지원 > 상담신청 (폼)
│   └── gallery.html          갤러리
├── admin/index.html          관리자 페이지 (비밀번호 보호)
├── api/consultations.js      관리자 전용 API (Vercel 서버리스 함수)
├── js/
│   ├── config.js             센터 정보 · Supabase 키 (여기 수정)
│   ├── site.js               공통 헤더/푸터/모바일메뉴
│   └── tailwind-setup.js     공통 색상·폰트 설정
├── css/style.css             공통 스타일
├── brand_logo/logo.svg       위드케어 로고 (home_page와 동일)
├── supabase_setup.sql        DB 테이블 생성 SQL
└── serve.mjs                 로컬 미리보기 서버
```

## 로컬 미리보기

```
node serve.mjs      →  http://localhost:3000
```

## 수정이 잦은 곳

| 내용 | 파일 |
|------|------|
| 전화번호·이메일·주소·대표자 | `js/config.js` |
| 메뉴 구성 | `js/site.js` 상단 `NAV` 배열 |
| 색상·폰트 | `js/tailwind-setup.js` |
| 각 페이지 본문 | `pages/*.html` |
| 지도 | `index.html`, `pages/location.html` 의 "지도 영역" 자리에 카카오맵 임베드 |

## 관리자 페이지 기능

접속 `https://배포주소/admin/` → 비밀번호 로그인 후 3개 탭:

| 탭 | 기능 |
|----|------|
| 상담 관리 | 신청 목록·상세, 상태(대기중/완료) 토글, 통계 |
| 공지사항 | 작성·수정·삭제, 상단 고정, 공개/비공개 (`notices` 테이블) |
| 갤러리 | 사진 업로드(자동 축소)·설명·정렬·삭제, 공개/비공개 (`gallery_items` + Storage `gallery` 버킷) |

공개 페이지(`pages/notice.html`, `pages/gallery.html`)는 anon 키로 '공개' 항목만 읽습니다.

---

## Phase 3 — 백엔드 연동 (상담신청 저장)

### 1. Supabase 프로젝트 생성
1. https://supabase.com 로그인 → New Project (Region: Northeast Asia (Seoul))
2. 생성 후 SQL Editor에서 `supabase_setup.sql` 내용 실행
3. Settings → API 에서 다음 값 복사
   - Project URL
   - `anon` `public` key
   - `service_role` key (비공개)

### 2. 프론트엔드 키 입력
`js/config.js` 에서:
```js
SUPABASE_URL: 'https://xxxx.supabase.co',
SUPABASE_ANON_KEY: 'eyJ...anon...',
```
→ 상담신청 폼이 `consultations` 테이블에 INSERT 됩니다.

### 3. 관리자 API 환경변수 (`.env.local`)
`.env.local.example` 를 복사해 `.env.local` 로 만들고:
```
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...service_role...
ADMIN_PASSWORD=길고-추측하기-어려운-비밀번호
```
`.env.local` 은 절대 커밋하지 않습니다 (`.gitignore` 에 포함됨).

---

## Phase 4 — 배포 (Vercel)

1. GitHub에 저장소 생성 후 푸시
2. https://vercel.com → Add New Project → 저장소 Import → Deploy
   (프레임워크 감지: Other. `api/` 는 서버리스 함수로 자동 인식)
3. Vercel → Settings → Environment Variables 에 `.env.local` 과 동일한 값 등록
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_PASSWORD`
   - (프론트 키는 `js/config.js` 에 이미 들어있으므로 별도 등록 불필요)
4. Redeploy

---

## Phase 5 — 관리자 페이지

- 접속: `https://배포주소/admin/`
- 로그인: `ADMIN_PASSWORD` 값
- 기능: 상담 신청 목록 · 상세 보기 · 상태(대기중/완료) 토글 · 간단 통계
- 보안 권장:
  - `admin` 폴더명을 추측 어려운 이름(예: `manage-a7k2`)으로 변경
  - `ADMIN_PASSWORD` 는 20자 이상 무작위 문자열
  - service_role 키는 서버 환경변수로만 사용 (프론트 노출 금지 — 현재 구조 준수)

---

## 아직 채워야 할 항목 (placeholder)

- 대표자 실명 (현재 "홍길동")
- 센터 상세 주소 / 지도
- 대표 사진, 갤러리 사진 (`assets/` 에 추가)
- 인사말 문구 검토 (현재 초안)
- 사업자 등록번호 / 장기요양기관 지정번호 (푸터에 추가 권장)
