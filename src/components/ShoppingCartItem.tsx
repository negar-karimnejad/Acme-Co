import Button from "./Button";
type ShoppingCartItemProps = {
  sku: string;
  name: string;
  price: number;
};
function ShoppingCartItem({ sku, name, price }: ShoppingCartItemProps) {
  return (
    <div className="border-2 border-white border-t-gray-200 flex w-full items-center justify-between text-right">
      <div className="flex flex-1 items-center">
        <img
          className="h-32 object-cover rounded-xl transition brightness-90 hover:brightness-100 shadow-md"
          src={sku}
          alt={name}
        />
        <h2 className="font-bold text-lg whitespace-nowrap px-2">{name}</h2>
      </div>
      <p className="flex-1 font-medium text-xl px-2">${price}</p>
      <div className="flex-1 font-medium">
        <select className="p-1 border" name="" id="">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
        </select>
      </div>

      <p className="flex-1 font-medium text-xl px-2">${price}</p>
      <div className="flex-1 text-red-400 text-lg font-bold">
        <Button>x</Button>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
