import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { inputExpense } from '../actions';

class InputExpenses extends React.Component {
  constructor(props) {
    super(props);
    const INITIAL_STATE = {
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };

    this.state = {
      ...INITIAL_STATE,
      exchangeRates: {},
      currenciesName: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fecthAPI();
  }

  // ref.: https://github.com/tryber/sd-015-a-project-trybewallet/pull/106/files
  async fecthAPI() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all').then((data) => data.json());
    this.setState({
      exchangeRates: (response),
      currenciesName: Object.keys(response).filter((currency) => currency !== 'USDT'),
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fecthAPI();
    const { value, description, currency, method, tag, exchangeRates } = this.state;
    const { getExpense } = this.props;
    const INITIAL_STATE = {
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };
    getExpense({ value, description, currency, method, tag, exchangeRates });
    this.setState({ ...INITIAL_STATE });
  }

  renderValueInput() {
    const { value } = this.state;
    return (
      <label htmlFor="value-input">
        Valor:&nbsp;
        <input
          data-testid="value-input"
          type="number"
          name="value"
          id="value-input"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderDescriptionInput() {
    const { description } = this.state;
    return (
      <label htmlFor="description-input">
        Descrição:&nbsp;
        <input
          data-testid="description-input"
          type="text"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCurrencyInput() {
    const { currency, currenciesName } = this.state;
    return (
      <label htmlFor="currency-input">
        Moeda
        <select
          data-testid="currency-input"
          name="currency"
          id="currency-input"
          value={ currency }
          onChange={ this.handleChange }
        >
          {currenciesName.map((unit) => (
            <option key={ unit } value={ unit }>{ unit }</option>
          ))}
        </select>
      </label>
    );
  }

  renderMethodInput() {
    const { method } = this.state;
    return (
      <label htmlFor="method-input">
        Método de pagamento:&nbsp;
        <select
          data-testid="method-input"
          name="method"
          id="method-input"
          value={ method }
          onChange={ this.handleChange }
        >
          <option> - </option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagInput() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag-input">
        Categoria:&nbsp;
        <select
          data-testid="tag-input"
          name="tag"
          id="tag-input"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option> - </option>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  renderSubmitButton() {
    return (
      <button
        type="submit"
      >
        Adicionar despesa
      </button>
    );
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        { this.renderValueInput() }
        { this.renderDescriptionInput() }
        { this.renderCurrencyInput() }
        { this.renderMethodInput() }
        { this.renderTagInput() }
        { this.renderSubmitButton() }
      </form>
    );
  }
}

InputExpenses.propTypes = {
  getExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getExpense: (state) => dispatch(inputExpense(state)),
  // getCurrencies: (state) => dispatch(inputCurrencies(state)),
});

export default connect(null, mapDispatchToProps)(InputExpenses);
