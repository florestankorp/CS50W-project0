function submit() {
  const partnerOne = document.querySelector('#name-partner-one').value;
  const partnerTwo = document.querySelector('#name-partner-two').value;

  if (partnerOne && partnerTwo) {
    sessionStorage.setItem(
      'partner-names',
      JSON.stringify({ partnerOne, partnerTwo })
    );

    location.href = 'calculator.html';
  } else {
    alert('Please enter names');
  }
}
