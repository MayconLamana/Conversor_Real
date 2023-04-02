async function fetchExchangeRate() {
    const apiKey = 'db65f2e7';
    const url = `https://api.hgbrasil.com/finance/quotations?key=${apiKey}&format=json-cors&fields=USD`;
  
    const response = await fetch(url);
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
  