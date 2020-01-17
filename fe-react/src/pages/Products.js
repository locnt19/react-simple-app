import React, { Component } from 'react';
import axios from 'axios';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

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
      console.log(res);
      this.setState({
        products: res.data
      })
     })
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <Row>
          {
            products.map((product, index) => (
              <Col key={index} md="6" lg="4" className="mt-4">
                <Card className="h-100">
                  <CardImg top width="100%" src={product.imageURL} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <CardSubtitle>{product.producer}</CardSubtitle>
                    <CardText className="mt-2">{product.description}</CardText>
                    <Button>Add to cart</Button>
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