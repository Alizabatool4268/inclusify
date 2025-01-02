"use client"
"use client"
import { useCart } from '@/components/cartContext';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const totalPrice = cartItems.reduce((sum, item) => sum + item.productPrice, 0);

  return (
    <div className="p-4">
      <h2>Shopping Cart ({cartItems.length} items)</h2>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={`${item._id}-${index}`} className="border-b py-2">
              <h3>{item.productname}</h3>
              <p>${item.productPrice}</p>
              <button 
                onClick={() => removeFromCart(item._id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          
          <div className="mt-4">
            <p>Total: ${totalPrice}</p>
            <button 
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
// "use client"
// import React from 'react';
// import { useState,useEffect } from 'react';

// interface productDetails {
//   _id:string,
//    productname:string,
//    productdescription:string,
//    productimage:string,
//    productownerimage:string,
//    ownername:string,
//    productPrice:number,
//    productraiting:number,
// }
// function Page(props:{products:productDetails}){
//   console.log(" cart props",props.products)
//     const [cartdata,setcartdata] = useState<productDetails[]>([]);
//     console.log("cart variable",cartdata)
//     const data:productDetails = props.products;
   
//   return (
//     <div className="p-4">
//      <h1>{data?.productname}</h1>
//      <p>{data?.productdescription}</p>

//     </div>
//   )
// }

// export default Page;