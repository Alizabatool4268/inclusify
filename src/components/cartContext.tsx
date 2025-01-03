"use client"
import React, { createContext, useCallback, useContext, useState } from 'react';

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

interface CartItem extends ProductDetails {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: ProductDetails) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  incrementProductQuantity: (productId: string) => void;
  decrementProductQuantity: (productId: string) => void;
  getTotalPrice: () => number;
  getCartItemCount: () => number;
  updateItemQuantity: (productId: string, quantity: number) => void;
  isItemInCart: (productId: string) => boolean;
  getItemQuantity: (productId: string) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: ProductDetails) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item._id === product._id);
      
      if (existingItem) {
        return prev.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCartItems(prev => prev.filter(item => item._id !== productId));
  }, []);

  const incrementProductQuantity = useCallback((productId: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item._id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }, []);

  const decrementProductQuantity = useCallback((productId: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item._id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0)
    );
  }, []);

  const updateItemQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item._id === productId
          ? { ...item, quantity }
          : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getTotalPrice = useCallback(() => {
    return cartItems.reduce((sum, item) => sum + (item.productPrice * item.quantity), 0);
  }, [cartItems]);

  const getCartItemCount = useCallback(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  const isItemInCart = useCallback((productId: string) => {
    return cartItems.some(item => item._id === productId);
  }, [cartItems]);

  const getItemQuantity = useCallback((productId: string) => {
    const item = cartItems.find(item => item._id === productId);
    return item?.quantity || 0;
  }, [cartItems]);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      incrementProductQuantity,
      decrementProductQuantity,
      getTotalPrice,
      getCartItemCount,
      updateItemQuantity,
      isItemInCart,
      getItemQuantity
    }}>
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

