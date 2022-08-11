import axios from 'axios';

export const getProductByIds = () => async (dispatch) => {
  try {
    dispatch({ type: 'START_LOADING' });
    const { data } = await axios.get(
      'http://localhost:4020/api/product/productsByIds?productIds=62f4da027641310859058428&productIds=62f4da57764131085905842b'
    );
    dispatch({ type: 'FETCH_BY_IDS', payload: data });
    dispatch({ type: 'END_LOADING' });
  } catch (error) {
    console.log(error);
  }
};
