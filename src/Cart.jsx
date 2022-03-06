import { useCart } from "./cart-context";

function Cart() {
  const { items } = useCart();
  return <h1> Items in cart {items} </h1>;
}

export { Cart };
