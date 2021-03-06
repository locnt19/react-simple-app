import React, { Component } from 'react';
import axios from 'axios';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { CartContext } from '../contexts/Cart';
import { Link } from 'react-router-dom';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    // Run server in folder be-api first
    axios.get("http://localhost:8080/products").then(res => {
    //  console.log('Res log data api:', res);
      this.setState({
        products: res.data
      })
    })
  }

  render() {
    const { products } = this.state;
    return (
      <Container className="mt-4">
        <Row>
          {
            products.map((product, index) => (
              <Col key={index} md="6" lg="4" className="mt-4">
                <Card className="h-100">
                  <Link to={`/product/${product.id}`}>
                    <CardImg top width="100%" src={product.imageURL} alt="Card image cap" />
                  </Link>
                  <CardBody>
                    <CardTitle>
                      <Link to={`/product/${product.id}`}>
                        {product.name}
                      </Link>
                    </CardTitle>
                    <CardSubtitle>{product.producer}</CardSubtitle>
                    <CardText className="mt-2">{product.description}</CardText>
                    <CartContext.Consumer>
                      {
                        ({ addToCart }) => (
                          <Button onClick={() => addToCart(product)}>Add to cart</Button>
                        )
                      }
                    </CartContext.Consumer>
                  </CardBody>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    )
  }
}

export default Products;