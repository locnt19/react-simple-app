import React, { Component } from 'react';
import {
  Container, Row, Col,
  Button, Form, FormGroup,
  Label, Input
} from 'reactstrap';
// import validator from 'validator';
import axios from 'axios';

// import { InOutContext } from '../contexts/InOut';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: {
        username: 'admin',
        password: 'admin'
      },
      client: {
        username: '',
        password: ''
      },
      isValid: '',
      accounts: {}
    }

    // === FIX ERROR ===
    // TypeError: Cannot read property 'setSate' of undefined
    this.onChange = this.onChange.bind(this);
    this.checkExist = this.checkExist.bind(this);
  }

  onChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    value = value.replace(/\s/g, ''); // Remove all white spaces
    this.setState({
      client: {
        ...this.state.client,
        [name]: value
      }
    })
    // console.log(this.state.client)
  }

  checkExist(event) {
    event.preventDefault();
    axios.get("http://localhost:8080/accounts/" + this.state.client.username).then(res => {
      // this.setState({
      //   accounts: res.data
      // })
      // console.log('accounts', this.state.accounts);
      console.log(res);
      if (res.status === 200) {
        console.log('successful!')
      }
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    // const { username, password } = this.state.client;
    // console.log(this.props.match)
    return (
      <Container>
        <Row>
          <Col md="5" className="mt-5 mx-auto">
            <div className="text-center text-primary text-uppercase">
              <h2>Login</h2>
            </div>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label className="w-100 m-0">
                  <p className="mb-2">Username</p>
                  <Input type="text"
                    name="username"
                    onChange={this.onChange}
                    placeholder="Enter the character from a-zA-Z" />
                </Label>
              </FormGroup>
              <FormGroup>
                <Label className="w-100 m-0">
                  <p className="mb-2">Password</p>
                  <Input type="password"
                    name="password"
                    onChange={this.onChange}
                    placeholder="Enter your password" />
                </Label>
              </FormGroup>
              <Button onClick={this.checkExist}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Login;