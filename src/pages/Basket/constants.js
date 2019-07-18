/*
 * Basket Constants
 *
 * With the following format:
 * export const ACTION_CONSTANT = 'appName/atomicComponentName/ACTION_CONSTANT';
 * Reducers involuntarily avoid picking up actions that they should not
 */

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';
