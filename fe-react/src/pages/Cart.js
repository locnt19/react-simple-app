import React, { Component } from 'react';
// import axios from 'axios';
import {
  Container, Row, Col
} from 'reactstrap';

import { CartContext } from '../contexts/Cart';

class Cart extends Component {
  render() {
    return (
      <Container>
        <Row>
          <CartContext.Consumer>
            {
              ({ cartItems }) => (
                cartItems.map((product, index) => (
                  <Col xs="12" key={index} className="mt-4">
                    <img src={product.imageURL} alt={product.name} />
                    <h2>{product.name}</h2>
                    <h4>{product.producer}</h4>
                    <p>{product.description}</p>
                  </Col>
                ))
              )
            }
          </CartContext.Consumer>
        </Row>
      </Container>
    )
  }
}

export default Cart;