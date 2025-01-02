"use client"
import React from 'react';
import { useState,useEffect } from 'react';

interface productDetails {
  _id:string,
   productname:string,
   productdescription:string,
   productimage:string,
   productownerimage:string,
   ownername:string,
   productPrice:number,
   productraiting:number,
}
function Page(props:productDetails){
  console.log("props",props)
    const [cart,setcart] = useState<productDetails[]>([]);

  return (
    <div className="p-4">
    {cart.map((item) => (
      <div key={item._id} className="border p-4 mb-4">
        <h2>{item.productname}</h2>
        <p>${item.productPrice}</p>
      </div>
    ))}
  </div>
  )
}

export default Page;