"use client"
import React from 'react';
import { useState,useEffect } from 'react';

function Page() {
    interface productDetails {
        _id:string,
         productname:string,
         productimage:string,
         productPrice:number,
      }
    const [cart,setcart] = useState<productDetails[]>([]);

  return (
    <div>page</div>
  )
}

export default Page;