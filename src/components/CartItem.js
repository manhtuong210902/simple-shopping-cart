import { useContext, useState } from "react";
import images from "../assets";
import { CartContext } from "../contexts/CartContext";

function CardItem({ data }) {
    const [isRemoved, setIsRemoved] = useState(false);
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    return (
        <div className={isRemoved ? "cart-item fade-out" : "cart-item"}>
            <div
                className="cart-item_image"
                style={{
                    backgroundColor: data.color,
                }}
            >
                <img src={data.image} alt={data.name} />
            </div>
            <div className="cart-item_content">
                <h4 className="name">{data.name}</h4>
                <h3 className="price">${Number(data.price).toFixed(2)}</h3>
                <div className="cart-item_actions">
                    <div className="cart-item_count">
                        <span
                            className="cart-item_btn-count"
                            onClick={() => {
                                if (data.quantity === 1) {
                                    setIsRemoved(true);
                                    setTimeout(() => {
                                        removeFromCart(data.id);
                                    }, 200);
                                } else {
                                    decreaseQuantity(data.id);
                                }
                            }}
                        >
                            <img src={images.minus} alt="minus" />
                        </span>
                        <span>{data.quantity}</span>
                        <span
                            className="cart-item_btn-count"
                            onClick={() => {
                                increaseQuantity(data.id);
                            }}
                        >
                            <img src={images.plus} alt="plus" />
                        </span>
                    </div>
                    <div className="cart-item_remove">
                        <span className="cart-item_btn-remove">
                            <img
                                src={images.trash}
                                alt="trash"
                                onClick={() => {
                                    setIsRemoved(true);
                                    setTimeout(() => {
                                        removeFromCart(data.id);
                                    }, 200);
                                }}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardItem;
