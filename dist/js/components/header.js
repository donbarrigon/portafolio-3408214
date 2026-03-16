// src/ts/components/header.ts
var menuItems = [
  { name: "inicio", href: "home.html", label: "Inicio" },
  { name: "servicios", href: "service.html", label: "Servicios" },
  { name: "quienes somos", href: "about.html", label: "Quiénes somos" },
  { name: "paquetes", href: "service2.html", label: "Paquetes" },
  { name: "contacto", href: "contact.html", label: "Contacto" }
];
function headerComponent(currentPage = "inicio") {
  const menuHtml = menuItems.map((item) => {
    const isActive = currentPage.toLowerCase() === item.name.toLowerCase();
    console.log(item.href);
    return `
      <li class="header-nav-item">
        <a
          href="${item.href}"
          class="header-nav-link${isActive ? " header-nav-link--active" : ""}"
          data-active="${isActive}"
        >
          <span class="header-nav-text">${item.label}</span>
          ${isActive ? '<span class="header-nav-indicator"></span>' : '<span class="header-nav-indicator"></span>'}
        </a>
      </li>`;
  }).join("");
  return `
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
export {
  menuItems,
  headerComponent
};

//# debugId=2D00AA057D57B81264756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3RzL2NvbXBvbmVudHMvaGVhZGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgImV4cG9ydCBjb25zdCBtZW51SXRlbXMgPSBbXG4gIHsgbmFtZTogJ2luaWNpbycsIGhyZWY6ICdob21lLmh0bWwnLCBsYWJlbDogJ0luaWNpbycgfSxcbiAgeyBuYW1lOiAnc2VydmljaW9zJywgaHJlZjogJ3NlcnZpY2UuaHRtbCcsIGxhYmVsOiAnU2VydmljaW9zJyB9LFxuICB7IG5hbWU6ICdxdWllbmVzIHNvbW9zJywgaHJlZjogJ2Fib3V0Lmh0bWwnLCBsYWJlbDogJ1F1acOpbmVzIHNvbW9zJyB9LFxuICB7IG5hbWU6ICdwYXF1ZXRlcycsIGhyZWY6ICdzZXJ2aWNlMi5odG1sJywgbGFiZWw6ICdQYXF1ZXRlcycgfSxcbiAgeyBuYW1lOiAnY29udGFjdG8nLCBocmVmOiAnY29udGFjdC5odG1sJywgbGFiZWw6ICdDb250YWN0bycgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkZXJDb21wb25lbnQoY3VycmVudFBhZ2U6IHN0cmluZyA9ICdpbmljaW8nKTogc3RyaW5nIHtcbiAgY29uc3QgbWVudUh0bWwgPSBtZW51SXRlbXNcbiAgICAubWFwKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBpc0FjdGl2ZSA9XG4gICAgICAgIGN1cnJlbnRQYWdlLnRvTG93ZXJDYXNlKCkgPT09IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc29sZS5sb2coaXRlbS5ocmVmKTtcbiAgICAgIHJldHVybiBgXG4gICAgICA8bGkgY2xhc3M9XCJoZWFkZXItbmF2LWl0ZW1cIj5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiJHtpdGVtLmhyZWZ9XCJcbiAgICAgICAgICBjbGFzcz1cImhlYWRlci1uYXYtbGluayR7aXNBY3RpdmUgPyAnIGhlYWRlci1uYXYtbGluay0tYWN0aXZlJyA6ICcnfVwiXG4gICAgICAgICAgZGF0YS1hY3RpdmU9XCIke2lzQWN0aXZlfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRlci1uYXYtdGV4dFwiPiR7aXRlbS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgJHtpc0FjdGl2ZSA/ICc8c3BhbiBjbGFzcz1cImhlYWRlci1uYXYtaW5kaWNhdG9yXCI+PC9zcGFuPicgOiAnPHNwYW4gY2xhc3M9XCJoZWFkZXItbmF2LWluZGljYXRvclwiPjwvc3Bhbj4nfVxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPmA7XG4gICAgfSlcbiAgICAuam9pbignJyk7XG5cbiAgcmV0dXJuIC8qaHRtbCovIGBcbiAgICA8IS0tIOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkFxuICAgICAgICAgSEVBREVSIENPTVBPTkVOVCDigJQgUG9ydGFmb2xpbyBGaWNoYSAzNDA4MjE0XG4gICAg4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQIC0tPlxuXG4gICAgPGhlYWRlciBjbGFzcz1cInNpdGUtaGVhZGVyIHctZnVsbFwiPlxuXG4gICAgICA8IS0tIOKUgOKUgCBUb3AgYmFyIOKUgOKUgCAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdG9wYmFyXCI+XG5cbiAgICAgICAgPCEtLSBEZWNvcmFjacOzbiBmb25kbyAtLT5cbiAgICAgICAgPHN2ZyBjbGFzcz1cImhlYWRlci10b3BiYXItZGVjb1wiIHdpZHRoPVwiMjIwXCIgaGVpZ2h0PVwiMTEwXCIgdmlld0JveD1cIjAgMCAyMjAgMTEwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxlbGxpcHNlIGN4PVwiMTYwXCIgY3k9XCI4NVwiIHJ4PVwiMTIwXCIgcnk9XCIyMFwiIGZpbGw9XCIjYzhhMjdhXCIvPlxuICAgICAgICAgIDxlbGxpcHNlIGN4PVwiMTYwXCIgY3k9XCI4MlwiIHJ4PVwiMTA1XCIgcnk9XCIxNFwiIGZpbGw9XCIjZTdkNWM1XCIvPlxuICAgICAgICAgIDxlbGxpcHNlIGN4PVwiMTYwXCIgY3k9XCI3OVwiIHJ4PVwiOTJcIiByeT1cIjEwXCIgZmlsbD1cIiM0YjNhMmZcIi8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xMzAgNzIgUTEyOCA1MiAxMzIgMzhcIiBzdHJva2U9XCIjYzhhMjdhXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1kYXNoYXJyYXk9XCI0IDZcIiBvcGFjaXR5PVwiMC43XCIvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTYwIDY5IFExNTggNDkgMTYyIDM1XCIgc3Ryb2tlPVwiI2M4YTI3YVwiIHN0cm9rZS13aWR0aD1cIjJcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtZGFzaGFycmF5PVwiNCA2XCIgb3BhY2l0eT1cIjAuNVwiLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTE5MCA3MiBRMTg4IDUyIDE5MiAzOFwiIHN0cm9rZT1cIiNjOGEyN2FcIiBzdHJva2Utd2lkdGg9XCIyXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWRhc2hhcnJheT1cIjQgNlwiIG9wYWNpdHk9XCIwLjZcIi8+XG4gICAgICAgIDwvc3ZnPlxuXG4gICAgICAgIDwhLS0gQnJhbmQgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItYnJhbmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWJyYW5kLWljb25cIj5cbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNlwiIGhlaWdodD1cIjI2XCIgdmlld0JveD1cIjAgMCAyNiAyNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjEzXCIgY3k9XCIxOFwiIHJ4PVwiOVwiIHJ5PVwiMi41XCIgZmlsbD1cIiNjOGEyN2FcIiBvcGFjaXR5PVwiMC41XCIvPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUgMTEgUTQuOCAxOCAxMyAxOS41IFEyMS4yIDE4IDIxIDExIFpcIiBmaWxsPVwiI2U3ZDVjNVwiLz5cbiAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCIxM1wiIGN5PVwiMTFcIiByeD1cIjhcIiByeT1cIjJcIiBmaWxsPVwiI2M4YTI3YVwiLz5cbiAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCIxM1wiIGN5PVwiMTFcIiByeD1cIjYuNVwiIHJ5PVwiMS40XCIgZmlsbD1cIiM0YjNhMmZcIi8+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjEgMTIuNSBRMjQgMTIuNSAyNCAxNSBRMjQgMTcuNSAyMSAxNy41XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZTdkNWM1XCIgc3Ryb2tlLXdpZHRoPVwiMS44XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItYnJhbmQtdGV4dFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwiaGVhZGVyLWJyYW5kLXRpdGxlXCI+XG4gICAgICAgICAgICAgIFBvcnRhZm9saW8gPGVtPkJhcmlzbW88L2VtPlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLWJyYW5kLXN1YlwiPkNhZsOpcyAmYW1wOyBCYXJpc21vIMK3IEFwcmVuZGljZXMgU0VOQTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBCYWRnZSAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1iYWRnZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGVyLWJhZGdlLXBpbGxcIj5BcHJlbmRpY2VzIFNFTkE8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXItYmFkZ2UtZmljaGFcIj5GaWNoYSAzNDA4MjE0PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gTMOtbmVhIGRvcmFkYSBkZWNvcmF0aXZhIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1kaXZpZGVyXCI+PC9kaXY+XG5cbiAgICAgIDwhLS0g4pSA4pSAIE5hdiBzdGlja3kg4pSA4pSAIC0tPlxuICAgICAgPG5hdiBjbGFzcz1cImhlYWRlci1uYXZcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1uYXYtaW5uZXJcIj5cblxuICAgICAgICAgIDwhLS0gTG9nbyBtw61uaW1vIG1vYmlsZSAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLW5hdi1sb2dvLXNtXCI+XG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjYgMjZcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjEzXCIgY3k9XCIxOFwiIHJ4PVwiOVwiIHJ5PVwiMi41XCIgZmlsbD1cIiNjOGEyN2FcIiBvcGFjaXR5PVwiMC41XCIvPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUgMTEgUTQuOCAxOCAxMyAxOS41IFEyMS4yIDE4IDIxIDExIFpcIiBmaWxsPVwiI2U3ZDVjNVwiLz5cbiAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCIxM1wiIGN5PVwiMTFcIiByeD1cIjhcIiByeT1cIjJcIiBmaWxsPVwiI2M4YTI3YVwiLz5cbiAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCIxM1wiIGN5PVwiMTFcIiByeD1cIjYuNVwiIHJ5PVwiMS40XCIgZmlsbD1cIiM0YjNhMmZcIi8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIEJhcmlzbW9cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwhLS0gTWVudSBkZXNrdG9wIC0tPlxuICAgICAgICAgIDx1bCBjbGFzcz1cImhlYWRlci1uYXYtbGlzdFwiPlxuICAgICAgICAgICAgJHttZW51SHRtbH1cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPCEtLSBIYW1idXJnZXIgbW9iaWxlIC0tPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiaGVhZGVyLWhhbWJ1cmdlclwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQWJyaXIgbWVuw7pcIlxuICAgICAgICAgICAgb25jbGljaz1cIlxuICAgICAgICAgICAgICBjb25zdCBtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1tb2JpbGUtbWVudScpO1xuICAgICAgICAgICAgICBtLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBtLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKTtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMlwiIGhlaWdodD1cIjIyXCIgdmlld0JveD1cIjAgMCAyMiAyMlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIj5cbiAgICAgICAgICAgICAgPGxpbmUgeDE9XCIzXCIgeTE9XCI2XCIgeDI9XCIxOVwiIHkyPVwiNlwiLz5cbiAgICAgICAgICAgICAgPGxpbmUgeDE9XCIzXCIgeTE9XCIxMVwiIHgyPVwiMTlcIiB5Mj1cIjExXCIvPlxuICAgICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjE2XCIgeDI9XCIxOVwiIHkyPVwiMTZcIi8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBNb2JpbGUgZHJvcGRvd24gLS0+XG4gICAgICAgIDxkaXYgaWQ9XCJoZWFkZXItbW9iaWxlLW1lbnVcIiBjbGFzcz1cImhlYWRlci1tb2JpbGUtbWVudVwiPlxuICAgICAgICAgIDx1bCBzdHlsZT1cImxpc3Qtc3R5bGU6bm9uZTttYXJnaW46MDtwYWRkaW5nOjA7XCI+XG4gICAgICAgICAgICAke21lbnVIdG1sfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG5cbiAgICA8L2hlYWRlcj5cbiAgYDtcbn1cblxuIgogIF0sCiAgIm1hcHBpbmdzIjogIjtBQUFPLElBQU0sWUFBWTtBQUFBLEVBQ3ZCLEVBQUUsTUFBTSxVQUFVLE1BQU0sYUFBYSxPQUFPLFNBQVM7QUFBQSxFQUNyRCxFQUFFLE1BQU0sYUFBYSxNQUFNLGdCQUFnQixPQUFPLFlBQVk7QUFBQSxFQUM5RCxFQUFFLE1BQU0saUJBQWlCLE1BQU0sY0FBYyxPQUFPLGdCQUFlO0FBQUEsRUFDbkUsRUFBRSxNQUFNLFlBQVksTUFBTSxpQkFBaUIsT0FBTyxXQUFXO0FBQUEsRUFDN0QsRUFBRSxNQUFNLFlBQVksTUFBTSxnQkFBZ0IsT0FBTyxXQUFXO0FBQzlEO0FBRU8sU0FBUyxlQUFlLENBQUMsY0FBc0IsVUFBa0I7QUFBQSxFQUN0RSxNQUFNLFdBQVcsVUFDZCxJQUFJLENBQUMsU0FBUztBQUFBLElBQ2IsTUFBTSxXQUNKLFlBQVksWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZO0FBQUEsSUFDdEQsUUFBUSxJQUFJLEtBQUssSUFBSTtBQUFBLElBQ3JCLE9BQU87QUFBQTtBQUFBO0FBQUEsa0JBR0ssS0FBSztBQUFBLGtDQUNXLFdBQVcsNkJBQTZCO0FBQUEseUJBQ2pEO0FBQUE7QUFBQSwwQ0FFaUIsS0FBSztBQUFBLFlBQ25DLFdBQVcsK0NBQStDO0FBQUE7QUFBQTtBQUFBLEdBR2pFLEVBQ0EsS0FBSyxFQUFFO0FBQUEsRUFFVixPQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbUVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTsiLAogICJkZWJ1Z0lkIjogIjJEMDBBQTA1N0Q1N0I4MTI2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
