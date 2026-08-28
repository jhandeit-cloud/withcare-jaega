/* 위드케어 재가노인복지센터 — 공통 헤더/푸터/인터랙션 */
(function () {
  var C = window.SITE_CONFIG || {};

  var NAV = [
    { label: '센터소개', href: '/pages/about.html', children: [
      { label: '인사말', href: '/pages/about.html' },
      { label: '오시는 길', href: '/pages/location.html' },
    ]},
    { label: '노인장기요양보험', href: '/pages/ltci-info.html', children: [
      { label: '제도 안내', href: '/pages/ltci-info.html' },
      { label: '신청 절차', href: '/pages/ltci-process.html' },
    ]},
    { label: '서비스안내', href: '/pages/service-care.html', children: [
      { label: '방문요양', href: '/pages/service-care.html' },
      { label: '방문목욕', href: '/pages/service-bath.html' },
      { label: '방문간호', href: '/pages/service-nursing.html' },
    ]},
    { label: '고객지원', href: '/pages/notice.html', children: [
      { label: '공지사항', href: '/pages/notice.html' },
      { label: '상담신청', href: '/pages/contact.html' },
    ]},
    { label: '갤러리', href: '/pages/gallery.html', children: [
      { label: '갤러리', href: '/pages/gallery.html' },
    ]},
  ];

  var path = location.pathname.replace(/index\.html$/, '') || '/';
  function isActive(group) {
    return group.children.some(function (c) { return c.href === location.pathname; })
      || group.href === location.pathname;
  }

  /* ---------- 헤더 ---------- */
  function headerHTML() {
    var desktop = NAV.map(function (g) {
      var sub = g.children.map(function (c) {
        var on = c.href === location.pathname;
        return '<li><a href="' + c.href + '" class="block px-4 py-2.5 text-sm rounded-lg ' +
          (on ? 'text-primary font-semibold bg-sage-light' : 'text-ink-secondary hover:text-primary hover:bg-canvas-soft') +
          ' transition-colors">' + c.label + '</a></li>';
      }).join('');
      return (
        '<div class="group relative">' +
          '<a href="' + g.href + '" class="flex items-center gap-1 px-3.5 py-2 text-[15px] font-semibold rounded-lg transition-colors ' +
            (isActive(g) ? 'text-primary' : 'text-ink-secondary hover:text-primary') + '">' +
            g.label +
          '</a>' +
          '<div class="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity duration-150 absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">' +
            '<ul class="min-w-[160px] rounded-xl border border-hairline bg-white p-1.5 shadow-pop">' + sub + '</ul>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    return (
      '<div class="bg-brand-dark text-cream/80 text-xs hidden md:block">' +
        '<div class="mx-auto max-w-6xl px-6 h-9 flex items-center justify-between">' +
          '<span>' + (C.centerName || '') + '</span>' +
          '<span class="flex items-center gap-4">' +
            '<a href="' + (C.telHref || '#') + '" class="hover:text-white transition-colors">전화 ' + (C.tel || '') + '</a>' +
            '<a href="mailto:' + (C.email || '') + '" class="hover:text-white transition-colors">' + (C.email || '') + '</a>' +
          '</span>' +
        '</div>' +
      '</div>' +
      '<div class="mx-auto max-w-6xl px-5 sm:px-6">' +
        '<div class="h-16 sm:h-20 flex items-center justify-between gap-4">' +
          '<a href="/" class="flex items-center gap-2.5 flex-shrink-0">' +
            '<img src="/brand_logo/logo.svg" alt="' + (C.centerShort || '위드케어') + ' 로고" class="h-10 w-10 rounded-xl">' +
            '<span class="leading-tight">' +
              '<span class="block font-display font-bold text-primary text-lg">' + (C.centerShort || '위드케어') + '</span>' +
              '<span class="block text-[11px] text-ink-mute -mt-0.5">재가노인복지센터</span>' +
            '</span>' +
          '</a>' +
          '<nav class="hidden lg:flex items-center gap-0.5">' + desktop + '</nav>' +
          '<div class="flex items-center gap-2">' +
            '<a href="' + (C.telHref || '#') + '" class="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-primary">' +
              '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.2l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.2-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6z"/></svg>' +
              (C.tel || '') +
            '</a>' +
            '<a href="/pages/contact.html" class="btn inline-flex items-center rounded-full bg-primary hover:bg-primary-press text-white text-sm font-semibold px-4 py-2 shadow-accent focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/30">상담신청</a>' +
            '<button id="navToggle" type="button" class="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-ink-secondary hover:bg-canvas-soft" aria-label="메뉴 열기" aria-expanded="false">' +
              '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function mobileMenuHTML() {
    var items = NAV.map(function (g) {
      var sub = g.children.map(function (c) {
        var on = c.href === location.pathname;
        return '<a href="' + c.href + '" class="block py-2.5 pl-4 text-[15px] ' +
          (on ? 'text-primary font-semibold' : 'text-ink-secondary') + '">' + c.label + '</a>';
      }).join('');
      return (
        '<div class="border-b border-hairline py-2">' +
          '<p class="px-1 py-1.5 text-sm font-bold text-ink">' + g.label + '</p>' +
          sub +
        '</div>'
      );
    }).join('');
    return (
      '<div id="mobileMenu" class="fixed inset-0 z-[60] hidden lg:hidden">' +
        '<div class="absolute inset-0 bg-ink/40" data-close></div>' +
        '<div class="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white shadow-2xl overflow-y-auto">' +
          '<div class="flex items-center justify-between h-16 px-5 border-b border-hairline">' +
            '<span class="font-display font-bold text-primary">' + (C.centerShort || '위드케어') + '</span>' +
            '<button type="button" data-close class="h-10 w-10 inline-flex items-center justify-center rounded-lg text-ink-secondary hover:bg-canvas-soft" aria-label="메뉴 닫기">' +
              '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M6 6l12 12M18 6L6 18"/></svg>' +
            '</button>' +
          '</div>' +
          '<div class="p-4">' + items +
            '<a href="' + (C.telHref || '#') + '" class="mt-4 flex items-center justify-center gap-2 rounded-xl bg-sage-light text-primary-deep font-bold py-3">전화 상담 ' + (C.tel || '') + '</a>' +
            '<a href="/pages/contact.html" class="mt-2 flex items-center justify-center rounded-xl bg-primary text-white font-semibold py-3">온라인 상담신청</a>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  /* ---------- 푸터 ---------- */
  function footerHTML() {
    var areas = (C.serviceAreas || []).join(' · ');
    var linkCols = NAV.map(function (g) {
      return (
        '<div>' +
          '<p class="text-sm font-bold text-white/90 mb-2.5">' + g.label + '</p>' +
          '<ul class="space-y-1.5">' +
            g.children.map(function (c) {
              return '<li><a href="' + c.href + '" class="text-[13px] text-cream/60 hover:text-white transition-colors">' + c.label + '</a></li>';
            }).join('') +
          '</ul>' +
        '</div>'
      );
    }).join('');
    return (
      '<div class="mx-auto max-w-6xl px-6 py-12">' +
        '<div class="grid gap-8 md:grid-cols-[1.4fr_repeat(5,1fr)]">' +
          '<div>' +
            '<div class="flex items-center gap-2.5">' +
              '<img src="/brand_logo/logo.svg" alt="" class="h-9 w-9 rounded-lg">' +
              '<span class="font-display font-bold text-white text-lg">' + (C.centerShort || '위드케어') + '</span>' +
            '</div>' +
            '<p class="mt-3 text-[13px] leading-relaxed text-cream/60">사랑의 수고로<br>어르신이 행복한 세상을 함께 만듭니다.</p>' +
          '</div>' +
          linkCols +
        '</div>' +
        '<div class="mt-10 pt-6 border-t border-white/10 text-[13px] text-cream/55 space-y-1">' +
          '<p>' + (C.centerName || '') + '  |  대표 ' + (C.rep || '') + '</p>' +
          '<p>주소 : ' + (C.addressCity || '') + '  |  서비스 지역 : ' + areas + '</p>' +
          '<p>TEL : <a href="' + (C.telHref || '#') + '" class="hover:text-white">' + (C.tel || '') + '</a>  |  E-MAIL : <a href="mailto:' + (C.email || '') + '" class="hover:text-white">' + (C.email || '') + '</a></p>' +
          '<p class="pt-2 text-cream/40">COPYRIGHT © ' + (C.centerName || '') + '. ALL RIGHTS RESERVED.</p>' +
        '</div>' +
      '</div>'
    );
  }

  /* ---------- 마운트 ---------- */
  function mount() {
    var header = document.getElementById('site-header');
    if (header) {
      header.className = 'sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-hairline';
      header.innerHTML = headerHTML();
      document.body.insertAdjacentHTML('beforeend', mobileMenuHTML());
    }
    var footer = document.getElementById('site-footer');
    if (footer) {
      footer.className = 'bg-brand-dark mt-24';
      footer.innerHTML = footerHTML();
    }

    // 모바일 메뉴
    var menu = document.getElementById('mobileMenu');
    var toggle = document.getElementById('navToggle');
    function openMenu() { if (menu) { menu.classList.remove('hidden'); document.body.style.overflow = 'hidden'; toggle && toggle.setAttribute('aria-expanded', 'true'); } }
    function closeMenu() { if (menu) { menu.classList.add('hidden'); document.body.style.overflow = ''; toggle && toggle.setAttribute('aria-expanded', 'false'); } }
    toggle && toggle.addEventListener('click', openMenu);
    menu && menu.addEventListener('click', function (e) { if (e.target.closest('[data-close]')) closeMenu(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

    // 스크롤 등장 애니메이션
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

    // 현재 연도
    document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
