const PARTNER_NAMES = 'partner-names';
const partnerNames = JSON.parse(sessionStorage.getItem(PARTNER_NAMES));

const partnerOneName = partnerNames.partnerOne;
const partnerTwoName = partnerNames.partnerTwo;

document.querySelector('#income-partner-one-label').innerHTML =
  partnerNames.partnerOne;

document.querySelector('#income-partner-two-label').innerHTML =
  partnerNames.partnerTwo;

function calculate() {
  let shares = {};

  const expenses = parseInt(document.querySelector('#expenses').value);
  const incomeThelma = parseInt(
    document.querySelector('#income-partner-one').value
  );
  const incomeLouise = parseInt(
    document.querySelector('#income-partner-two').value
  );

  const totalIncome = incomeThelma + incomeLouise;

  const shareLouise = (incomeLouise / totalIncome) * expenses;
  const shareThelma = (incomeThelma / totalIncome) * expenses;

  shares.partnerOne = parseInt(shareThelma);
  shares.partnerTwo = parseInt(shareLouise);

  document.querySelector('.results').innerHTML = showResults(
    shares.partnerTwo,
    shares.partnerOne
  );

  return shares;
}

function showResults(shareLouise, shareThelma) {
  return /*html*/ `
      <h4>Result</h4>
      <div class="result">
        <label>${partnerOneName}</label>
        <span>${shareThelma} €</span>
      </div>
      <div class="result">
        <label>${partnerTwoName}</label>
        <span>${shareLouise} €</span>
      </div>
    `;
}
