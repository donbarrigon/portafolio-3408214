// src/ts/components/footer.ts
var socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: `<path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" fill="currentColor"/>`
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: `<path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z" fill="currentColor"/>`
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/573001234567",
    icon: `<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>`
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: `<path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" fill="currentColor"/>`
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: `<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor"/>`
  }
];
var footerSections = [
  {
    title: "Servicios",
    links: [
      { label: "Presencia Digital", href: "digital-presence.html" },
      { label: "Capacitación en Barismo", href: "training.html" },
      { label: "Asesoría Legal y Sanitaria", href: "legal-advisory.html" },
      { label: "Optimización de Equipamiento", href: "update-machine.html" },
      { label: "Implementación Tecnológica", href: "technology.html" },
      { label: "Renovación de Portafolio", href: "our-services.html" }
    ]
  },
  {
    title: "Información",
    links: [
      { label: "Quiénes Somos", href: "about.html" },
      { label: "Planes y Precios", href: "plans.html" },
      { label: "Consulta Gratuita", href: "contact.html#consulta" },
      { label: "Preguntas Frecuentes", href: "contact.html" }
    ]
  },
  {
    title: "Recursos",
    links: [
      { label: "Blog de Barismo", href: "contact.html" },
      { label: "Guías Gratuitas", href: "contact.html" },
      { label: "Casos de Éxito", href: "contact.html" },
      { label: "Testimonios", href: "contact.html" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Política de Privacidad", href: "contact.html" },
      { label: "Términos de Servicio", href: "contact.html" },
      { label: "Aviso Legal", href: "contact.html" }
    ]
  }
];
function footerComponent() {
  const sectionsHtml = footerSections.map((section) => `
      <div class="footer-section">
        <h3 class="footer-section-title">${section.title}</h3>
        <ul class="footer-section-links">
          ${section.links.map((link) => `
            <li>
              <a href="${link.href}" class="footer-link">
                ${link.label}
              </a>
            </li>
          `).join("")}
        </ul>
      </div>
    `).join("");
  const socialsHtml = socialLinks.map((social) => `
      <a 
        href="${social.href}" 
        class="footer-social-link"
        aria-label="${social.name}"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          ${social.icon}
        </svg>
      </a>
    `).join("");
  return `
    <!-- ═══════════════════════════════════════════
         FOOTER COMPONENT — Portafolio Ficha 3408214
    ═══════════════════════════════════════════ -->

    <footer class="site-footer">
      
      <!-- Decoración superior -->
      <!--
      <div class="footer-deco-top">
        <svg class="footer-deco-svg" viewBox="0 0 1200 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40 Q 300 10, 600 40 T 1200 40 L 1200 80 L 0 80 Z" fill="var(--text-body-color, #4b3a2f)" opacity="0.1"/>
          <path d="M0 50 Q 300 20, 600 50 T 1200 50 L 1200 80 L 0 80 Z" fill="var(--text-body-color, #4b3a2f)" opacity="0.15"/>
        </svg>
      </div>-->

      <div class="footer-container">
        
        <!-- ── Top section: Brand + Newsletter ── -->
        <!--
        <div class="footer-top">
        -->
          <!-- Brand -->
          <!--
          <div class="footer-brand">
            <div class="footer-brand-logo">
              <svg width="40" height="40" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="13" cy="18" rx="9" ry="2.5" fill="#c8a27a" opacity="0.5"/>
                <path d="M5 11 Q4.8 18 13 19.5 Q21.2 18 21 11 Z" fill="#e7d5c5"/>
                <ellipse cx="13" cy="11" rx="8" ry="2" fill="#c8a27a"/>
                <ellipse cx="13" cy="11" rx="6.5" ry="1.4" fill="#4b3a2f"/>
                <path d="M21 12.5 Q24 12.5 24 15 Q24 17.5 21 17.5" fill="none" stroke="#e7d5c5" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <h2 class="footer-brand-title">Portafolio <em>Barismo</em></h2>
              <p class="footer-brand-tagline">
                Acompañamiento integral para cafeterías que quieren crecer con calidad y profesionalismo.
              </p>
              <p class="footer-brand-sena">
                Aprendices SENA · Ficha 3408214
              </p>
            </div>
          </div>
          -->

          <!-- Newsletter/CTA -->
          <!--
          <div class="footer-cta">
            <h3 class="footer-cta-title">¿Listo para transformar tu cafetería?</h3>
            <p class="footer-cta-text">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte.
            </p>
            <a href="contact.html" class="footer-cta-btn">
              Agendar Consulta
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          -->
<!--
        </div>
        -->

        <!-- ── Middle section: Links grid ── -->
        <div class="footer-middle">
          ${sectionsHtml}
        </div>

        <!-- ── Bottom section: Social + Copyright ── -->
        <div class="footer-bottom">
          
          <!-- Social links -->
          <div class="footer-social">
            <p class="footer-social-label">Síguenos en redes</p>
            <div class="footer-social-links">
              ${socialsHtml}
            </div>
          </div>

          <!-- Divider -->
          <div class="footer-divider"></div>

          <!-- Copyright -->
          <div class="footer-copyright">
            <p class="footer-copyright-text">
              © ${new Date().getFullYear()} Portafolio Barismo — Ficha 3408214, SENA. Todos los derechos reservados.
            </p>
            <p class="footer-developer">
              Desarrollado con 
              <svg class="footer-heart" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              por <a href="https://github.com/donbarrigon" target="_blank" rel="noopener noreferrer" class="footer-dev-link">Andrés Patiño Echeverri</a> 
              <span class="footer-dev-alias">(Don Barrigón)</span>
            </p>
          </div>

        </div>

      </div>

      <!-- Granos decorativos -->
      <div class="footer-beans">
        <svg class="footer-bean footer-bean-1" width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="10" cy="15" rx="8" ry="14" fill="var(--bg-btn-color, #c8a27a)" opacity="0.15" transform="rotate(-15 10 15)"/>
          <path d="M10 5 Q10 15 10 25" stroke="var(--bg-btn-color, #c8a27a)" stroke-width="1.5" opacity="0.2"/>
        </svg>
        <svg class="footer-bean footer-bean-2" width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="10" cy="15" rx="8" ry="14" fill="var(--bg-btn-color, #c8a27a)" opacity="0.12" transform="rotate(20 10 15)"/>
          <path d="M10 5 Q10 15 10 25" stroke="var(--bg-btn-color, #c8a27a)" stroke-width="1.5" opacity="0.15"/>
        </svg>
        <svg class="footer-bean footer-bean-3" width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="10" cy="15" rx="8" ry="14" fill="var(--bg-btn-color, #c8a27a)" opacity="0.1" transform="rotate(-25 10 15)"/>
          <path d="M10 5 Q10 15 10 25" stroke="var(--bg-btn-color, #c8a27a)" stroke-width="1.5" opacity="0.18"/>
        </svg>
      </div>

    </footer>
  `;
}
export {
  socialLinks,
  footerSections,
  footerComponent
};

//# debugId=DEF529BDE1406B9A64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3RzL2NvbXBvbmVudHMvZm9vdGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgImV4cG9ydCBpbnRlcmZhY2UgU29jaWFsTGluayB7XG4gIG5hbWU6IHN0cmluZztcbiAgaHJlZjogc3RyaW5nO1xuICBpY29uOiBzdHJpbmc7IC8vIFNWRyBwYXRoIG8gbm9tYnJlIGRlbCBpY29ub1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvb3Rlckxpbmsge1xuICBsYWJlbDogc3RyaW5nO1xuICBocmVmOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9vdGVyU2VjdGlvbiB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGxpbmtzOiBGb290ZXJMaW5rW107XG59XG5cbmV4cG9ydCBjb25zdCBzb2NpYWxMaW5rczogU29jaWFsTGlua1tdID0gW1xuICB7XG4gICAgbmFtZTogJ0luc3RhZ3JhbScsXG4gICAgaHJlZjogJ2h0dHBzOi8vaW5zdGFncmFtLmNvbScsXG4gICAgaWNvbjogYDxwYXRoIGQ9XCJNMTIgMmMyLjcxNyAwIDMuMDU2LjAxIDQuMTIyLjA2IDEuMDY1LjA1IDEuNzkuMjE3IDIuNDI4LjQ2NS42Ni4yNTQgMS4yMTYuNTk4IDEuNzcyIDEuMTUzYTQuOTA4IDQuOTA4IDAgMCAxIDEuMTUzIDEuNzcyYy4yNDcuNjM3LjQxNSAxLjM2My40NjUgMi40MjguMDQ3IDEuMDY2LjA2IDEuNDA1LjA2IDQuMTIyIDAgMi43MTctLjAxIDMuMDU2LS4wNiA0LjEyMi0uMDUgMS4wNjUtLjIxOCAxLjc5LS40NjUgMi40MjhhNC44ODMgNC44ODMgMCAwIDEtMS4xNTMgMS43NzIgNC45MTUgNC45MTUgMCAwIDEtMS43NzIgMS4xNTNjLS42MzcuMjQ3LTEuMzYzLjQxNS0yLjQyOC40NjUtMS4wNjYuMDQ3LTEuNDA1LjA2LTQuMTIyLjA2LTIuNzE3IDAtMy4wNTYtLjAxLTQuMTIyLS4wNi0xLjA2NS0uMDUtMS43OS0uMjE4LTIuNDI4LS40NjVhNC44OSA0Ljg5IDAgMCAxLTEuNzcyLTEuMTUzIDQuOTA0IDQuOTA0IDAgMCAxLTEuMTUzLTEuNzcyYy0uMjQ4LS42MzctLjQxNS0xLjM2My0uNDY1LTIuNDI4QzIuMDEzIDE1LjA1NiAyIDE0LjcxNyAyIDEyYzAtMi43MTcuMDEtMy4wNTYuMDYtNC4xMjIuMDUtMS4wNjYuMjE3LTEuNzkuNDY1LTIuNDI4YTQuODggNC44OCAwIDAgMSAxLjE1My0xLjc3MkE0Ljg5NyA0Ljg5NyAwIDAgMSA1LjQ1IDIuNTI1Yy42MzgtLjI0OCAxLjM2Mi0uNDE1IDIuNDI4LS40NjVDOC45NDQgMi4wMTMgOS4yODMgMiAxMiAyem0wIDVhNSA1IDAgMSAwIDAgMTAgNSA1IDAgMCAwIDAtMTB6bTYuNS0uMjVhMS4yNSAxLjI1IDAgMCAwLTIuNSAwIDEuMjUgMS4yNSAwIDAgMCAyLjUgMHpNMTIgOWEzIDMgMCAxIDEgMCA2IDMgMyAwIDAgMSAwLTZ6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5gXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRmFjZWJvb2snLFxuICAgIGhyZWY6ICdodHRwczovL2ZhY2Vib29rLmNvbScsXG4gICAgaWNvbjogYDxwYXRoIGQ9XCJNOS4xOTggMjEuNWg0di04LjAxaDMuNjA0bC4zOTYtMy45OGgtNFY3LjVhMSAxIDAgMCAxIDEtMWgzdi00aC0zYTUgNSAwIDAgMC01IDV2Mi4wMWgtMmwtLjM5NiAzLjk4aDIuMzk2djguMDF6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5gXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnV2hhdHNBcHAnLFxuICAgIGhyZWY6ICdodHRwczovL3dhLm1lLzU3MzAwMTIzNDU2NycsXG4gICAgaWNvbjogYDxwYXRoIGQ9XCJNMTcuNDcyIDE0LjM4MmMtLjI5Ny0uMTQ5LTEuNzU4LS44NjctMi4wMy0uOTY3LS4yNzMtLjA5OS0uNDcxLS4xNDgtLjY3LjE1LS4xOTcuMjk3LS43NjcuOTY2LS45NCAxLjE2NC0uMTczLjE5OS0uMzQ3LjIyMy0uNjQ0LjA3NS0uMjk3LS4xNS0xLjI1NS0uNDYzLTIuMzktMS40NzUtLjg4My0uNzg4LTEuNDgtMS43NjEtMS42NTMtMi4wNTktLjE3My0uMjk3LS4wMTgtLjQ1OC4xMy0uNjA2LjEzNC0uMTMzLjI5OC0uMzQ3LjQ0Ni0uNTIuMTQ5LS4xNzQuMTk4LS4yOTguMjk4LS40OTcuMDk5LS4xOTguMDUtLjM3MS0uMDI1LS41Mi0uMDc1LS4xNDktLjY2OS0xLjYxMi0uOTE2LTIuMjA3LS4yNDItLjU3OS0uNDg3LS41LS42NjktLjUxLS4xNzMtLjAwOC0uMzcxLS4wMS0uNTctLjAxLS4xOTggMC0uNTIuMDc0LS43OTIuMzcyLS4yNzIuMjk3LTEuMDQgMS4wMTYtMS4wNCAyLjQ3OSAwIDEuNDYyIDEuMDY1IDIuODc1IDEuMjEzIDMuMDc0LjE0OS4xOTggMi4wOTYgMy4yIDUuMDc3IDQuNDg3LjcwOS4zMDYgMS4yNjIuNDg5IDEuNjk0LjYyNS43MTIuMjI3IDEuMzYuMTk1IDEuODcxLjExOC41NzEtLjA4NSAxLjc1OC0uNzE5IDIuMDA2LTEuNDEzLjI0OC0uNjk0LjI0OC0xLjI4OS4xNzMtMS40MTMtLjA3NC0uMTI0LS4yNzItLjE5OC0uNTctLjM0N20tNS40MjEgNy40MDNoLS4wMDRhOS44NyA5Ljg3IDAgMDEtNS4wMzEtMS4zNzhsLS4zNjEtLjIxNC0zLjc0MS45ODIuOTk4LTMuNjQ4LS4yMzUtLjM3NGE5Ljg2IDkuODYgMCAwMS0xLjUxLTUuMjZjLjAwMS01LjQ1IDQuNDM2LTkuODg0IDkuODg4LTkuODg0IDIuNjQgMCA1LjEyMiAxLjAzIDYuOTg4IDIuODk4YTkuODI1IDkuODI1IDAgMDEyLjg5MyA2Ljk5NGMtLjAwMyA1LjQ1LTQuNDM3IDkuODg0LTkuODg1IDkuODg0bTguNDEzLTE4LjI5N0ExMS44MTUgMTEuODE1IDAgMDAxMi4wNSAwQzUuNDk1IDAgLjE2IDUuMzM1LjE1NyAxMS44OTJjMCAyLjA5Ni41NDcgNC4xNDIgMS41ODggNS45NDVMLjA1NyAyNGw2LjMwNS0xLjY1NGExMS44ODIgMTEuODgyIDAgMDA1LjY4MyAxLjQ0OGguMDA1YzYuNTU0IDAgMTEuODktNS4zMzUgMTEuODkzLTExLjg5M2ExMS44MjEgMTEuODIxIDAgMDAtMy40OC04LjQxM3pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPmBcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdMaW5rZWRJbicsXG4gICAgaHJlZjogJ2h0dHBzOi8vbGlua2VkaW4uY29tJyxcbiAgICBpY29uOiBgPHBhdGggZD1cIk02Ljk0IDVhMiAyIDAgMSAxLTQtLjAwMiAyIDIgMCAwIDEgNCAuMDAyek03IDguNDhIM1YyMWg0VjguNDh6bTYuMzIgMEg5LjM0VjIxaDMuOTR2LTYuNTdjMC0zLjY2IDQuNzctNCA0Ljc3IDBWMjFIMjJ2LTcuOTNjMC02LjE3LTcuMDYtNS45NC04LjcyLTIuOTFsLjA0LTEuNjh6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5gXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnVGlrVG9rJyxcbiAgICBocmVmOiAnaHR0cHM6Ly90aWt0b2suY29tJyxcbiAgICBpY29uOiBgPHBhdGggZD1cIk0xOS41OSA2LjY5YTQuODMgNC44MyAwIDAgMS0zLjc3LTQuMjVWMmgtMy40NXYxMy42N2EyLjg5IDIuODkgMCAwIDEtNS4yIDEuNzQgMi44OSAyLjg5IDAgMCAxIDIuMzEtNC42NCAyLjkzIDIuOTMgMCAwIDEgLjg4LjEzVjkuNGE2Ljg0IDYuODQgMCAwIDAtMS0uMDVBNi4zMyA2LjMzIDAgMCAwIDUgMjAuMWE2LjM0IDYuMzQgMCAwIDAgMTAuODYtNC40M3YtN2E4LjE2IDguMTYgMCAwIDAgNC43NyAxLjUydi0zLjRhNC44NSA0Ljg1IDAgMCAxLTEtLjF6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5gXG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBmb290ZXJTZWN0aW9uczogRm9vdGVyU2VjdGlvbltdID0gW1xuICB7XG4gICAgdGl0bGU6ICdTZXJ2aWNpb3MnLFxuICAgIGxpbmtzOiBbXG4gICAgICB7IGxhYmVsOiAnUHJlc2VuY2lhIERpZ2l0YWwnLCBocmVmOiAnZGlnaXRhbC1wcmVzZW5jZS5odG1sJyB9LFxuICAgICAgeyBsYWJlbDogJ0NhcGFjaXRhY2nDs24gZW4gQmFyaXNtbycsIGhyZWY6ICd0cmFpbmluZy5odG1sJyB9LFxuICAgICAgeyBsYWJlbDogJ0FzZXNvcsOtYSBMZWdhbCB5IFNhbml0YXJpYScsIGhyZWY6ICdsZWdhbC1hZHZpc29yeS5odG1sJyB9LFxuICAgICAgeyBsYWJlbDogJ09wdGltaXphY2nDs24gZGUgRXF1aXBhbWllbnRvJywgaHJlZjogJ3VwZGF0ZS1tYWNoaW5lLmh0bWwnIH0sXG4gICAgICB7IGxhYmVsOiAnSW1wbGVtZW50YWNpw7NuIFRlY25vbMOzZ2ljYScsIGhyZWY6ICd0ZWNobm9sb2d5Lmh0bWwnIH0sXG4gICAgICB7IGxhYmVsOiAnUmVub3ZhY2nDs24gZGUgUG9ydGFmb2xpbycsIGhyZWY6ICdvdXItc2VydmljZXMuaHRtbCcgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnSW5mb3JtYWNpw7NuJyxcbiAgICBsaW5rczogW1xuICAgICAgeyBsYWJlbDogJ1F1acOpbmVzIFNvbW9zJywgaHJlZjogJ2Fib3V0Lmh0bWwnIH0sXG4gICAgICB7IGxhYmVsOiAnUGxhbmVzIHkgUHJlY2lvcycsIGhyZWY6ICdwbGFucy5odG1sJyB9LFxuICAgICAgeyBsYWJlbDogJ0NvbnN1bHRhIEdyYXR1aXRhJywgaHJlZjogJ2NvbnRhY3QuaHRtbCNjb25zdWx0YScgfSxcbiAgICAgIHsgbGFiZWw6ICdQcmVndW50YXMgRnJlY3VlbnRlcycsIGhyZWY6ICdjb250YWN0Lmh0bWwnIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1JlY3Vyc29zJyxcbiAgICBsaW5rczogW1xuICAgICAgeyBsYWJlbDogJ0Jsb2cgZGUgQmFyaXNtbycsIGhyZWY6ICdjb250YWN0Lmh0bWwnIH0sXG4gICAgICB7IGxhYmVsOiAnR3XDrWFzIEdyYXR1aXRhcycsIGhyZWY6ICdjb250YWN0Lmh0bWwnIH0sXG4gICAgICB7IGxhYmVsOiAnQ2Fzb3MgZGUgw4l4aXRvJywgaHJlZjogJ2NvbnRhY3QuaHRtbCcgfSxcbiAgICAgIHsgbGFiZWw6ICdUZXN0aW1vbmlvcycsIGhyZWY6ICdjb250YWN0Lmh0bWwnIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0xlZ2FsJyxcbiAgICBsaW5rczogW1xuICAgICAgeyBsYWJlbDogJ1BvbMOtdGljYSBkZSBQcml2YWNpZGFkJywgaHJlZjogJ2NvbnRhY3QuaHRtbCcgfSxcbiAgICAgIHsgbGFiZWw6ICdUw6lybWlub3MgZGUgU2VydmljaW8nLCBocmVmOiAnY29udGFjdC5odG1sJyB9LFxuICAgICAgeyBsYWJlbDogJ0F2aXNvIExlZ2FsJywgaHJlZjogJ2NvbnRhY3QuaHRtbCcgfVxuICAgIF1cbiAgfVxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvb3RlckNvbXBvbmVudCgpOiBzdHJpbmcge1xuICAvLyBHZW5lcmFyIHNlY2Npb25lcyBkZSBlbmxhY2VzXG4gIGNvbnN0IHNlY3Rpb25zSHRtbCA9IGZvb3RlclNlY3Rpb25zXG4gICAgLm1hcChzZWN0aW9uID0+IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItc2VjdGlvblwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJmb290ZXItc2VjdGlvbi10aXRsZVwiPiR7c2VjdGlvbi50aXRsZX08L2gzPlxuICAgICAgICA8dWwgY2xhc3M9XCJmb290ZXItc2VjdGlvbi1saW5rc1wiPlxuICAgICAgICAgICR7c2VjdGlvbi5saW5rcy5tYXAobGluayA9PiBgXG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIke2xpbmsuaHJlZn1cIiBjbGFzcz1cImZvb3Rlci1saW5rXCI+XG4gICAgICAgICAgICAgICAgJHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIGApLmpvaW4oJycpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgYClcbiAgICAuam9pbignJyk7XG5cbiAgLy8gR2VuZXJhciBpY29ub3Mgc29jaWFsZXNcbiAgY29uc3Qgc29jaWFsc0h0bWwgPSBzb2NpYWxMaW5rc1xuICAgIC5tYXAoc29jaWFsID0+IGBcbiAgICAgIDxhIFxuICAgICAgICBocmVmPVwiJHtzb2NpYWwuaHJlZn1cIiBcbiAgICAgICAgY2xhc3M9XCJmb290ZXItc29jaWFsLWxpbmtcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiJHtzb2NpYWwubmFtZX1cIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgID5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgJHtzb2NpYWwuaWNvbn1cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2E+XG4gICAgYClcbiAgICAuam9pbignJyk7XG5cbiAgcmV0dXJuIC8qaHRtbCovIGBcbiAgICA8IS0tIOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkOKVkFxuICAgICAgICAgRk9PVEVSIENPTVBPTkVOVCDigJQgUG9ydGFmb2xpbyBGaWNoYSAzNDA4MjE0XG4gICAg4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQIC0tPlxuXG4gICAgPGZvb3RlciBjbGFzcz1cInNpdGUtZm9vdGVyXCI+XG4gICAgICBcbiAgICAgIDwhLS0gRGVjb3JhY2nDs24gc3VwZXJpb3IgLS0+XG4gICAgICA8IS0tXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWRlY28tdG9wXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJmb290ZXItZGVjby1zdmdcIiB2aWV3Qm94PVwiMCAwIDEyMDAgODBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTAgNDAgUSAzMDAgMTAsIDYwMCA0MCBUIDEyMDAgNDAgTCAxMjAwIDgwIEwgMCA4MCBaXCIgZmlsbD1cInZhcigtLXRleHQtYm9keS1jb2xvciwgIzRiM2EyZilcIiBvcGFjaXR5PVwiMC4xXCIvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMCA1MCBRIDMwMCAyMCwgNjAwIDUwIFQgMTIwMCA1MCBMIDEyMDAgODAgTCAwIDgwIFpcIiBmaWxsPVwidmFyKC0tdGV4dC1ib2R5LWNvbG9yLCAjNGIzYTJmKVwiIG9wYWNpdHk9XCIwLjE1XCIvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZGl2Pi0tPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWNvbnRhaW5lclwiPlxuICAgICAgICBcbiAgICAgICAgPCEtLSDilIDilIAgVG9wIHNlY3Rpb246IEJyYW5kICsgTmV3c2xldHRlciDilIDilIAgLS0+XG4gICAgICAgIDwhLS1cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci10b3BcIj5cbiAgICAgICAgLS0+XG4gICAgICAgICAgPCEtLSBCcmFuZCAtLT5cbiAgICAgICAgICA8IS0tXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci1icmFuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci1icmFuZC1sb2dvXCI+XG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgdmlld0JveD1cIjAgMCAyNiAyNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgIDxlbGxpcHNlIGN4PVwiMTNcIiBjeT1cIjE4XCIgcng9XCI5XCIgcnk9XCIyLjVcIiBmaWxsPVwiI2M4YTI3YVwiIG9wYWNpdHk9XCIwLjVcIi8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk01IDExIFE0LjggMTggMTMgMTkuNSBRMjEuMiAxOCAyMSAxMSBaXCIgZmlsbD1cIiNlN2Q1YzVcIi8+XG4gICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9XCIxM1wiIGN5PVwiMTFcIiByeD1cIjhcIiByeT1cIjJcIiBmaWxsPVwiI2M4YTI3YVwiLz5cbiAgICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjEzXCIgY3k9XCIxMVwiIHJ4PVwiNi41XCIgcnk9XCIxLjRcIiBmaWxsPVwiIzRiM2EyZlwiLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIxIDEyLjUgUTI0IDEyLjUgMjQgMTUgUTI0IDE3LjUgMjEgMTcuNVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2U3ZDVjNVwiIHN0cm9rZS13aWR0aD1cIjEuOFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIi8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJmb290ZXItYnJhbmQtdGl0bGVcIj5Qb3J0YWZvbGlvIDxlbT5CYXJpc21vPC9lbT48L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvb3Rlci1icmFuZC10YWdsaW5lXCI+XG4gICAgICAgICAgICAgICAgQWNvbXBhw7FhbWllbnRvIGludGVncmFsIHBhcmEgY2FmZXRlcsOtYXMgcXVlIHF1aWVyZW4gY3JlY2VyIGNvbiBjYWxpZGFkIHkgcHJvZmVzaW9uYWxpc21vLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vdGVyLWJyYW5kLXNlbmFcIj5cbiAgICAgICAgICAgICAgICBBcHJlbmRpY2VzIFNFTkEgwrcgRmljaGEgMzQwODIxNFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAtLT5cblxuICAgICAgICAgIDwhLS0gTmV3c2xldHRlci9DVEEgLS0+XG4gICAgICAgICAgPCEtLVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItY3RhXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJmb290ZXItY3RhLXRpdGxlXCI+wr9MaXN0byBwYXJhIHRyYW5zZm9ybWFyIHR1IGNhZmV0ZXLDrWE/PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vdGVyLWN0YS10ZXh0XCI+XG4gICAgICAgICAgICAgIEFnZW5kYSB1bmEgY29uc3VsdGEgZ3JhdHVpdGEgeSBkZXNjdWJyZSBjw7NtbyBwb2RlbW9zIGF5dWRhcnRlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGEgaHJlZj1cImNvbnRhY3QuaHRtbFwiIGNsYXNzPVwiZm9vdGVyLWN0YS1idG5cIj5cbiAgICAgICAgICAgICAgQWdlbmRhciBDb25zdWx0YVxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEgOEgxNU0xNSA4TDggMU0xNSA4TDggMTVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAtLT5cbjwhLS1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIC0tPlxuXG4gICAgICAgIDwhLS0g4pSA4pSAIE1pZGRsZSBzZWN0aW9uOiBMaW5rcyBncmlkIOKUgOKUgCAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci1taWRkbGVcIj5cbiAgICAgICAgICAke3NlY3Rpb25zSHRtbH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSDilIDilIAgQm90dG9tIHNlY3Rpb246IFNvY2lhbCArIENvcHlyaWdodCDilIDilIAgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItYm90dG9tXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPCEtLSBTb2NpYWwgbGlua3MgLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci1zb2NpYWxcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vdGVyLXNvY2lhbC1sYWJlbFwiPlPDrWd1ZW5vcyBlbiByZWRlczwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItc29jaWFsLWxpbmtzXCI+XG4gICAgICAgICAgICAgICR7c29jaWFsc0h0bWx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwhLS0gRGl2aWRlciAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWRpdmlkZXJcIj48L2Rpdj5cblxuICAgICAgICAgIDwhLS0gQ29weXJpZ2h0IC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItY29weXJpZ2h0XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvb3Rlci1jb3B5cmlnaHQtdGV4dFwiPlxuICAgICAgICAgICAgICDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gUG9ydGFmb2xpbyBCYXJpc21vIOKAlCBGaWNoYSAzNDA4MjE0LCBTRU5BLiBUb2RvcyBsb3MgZGVyZWNob3MgcmVzZXJ2YWRvcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vdGVyLWRldmVsb3BlclwiPlxuICAgICAgICAgICAgICBEZXNhcnJvbGxhZG8gY29uIFxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiZm9vdGVyLWhlYXJ0XCIgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAyMS4zNWwtMS40NS0xLjMyQzUuNCAxNS4zNiAyIDEyLjI4IDIgOC41IDIgNS40MiA0LjQyIDMgNy41IDNjMS43NCAwIDMuNDEuODEgNC41IDIuMDlDMTMuMDkgMy44MSAxNC43NiAzIDE2LjUgMyAxOS41OCAzIDIyIDUuNDIgMjIgOC41YzAgMy43OC0zLjQgNi44Ni04LjU1IDExLjU0TDEyIDIxLjM1elwiLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIHBvciA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RvbmJhcnJpZ29uXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzPVwiZm9vdGVyLWRldi1saW5rXCI+QW5kcsOpcyBQYXRpw7FvIEVjaGV2ZXJyaTwvYT4gXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9vdGVyLWRldi1hbGlhc1wiPihEb24gQmFycmlnw7NuKTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gR3Jhbm9zIGRlY29yYXRpdm9zIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci1iZWFuc1wiPlxuICAgICAgICA8c3ZnIGNsYXNzPVwiZm9vdGVyLWJlYW4gZm9vdGVyLWJlYW4tMVwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIzMFwiIHZpZXdCb3g9XCIwIDAgMjAgMzBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjEwXCIgY3k9XCIxNVwiIHJ4PVwiOFwiIHJ5PVwiMTRcIiBmaWxsPVwidmFyKC0tYmctYnRuLWNvbG9yLCAjYzhhMjdhKVwiIG9wYWNpdHk9XCIwLjE1XCIgdHJhbnNmb3JtPVwicm90YXRlKC0xNSAxMCAxNSlcIi8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xMCA1IFExMCAxNSAxMCAyNVwiIHN0cm9rZT1cInZhcigtLWJnLWJ0bi1jb2xvciwgI2M4YTI3YSlcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBvcGFjaXR5PVwiMC4yXCIvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHN2ZyBjbGFzcz1cImZvb3Rlci1iZWFuIGZvb3Rlci1iZWFuLTJcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMzBcIiB2aWV3Qm94PVwiMCAwIDIwIDMwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgPGVsbGlwc2UgY3g9XCIxMFwiIGN5PVwiMTVcIiByeD1cIjhcIiByeT1cIjE0XCIgZmlsbD1cInZhcigtLWJnLWJ0bi1jb2xvciwgI2M4YTI3YSlcIiBvcGFjaXR5PVwiMC4xMlwiIHRyYW5zZm9ybT1cInJvdGF0ZSgyMCAxMCAxNSlcIi8+XG4gICAgICAgICAgPHBhdGggZD1cIk0xMCA1IFExMCAxNSAxMCAyNVwiIHN0cm9rZT1cInZhcigtLWJnLWJ0bi1jb2xvciwgI2M4YTI3YSlcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBvcGFjaXR5PVwiMC4xNVwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJmb290ZXItYmVhbiBmb290ZXItYmVhbi0zXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjMwXCIgdmlld0JveD1cIjAgMCAyMCAzMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxlbGxpcHNlIGN4PVwiMTBcIiBjeT1cIjE1XCIgcng9XCI4XCIgcnk9XCIxNFwiIGZpbGw9XCJ2YXIoLS1iZy1idG4tY29sb3IsICNjOGEyN2EpXCIgb3BhY2l0eT1cIjAuMVwiIHRyYW5zZm9ybT1cInJvdGF0ZSgtMjUgMTAgMTUpXCIvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTAgNSBRMTAgMTUgMTAgMjVcIiBzdHJva2U9XCJ2YXIoLS1iZy1idG4tY29sb3IsICNjOGEyN2EpXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgb3BhY2l0eT1cIjAuMThcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Zvb3Rlcj5cbiAgYDtcbn0iCiAgXSwKICAibWFwcGluZ3MiOiAiO0FBZ0JPLElBQU0sY0FBNEI7QUFBQSxFQUN2QztBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGO0FBRU8sSUFBTSxpQkFBa0M7QUFBQSxFQUM3QztBQUFBLElBQ0UsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsRUFBRSxPQUFPLHFCQUFxQixNQUFNLHdCQUF3QjtBQUFBLE1BQzVELEVBQUUsT0FBTywyQkFBMEIsTUFBTSxnQkFBZ0I7QUFB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
