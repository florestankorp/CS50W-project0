const PARTNER_NAMES = 'partner-names';
const partnerNames = JSON.parse(sessionStorage.getItem(PARTNER_NAMES));
const { partnerOne, partnerTwo } = partnerNames;

const HISTORY = 'history';
const history = JSON.parse(sessionStorage.getItem(HISTORY));

history.forEach((item) => {
  let {
    date,
    expenses,
    partnerOne: amountPartnerOne,
    partnerTwo: amountPartnerTwo,
  } = item;

  document.querySelector('#partner-one-name').innerHTML = partnerOne;
  document.querySelector('#partner-two-name').innerHTML = partnerTwo;

  const row = document.createElement('tr');
  row.innerHTML = `
      <td id="date">${date}</td>
      <td id="expenses">${expenses} €</td>
      <td id="amount-partner-one">${amountPartnerOne} €</td>
      <td id="amount-partner-two">${amountPartnerTwo} €</td>
      `;

  document.querySelector('tbody').appendChild(row);
});
