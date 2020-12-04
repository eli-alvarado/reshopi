import React, {useState, useEffect} from 'react'
import './App.css';
import Strapi from './Components/Strapi';
import axios from 'axios';

const App = () => {
  const url = "http://localhost:1337/products"
  const mainURL = "http://localhost:1337"

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      const results = res.data;
      setProducts(results)
      console.log(results);
    })
  }, [])

  const styles = {
    display: "flex",
    textAlign: "center"
  }

  return (
    <div style={styles} className="products-outer-container">
      {products.map((product, index) => (
        <Strapi 
        key = { index }
        image = {mainURL + product.picture.url }
        title = { product.name }
        />
      ))}
    </div>
  );
}

export default App;
