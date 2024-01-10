import { useShoppingCart } from "../context/useShoppingCart";
import products from "../data/products.json";
import { formatCurrency } from "../utilities/formatCurrency";
import Button from "./Button";

type ShoppingCartItemProps = {
  id: number;
  quantity: number;
};

function ShoppingCartItem({ id, quantity }: ShoppingCartItemProps) {
  const { removeFromCart, changeProductQuantity } = useShoppingCart();

  const product = products.find((item) => item.id === id);
  if (product == null) return null;

  return (
    <div className="pb-1 border-2 border-white border-b-gray-200 flex">
      <img
        className="h-28 object-cover rounded-xl transition brightness-90 hover:brightness-100 shadow-md"
        src={product.sku}
        alt={product.name}
      />
      <div className="w-full flex justify-between pt-1 flex-col gap-2">
        <h2 className="font-bold text-lg whitespace-nowrap px-2">
          {product.name}
        </h2>
        <div className="w-full flex items-center justify-between">
          <p className=" font-medium text-xl px-2 text-gray-600">
            {formatCurrency(product.price)}
          </p>
          <div className=" font-medium">
            <select
              className="p-1 border"
              onChange={(e) =>
                changeProductQuantity(id, Number(e.target.value))
              }
              value={quantity}
            >
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
            </select>
          </div>
          <p className="font-medium text-xl px-2 text-gray-600">
            {formatCurrency(product.price * quantity)}
          </p>
          <Button onClick={() => removeFromCart(id)}>x</Button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
