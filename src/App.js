import "./App.css";
import ListProducts from "./components/ListProducts";
import ShoppingCart from "./components/ShoppingCart";
import CartProvider from "./contexts/CartContext";

function App() {
    return (
        <CartProvider>
            <div className="background"></div>
            <div className="App">
                <ListProducts />
                <ShoppingCart />
            </div>
        </CartProvider>
    );
}

export default App;
