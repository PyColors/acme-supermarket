import React from 'react';
import renderer from 'react-test-renderer';
import ProductList from '../ProductList';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../../../pages/Basket/reducers';

const store = createStore(rootReducer, applyMiddleware());

const defaultProps = {
  id: 2,
  title: 'title',
  price: 33,
  inventory: 4
};

describe('The ProductList list', () => {
  it('renders as expected', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <ProductList {...defaultProps} />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
