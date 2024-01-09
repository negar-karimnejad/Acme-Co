import { useShoppingCart } from "../context/useShoppingCart";
import { formatCurrency } from "../utilities/formatCurrency";
import Button from "./Button";

type ProductProps = {
  id: number;
  sku: string;
  name: string;
  price: number;
};

function Product({ id, sku, name, price }: ProductProps) {
  const { incrementCartQuantity } = useShoppingCart();
  return (
    <div className="flex flex-col gap-1 sm:items-start items-center">
      <h2 className="font-bold text-xl px-2">{name}</h2>
      <div>
        <img
          className="h-72 object-cover rounded-xl transition brightness-90 hover:brightness-100 shadow-md"
          src={sku}
          alt={name}
        />
      </div>
      <p className="font-medium text-xl px-2">{formatCurrency(price)}</p>
      <div>
        <Button onClick={() => incrementCartQuantity(id)}>Add to Cart</Button>
      </div>
    </div>
  );
}

export default Product;
