const currenciesAPI = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = () => (
  fetch(currenciesAPI)
    .then((response) => (response.json())));

export default getCurrencies;
