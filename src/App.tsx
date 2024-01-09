import Main from "./components/Main";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-5 md:px-0 md:w-4/5 mx-auto">
        {/* <Main /> */}
        <ShoppingCart />
      </div>
      <p className="flex text-gray-500 mt-1 font-bold items-center justify-center border-2 border-white border-t-gray-200">
        Shopping Cart &copy; {new Date().getFullYear()}
      </p>
    </>
  );
}

export default App;
