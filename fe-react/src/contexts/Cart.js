import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cartItems: []
    }

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(product) {
    this.setState({
      cartItems: this.state.cartItems.concat(product)
    });
    alert('Add to cart successful!');
    console.log('Add product to cart.');
  }

  removeFromCart(index) {
    const { cartItems } = this.state;
    this.setState({
      cartItems: [
        ...cartItems.slice(0, index),
        ...cartItems.slice(index + 1)
      ]
    });
    alert(`Remove product ${cartItems[index].name} from cart successful!`);
    console.log('Remove product from cart.');
  }

  render() {
    console.log('Rendering...')
    // console.log('state.cartItems:', this.state.cartItems);
    return (
      <CartContext.Provider value={{
        cartItems: this.state.cartItems,
        addToCart: this.addToCart,
        removeFromCart: this.removeFromCart
      }}>
        {
          this.props.children
        }
      </CartContext.Provider>
    )
  }
}