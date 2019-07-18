import {
  ADD_TO_CART,
  CHECKOUT_FAILURE,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  GET_ALL_PRODUCTS,
  RECEIVE_PRODUCTS,
  REMOVE_FROM_CART
} from './constants';

export function getAllProducts() {
  return {
    type: GET_ALL_PRODUCTS
  };
}

export function receiveProducts(products) {
  return {
    type: RECEIVE_PRODUCTS,
    products
  };
}

export function addToCart(productId) {
  return {
    type: ADD_TO_CART,
    productId
  };
}

export function removeFromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    productId
  };
}

export function checkout() {
  return {
    type: CHECKOUT_REQUEST
  };
}

export function checkoutSuccess(cart) {
  return {
    type: CHECKOUT_SUCCESS,
    cart
  };
}

export function checkoutFailure(error) {
  return {
    type: CHECKOUT_FAILURE,
    error
  };
}
