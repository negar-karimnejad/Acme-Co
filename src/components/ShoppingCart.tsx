import products from "../data/products.json";
import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCart() {
  return (
    <div className="flex flex-col gap-5 w-full">
      {products.map((product, index) => (
        <ShoppingCartItem key={index} {...product} />
      ))}
    </div>
  );
}

export default ShoppingCart;
