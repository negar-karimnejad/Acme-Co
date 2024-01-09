import products from "../data/products.json";
import Product from "./Product";

function Main() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-5">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
      <div className="font-medium mt-4">
        <p>Total Items: 0</p>
        <p>Total Price: $0</p>
      </div>
    </>
  );
}

export default Main;
