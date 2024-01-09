import Button from "./Button";

type ProductProps = {
  sku: string;
  name: string;
  price: number;
};

function Product({ sku, name, price }: ProductProps) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold text-xl px-2">{name}</h2>
      <div>
        <img
          className="h-72 object-cover rounded-xl transition brightness-90 hover:brightness-100 shadow-md"
          src={sku}
          alt={name}
        />
      </div>

      <p className="font-medium text-xl px-2">${price}</p>
      <div>
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
}

export default Product;
