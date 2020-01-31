import React, { Component } from 'react';
import {
  Container, Row, Col, Button
} from 'reactstrap';

import axios from 'axios';
import { CartContext } from '../contexts/Cart';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }
  componentDidMount() {
    // Run server in folder be-api first
    // console.log('Props:', this.props)
    axios.get("http://localhost:8080/products/" + this.props.match.params.id).then(res => {
      this.setState({
        product: res.data
      });
    })
  }


  render() {
    const { product } = this.state;
    return (
      <Container className="mt-4">
        <Row>
          <Col xs="12">
            <img src={product.imageURL} alt={product.name} />
            <h4>{product.producer}</h4>
            <p>{product.description}</p>
            <CartContext.Consumer>
              {
                ({ addToCart }) => (
                  <Button onClick={() => addToCart(product)}>Add to cart</Button>
                )
              }
            </CartContext.Consumer>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ProductDetail;
