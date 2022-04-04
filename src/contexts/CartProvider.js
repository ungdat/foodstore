import React, { Component } from 'react'
export const CartContext = React.createContext();

export class CartProvider extends Component {
    constructor(props) {
        super(props);
        this.cart = localStorage.getItem("cart")
        this.state = {
            cartItems: [],
        }
        if (this.cart) {
            let cartItems = JSON.parse(this.cart)
            this.state = {
                cartItems: cartItems
            }
        } else {
            this.state = {
                cartItems: []
            }
        }
    }
    totalCost = () => {
        let total = 0;
        for (let i in this.state.cartItems) {
            total += this.state.cartItems[i].soluong * this.state.cartItems[i].gia
        }
        return parseFloat(total.toFixed(2))
    }
    addToCart = (product) => {
        console.log("Add to cart", product);
        let cartItems = localStorage.getItem("cart");
        cartItems = JSON.parse(cartItems)
        console.log(cartItems);
        if (cartItems != null) {
            // kiem tra sp them co trung id k??
            if (cartItems[product.id] === undefined) {
                cartItems = {
                    ...cartItems,
                    [product.id]: product
                }
                cartItems[product.id].soluong = 1
            } else {
                cartItems[product.id].soluong += 1
            }
        } else {
            product.soluong = 1;
            cartItems = {
                [product.id]: product
            }
        }
        console.log(cartItems);
        this.setState({
            cartItems: cartItems
        })


    }
    removeCart(id) {
        let cartItems = localStorage.getItem("cart");
        cartItems = JSON.parse(cartItems)
        console.log(cartItems[id]);
        delete cartItems[id]
        console.log(cartItems);
    }
    render() {
        localStorage.setItem("cart", JSON.stringify(this.state.cartItems))
        // console.log(this.state.cartItems)
        // console.log(this.totalCost());
        const total = this.totalCost()
        return (
            <CartContext.Provider value={{
                cartItems: this.state.cartItems,
                addToCart: this.addToCart,
                total: total,
                removeCart: this.removeCart
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}