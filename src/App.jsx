import { Cart } from "./Cart";
import { useTheme } from "./theme-context";
import { ProductListing } from "./ProductListing";
import "./styles.css";

export const ThemeChanger = () => {
  const { changeTheme } = useTheme();
  return <button onClick={changeTheme}>Theme Changer</button>;
};

export default function App() {
  const { styling } = useTheme();

  return (
    <div className="App" style={styling}>
      <h1 className="app-header">eCommerce</h1>
      <div className="app-body">
        <ThemeChanger />
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
