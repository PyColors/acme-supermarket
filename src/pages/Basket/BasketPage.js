import React, { Component } from 'react';

// MUI
import Container from 'muicss/lib/react/container';
import Panel from 'muicss/lib/react/panel';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Cart from '../../components/molecules/Cart';
import ProductList from '../../components/molecules/ProductList';

const BasketPage = () => (
  <Container>
    <div className="mui--appbar-height" />

    <Panel>
      <Row>
        <Col md="8">
          <h1>Products</h1>

          <ProductList />
        </Col>

        <Col md="4">
          <h1>Basket</h1>
          <Cart />
        </Col>
      </Row>
    </Panel>
  </Container>
);

export default BasketPage;
