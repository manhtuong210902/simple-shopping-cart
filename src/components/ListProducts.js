import data from "../data/shoes.json";
import ProductItem from "./ProductItem";
import images from "../assets";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function ListProducts() {
    const products = data.shoes;
    const { cartItems, addToCart } = useContext(CartContext);

    return (
        <div className="product-card">
            <div className="logo">
                <img src={images.nike} alt="logo" />
            </div>
            <div className="header">
                <h2 className="title">Our Products</h2>
            </div>
            <div className="list-product">
                {products.map((item) => {
                    return (
                        <ProductItem
                            key={item.id}
                            data={item}
                            addToCart={addToCart}
                            inCart={cartItems.some((cartItem) => cartItem.id === item.id)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default ListProducts;
