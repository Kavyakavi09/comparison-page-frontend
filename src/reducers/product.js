/* eslint-disable import/no-anonymous-default-export */

export default (state = { isLoading: true, products: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case 'FETCH_BY_IDS':
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
