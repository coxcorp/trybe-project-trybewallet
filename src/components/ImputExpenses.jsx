import React from 'react';

class InputExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { history, getEmail } = this.props;
    const { value, description, currency, method, tag } = this.state;
  }


  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="value-input">
          Valor:&nbsp;
          <input
            data-testid="value-input"
            type="number"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
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
        <label htmlFor="currency-input">
          Moeda:&nbsp;
          <select
            data-testid="currency-input"
            name="currency"
          />
        </label>
        <label htmlFor="method-input">
          Método de pagamento:&nbsp;
          <select
            data-testid="method-input"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option> - </option><option value="Dinheiro">Dinheiro</option><option value="Cartão de crédito">Cartão de crédito</option><option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Categoria:&nbsp;
          <select
            data-testid="tag-input"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option> - </option><option value="Alimentação">Alimentação</option><option value="Lazer">Lazer</option><option value="Trabalho">Trabalho</option>
<option value="Transporte">Transporte</option>
<option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="submit"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

export default InputExpenses;
