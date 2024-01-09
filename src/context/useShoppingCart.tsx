import { ReactNode, createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItems = {
  id: number;
  quantity: number;
};

type ShoppingCartContextProps = {
  goToProductsPage: () => void;
  toggleCart: () => void;
  clearCart: () => void;
  cartItems: CartItems[];
  isOpen: boolean;
  cartQuantity: number;
  removeFromCart: (id: number) => void;
  incrementCartQuantity: (id: number) => void;
  decrementCartQuantity: (id: number) => void;
  changeProductQuantity: (id: number, count: number) => void;
};

export const ShoppingCartContext = createContext(
  {} as ShoppingCartContextProps
);

// eslint-disable-next-line react-refresh/only-export-components
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItems[]>(
    "shopping-cart",
    []
  );

  const toggleCart = () => setIsOpen((prev) => !prev);
  const goToProductsPage = () => setIsOpen(false);
  const clearCart = () => {
    setCartItems([]);
  };

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const removeFromCart = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  const incrementCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decrementCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + -1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const changeProductQuantity = (id: number, count: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: (item.quantity = count) };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        isOpen,
        cartItems,
        cartQuantity,
        toggleCart,
        clearCart,
        removeFromCart,
        goToProductsPage,
        incrementCartQuantity,
        decrementCartQuantity,
        changeProductQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
