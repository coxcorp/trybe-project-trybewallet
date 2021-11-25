// import getCurrencies from '../services/requestCurrenciesAPI';

// Coloque aqui suas actions
export const INPUT_EMAIL = 'INPUT_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const INPUT_EXPENSE = 'INPUT_EXPENSE';

export const inputEmail = (payload) => ({
  type: INPUT_EMAIL,
  payload,
});

export const inputExpense = (payload) => ({
  type: INPUT_EXPENSE,
  payload,
});

export const inputCurrencies = (payload) => ({
  type: GET_CURRENCIES,
  payload,
});

// export const fetchAPIWithThunk = () => () => {
//   dispatch(isLoadingAction);
//   return (
//     getCurrencies()
//       .then(
//         (response) => dispatch(successAction(response)),
//         () => dispatch(errorAction),
//       )
//   );
// };
