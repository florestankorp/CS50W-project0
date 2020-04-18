document.querySelector('#name-partner-one').value = partnerNames
  ? partnerNames.namePartnerOne
  : '';

document.querySelector('#name-partner-two').value = partnerNames
  ? partnerNames.namePartnerTwo
  : '';

function submit() {
  const namePartnerOne = document.querySelector('#name-partner-one').value;
  const namePartnerTwo = document.querySelector('#name-partner-two').value;

  if (namePartnerOne && namePartnerTwo) {
    sessionStorage.setItem(
      PARTNER_NAMES,
      JSON.stringify({ namePartnerOne, namePartnerTwo })
    );
    createComponent(PATHS.calculator);
  } else {
    alert('Please enter names');
  }
}
