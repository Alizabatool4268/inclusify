"use client"
import React, { createContext, useContext, useState } from 'react';

interface ProductDetails {
  _id: string;
  productname: string;
  productdescription: string;
  productimage: string;
  productownerimage: string;
  ownername: string;
  productPrice: number;
  productraiting: number;
}

interface CartContextType {
  cartItems: ProductDetails[];
  addToCart: (product: ProductDetails) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<ProductDetails[]>([]);

  const addToCart = (product: ProductDetails) => {
    setCartItems(prev => [...prev, product]);
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item._id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}