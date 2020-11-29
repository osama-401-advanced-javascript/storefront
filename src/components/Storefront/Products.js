import React from 'react';
import { connect } from 'react-redux';

//TODO: Displays a list of products associated with the selected category

const Products = (props) => {
  // console.log('PROPS???', props);
  return (
    <div>
      <h2>A list of all my cool products:</h2>
      <ul>
        {props.productsToDisplay.map((product) => {
          return (
            <div key={product.name}>
              <li key={product.name}>
                <strong> {product.name} </strong>
                <span key={product.price}> {product.price}</span>
                <span key={product.inStock}> {product.inStock}</span>
              </li>
              <img src={product.image} alt={product.name} width='100' height='100'></img>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log('STATE???', state.products.products);
  return {
    products: state.products.products,
    productsToDisplay: state.products.productsToDisplay,
  };
};

export default connect(mapStateToProps)(Products);
