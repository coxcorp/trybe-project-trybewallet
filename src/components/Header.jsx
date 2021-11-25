import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { getEmail, getTotal } = this.props;
    return (
      <header data-testid="email-field">
        {`Email: ${getEmail}`}
        <span data-testid="total-field">
          {/* https://github.com/tryber/sd-015-a-project-trybewallet/pull/8/files */}
          { getTotal.reduce(
            (
              soma, { value, currency, exchangeRates },
            ) => (Number(value) * Number(exchangeRates[currency].ask)) + soma, 0,
          ).toFixed(2) }
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getTotal: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getTotal: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
