import { useShoppingCart } from "../context/useShoppingCart";
import products from "../data/products.json";

function Totals() {
  const { cartItems, cartQuantity } = useShoppingCart();

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const product = products.find((product) => product.id === cartItem.id);
    return total + cartItem.quantity * (product?.price || 0);
  }, 0);

  return (
    <div>
      <p>Total Items: {cartQuantity}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
}

export default Totals;
