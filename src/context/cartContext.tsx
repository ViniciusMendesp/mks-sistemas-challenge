import { Product } from "@/pages/api/get-products";
import { createContext, ReactNode, useContext, useState } from "react";
interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string, quantity?: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider  = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product, quantity: number = 1) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId: string, quantityToRemove?: number) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => {
        if (item.id === Number(productId)) {
          const updatedQuantity = quantityToRemove ? item.quantity - quantityToRemove : item.quantity - 1;
          return updatedQuantity > 0; 
        }
        return true;
      });
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
