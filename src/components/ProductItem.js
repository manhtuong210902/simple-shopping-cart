import images from "../assets";

function ProductItem({ data, addToCart, inCart }) {
    return (
        <div className="product-item">
            <div
                className="product-item_image"
                style={{
                    backgroundColor: data.color,
                }}
            >
                <img src={data.image} alt={data.name} />
            </div>
            <h3>{data.name}</h3>
            <p className="product-item_description">{data.description}</p>
            <div className="product-item_action">
                <h3>${data.price}</h3>
                {inCart ? (
                    <div className="product-item_added">
                        <img src={images.check} alt="check" />
                    </div>
                ) : (
                    <button
                        className="product-item_button-add"
                        onClick={() => {
                            addToCart({ ...data, quantity: 1 });
                        }}
                    >
                        ADD TO CART
                    </button>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
