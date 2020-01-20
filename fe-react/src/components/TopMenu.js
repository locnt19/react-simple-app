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
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/Cart';

const TopMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to="/">Simple</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="w-100" navbar>
            <NavItem>
              <Link className="nav-link" to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/profiles/">Profiles</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/products/">Products</Link>
            </NavItem>
            <NavItem>
              <CartContext.Consumer>
                {
                  ({ cartItems }) => (
                    <Link className="nav-link" to="/cart-items">
                      <span>Cart</span>
                      <Badge color="primary">{cartItems.length}</Badge>
                    </Link>
                  )
                }
              </CartContext.Consumer>
            </NavItem>
            <NavItem className="ml-md-auto">
              <NavbarText>username</NavbarText>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/login/">Login</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopMenu;