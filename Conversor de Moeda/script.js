async function fetchExchangeRate() {
    const apiKey = 'f59fe8fe';
    const url = `https://api.hgbrasil.com/finance/quotations?key=${f59fe8fe}&format=json-cors&fields=USD`;
  
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
  