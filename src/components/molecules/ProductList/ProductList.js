import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductItem from '../ProductItem/ProductItem';

import { addToCart } from '../../../pages/Basket/actions';
import { getVisibleProducts } from '../../../pages/Basket/reducers/products';

class ProductList extends Component {
  render() {
    const { products, addToCart } = this.props;

    return (
      <div>
        {products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClicked={() => addToCart(product.id)}
          />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired
};

export default connect(
  state => ({ products: getVisibleProducts(state.products) }),
  { addToCart }
)(ProductList);
