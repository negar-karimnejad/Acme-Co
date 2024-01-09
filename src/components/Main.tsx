import { useShoppingCart } from "../context/useShoppingCart";
import Button from "./Button";
import ShoppingCart from "./ShoppingCart";
import Store from "./Store";
import Totals from "./Totals";

function Main() {
  const { isOpen, clearCart } = useShoppingCart();

  return (
    <div className="px-5 md:px-0 md:w-4/5 mx-auto">
      {isOpen ? <ShoppingCart /> : <Store />}
      <div className="font-medium mt-4">
        <Totals />
        {isOpen && <Button onClick={clearCart}>Place Order</Button>}
      </div>
    </div>
  );
}

export default Main;
