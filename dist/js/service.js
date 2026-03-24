// src/ts/service.ts
class ServiceModal {
  modal;
  modalContent;
  modalOverlay;
  modalClose;
  servicePages = {
    "01": "our-services.html",
    "02": "technology.html",
    "03": "training.html",
    "04": "legal-advisory.html",
    "05": "digital-presence.html",
    "06": "update-machine.html"
  };
  constructor() {
    this.modal = document.getElementById("service-modal");
    this.modalContent = document.getElementById("modal-content");
    this.modalOverlay = this.modal?.querySelector(".sv-modal-overlay") || null;
    this.modalClose = this.modal?.querySelector(".sv-modal-close") || null;
    this.init();
  }
  init() {
    const serviceButtons = document.querySelectorAll("[data-service-id]");
    serviceButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const serviceId = button.getAttribute("data-service-id");
        if (serviceId) {
          this.openModal(serviceId);
        }
      });
    });
    this.modalClose?.addEventListener("click", () => this.closeModal());
    this.modalOverlay?.addEventListener("click", () => this.closeModal());
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.modal?.classList.contains("active")) {
        this.closeModal();
      }
    });
    this.modal?.querySelector(".sv-modal-container")?.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
  async openModal(serviceId) {
    const url = this.servicePages[serviceId];
    if (!url || !this.modalContent || !this.modal)
      return;
    try {
      this.modalContent.innerHTML = "<p>Cargando...</p>";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error al cargar ${url}`);
      }
      const html = await response.text();
      this.modalContent.innerHTML = html;
    } catch (error) {
      console.error(error);
      this.modalContent.innerHTML = "<p>Error al cargar el contenido</p>";
    }
    this.modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  closeModal() {
    if (!this.modal)
      return;
    this.modal.classList.remove("active");
    document.body.style.overflow = "";
    if (this.modalContent) {
      this.modalContent.innerHTML = "";
    }
  }
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => new ServiceModal);
} else {
  new ServiceModal;
}
export {
  ServiceModal
};

//# debugId=0F7C7B7B1A94218064756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3RzL3NlcnZpY2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiLy8gc2VydmljZS50cyAtIE1vZGFsIGRpbsOhbWljbyBjYXJnYW5kbyBIVE1MIGV4dGVybm8gY29uIGZldGNoXG5cbmNsYXNzIFNlcnZpY2VNb2RhbCB7XG4gIHByaXZhdGUgbW9kYWw6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgcHJpdmF0ZSBtb2RhbENvbnRlbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgcHJpdmF0ZSBtb2RhbE92ZXJsYXk6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgcHJpdmF0ZSBtb2RhbENsb3NlOiBIVE1MRWxlbWVudCB8IG51bGw7XG5cbiAgLy8g8J+UpSBSdXRhcyBxdWUgdMO6IGRlZmluaXN0ZVxuICBwcml2YXRlIHNlcnZpY2VQYWdlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICAnMDEnOiAnb3VyLXNlcnZpY2VzLmh0bWwnLFxuICAgICcwMic6ICd0ZWNobm9sb2d5Lmh0bWwnLFxuICAgICcwMyc6ICd0cmFpbmluZy5odG1sJyxcbiAgICAnMDQnOiAnbGVnYWwtYWR2aXNvcnkuaHRtbCcsXG4gICAgJzA1JzogJ2RpZ2l0YWwtcHJlc2VuY2UuaHRtbCcsXG4gICAgJzA2JzogJ3VwZGF0ZS1tYWNoaW5lLmh0bWwnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VydmljZS1tb2RhbCcpO1xuICAgIHRoaXMubW9kYWxDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWNvbnRlbnQnKTtcbiAgICB0aGlzLm1vZGFsT3ZlcmxheSA9IHRoaXMubW9kYWw/LnF1ZXJ5U2VsZWN0b3IoJy5zdi1tb2RhbC1vdmVybGF5JykgfHwgbnVsbDtcbiAgICB0aGlzLm1vZGFsQ2xvc2UgPSB0aGlzLm1vZGFsPy5xdWVyeVNlbGVjdG9yKCcuc3YtbW9kYWwtY2xvc2UnKSB8fCBudWxsO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKTogdm9pZCB7XG4gICAgLy8gQm90b25lc1xuICAgIGNvbnN0IHNlcnZpY2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2VydmljZS1pZF0nKTtcblxuICAgIHNlcnZpY2VCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBzZXJ2aWNlSWQgPSAoYnV0dG9uIGFzIEhUTUxFbGVtZW50KS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2VydmljZS1pZCcpO1xuICAgICAgICBpZiAoc2VydmljZUlkKSB7XG4gICAgICAgICAgdGhpcy5vcGVuTW9kYWwoc2VydmljZUlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBDZXJyYXIgbW9kYWxcbiAgICB0aGlzLm1vZGFsQ2xvc2U/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbG9zZU1vZGFsKCkpO1xuICAgIHRoaXMubW9kYWxPdmVybGF5Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2xvc2VNb2RhbCgpKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJyAmJiB0aGlzLm1vZGFsPy5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5tb2RhbD8ucXVlcnlTZWxlY3RvcignLnN2LW1vZGFsLWNvbnRhaW5lcicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBvcGVuTW9kYWwoc2VydmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLnNlcnZpY2VQYWdlc1tzZXJ2aWNlSWRdO1xuICAgIGlmICghdXJsIHx8ICF0aGlzLm1vZGFsQ29udGVudCB8fCAhdGhpcy5tb2RhbCkgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIExvYWRlciBzaW1wbGVcbiAgICAgIHRoaXMubW9kYWxDb250ZW50LmlubmVySFRNTCA9ICc8cD5DYXJnYW5kby4uLjwvcD4nO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBhbCBjYXJnYXIgJHt1cmx9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG5cbiAgICAgIC8vIPCflKUgSW5zZXJ0YSBkaXJlY3RhbWVudGUgZWwgSFRNTCBjb21wbGV0b1xuICAgICAgdGhpcy5tb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHRoaXMubW9kYWxDb250ZW50LmlubmVySFRNTCA9ICc8cD5FcnJvciBhbCBjYXJnYXIgZWwgY29udGVuaWRvPC9wPic7XG4gICAgfVxuXG4gICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gIH1cblxuICBwcml2YXRlIGNsb3NlTW9kYWwoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm1vZGFsKSByZXR1cm47XG5cbiAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcblxuICAgIC8vIExpbXBpZXphIG9wY2lvbmFsXG4gICAgaWYgKHRoaXMubW9kYWxDb250ZW50KSB7XG4gICAgICB0aGlzLm1vZGFsQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG4gIH1cbn1cblxuLy8gSW5pdFxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gbmV3IFNlcnZpY2VNb2RhbCgpKTtcbn0gZWxzZSB7XG4gIG5ldyBTZXJ2aWNlTW9kYWwoKTtcbn1cblxuZXhwb3J0IHsgU2VydmljZU1vZGFsIH07IgogIF0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLE1BQU0sYUFBYTtBQUFBLEVBQ1Q7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUdBLGVBQXVDO0FBQUEsSUFDN0MsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUVBLFdBQVcsR0FBRztBQUFBLElBQ1osS0FBSyxRQUFRLFNBQVMsZUFBZSxlQUFlO0FBQUEsSUFDcEQsS0FBSyxlQUFlLFNBQVMsZUFBZSxlQUFlO0FBQUEsSUFDM0QsS0FBSyxlQUFlLEtBQUssT0FBTyxjQUFjLG1CQUFtQixLQUFLO0FBQUEsSUFDdEUsS0FBSyxhQUFhLEtBQUssT0FBTyxjQUFjLGlCQUFpQixLQUFLO0FBQUEsSUFFbEUsS0FBSyxLQUFLO0FBQUE7QUFBQSxFQUdKLElBQUksR0FBUztBQUFBLElBRW5CLE1BQU0saUJBQWlCLFNBQVMsaUJBQWlCLG1CQUFtQjtBQUFBLElBRXBFLGVBQWUsUUFBUSxZQUFVO0FBQUEsTUFDL0IsT0FBTyxpQkFBaUIsU0FBUyxDQUFDLE1BQU07QUFBQSxRQUN0QyxFQUFFLGVBQWU7QUFBQSxRQUNqQixFQUFFLGdCQUFnQjtBQUFBLFFBRWxCLE1BQU0sWUFBYSxPQUF1QixhQUFhLGlCQUFpQjtBQUFBLFFBQ3hFLElBQUksV0FBVztBQUFBLFVBQ2IsS0FBSyxVQUFVLFNBQVM7QUFBQSxRQUMxQjtBQUFBLE9BQ0Q7QUFBQSxLQUNGO0FBQUEsSUFHRCxLQUFLLFlBQVksaUJBQWlCLFNBQVMsTUFBTSxLQUFLLFdBQVcsQ0FBQztBQUFBLElBQ2xFLEtBQUssY0FBYyxpQkFBaUIsU0FBUyxNQUFNLEtBQUssV0FBVyxDQUFDO0FBQUEsSUFFcEUsU0FBUyxpQkFBaUIsV0FBVyxDQUFDLE1BQU07QUFBQSxNQUMxQyxJQUFJLEVBQUUsUUFBUSxZQUFZLEtBQUssT0FBTyxVQUFVLFNBQVMsUUFBUSxHQUFHO0FBQUEsUUFDbEUsS0FBSyxXQUFXO0FBQUEsTUFDbEI7QUFBQSxLQUNEO0FBQUEsSUFFRCxLQUFLLE9BQU8sY0FBYyxxQkFBcUIsR0FBRyxpQkFBaUIsU0FBUyxDQUFDLE1BQU07QUFBQSxNQUNqRixFQUFFLGdCQUFnQjtBQUFBLEtBQ25CO0FBQUE7QUFBQSxPQUdXLFVBQVMsQ0FBQyxXQUFrQztBQUFBLElBQ3hELE1BQU0sTUFBTSxLQUFLLGFBQWE7QUFBQSxJQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssZ0JBQWdCLENBQUMsS0FBSztBQUFBLE1BQU87QUFBQSxJQUUvQyxJQUFJO0FBQUEsTUFFRixLQUFLLGFBQWEsWUFBWTtBQUFBLE1BRTlCLE1BQU0sV0FBVyxNQUFNLE1BQU0sR0FBRztBQUFBLE1BRWhDLElBQUksQ0FBQyxTQUFTLElBQUk7QUFBQSxRQUNoQixNQUFNLElBQUksTUFBTSxtQkFBbUIsS0FBSztBQUFBLE1BQzFDO0FBQUEsTUFFQSxNQUFNLE9BQU8sTUFBTSxTQUFTLEtBQUs7QUFBQSxNQUdqQyxLQUFLLGFBQWEsWUFBWTtBQUFBLE1BRTlCLE9BQU8sT0FBTztBQUFBLE1BQ2QsUUFBUSxNQUFNLEtBQUs7QUFBQSxNQUNuQixLQUFLLGFBQWEsWUFBWTtBQUFBO0FBQUEsSUFHaEMsS0FBSyxNQUFNLFVBQVUsSUFBSSxRQUFRO0FBQUEsSUFDakMsU0FBUyxLQUFLLE1BQU0sV0FBVztBQUFBO0FBQUEsRUFHekIsVUFBVSxHQUFTO0FBQUEsSUFDekIsSUFBSSxDQUFDLEtBQUs7QUFBQSxNQUFPO0FBQUEsSUFFakIsS0FBSyxNQUFNLFVBQVUsT0FBTyxRQUFRO0FBQUEsSUFDcEMsU0FBUyxLQUFLLE1BQU0sV0FBVztBQUFBLElBRy9CLElBQUksS0FBSyxjQUFjO0FBQUEsTUFDckIsS0FBSyxhQUFhLFlBQVk7QUFBQSxJQUNoQztBQUFBO0FBRUo7QUFHQSxJQUFJLFNBQVMsZUFBZSxXQUFXO0FBQUEsRUFDckMsU0FBUyxpQkFBaUIsb0JBQW9CLE1BQU0sSUFBSSxZQUFjO0FBQ3hFLEVBQU87QUFBQSxFQUNMLElBQUk7QUFBQTsiLAogICJkZWJ1Z0lkIjogIjBGN0M3QjdCMUE5NDIxODA2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
