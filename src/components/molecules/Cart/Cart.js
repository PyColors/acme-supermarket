import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { checkout, removeFromCart } from '../../../pages/Basket/actions';
import {
  getTotal,
  getCartProducts,
  getCheckoutError,
  isCheckoutPending
} from '../../../pages/Basket/reducers';

class Cart extends Component {
  render() {
    const {
      products,
      total,
      error,
      checkoutPending,
      checkout,
      removeFromCart
    } = this.props;

    const hasProducts = products.length > 0;
    const checkoutAllowed = hasProducts && !checkoutPending;

    const nodes = !hasProducts ? (
      <em>Please add some products.</em>
    ) : (
      products.map(product => (
        <CartItem
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}
          onRemove={() => removeFromCart(product.id)}
        />
      ))
    );

    return (
      <div>
        <div>{nodes}</div>
        <p>Total: &#163;{total}</p>
        <button onClick={checkout} disabled={checkoutAllowed ? '' : 'disabled'}>
          Checkout
        </button>
        <div style={{ color: 'red' }}>{error}</div>
      </div>
    );
  }
}

Cart.propTypes = {
  // data
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  total: PropTypes.string,
  error: PropTypes.string,
  checkoutPending: PropTypes.bool,

  // actions
  checkout: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

export default connect(
  state => ({
    products: getCartProducts(state),
    total: getTotal(state),
    error: getCheckoutError(state),
    checkoutPending: isCheckoutPending(state)
  }),
  { checkout, removeFromCart }
)(Cart);
