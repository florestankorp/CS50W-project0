# Project 0

Web Programming with Python and JavaScript

## Household Budget Calculator

This app helps households divide their expenses fairly, based on the income of the members.

## Usage

1. Open `index.html`
2. From here you will be prompted to enter the names
3. After submitting both names you are taken to the Calculator
4. Here you can enter the values for expenses and income. These fields have been pre-filled but can be overwritten
5. From here, you can also view your calculation history or start over

## Design

This project relies heavily on generating and appending HTML from JavaScript code.

One such example can be seen in `calculator.js`

```javascript
document.querySelector('.results').innerHTML = showResults(
  shares.partnerOne,
  shares.partnerTwo
);
```

Which sends the values and uses them in the fields via string interpolation:

```javascript
function showResults(sharePartnerOne, sharePartnerTwo) {
  return `
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
```

So now, when the _calculate_ function is called it will fill the previously empty node `<div class="results"></div>` in `calculator.html`with the result of our calculation.

To avoid code duplication and to make the code easier to maintain this app also uses [web-components](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots), specifically **templates** and **slots** to help abstract HTML into reusable components.

Custom elements defined in `actio.js` include:

- `<nav-bar>`
- `<bootstrap-wrapper>`
- `<shared-head>`

### Validation and Error Handling

- From _Enter Names_ attempting navigation to _Calculator_ will fail if names haven't been provided. The user will be alerted with a message
- The navigation to _Calculator_ and _History_ will fail if names haven't been provided
