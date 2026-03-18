export interface SocialLink {
  name: string;
  href: string;
  icon: string; // SVG path o nombre del icono
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: `<path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" fill="currentColor"/>`
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: `<path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z" fill="currentColor"/>`
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/573001234567',
    icon: `<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>`
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: `<path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" fill="currentColor"/>`
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com',
    icon: `<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor"/>`
  }
];

export const footerSections: FooterSection[] = [
  {
    title: 'Servicios',
    links: [
      { label: 'Presencia Digital', href: 'digital-presence.html' },
      { label: 'Capacitación en Barismo', href: 'training.html' },
      { label: 'Asesoría Legal y Sanitaria', href: 'legal-advisory.html' },
      { label: 'Optimización de Equipamiento', href: 'update-machine.html' },
      { label: 'Implementación Tecnológica', href: 'technology.html' },
      { label: 'Renovación de Portafolio', href: 'our-services.html' }
    ]
  },
  {
    title: 'Información',
    links: [
      { label: 'Quiénes Somos', href: 'about.html' },
      { label: 'Planes y Precios', href: 'plans.html' },
      { label: 'Consulta Gratuita', href: 'contact.html#consulta' },
      { label: 'Preguntas Frecuentes', href: 'contact.html' }
    ]
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Blog de Barismo', href: 'blog.html' },
      { label: 'Guías Gratuitas', href: 'resources.html' },
      { label: 'Casos de Éxito', href: 'cases.html' },
      { label: 'Testimonios', href: 'testimonials.html' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Política de Privacidad', href: 'privacy.html' },
      { label: 'Términos de Servicio', href: 'terms.html' },
      { label: 'Aviso Legal', href: 'legal.html' }
    ]
  }
];

export function footerComponent(): string {
  // Generar secciones de enlaces
  const sectionsHtml = footerSections
    .map(section => `
      <div class="footer-section">
        <h3 class="footer-section-title">${section.title}</h3>
        <ul class="footer-section-links">
          ${section.links.map(link => `
            <li>
              <a href="${link.href}" class="footer-link">
                ${link.label}
              </a>
            </li>
          `).join('')}
        </ul>
      </div>
    `)
    .join('');

  // Generar iconos sociales
  const socialsHtml = socialLinks
    .map(social => `
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
    `)
    .join('');

  return /*html*/ `
    <!-- ═══════════════════════════════════════════
         FOOTER COMPONENT — Portafolio Ficha 3408214
    ═══════════════════════════════════════════ -->

    <footer class="site-footer">
      
      <!-- Decoración superior -->
      <div class="footer-deco-top">
        <svg class="footer-deco-svg" viewBox="0 0 1200 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40 Q 300 10, 600 40 T 1200 40 L 1200 80 L 0 80 Z" fill="var(--text-body-color, #4b3a2f)" opacity="0.1"/>
          <path d="M0 50 Q 300 20, 600 50 T 1200 50 L 1200 80 L 0 80 Z" fill="var(--text-body-color, #4b3a2f)" opacity="0.15"/>
        </svg>
      </div>

      <div class="footer-container">
        
        <!-- ── Top section: Brand + Newsletter ── -->
        <div class="footer-top">
          
          <!-- Brand -->
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

          <!-- Newsletter/CTA -->
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

        </div>

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