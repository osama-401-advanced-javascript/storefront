import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { add, readAllProduct } from '../../store/actions';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Products = (props) => {
  useEffect(() => {
    props.readAllProduct();
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>A list of all my cool products:</h2>
      <ul>
        {props.productsToDisplay.map((product) => {
          return (
            <div key={product.name}>
              <li onClick={() => props.addItemToCart(product)} key={product.name}>
                <strong> {product.name} </strong>
                <span key={product.price}> {product.price}</span>
                <span key={product.inStock}> {product.inStock}</span>
                <Button variant='contained' color='primary'>
                  {product.name}
                </Button>
              </li>
              <img src={product.image} alt={product.name} width='100' height='100'></img>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

const mapDispatchToProps = { addItemToCart: add, readAllProduct };
const mapStateToProps = (state) => {
  // console.log('STATE???', state.products.products);
  return {
    productsToDisplay: state.products.productsToDisplay,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
