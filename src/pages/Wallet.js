import React from 'react';
import Header from '../components/Header';
import InputExpenses from '../components/ImputExpenses';
import getCurrencies from '../services/requestCurrenciesAPI';

class Wallet extends React.Component {
  render() {
    console.log(getCurrencies());
    return (
      <>
        <Header />
        <InputExpenses />
      </>
    );
  }
}

export default Wallet;
