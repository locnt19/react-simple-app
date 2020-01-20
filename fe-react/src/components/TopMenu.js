import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
  Badge
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/Cart';

const TopMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavLink className="navbar-brand" to="/">Simple</NavLink>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="w-100" navbar>
          <NavItem>
            <NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profiles/" activeClassName="active" className="nav-link">Profiles</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/products/" activeClassName="active" className="nav-link">Products</NavLink>
          </NavItem>
          <NavItem>
            <CartContext.Consumer>
              {
                ({ cartItems }) => (
                  <NavLink to="/cart" activeClassName="active" className="nav-link">
                    <span>Cart</span>
                    <Badge color="primary">{cartItems.length}</Badge>
                  </NavLink>
                )
              }
            </CartContext.Consumer>
          </NavItem>
          <NavItem className="ml-md-auto">
            <NavbarText>username</NavbarText>
          </NavItem>
          <NavItem>
            <NavLink to="/login/" activeClassName="active" className="nav-link">Login</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default TopMenu;