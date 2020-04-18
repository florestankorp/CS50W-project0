const PARTNER_NAMES = 'partner-names';
const HISTORY = 'history';

const PATHS = {
  welcome: 'components/welcome/welcome.html',
  enterNames: 'components/enter-names/enter-names.html',
  calculator: 'components/calculator/calculator.html',
  history: 'components/history/history.html',
};

let partnerNames = JSON.parse(sessionStorage.getItem(PARTNER_NAMES));
let history = JSON.parse(sessionStorage.getItem(HISTORY));

createComponent(PATHS.welcome);

function next() {
  if (document.querySelector('.welcome')) {
    createComponent(PATHS.enterNames);
  }
  if (document.querySelector('.enter-names')) {
    createComponent(PATHS.calculator);
  }
  if (document.querySelector('.calculator')) {
    createComponent(PATHS.history);
  }
}

function back() {
  if (document.querySelector('.history')) {
    createComponent(PATHS.calculator);
  }
  if (document.querySelector('.calculator')) {
    createComponent(PATHS.enterNames);
  }
  if (document.querySelector('.enter-names')) {
    createComponent(PATHS.welcome);
  }
}

function createComponent(path) {
  fetch(path)
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const template = doc.querySelector('head > template');

      document.querySelector('#app-root').innerHTML = '';
      document.querySelector('#app-root').appendChild(template.content);
    })
    .catch(function (err) {
      console.error('Something went wrong.', err);
    });
}
