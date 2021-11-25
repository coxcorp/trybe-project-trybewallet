import React from 'react';
import Header from '../components/Header';
import InputExpenses from '../components/InputExpenses';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <InputExpenses />
        <Table />
      </>
    );
  }
}

export default Wallet;
