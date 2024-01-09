import products from "../data/products.json";
import Product from "./Product";

function Store() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-5">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

export default Store;
