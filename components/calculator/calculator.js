partnerNames = JSON.parse(sessionStorage.getItem(PARTNER_NAMES));
partnerNames ? ({ namePartnerOne, namePartnerTwo } = partnerNames) : '';

document.querySelector('#income-partner-one-label').innerHTML = namePartnerOne;
document.querySelector('#income-partner-two-label').innerHTML = namePartnerTwo;

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

  shares.amountPartnerOne = parseInt(sharePartnerOne);
  shares.amountPartnerTwo = parseInt(sharePartnerTwo);

  let { amountPartnerOne, amountPartnerTwo } = shares;

  document.querySelector('.results').innerHTML = showResults(
    amountPartnerOne,
    amountPartnerTwo
  );

  writeToSession(shares, expenses);
}

function showResults(sharePartnerOne, sharePartnerTwo) {
  return /*html*/ `
      <h4>Result</h4>
      <div class="result">
        <label>${namePartnerOne}</label>
        <span>${sharePartnerOne} €</span>
      </div>
      <div class="result">
        <label>${namePartnerTwo}</label>
        <span>${sharePartnerTwo} €</span>
      </div>
    `;
}

function writeToSession(shares, expenses) {
  const { amountPartnerOne, amountPartnerTwo } = shares;

  const history =
    sessionStorage.getItem(HISTORY) === null
      ? []
      : JSON.parse(sessionStorage.getItem(HISTORY));

  const newEntry = {
    date: new Date().toJSON().slice(0, 10).split('-').reverse().join('-'),
    expenses,
    amountPartnerOne,
    amountPartnerTwo,
  };

  const newHistory = [...history, newEntry];
  sessionStorage.setItem(HISTORY, JSON.stringify(newHistory));
}
