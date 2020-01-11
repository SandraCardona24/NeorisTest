customElements.define('neo-input', class extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});

    shadowRoot.innerHTML = `
      <input type="text">
    `;
  }
});