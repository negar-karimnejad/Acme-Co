import { useShoppingCart } from "../context/useShoppingCart";
import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCart() {
  const { cartItems, goToProductsPage } = useShoppingCart();
  return (
    <div className="flex flex-col gap-1 h-[22rem]">
      {cartItems.length > 0 ? (
        cartItems.map((product) => (
          <ShoppingCartItem key={product.id} {...product} />
        ))
      ) : (
        <div className="font-bold text-lg h-72 flex flex-col items-center justify-center">
          <p>There is any product in your shopping cart.</p>
          <p>
            Let's go to{" "}
            <span
              className="text-blue-700 underline cursor-pointer"
              onClick={goToProductsPage}
            >
              products page
            </span>
            .🤩
          </p>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
