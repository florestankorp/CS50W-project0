customElements.define(
  'nav-bar',
  class NavBar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = /*html*/ `
        <nav class="nav nav-pills flex-column flex-sm-row">
          <a class="nav-link" href="index.html">Home</a>
          <a class="nav-link" href="enter-names.html">Enter Names</a>
          <a class="nav-link" href="calculator.html">Calculator</a>
          <a class="nav-link" href="history.html">History</a>
        </nav>
      `;
    }
  }
);

customElements.define(
  'shared-head',
  class SharedHead extends HTMLElement {
    connectedCallback() {
      this.innerHTML = /*html*/ `
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="stylesheet" href="style.css" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
        </head>
      `;
    }
  }
);

const template = document.createElement('template');
template.innerHTML = /*html*/ `
  <shared-head></shared-head>
  <body>
    <div class="container">
    <div class="row">
    <div class="col-sm-12 .col-md-2 col-lg-6">
    <nav-bar></nav-bar>
        <div class="jumbotron bg-dark text-white">
            <p><slot name="content" /></p>
          </div>
        </div>
      </div>
    </div>
  </body>
`;

customElements.define(
  'bootstrap-wrapper',
  class BootstrapWrapper extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' }).appendChild(
        template.content.cloneNode(true)
      );
    }
  }
);
