import { useShoppingCart } from "../context/useShoppingCart";
import Button from "./Button";
import Totals from "./Totals";

function Navbar() {
  const { toggleCart, isOpen, goToProductsPage } = useShoppingCart();

  return (
    <div className="px-5 py-1 md:px-0 shadow-md mb-3">
      <div className="md:w-4/5 mx-auto flex justify-between">
        <h1
          title="View Products"
          onClick={goToProductsPage}
          className="cursor-pointer font-bold text-3xl"
        >
          Acme Co.
        </h1>
        <div className="text-right font-medium">
          <Totals />
          <Button onClick={toggleCart}>
            {isOpen ? "View Products" : "View Cart"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
