import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { getProductByIds } from './actions/product';
import { useSelector } from 'react-redux/es/exports';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductByIds());
  }, [dispatch]);

  const { products, isLoading } = useSelector((state) => state.product);

  if (isLoading) {
    return <div className='text-center fs-3 fw-bold mt-5'>Loading...</div>;
  }

  return (
    <div className='container mt-5'>
      <h1 className='text-center mb-5'>Product Comparioson Page</h1>
      <div className='row'>
        <div className='col-lg-10 mx-auto'>
          <div className='table-responsive'>
            <table className='table table-hover'>
              <thead className='table-dark'>
                <tr>
                  <th scope='col'>Nos</th>
                  <th scope='col'>Title</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Ratings</th>
                  <th scope='col'>Image</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, i) => {
                  return (
                    <tr key={product._id}>
                      <th scope='row'>{i + 1}</th>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.ratings}</td>
                      <td>
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{ width: '100px' }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
