import { useContext } from "react";
import images from "../assets";
import CardItem from "./CartItem";
import { CartContext } from "../contexts/CartContext";

function ShoppingCart() {
    const { cartItems, totalPrice } = useContext(CartContext);

    return (
        <div className="product-card">
            <div className="logo">
                <img src={images.nike} alt="logo" />
            </div>
            <div className="header-cart">
                <h2 className="title">Your cart</h2>
                <h2 className="title">${Number(totalPrice()).toFixed(2)}</h2>
            </div>
            <div className="list-product">
                {cartItems.length > 0 ? (
                    cartItems.map((item) => {
                        return <CardItem data={item} key={item.id} />;
                    })
                ) : (
                    <p className="notification">Your cart is empty.</p>
                )}
            </div>
        </div>
    );
}

export default ShoppingCart;
