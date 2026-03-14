export const menuItems = [
  { name: 'inicio', href: 'index.html', label: 'Inicio' },
  { name: 'servicios', href: 'servicios.html', label: 'Servicios' },
  { name: 'quienes somos', href: 'quienes-somos.html', label: 'Quiénes somos' },
  { name: 'paquetes', href: 'paquetes.html', label: 'Paquetes' },
  { name: 'contacto', href: 'contacto.html', label: 'Contacto' },
];

export function headerComponent(currentPage: string = 'inicio'): string {
  const menuHtml = menuItems
    .map((item) => {
      const isActive =
        currentPage.toLowerCase() === item.name.toLowerCase();

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
    <style>
      /* ── Google Fonts ── */
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,500&family=DM+Sans:wght@300;400;500&display=swap');

      /* ── Keyframes ── */
      @keyframes headerSlideDown {
        from { opacity: 0; transform: translateY(-100%); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes logoPulse {
        0%, 100% { opacity: 0.45; transform: scale(1); }
        50%       { opacity: 0.65; transform: scale(1.08); }
      }
      @keyframes indicatorExpand {
        from { transform: scaleX(0); }
        to   { transform: scaleX(1); }
      }

      /* ── Wrapper ── */
      .site-header {
        animation: headerSlideDown 0.6s cubic-bezier(.22,.68,0,1.2) both;
      }

      /* ── Top bar ── */
      .header-topbar {
        position: relative;
        overflow: hidden;
        background: var(--text-body-color);  /* #4b3a2f — oscuro como el panel del hero */
        padding: 1.5rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
      }

      /* Decoración grain sutil */
      .header-topbar::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
        opacity: 0.18;
        pointer-events: none;
      }

      /* Elemento decorativo SVG fondo */
      .header-topbar-deco {
        position: absolute;
        right: 2rem;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.07;
        pointer-events: none;
      }

      /* Logo / identidad izquierda */
      .header-brand {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .header-brand-icon {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1.5px solid rgba(200,162,122,0.35);
        background: rgba(200,162,122,0.1);
        flex-shrink: 0;
      }

      .header-brand-text {}

      .header-brand-title {
        font-family: 'Playfair Display', serif;
        font-size: 1.45rem;
        font-weight: 600;
        color: var(--bg-body-color); /* #f6efe9 */
        line-height: 1.2;
        margin: 0;
      }

      .header-brand-title em {
        font-style: italic;
        font-weight: 500;
        color: var(--bg-btn-color); /* #c8a27a */
      }

      .header-brand-sub {
        font-family: 'DM Sans', sans-serif;
        font-size: 0.7rem;
        font-weight: 400;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--bg-nav-color); /* #e7d5c5 */
        opacity: 0.7;
        margin: 0.2rem 0 0;
      }

      /* Badge SENA derecha */
      .header-badge {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 4px;
      }

      .header-badge-pill {
        font-family: 'DM Sans', sans-serif;
        font-size: 0.65rem;
        font-weight: 500;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--bg-btn-color);
        border: 1px solid rgba(200,162,122,0.3);
        border-radius: 100px;
        padding: 4px 12px;
        background: rgba(200,162,122,0.08);
      }

      .header-badge-ficha {
        font-family: 'DM Sans', sans-serif;
        font-size: 0.6rem;
        letter-spacing: 0.06em;
        color: var(--bg-nav-color);
        opacity: 0.55;
      }

      /* Línea separadora decorativa */
      .header-divider {
        height: 2px;
        background: linear-gradient(
          90deg,
          transparent 0%,
          var(--bg-btn-color) 20%,
          var(--bg-header-color) 50%,
          var(--bg-btn-color) 80%,
          transparent 100%
        );
        opacity: 0.5;
      }

      /* ── Nav ── */
      .header-nav {
        position: sticky;
        top: 0;
        z-index: 50;
        background: var(--bg-nav-color);
        box-shadow: 0 2px 16px rgba(75,58,47,0.12);
      }

      .header-nav-inner {
        max-width: 80rem;
        margin: 0 auto;
        padding: 0 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .header-nav-list {
        display: flex;
        align-items: center;
        gap: 0;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .header-nav-item {
        position: relative;
      }

      /* Separadores verticales sutiles entre items */
      .header-nav-item + .header-nav-item::before {
        content: '';
        position: absolute;
        left: 0;
        top: 30%;
        bottom: 30%;
        width: 1px;
        background: var(--bg-btn-color);
        opacity: 0.2;
      }

      .header-nav-link {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;
        padding: 1rem 1.5rem;
        text-decoration: none;
        font-family: 'DM Sans', sans-serif;
        font-size: 0.78rem;
        font-weight: 400;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--text-nav-color);
        transition: color 0.22s ease;
        overflow: hidden;
      }

      .header-nav-link:hover {
        color: var(--text-h1-color);
      }

      .header-nav-link:hover .header-nav-indicator {
        transform: scaleX(1);
        opacity: 1;
      }

      /* Activo */
      .header-nav-link--active {
        color: var(--text-h1-color);
        font-weight: 500;
      }

      .header-nav-link--active .header-nav-indicator {
        transform: scaleX(1) !important;
        opacity: 1 !important;
        background: var(--bg-btn-color) !important;
        height: 2.5px !important;
      }

      /* Indicador subrayado animado */
      .header-nav-indicator {
        display: block;
        position: absolute;
        bottom: 0;
        left: 1rem;
        right: 1rem;
        height: 2px;
        border-radius: 2px;
        background: var(--text-h3-color);
        transform: scaleX(0);
        opacity: 0;
        transform-origin: center;
        transition: transform 0.25s cubic-bezier(.22,.68,0,1.2), opacity 0.2s ease;
      }

      /* Punto activo encima del texto */
      .header-nav-link--active .header-nav-text::before {
        content: '';
        display: inline-block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: var(--bg-btn-color);
        margin-right: 6px;
        vertical-align: middle;
        animation: logoPulse 2s ease-in-out infinite;
      }

      /* ── Responsive: mobile ── */
      .header-hamburger {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        color: var(--text-nav-color);
      }

      .header-mobile-menu {
        display: none;
        flex-direction: column;
        background: var(--bg-nav-color);
        border-top: 1px solid rgba(200,162,122,0.2);
        padding: 0.5rem 0 1rem;
      }

      .header-mobile-menu.open {
        display: flex;
      }

      .header-mobile-menu .header-nav-link {
        padding: 0.85rem 2rem;
        flex-direction: row;
        justify-content: flex-start;
        gap: 10px;
        font-size: 0.85rem;
        border-bottom: 1px solid rgba(200,162,122,0.1);
      }

      .header-mobile-menu .header-nav-indicator {
        position: static;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        transform: scaleX(1) !important;
        opacity: 1 !important;
        flex-shrink: 0;
      }

      .header-mobile-menu .header-nav-link--active .header-nav-indicator {
        width: 6px;
        height: 6px;
      }

      @media (max-width: 768px) {
        .header-topbar {
          padding: 1.25rem 1.25rem;
        }
        .header-brand-title {
          font-size: 1.15rem;
        }
        .header-nav-list {
          display: none;
        }
        .header-hamburger {
          display: block;
        }
        .header-nav-inner {
          justify-content: space-between;
          padding: 0.5rem 1.25rem;
        }
        .header-nav-logo-sm {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Playfair Display', serif;
          font-size: 0.95rem;
          color: var(--text-h2-color);
        }
      }

      @media (min-width: 769px) {
        .header-nav-logo-sm { display: none; }
        .header-mobile-menu { display: none !important; }
      }
    </style>

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
            <p class="header-brand-sub">Cafés &amp; Barismo · Aprendices SENA</p>
          </div>
        </div>

        <!-- Badge -->
        <div class="header-badge">
          <span class="header-badge-pill">Aprendices SENA</span>
          <span class="header-badge-ficha">Ficha 3408214</span>
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

// export function headerComponent(currentPage: string = 'inicio'): string {

//   return /*html*/`
//     <!-- Top bar -->
//   <div class="header-topbar">
//     <svg class="header-topbar-deco" width="220" height="110" viewBox="0 0 220 110" xmlns="http://www.w3.org/2000/svg">
//       <ellipse cx="160" cy="85" rx="120" ry="20" fill="#c8a27a"/>
//       <ellipse cx="160" cy="82" rx="105" ry="14" fill="#e7d5c5"/>
//       <ellipse cx="160" cy="79" rx="92" ry="10" fill="#4b3a2f"/>
//       <path d="M130 72 Q128 52 132 38" stroke="#c8a27a" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="4 6" opacity="0.7"/>
//       <path d="M160 69 Q158 49 162 35" stroke="#c8a27a" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="4 6" opacity="0.5"/>
//       <path d="M190 72 Q188 52 192 38" stroke="#c8a27a" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="4 6" opacity="0.6"/>
//     </svg>
 
//     <div class="header-brand">
//       <div class="header-brand-icon">
//         <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
//           <ellipse cx="13" cy="18" rx="9" ry="2.5" fill="#c8a27a" opacity="0.5"/>
//           <path d="M5 11 Q4.8 18 13 19.5 Q21.2 18 21 11 Z" fill="#e7d5c5"/>
//           <ellipse cx="13" cy="11" rx="8" ry="2" fill="#c8a27a"/>
//           <ellipse cx="13" cy="11" rx="6.5" ry="1.4" fill="#4b3a2f"/>
//           <path d="M21 12.5 Q24 12.5 24 15 Q24 17.5 21 17.5" fill="none" stroke="#e7d5c5" stroke-width="1.8" stroke-linecap="round"/>
//         </svg>
//       </div>
//       <div>
//         <h1 class="header-brand-title">Portafolio <em>Barismo</em></h1>
//         <p class="header-brand-sub">Cafés &amp; Barismo · Aprendices SENA</p>
//       </div>
//     </div>
 
//     <div class="header-badge">
//       <span class="header-badge-pill">Aprendices SENA</span>
//       <span class="header-badge-ficha">Ficha 3408214</span>
//     </div>
//   </div>
 
//   <div class="header-divider"></div>
 
//   <!-- Nav sticky -->
//   <nav class="header-nav">
//     <div class="header-nav-inner">
 
//       <div class="header-nav-logo-sm">
//         <svg width="18" height="18" viewBox="0 0 26 26" fill="none">
//           <ellipse cx="13" cy="18" rx="9" ry="2.5" fill="#c8a27a" opacity="0.5"/>
//           <path d="M5 11 Q4.8 18 13 19.5 Q21.2 18 21 11 Z" fill="#e7d5c5"/>
//           <ellipse cx="13" cy="11" rx="8" ry="2" fill="#c8a27a"/>
//           <ellipse cx="13" cy="11" rx="6.5" ry="1.4" fill="#4b3a2f"/>
//         </svg>
//         Barismo
//       </div>
 
//       <ul class="header-nav-list">
//         <li class="header-nav-item">
//           <a href="index.html" class="header-nav-link header-nav-link--active">
//             <span class="header-nav-text">Inicio</span>
//             <span class="header-nav-indicator"></span>
//           </a>
//         </li>
//         <li class="header-nav-item">
//           <a href="servicios.html" class="header-nav-link">
//             <span class="header-nav-text">Servicios</span>
//             <span class="header-nav-indicator"></span>
//           </a>
//         </li>
//         <li class="header-nav-item">
//           <a href="quienes-somos.html" class="header-nav-link">
//             <span class="header-nav-text">Quiénes somos</span>
//             <span class="header-nav-indicator"></span>
//           </a>
//         </li>
//         <li class="header-nav-item">
//           <a href="paquetes.html" class="header-nav-link">
//             <span class="header-nav-text">Paquetes</span>
//             <span class="header-nav-indicator"></span>
//           </a>
//         </li>
//         <li class="header-nav-item">
//           <a href="contacto.html" class="header-nav-link">
//             <span class="header-nav-text">Contacto</span>
//             <span class="header-nav-indicator"></span>
//           </a>
//         </li>
//       </ul>
 
//       <button
//         class="header-hamburger"
//         aria-label="Abrir menú"
//         onclick="
//           const m = document.getElementById('header-mobile-menu');
//           m.classList.toggle('open');
//           this.setAttribute('aria-expanded', m.classList.contains('open'));
//         "
//         aria-expanded="false"
//       >
//         <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
//           <line x1="3" y1="6" x2="19" y2="6"/>
//           <line x1="3" y1="11" x2="19" y2="11"/>
//           <line x1="3" y1="16" x2="19" y2="16"/>
//         </svg>
//       </button>
//     </div>
 
//     <div id="header-mobile-menu" class="header-mobile-menu">
//       <ul style="list-style:none;margin:0;padding:0;">
//         <li class="header-nav-item"><a href="index.html" class="header-nav-link header-nav-link--active"><span class="header-nav-indicator"></span><span class="header-nav-text">Inicio</span></a></li>
//         <li class="header-nav-item"><a href="servicios.html" class="header-nav-link"><span class="header-nav-indicator"></span><span class="header-nav-text">Servicios</span></a></li>
//         <li class="header-nav-item"><a href="quienes-somos.html" class="header-nav-link"><span class="header-nav-indicator"></span><span class="header-nav-text">Quiénes somos</span></a></li>
//         <li class="header-nav-item"><a href="paquetes.html" class="header-nav-link"><span class="header-nav-indicator"></span><span class="header-nav-text">Paquetes</span></a></li>
//         <li class="header-nav-item"><a href="contacto.html" class="header-nav-link"><span class="header-nav-indicator"></span><span class="header-nav-text">Contacto</span></a></li>
//       </ul>
//     </div>
//   </nav>
//   `
// }
