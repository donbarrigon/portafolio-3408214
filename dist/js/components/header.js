// src/ts/components/header.ts
var menuItems = [
  { name: "inicio", href: "home.html", label: "Inicio" },
  { name: "servicios", href: "service.html", label: "Servicios" },
  { name: "quienes somos", href: "about.html", label: "Quiénes somos" },
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

//# debugId=DE7A9DE68A226BE064756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3RzL2NvbXBvbmVudHMvaGVhZGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgImV4cG9ydCBjb25zdCBtZW51SXRlbXMgPSBbXG4gIHsgbmFtZTogJ2luaWNpbycsIGhyZWY6ICdob21lLmh0bWwnLCBsYWJlbDogJ0luaWNpbycgfSxcbiAgeyBuYW1lOiAnc2VydmljaW9zJywgaHJlZjogJ3NlcnZpY2UuaHRtbCcsIGxhYmVsOiAnU2VydmljaW9zJyB9LFxuICB7IG5hbWU6ICdxdWllbmVzIHNvbW9zJywgaHJlZjogJ2Fib3V0Lmh0bWwnLCBsYWJlbDogJ1F1acOpbmVzIHNvbW9zJyB9LFxuICB7IG5hbWU6ICdjb250YWN0bycsIGhyZWY6ICdjb250YWN0Lmh0bWwnLCBsYWJlbDogJ0NvbnRhY3RvJyB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWRlckNvbXBvbmVudChjdXJyZW50UGFnZTogc3RyaW5nID0gJ2luaWNpbycpOiBzdHJpbmcge1xuICBjb25zdCBtZW51SHRtbCA9IG1lbnVJdGVtc1xuICAgIC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGlzQWN0aXZlID1cbiAgICAgICAgY3VycmVudFBhZ2UudG9Mb3dlckNhc2UoKSA9PT0gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zb2xlLmxvZyhpdGVtLmhyZWYpO1xuICAgICAgcmV0dXJuIGBcbiAgICAgIDxsaSBjbGFzcz1cImhlYWRlci1uYXYtaXRlbVwiPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCIke2l0ZW0uaHJlZn1cIlxuICAgICAgICAgIGNsYXNzPVwiaGVhZGVyLW5hdi1saW5rJHtpc0FjdGl2ZSA/ICcgaGVhZGVyLW5hdi1saW5rLS1hY3RpdmUnIDogJyd9XCJcbiAgICAgICAgICBkYXRhLWFjdGl2ZT1cIiR7aXNBY3RpdmV9XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGVyLW5hdi10ZXh0XCI+JHtpdGVtLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAke2lzQWN0aXZlID8gJzxzcGFuIGNsYXNzPVwiaGVhZGVyLW5hdi1pbmRpY2F0b3JcIj48L3NwYW4+JyA6ICc8c3BhbiBjbGFzcz1cImhlYWRlci1uYXYtaW5kaWNhdG9yXCI+PC9zcGFuPid9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+YDtcbiAgICB9KVxuICAgIC5qb2luKCcnKTtcblxuICByZXR1cm4gLypodG1sKi8gYFxuICAgIDwhLS0g4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQXG4gICAgICAgICBIRUFERVIgQ09NUE9ORU5UIOKAlCBQb3J0YWZvbGlvIEZpY2hhIDM0MDgyMTRcbiAgICDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZAgLS0+XG5cbiAgICA8aGVhZGVyIGNsYXNzPVwic2l0ZS1oZWFkZXIgdy1mdWxsXCI+XG5cbiAgICAgIDwhLS0g4pSA4pSAIFRvcCBiYXIg4pSA4pSAIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10b3BiYXJcIj5cblxuICAgICAgICA8IS0tIERlY29yYWNpw7NuIGZvbmRvIC0tPlxuICAgICAgICA8c3ZnIGNsYXNzPVwiaGVhZGVyLXRvcGJhci1kZWNvXCIgd2lkdGg9XCIyMjBcIiBoZWlnaHQ9XCIxMTBcIiB2aWV3Qm94PVwiMCAwIDIyMCAxMTBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgPGVsbGlwc2UgY3g9XCIxNjBcIiBjeT1cIjg1XCIgcng9XCIxMjBcIiByeT1cIjIwXCIgZmlsbD1cIiNjOGEyN2FcIi8+XG4gICAgICAgICAgPGVsbGlwc2UgY3g9XCIxNjBcIiBjeT1cIjgyXCIgcng9XCIxMDVcIiByeT1cIjE0XCIgZmlsbD1cIiNlN2Q1YzVcIi8+XG4gICAgICAgICAgPGVsbGlwc2UgY3g9XCIxNjBcIiBjeT1cIjc5XCIgcng9XCI5MlwiIHJ5PVwiMTBcIiBmaWxsPVwiIzRiM2EyZlwiLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTEzMCA3MiBRMTI4IDUyIDEzMiAzOFwiIHN0cm9rZT1cIiNjOGEyN2FcIiBzdHJva2Utd2lkdGg9XCIyXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWRhc2hhcnJheT1cIjQgNlwiIG9wYWNpdHk9XCIwLjdcIi8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xNjAgNjkgUTE1OCA0OSAxNjIgMzVcIiBzdHJva2U9XCIjYzhhMjdhXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1kYXNoYXJyYXk9XCI0IDZcIiBvcGFjaXR5PVwiMC41XCIvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTkwIDcyIFExODggNTIgMTkyIDM4XCIgc3Ryb2tlPVwiI2M4YTI3YVwiIHN0cm9rZS13aWR0aD1cIjJcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtZGFzaGFycmF5PVwiNCA2XCIgb3BhY2l0eT1cIjAuNlwiLz5cbiAgICAgICAgPC9zdmc+XG5cbiAgICAgICAgPCEtLSBCcmFuZCAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1icmFuZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItYnJhbmQtaWNvblwiPlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjI2XCIgaGVpZ2h0PVwiMjZcIiB2aWV3Qm94PVwiMCAwIDI2IDI2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgIDxlbGxpcHNlIGN4PVwiMTNcIiBjeT1cIjE4XCIgcng9XCI5XCIgcnk9XCIyLjVcIiBmaWxsPVwiI2M4YTI3YVwiIG9wYWNpdHk9XCIwLjVcIi8+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNSAxMSBRNC44IDE4IDEzIDE5LjUgUTIxLjIgMTggMjEgMTEgWlwiIGZpbGw9XCIjZTdkNWM1XCIvPlxuICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjEzXCIgY3k9XCIxMVwiIHJ4PVwiOFwiIHJ5PVwiMlwiIGZpbGw9XCIjYzhhMjdhXCIvPlxuICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjEzXCIgY3k9XCIxMVwiIHJ4PVwiNi41XCIgcnk9XCIxLjRcIiBmaWxsPVwiIzRiM2EyZlwiLz5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMSAxMi41IFEyNCAxMi41IDI0IDE1IFEyNCAxNy41IDIxIDE3LjVcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNlN2Q1YzVcIiBzdHJva2Utd2lkdGg9XCIxLjhcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1icmFuZC10ZXh0XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJoZWFkZXItYnJhbmQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgUG9ydGFmb2xpbyA8ZW0+QmFyaXNtbzwvZW0+XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItYnJhbmQtc3ViXCI+Q2Fmw6lzICZhbXA7IEJhcmlzbW8gwrcgQXByZW5kaWNlcyBTRU5BPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIEJhZGdlIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWJhZGdlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXItYmFkZ2UtcGlsbFwiPkFwcmVuZGljZXMgU0VOQTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRlci1iYWRnZS1maWNoYVwiPkZpY2hhIDM0MDgyMTQ8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBMw61uZWEgZG9yYWRhIGRlY29yYXRpdmEgLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWRpdmlkZXJcIj48L2Rpdj5cblxuICAgICAgPCEtLSDilIDilIAgTmF2IHN0aWNreSDilIDilIAgLS0+XG4gICAgICA8bmF2IGNsYXNzPVwiaGVhZGVyLW5hdlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLW5hdi1pbm5lclwiPlxuXG4gICAgICAgICAgPCEtLSBMb2dvIG3DrW5pbW8gbW9iaWxlIC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItbmF2LWxvZ28tc21cIj5cbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNiAyNlwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgIDxlbGxpcHNlIGN4PVwiMTNcIiBjeT1cIjE4XCIgcng9XCI5XCIgcnk9XCIyLjVcIiBmaWxsPVwiI2M4YTI3YVwiIG9wYWNpdHk9XCIwLjVcIi8+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNSAxMSBRNC44IDE4IDEzIDE5LjUgUTIxLjIgMTggMjEgMTEgWlwiIGZpbGw9XCIjZTdkNWM1XCIvPlxuICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjEzXCIgY3k9XCIxMVwiIHJ4PVwiOFwiIHJ5PVwiMlwiIGZpbGw9XCIjYzhhMjdhXCIvPlxuICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjEzXCIgY3k9XCIxMVwiIHJ4PVwiNi41XCIgcnk9XCIxLjRcIiBmaWxsPVwiIzRiM2EyZlwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgQmFyaXNtb1xuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPCEtLSBNZW51IGRlc2t0b3AgLS0+XG4gICAgICAgICAgPHVsIGNsYXNzPVwiaGVhZGVyLW5hdi1saXN0XCI+XG4gICAgICAgICAgICAke21lbnVIdG1sfVxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8IS0tIEhhbWJ1cmdlciBtb2JpbGUgLS0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJoZWFkZXItaGFtYnVyZ2VyXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJBYnJpciBtZW7DulwiXG4gICAgICAgICAgICBvbmNsaWNrPVwiXG4gICAgICAgICAgICAgIGNvbnN0IG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLW1vYmlsZS1tZW51Jyk7XG4gICAgICAgICAgICAgIG0uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIG0uY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpO1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIyXCIgaGVpZ2h0PVwiMjJcIiB2aWV3Qm94PVwiMCAwIDIyIDIyXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiPlxuICAgICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjZcIiB4Mj1cIjE5XCIgeTI9XCI2XCIvPlxuICAgICAgICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjExXCIgeDI9XCIxOVwiIHkyPVwiMTFcIi8+XG4gICAgICAgICAgICAgIDxsaW5lIHgxPVwiM1wiIHkxPVwiMTZcIiB4Mj1cIjE5XCIgeTI9XCIxNlwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIE1vYmlsZSBkcm9wZG93biAtLT5cbiAgICAgICAgPGRpdiBpZD1cImhlYWRlci1tb2JpbGUtbWVudVwiIGNsYXNzPVwiaGVhZGVyLW1vYmlsZS1tZW51XCI+XG4gICAgICAgICAgPHVsIHN0eWxlPVwibGlzdC1zdHlsZTpub25lO21hcmdpbjowO3BhZGRpbmc6MDtcIj5cbiAgICAgICAgICAgICR7bWVudUh0bWx9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cblxuICAgIDwvaGVhZGVyPlxuICBgO1xufVxuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiO0FBQU8sSUFBTSxZQUFZO0FBQUEsRUFDdkIsRUFBRSxNQUFNLFVBQVUsTUFBTSxhQUFhLE9BQU8sU0FBUztBQUFBLEVBQ3JELEVBQUUsTUFBTSxhQUFhLE1BQU0sZ0JBQWdCLE9BQU8sWUFBWTtBQUFBLEVBQzlELEVBQUUsTUFBTSxpQkFBaUIsTUFBTSxjQUFjLE9BQU8sZ0JBQWU7QUFBQSxFQUNuRSxFQUFFLE1BQU0sWUFBWSxNQUFNLGdCQUFnQixPQUFPLFdBQVc7QUFDOUQ7QUFFTyxTQUFTLGVBQWUsQ0FBQyxjQUFzQixVQUFrQjtBQUFBLEVBQ3RFLE1BQU0sV0FBVyxVQUNkLElBQUksQ0FBQyxTQUFTO0FBQUEsSUFDYixNQUFNLFdBQ0osWUFBWSxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVk7QUFBQSxJQUN0RCxRQUFRLElBQUksS0FBSyxJQUFJO0FBQUEsSUFDckIsT0FBTztBQUFBO0FBQUE7QUFBQSxrQkFHSyxLQUFLO0FBQUEsa0NBQ1csV0FBVyw2QkFBNkI7QUFBQSx5QkFDakQ7QUFBQTtBQUFBLDBDQUVpQixLQUFLO0FBQUEsWUFDbkMsV0FBVywrQ0FBK0M7QUFBQTtBQUFBO0FBQUEsR0FHakUsRUFDQSxLQUFLLEVBQUU7QUFBQSxFQUVWLE9BQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FtRUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsCiAgImRlYnVnSWQiOiAiREU3QTlERTY4QTIyNkJFMDY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
