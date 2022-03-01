import { useCart } from "./cart-context";
import "./styles.css";
export function ProductListing() {
  const { addToCart } = useCart();
  return ["1", "2", "3", "4"].map((item) => (
    <h2>
      Product {item} <button onClick={addToCart}> Add to cart</button>
    </h2>
  ));
}

export function Cart() {
  const { items } = useCart();
  return <h1> Items in cart {items} </h1>;
}

export default function App() {
  return (
    <div className="App">
      <h1 className="app-header">eCommerce</h1>
      <div className="app-body">
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
