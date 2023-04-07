async function fetchExchangeRate() {
  const url = 'https://api.hgbrasil.com/finance?key=760e6e5d&format=json-cors&fields=USD'
  const response = await fetch(url, { mode: 'no-cors' });
  const data = await response.json();
  const exchangeRate = data.results.currencies.USD.buy;
  return exchangeRate;
}

async function convert() {
  const dollar = document.getElementById('dollar').value;
  const exchangeRate = await fetchExchangeRate();
  const real = dollar * exchangeRate;
  document.getElementById('real').value = real.toFixed(2);
}



//async function fetchExchangeRate() {
//const url = 'https://api.hgbrasil.com/finance?key=760e6e5d'

//  const response = await fetch(url);
//  const data = await response.json();

//  const exchangeRate = data.results.currencies.USD.buy;
//  return exchangeRate;
//}

//function convert() {
//  const dollar = document.getElementById('dollar').value;
//  const real = dollar * exchangeRate;
//  document.getElementById('real').value = real.toFixed(2);
//}


//function convert() {
//  const dollar = document.getElementById('dollar').value;
 // const real = dollar * 5.06;
//  document.getElementById('real').value = real.toFixed(2);
//}

  
  
  
  // async function fetchExchangeRate() {
  //   const apiKey = 'db65f2e7';
  //   const url = `https://api.hgbrasil.com/finance/quotations?key=${apiKey}&format=json-cors&fields=USD`;

  //   try {
  //     const response = await fetch(url, { mode: 'cors' });
  //     const data = await response.json();

  //     const exchangeRate = data.results.currencies.USD.buy;
  //     return exchangeRate;
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }

  // async function convert() {
  //   const dollar = document.getElementById('dollar').value;
  //   const exchangeRate = await fetchExchangeRate();
  //   const real = dollar * 5.06;
  //   document.getElementById('real').value = real.toFixed(2);
  // }
  
  // document.addEventListener('DOMContentLoaded', async function () {
  //   const exchangeRate = await fetchExchangeRate();
  
  //   const convertButton = document.getElementById('btn-convert');
  // convertButton.addEventListener('click', convert);
  // }) 
