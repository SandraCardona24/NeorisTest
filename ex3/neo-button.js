customElements.define('neo-button', class extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});

    shadowRoot.innerHTML = `
      <button>
        <slot></slot>
      </button>
    `;

    shadowRoot.querySelector('button').addEventListener('click', () => {
      alert(service.input);
    });
  }
});