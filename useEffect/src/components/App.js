import React, { useEffect, useState } from 'react';
import Product from './Product';
import Footer from './Footer';
import Header from './Header';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')

      .then(( response ) => response.json())

      .then(( data ) => setProducts(data.products))

      .catch(( error ) => console.error('Error fetching data:', error));
      
  }, []);
  
  return (
    <div className="App">

       < Header/>
      
      <div className="product-grid">

        {products.map(( product ) => (
          <Product key={ product.id } product = { product } />
        ))}

      </div>

      <Footer/>

    </div>
  );
}



export default App;