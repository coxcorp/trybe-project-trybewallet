// import getCurrencies from '../services/requestCurrenciesAPI';

// Coloque aqui suas actions
export const INPUT_EMAIL = 'INPUT_EMAIL';
export const LOADING_ACTION = 'LOADING_ACTION';
export const SUCCESS_ACTION = 'SUCCESS_ACTION';
export const ERROR_ACTION = 'ERROR_ACTION';

export const inputEmail = (payload) => ({
  type: INPUT_EMAIL,
  payload,
});

export const isLoadingAction = () => ({
  type: LOADING_ACTION,
});

export const successAction = (payload) => ({
  type: SUCCESS_ACTION,
  payload,
});

export const errorAction = (error) => ({
  type: ERROR_ACTION,
  payload: error,
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
