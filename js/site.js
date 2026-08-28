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

  function isActive(group) {
    return group.children.some(function (c) { return c.href === location.pathname; })
      || group.href === location.pathname;
  }

  var phoneSvg = '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.2l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.2-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6z"/></svg>';

  /* ---------- 헤더 ---------- */
  function headerHTML() {
    var desktop = NAV.map(function (g) {
      var sub = g.children.map(function (c) {
        var on = c.href === location.pathname;
        return '<li><a href="' + c.href + '" class="block px-3.5 py-2.5 text-[14px] font-medium rounded-xl transition-colors duration-150 ' +
          (on ? 'text-primary-deep font-semibold bg-primary-50' : 'text-ink hover:text-primary-deep hover:bg-primary-50/70') +
          '">' + c.label + '</a></li>';
      }).join('');
      return (
        '<div class="nav-group relative">' +
          '<a href="' + g.href + '" class="flex items-center gap-1 px-3.5 py-2.5 text-[15px] font-semibold rounded-xl transition-colors ' +
            (isActive(g) ? 'text-primary-deep' : 'text-ink-secondary hover:text-primary-deep') + '">' +
            g.label +
            '<svg class="nav-caret w-3 h-3 mt-0.5 text-ink-mute transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" d="M6 9l6 6 6-6"/></svg>' +
          '</a>' +
          '<div class="nav-panel absolute left-1/2 -translate-x-1/2 top-full pt-3">' +
            '<ul class="min-w-[184px] rounded-2xl border border-hairline bg-white p-2 shadow-pop">' + sub + '</ul>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    return (
      '<div class="bg-brand-darker text-cream/70 text-xs hidden md:block">' +
        '<div class="mx-auto max-w-6xl px-6 h-9 flex items-center justify-between">' +
          '<span class="tracking-wide">' + (C.centerName || '') + '</span>' +
          '<span class="flex items-center gap-5">' +
            '<a href="' + (C.telHref || '#') + '" class="hover:text-white transition-colors">전화 ' + (C.tel || '') + '</a>' +
            '<a href="mailto:' + (C.email || '') + '" class="hover:text-white transition-colors">' + (C.email || '') + '</a>' +
          '</span>' +
        '</div>' +
      '</div>' +
      '<div class="mx-auto max-w-6xl px-5 sm:px-6">' +
        '<div class="h-16 sm:h-[4.75rem] flex items-center justify-between gap-4">' +
          '<a href="/" class="flex items-center gap-2.5 flex-shrink-0">' +
            '<img src="/brand_logo/logo.svg" alt="' + (C.centerShort || '위드케어') + ' 로고" class="h-10 w-10 rounded-2xl shadow-sm">' +
            '<span class="leading-tight">' +
              '<span class="block font-display font-bold text-primary-deep text-lg">' + (C.centerShort || '위드케어') + '</span>' +
              '<span class="block text-[11px] tracking-[0.14em] text-ink-mute -mt-0.5">재가노인복지센터</span>' +
            '</span>' +
          '</a>' +
          '<nav class="hidden lg:flex items-center gap-0.5">' + desktop + '</nav>' +
          '<div class="flex items-center gap-2.5">' +
            '<a href="' + (C.telHref || '#') + '" class="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-primary-deep">' + phoneSvg + (C.tel || '') + '</a>' +
            '<a href="/pages/contact.html" class="btn inline-flex items-center rounded-full bg-primary hover:bg-primary-press text-white text-sm font-semibold px-4.5 py-2.5 shadow-accent focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/30">상담신청</a>' +
            '<button id="navToggle" type="button" class="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl text-ink-secondary hover:bg-paper-cream transition-colors" aria-label="메뉴 열기" aria-expanded="false">' +
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
        return '<a href="' + c.href + '" class="block py-2.5 pl-4 text-[15px] rounded-lg transition-colors ' +
          (on ? 'text-primary-deep font-semibold bg-primary-50' : 'text-ink-secondary hover:text-primary-deep') + '">' + c.label + '</a>';
      }).join('');
      return (
        '<div class="border-b border-hairline py-3">' +
          '<p class="px-1 py-1 text-eyebrow text-ink-mute">' + g.label + '</p>' +
          '<div class="mt-1">' + sub + '</div>' +
        '</div>'
      );
    }).join('');
    return (
      '<div id="mobileMenu" class="fixed inset-0 z-[60] hidden lg:hidden">' +
        '<div class="absolute inset-0 bg-ink/45 backdrop-blur-sm" data-close></div>' +
        '<div class="absolute right-0 top-0 h-full w-[84%] max-w-sm bg-paper shadow-pop overflow-y-auto">' +
          '<div class="flex items-center justify-between h-16 px-5 border-b border-hairline">' +
            '<span class="font-display font-bold text-primary-deep">' + (C.centerShort || '위드케어') + '</span>' +
            '<button type="button" data-close class="h-10 w-10 inline-flex items-center justify-center rounded-xl text-ink-secondary hover:bg-paper-cream" aria-label="메뉴 닫기">' +
              '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M6 6l12 12M18 6L6 18"/></svg>' +
            '</button>' +
          '</div>' +
          '<div class="p-5">' + items +
            '<a href="' + (C.telHref || '#') + '" class="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-sage-light text-sage-deep font-bold py-3.5">전화 상담 ' + (C.tel || '') + '</a>' +
            '<a href="/pages/contact.html" class="mt-2.5 flex items-center justify-center rounded-2xl bg-primary text-white font-semibold py-3.5 shadow-accent">온라인 상담신청</a>' +
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
          '<p class="text-eyebrow text-accent-soft/80 mb-2.5">' + g.label + '</p>' +
          '<ul class="space-y-2">' +
            g.children.map(function (c) {
              return '<li><a href="' + c.href + '" class="link-sweep text-[13.5px] text-cream/55 hover:text-white transition-colors">' + c.label + '</a></li>';
            }).join('') +
          '</ul>' +
        '</div>'
      );
    }).join('');
    return (
      '<div class="h-1 bg-gradient-to-r from-accent via-primary to-clay"></div>' +
      '<div class="mx-auto max-w-6xl px-5 sm:px-6 py-12 sm:py-16">' +
        '<div class="grid gap-x-6 gap-y-9 grid-cols-2 sm:grid-cols-3 md:grid-cols-[1.5fr_repeat(5,1fr)]">' +
          '<div class="col-span-2 sm:col-span-3 md:col-span-1">' +
            '<div class="flex items-center gap-2.5">' +
              '<img src="/brand_logo/logo.svg" alt="" class="h-10 w-10 rounded-2xl">' +
              '<span class="font-display font-bold text-white text-lg">' + (C.centerShort || '위드케어') + '</span>' +
            '</div>' +
            '<p class="mt-4 text-sm leading-relaxed text-cream/55">사랑의 수고로<br>어르신이 행복한 세상을 함께 만들어 갑니다.</p>' +
          '</div>' +
          linkCols +
        '</div>' +
        '<div class="mt-12 pt-6 border-t border-white/10 text-[12.5px] leading-relaxed text-cream/50 space-y-1.5">' +
          '<p><span class="text-cream/75 font-medium">' + (C.centerName || '') + '</span>　|　대표 ' + (C.rep || '') + '</p>' +
          '<p>주소 : ' + (C.addressCity || '') + '　|　서비스 지역 : ' + areas + '</p>' +
          '<p>TEL : <a href="' + (C.telHref || '#') + '" class="hover:text-white">' + (C.tel || '') + '</a>　|　E-MAIL : <a href="mailto:' + (C.email || '') + '" class="hover:text-white break-all">' + (C.email || '') + '</a></p>' +
          '<p class="pt-3 text-cream/35">COPYRIGHT © ' + (C.centerName || '') + '. ALL RIGHTS RESERVED.</p>' +
        '</div>' +
      '</div>'
    );
  }

  /* ---------- 마운트 ---------- */
  function mount() {
    var header = document.getElementById('site-header');
    if (header) {
      /* position·배경·테두리는 style.css의 #site-header가 담당 (항상 고정) */
      header.className = 'backdrop-blur-md';
      header.innerHTML = headerHTML();
      document.body.insertAdjacentHTML('beforeend', mobileMenuHTML());
    }
    var footer = document.getElementById('site-footer');
    if (footer) {
      footer.className = 'bg-brand-darker mt-16 sm:mt-24';
      footer.innerHTML = footerHTML();
    }

    // 헤더 스크롤 그림자
    var onScroll = function () { document.body.classList.toggle('scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

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
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

    document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
