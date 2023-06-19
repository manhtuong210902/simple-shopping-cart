import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevCartItems) => [...prevCartItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
    };

    const increaseQuantity = (productId) => {
        setCartItems((prevCartItems) => {
            return prevCartItems.map((item) => {
                if (item.id === productId) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        });
    };

    const decreaseQuantity = (productId) => {
        setCartItems((prevCartItems) => {
            return prevCartItems.map((item) => {
                if (item.id === productId) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
        });
    };

    const totalPrice = () => {
        return cartItems.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    };

    const contextData = { cartItems, addToCart, removeFromCart, totalPrice, increaseQuantity, decreaseQuantity };

    return <CartContext.Provider value={contextData}>{children}</CartContext.Provider>;
}

export default CartProvider;
