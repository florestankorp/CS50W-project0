customElements.define(
  'nav-bar',
  class NavBar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <ul class="nav">
          <li class="nav-item">
              <a class="nav-link"
                href="index.html">Home</a>
          </li>
          <li class="nav-item">
              <a class="nav-link"
                href="enter-names.html">Enter Names</a>
          </li>
          <li class="nav-item">
              <a class="nav-link"
                href="calculator.html">Calculator</a>
          </li>
          <li class="nav-item">
              <a class="nav-link"
                href="history.html">History</a>
          </li>
      </ul>
      `;
    }
  }
);

customElements.define(
  'shared-head',
  class SharedHead extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <head>
        <link rel="stylesheet"
              href="style.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      </head>
      `;
    }
  }
);

const template = document.createElement('template');
template.innerHTML = `
<shared-head></shared-head>
<body>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <nav-bar></nav-bar>
        <div class="jumbotron">
          <p><slot name="content"/></p>
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
