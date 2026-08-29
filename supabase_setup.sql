-- 정다운재가노인복지센터 - 상담 신청 테이블
-- Supabase 대시보드 > SQL Editor 에서 한 번만 실행하세요.

create table if not exists consultations (
  id uuid default gen_random_uuid() primary key,
  name text not null,                       -- 신청자 이름
  phone text not null,                      -- 연락처
  relation text,                            -- 어르신과의 관계
  grade text not null,                      -- 장기요양 등급 상태
  condition text not null,                  -- 어르신 현재 상태
  services text[] not null default '{}',    -- 희망 서비스 (방문요양/방문목욕)
  area text,                                -- 거주 지역
  message text,                             -- 추가 문의사항
  status text not null default 'pending',   -- pending(대기중) / done(완료)
  created_at timestamptz not null default now()
);

-- RLS 활성화
alter table consultations enable row level security;

-- 웹사이트 방문자는 '신청서 제출(insert)'만 가능
drop policy if exists "Anyone can submit a consultation" on consultations;
create policy "Anyone can submit a consultation"
  on consultations for insert
  to anon, authenticated
  with check (true);

-- 조회(select)/수정(update)은 정책을 만들지 않습니다.
-- => anon 키로는 목록을 볼 수 없습니다.
-- => 관리자 페이지는 서버(/api/consultations)에서 service_role 키로만 접근합니다.


-- ============================================================
-- 공지사항
-- ============================================================
create table if not exists notices (
  id uuid default gen_random_uuid() primary key,
  category text not null default '안내',      -- 안내 / 서비스 / 채용 등
  title text not null,
  body text not null,
  pinned boolean not null default false,      -- 상단 고정
  published boolean not null default true,    -- 공개 여부
  created_at timestamptz not null default now()
);
alter table notices enable row level security;

-- 방문자는 '공개된' 공지만 조회 가능
drop policy if exists "public read published notices" on notices;
create policy "public read published notices"
  on notices for select
  to anon, authenticated
  using (published = true);
-- 등록/수정/삭제는 정책 없음 => 관리자 서버(/api/notices, service_role)에서만


-- ============================================================
-- 갤러리 (이미지는 Storage 'gallery' 버킷, 공개)
-- ============================================================
create table if not exists gallery_items (
  id uuid default gen_random_uuid() primary key,
  title text not null default '',
  image_path text not null,                   -- 'gallery' 버킷 내 파일명
  sort_order int not null default 0,          -- 낮을수록 먼저
  published boolean not null default true,
  created_at timestamptz not null default now()
);
alter table gallery_items enable row level security;

drop policy if exists "public read published gallery" on gallery_items;
create policy "public read published gallery"
  on gallery_items for select
  to anon, authenticated
  using (published = true);

-- Storage 버킷 'gallery' (공개 읽기) — 이미 API로 생성됨.
-- 수동 생성 시: 대시보드 > Storage > New bucket > 이름 gallery, Public 체크
insert into storage.buckets (id, name, public)
values ('gallery', 'gallery', true)
on conflict (id) do update set public = true;
