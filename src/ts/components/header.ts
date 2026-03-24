export const menuItems = [
  { name: 'inicio', href: 'home.html', label: 'Inicio' },
  { name: 'servicios', href: 'service.html', label: 'Nuestros Servicios' },
  { name: 'quienes somos', href: 'about.html', label: 'Quiénes somos' },
  { name: 'contacto', href: 'contact.html', label: 'Contactenos' },
];

export function headerComponent(currentPage: string = 'inicio'): string {
  const menuHtml = menuItems
    .map((item) => {
      const isActive =
        currentPage.toLowerCase() === item.name.toLowerCase();
      console.log(item.href);
      return `
      <li class="header-nav-item">
        <a
          href="${item.href}"
          class="header-nav-link${isActive ? ' header-nav-link--active' : ''}"
          data-active="${isActive}"
        >
          <span class="header-nav-text">${item.label}</span>
          ${isActive ? '<span class="header-nav-indicator"></span>' : '<span class="header-nav-indicator"></span>'}
        </a>
      </li>`;
    })
    .join('');

  return /*html*/ `
    <!-- ═══════════════════════════════════════════
         HEADER COMPONENT — Portafolio Ficha 3408214
    ═══════════════════════════════════════════ -->

    <header class="site-header w-full">

      <!-- ── Top bar ── -->
      <div class="header-topbar">

        <!-- Decoración fondo -->
        <svg class="header-topbar-deco" width="220" height="110" viewBox="0 0 220 110" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="85" rx="120" ry="20" fill="#c8a27a"/>
          <ellipse cx="160" cy="82" rx="105" ry="14" fill="#e7d5c5"/>
          <ellipse cx="160" cy="79" rx="92" ry="10" fill="#4b3a2f"/>
          <path d="M130 72 Q128 52 132 38" stroke="#c8a27a" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="4 6" opacity="0.7"/>
          <path d="M160 69 Q158 49 162 35" stroke="#c8a27a" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="4 6" opacity="0.5"/>
          <path d="M190 72 Q188 52 192 38" stroke="#c8a27a" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="4 6" opacity="0.6"/>
        </svg>

        <!-- Brand -->
        <div class="header-brand">
          <div class="header-brand-icon">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="13" cy="18" rx="9" ry="2.5" fill="#c8a27a" opacity="0.5"/>
              <path d="M5 11 Q4.8 18 13 19.5 Q21.2 18 21 11 Z" fill="#e7d5c5"/>
              <ellipse cx="13" cy="11" rx="8" ry="2" fill="#c8a27a"/>
              <ellipse cx="13" cy="11" rx="6.5" ry="1.4" fill="#4b3a2f"/>
              <path d="M21 12.5 Q24 12.5 24 15 Q24 17.5 21 17.5" fill="none" stroke="#e7d5c5" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="header-brand-text">
            <h1 class="header-brand-title">
              Portafolio <em>Barismo</em>
            </h1>
            <p class="header-brand-sub">Aprendices SENA · Tecnicos en Barismo</p>
          </div>
        </div>

        <!-- Badge -->
        <div class="header-badge">
          <span class="header-badge-pill">Aprendices de Barismo SENA</span>
          <span class="header-badge-ficha">Ficha · 3408214</span>
        </div>

      </div>

      <!-- Línea dorada decorativa -->
      <div class="header-divider"></div>

      <!-- ── Nav sticky ── -->
      <nav class="header-nav">
        <div class="header-nav-inner">

          <!-- Logo mínimo mobile -->
          <div class="header-nav-logo-sm">
            <svg width="18" height="18" viewBox="0 0 26 26" fill="none">
              <ellipse cx="13" cy="18" rx="9" ry="2.5" fill="#c8a27a" opacity="0.5"/>
              <path d="M5 11 Q4.8 18 13 19.5 Q21.2 18 21 11 Z" fill="#e7d5c5"/>
              <ellipse cx="13" cy="11" rx="8" ry="2" fill="#c8a27a"/>
              <ellipse cx="13" cy="11" rx="6.5" ry="1.4" fill="#4b3a2f"/>
            </svg>
            Barismo
          </div>

          <!-- Menu desktop -->
          <ul class="header-nav-list">
            ${menuHtml}
          </ul>

          <!-- Hamburger mobile -->
          <button
            class="header-hamburger"
            aria-label="Abrir menú"
            onclick="
              const m = document.getElementById('header-mobile-menu');
              m.classList.toggle('open');
              this.setAttribute('aria-expanded', m.classList.contains('open'));
            "
            aria-expanded="false"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="3" y1="6" x2="19" y2="6"/>
              <line x1="3" y1="11" x2="19" y2="11"/>
              <line x1="3" y1="16" x2="19" y2="16"/>
            </svg>
          </button>
        </div>

        <!-- Mobile dropdown -->
        <div id="header-mobile-menu" class="header-mobile-menu">
          <ul style="list-style:none;margin:0;padding:0;">
            ${menuHtml}
          </ul>
        </div>
      </nav>

    </header>
  `;
}

