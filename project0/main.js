const button = document.querySelector('#calculate-button');
const resultThelma = document.querySelector('#result-thelma');
const resultLouise = document.querySelector('#result-louise');

function closeOverlay() {
  const overlay = document.querySelector('.overlay');
  const template = document.getElementById('calculator-template');

  const calculatorTemplate = document.importNode(template.content, true);
  overlay.replaceWith(calculatorTemplate);
}

function calculate() {
  let shares = {};

  const expenses = parseInt(document.querySelector('#expenses').value);
  const incomeThelma = parseInt(document.querySelector('#income-thelma').value);
  const incomeLouise = parseInt(document.querySelector('#income-louise').value);

  const totalIncome = incomeThelma + incomeLouise;

  const shareLouise = (incomeLouise / totalIncome) * expenses;
  const shareThelma = (incomeThelma / totalIncome) * expenses;

  shares.thelma = parseInt(shareThelma);
  shares.louise = parseInt(shareLouise);

  document.querySelector('.results').innerHTML = showResults(
    shares.louise,
    shares.thelma
  );

  return shares;
}

function showResults(shareLouise, shareThelma) {
  return `            
  <h4>Result</h4>
  <div class="result" >
    <label>Thelma</label>
    <span id="result-thelma">${shareThelma} €</span>
  </div>
  <div class="result" >
    <label>Louise</label>
    <span id="result-louise">${shareLouise} €</span>
  </div>`;
}

function handleIt() {
  location.href = 'calculator.html';
  // sessionStorage.setItem('USERS', JSON.stringify({ name: 'Thelma' }));
  // sessionStorage.setItem('HISTORY', JSON.stringify({}));
}

/** TODO:
 * add error handling and validation
 * > allow only positive integers
 * > disable paste of non int vals
 * what if total is greater than combined income?
 * new function: saving for shared goal; e.g. how much should each of them put aside for a trip p/m
 * how much money do do you have left to spend?
 * append child node when result is calculated
 * add household members
 * add transitions for loading screen and starting calculator
 */
