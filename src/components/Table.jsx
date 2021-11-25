import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const { getExpenses } = this.props;
    return (
      <tbody>
        <tr>
          <th> Descrição </th>
          <th> Tag </th>
          <th> Método de pagamento </th>
          <th> Valor </th>
          <th> Moeda </th>
          <th> Câmbio utilizado </th>
          <th> Valor convertido </th>
          <th> Moeda de conversão </th>
          <th> Editar/Excluir </th>
        </tr>
        {
          getExpenses.map((item) => (
            <tr key={ item.id }>
              <td>{ item.description }</td>
              <td>{ item.method }</td>
              <td>{ item.tag }</td>
              <td>{ item.value }</td>
              <td>{ item.exchangeRates[item.currency].name.split('/')[0] }</td>
              <td>{ Number(item.exchangeRates[item.currency].ask).toFixed(2) }</td>
              <td>
                {
                  Number(item.exchangeRates[item.currency].ask * item.value).toFixed(2)
                }
              </td>
              <td>Real</td>
            </tr>
          ))
        }
      </tbody>
    );
  }
}

Table.propTypes = {
  getExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  getExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
