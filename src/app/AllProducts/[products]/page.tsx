import React from 'react';
import {client} from "@/sanity/lib/client"
import { groq } from 'next-sanity';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface PageProps{
    params:Promise<{
        products:string
    }>
}
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

async function Page({ params }: PageProps) {
  const resolvedParams = (await params).products
  const productId = resolvedParams;

  if (!productId) {
    return <div className='text-blue-500'>Invalid product ID</div>;
  }
  try {
    const product:productDetails = await client.fetch(
      groq`*[_type == "product" && _id == $productId][0]`,
      { productId }
    );
    if (!product) {
      return <div className="text-red-500">Product not found</div>;
    }

    return (
      <div>
        <Image height={100} width={100} src={urlFor(product.productimage).url()} alt={product.productname}></Image>
        <h1>{product.productname}</h1>
        <p>{product.productdescription}</p>
        <p>Price: ${product.productPrice}</p>
        <button className='bg-black text-white w-[100px] rounded-lg'>Add To cart</button>
      </div>
    );
  } catch (error) {
    console.error('Error:', error);
    return <div className="text-red-500">Error loading product</div>;
  }
}

export default Page;