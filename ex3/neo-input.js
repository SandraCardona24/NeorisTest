customElements.define('neo-input', class extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});

    shadowRoot.innerHTML = `
      <input type="text">
    `;

    let input = shadowRoot.querySelector('input');
    input.addEventListener('change', () => {
      service.input = input.value;
    });
  }
});