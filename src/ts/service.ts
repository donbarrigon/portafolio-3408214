// service.ts - Modal dinámico cargando HTML externo con fetch

class ServiceModal {
  private modal: HTMLElement | null;
  private modalContent: HTMLElement | null;
  private modalOverlay: HTMLElement | null;
  private modalClose: HTMLElement | null;

  // 🔥 Rutas que tú definiste
  private servicePages: Record<string, string> = {
    '01': 'our-services.html',
    '02': 'technology.html',
    '03': 'training.html',
    '04': 'legal-advisory.html',
    '05': 'digital-presence.html',
    '06': 'update-machine.html',
  };

  constructor() {
    this.modal = document.getElementById('service-modal');
    this.modalContent = document.getElementById('modal-content');
    this.modalOverlay = this.modal?.querySelector('.sv-modal-overlay') || null;
    this.modalClose = this.modal?.querySelector('.sv-modal-close') || null;

    this.init();
  }

  private init(): void {
    // Botones
    const serviceButtons = document.querySelectorAll('[data-service-id]');

    serviceButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const serviceId = (button as HTMLElement).getAttribute('data-service-id');
        if (serviceId) {
          this.openModal(serviceId);
        }
      });
    });

    // Cerrar modal
    this.modalClose?.addEventListener('click', () => this.closeModal());
    this.modalOverlay?.addEventListener('click', () => this.closeModal());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal?.classList.contains('active')) {
        this.closeModal();
      }
    });

    this.modal?.querySelector('.sv-modal-container')?.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  private async openModal(serviceId: string): Promise<void> {
    const url = this.servicePages[serviceId];
    if (!url || !this.modalContent || !this.modal) return;

    try {
      // Loader simple
      this.modalContent.innerHTML = '<p>Cargando...</p>';

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error al cargar ${url}`);
      }

      const html = await response.text();

      // 🔥 Inserta directamente el HTML completo
      this.modalContent.innerHTML = html;

    } catch (error) {
      console.error(error);
      this.modalContent.innerHTML = '<p>Error al cargar el contenido</p>';
    }

    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  private closeModal(): void {
    if (!this.modal) return;

    this.modal.classList.remove('active');
    document.body.style.overflow = '';

    // Limpieza opcional
    if (this.modalContent) {
      this.modalContent.innerHTML = '';
    }
  }
}

// Init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new ServiceModal());
} else {
  new ServiceModal();
}

export { ServiceModal };