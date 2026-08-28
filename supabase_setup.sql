-- 위드케어 재가노인복지센터 - 상담 신청 테이블
-- Supabase 대시보드 > SQL Editor 에서 한 번만 실행하세요.

create table if not exists consultations (
  id uuid default gen_random_uuid() primary key,
  name text not null,                       -- 신청자 이름
  phone text not null,                      -- 연락처
  relation text,                            -- 어르신과의 관계
  grade text not null,                      -- 장기요양 등급 상태
  condition text not null,                  -- 어르신 현재 상태
  services text[] not null default '{}',    -- 희망 서비스 (방문요양/방문목욕/방문간호)
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
