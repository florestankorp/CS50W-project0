history = JSON.parse(sessionStorage.getItem(HISTORY));

if (history) {
  history.forEach((item) => {
    let { date, expenses, amountPartnerOne, amountPartnerTwo } = item;

    document.querySelector('#partner-one-name').innerHTML = namePartnerOne;
    document.querySelector('#partner-two-name').innerHTML = namePartnerTwo;

    const row = document.createElement('tr');
    row.innerHTML = `
        <td id="date">${date}</td>
        <td id="expenses">${expenses} €</td>
        <td id="amount-partner-one">${amountPartnerOne} €</td>
        <td id="amount-partner-two">${amountPartnerTwo} €</td>
        `;

    document.querySelector('tbody').appendChild(row);
  });
} else {
  createComponent(PATHS.calculator);
}
