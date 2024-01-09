import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/useShoppingCart";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Main />
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
