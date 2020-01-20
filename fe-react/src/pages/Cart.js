import React, { Component } from 'react';
// import axios from 'axios';
import {
  Container, Row, Col
} from 'reactstrap';

import { CartContext } from '../contexts/Cart';
import { Link } from 'react-router-dom';

class Cart extends Component {
  render() {
    return (
      <Container>
        <Row>
          <CartContext.Consumer>
            {
              ({ cartItems, removeFromCart }) => (
                cartItems.map((product, index) => (
                  <Col xs="12" key={index} className="mt-4">
                    <Link to={`/product/${product.id}`}>
                      <img src={product.imageURL} alt={product.name} />
                    </Link>
                    <h2>
                      <Link to={`/product/${product.id}`}>
                        {product.name}
                      </Link>
                    </h2>
                    <h4>{product.producer}</h4>
                    <p>{product.description}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(index)}>Remove</button>
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