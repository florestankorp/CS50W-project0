const PARTNER_NAMES = 'partner-names';
const HISTORY = 'history';

const partnerNames = JSON.parse(sessionStorage.getItem(PARTNER_NAMES));

if (!partnerNames) {
  location.href = 'enter-names.html';
}
const { partnerOne, partnerTwo } = partnerNames;

document.querySelector('#income-partner-one-label').innerHTML = partnerOne;
document.querySelector('#income-partner-two-label').innerHTML = partnerTwo;

function calculate() {
  let shares = {};

  const expenses = parseInt(document.querySelector('#expenses').value);

  const incomePartnerOne = parseInt(
    document.querySelector('#income-partner-one').value
  );

  const incomePartnerTwo = parseInt(
    document.querySelector('#income-partner-two').value
  );

  const totalIncome = incomePartnerOne + incomePartnerTwo;

  const sharePartnerOne = (incomePartnerOne / totalIncome) * expenses;
  const sharePartnerTwo = (incomePartnerTwo / totalIncome) * expenses;

  shares.partnerOne = parseInt(sharePartnerOne);
  shares.partnerTwo = parseInt(sharePartnerTwo);

  document.querySelector('.results').innerHTML = showResults(
    shares.partnerOne,
    shares.partnerTwo
  );

  writeToSession(shares, expenses);
}

function showResults(sharePartnerOne, sharePartnerTwo) {
  return /*html*/ `
      <h4>Result</h4>
      <div class="result">
        <label>${partnerOne}</label>
        <span>${sharePartnerOne} €</span>
      </div>
      <div class="result">
        <label>${partnerTwo}</label>
        <span>${sharePartnerTwo} €</span>
      </div>
    `;
}

function writeToSession(shares, expenses) {
  const history =
    sessionStorage.getItem(HISTORY) === null
      ? []
      : JSON.parse(sessionStorage.getItem(HISTORY));

  const newEntry = {
    date: new Date().toJSON().slice(0, 10).split('-').reverse().join('-'),
    expenses,
    partnerOne: shares.partnerOne,
    partnerTwo: shares.partnerTwo,
  };

  const newHistory = [...history, newEntry];
  sessionStorage.setItem(HISTORY, JSON.stringify(newHistory));
}
