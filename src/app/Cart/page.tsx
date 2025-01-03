"use client"
import { useCart } from '@/components/cartContext';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

function Cart() {
  const { 
    cartItems, 
    removeFromCart, 
    clearCart, 
    incrementProductQuantity,
    decrementProductQuantity,
    getTotalPrice
  } = useCart();

  return (
    <main className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart ({cartItems.length} items)</h2>
      
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
      <>
        {cartItems.map((item) => (
         <div key={item._id} className="mb-4">      
            <div className="flex justify-around items-center">
              <span>
                <Image height={70} width={70} src={urlFor(item.productimage).url()} alt={item.ownername}></Image>
               <h3 className="font-semibold">{item.productname}</h3>
               <p className="text-gray-600">${(item.productPrice * item.quantity).toFixed(2)}</p>
             </span>
                  
             <div className="flex items-center gap-4">
               <div className="flex items-center gap-2">
                <button 
                onClick={() => decrementProductQuantity(item._id)}>
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button 
                onClick={() => incrementProductQuantity(item._id)}>
                 +
                </button>
                </div>             
                <button 
                onClick={() => removeFromCart(item._id)}>
                Remove
               </button>
               </div>
             </div>
         </div>
          ))}
          
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex justify-center items-center">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-xl">${getTotalPrice().toFixed(2)}</span>
            </div>
            
            <button 
              onClick={clearCart}
              className="w-full"
            >
              Clear Cart
            </button>
             <Link href={"/"}>Check out</Link>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;