import Button from "./Button";

function Navbar() {
  return (
    <div className="px-5 py-1 md:px-0 shadow-md mb-3">
      <div className="md:w-4/5 mx-auto flex justify-between">
        <h1 className="font-bold text-3xl">Acme Co.</h1>
        <div className="text-right font-medium">
          <div>
            <p>Total Items: 0</p>
            <p>Total Price: $0</p>
          </div>
          <Button>View Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
