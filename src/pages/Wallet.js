import React from 'react';
import Header from '../components/Header';
import InputExpenses from '../components/ImputExpenses';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <InputExpenses />
      </>
    );
  }
}

export default Wallet;
