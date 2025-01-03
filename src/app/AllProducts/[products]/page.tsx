"use client"
import React from 'react';
import {client} from "@/sanity/lib/client"
import { groq } from 'next-sanity';
import Loader from '@/components/Loader';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useState,useEffect } from 'react';
import { useCart } from '@/components/cartContext';
import { IoStar } from "react-icons/io5";


interface PageProps{
    params:Promise<{
        products:string
    }>
}
interface ProductDetails {
  _id:string,
   productname:string,
   productdescription:string,
   productimage:string,
   productownerimage:string,
   ownername:string,
   productPrice:number,
   productraiting:number,
}


function ProductPage({ params }: PageProps) {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState<ProductDetails | null>(null)
  const [error, setError] = useState<string | null>(null)
  const { cartItems, addToCart } = useCart();
  
  function handleAddToCart(product: ProductDetails) {
    console.log("Adding to cart:", product);
    addToCart(product);
    console.log("Cart after adding:", cartItems); // Check updated cart
  }

  useEffect(() => {
    
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const resolvedParams = await params
        const productId = resolvedParams.products
        if (!productId) {
          setError('Invalid product ID')
          return
        }

        const fetchedProduct = await client.fetch<ProductDetails>(
          groq`*[_type == "product" && _id == $productId][0]`,
          { productId }
        )
        if (!fetchedProduct) {
          setError('Product not found')
          return
        }
        setProduct(fetchedProduct)
        setError(null)
        
      } catch (error) {
        console.error('Error:', error)
        setError('Error loading product')
      } finally {
        setLoading(false)
      }
    }
    
    fetchProduct()

  }, [params])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  if (!product) {
    return null
  }

  return (
    <div className="p-4 flex justify-center items-center flex-col">
     <div className='bg-neutral-100 justify-center items-center flex-col'>
      <span className='flex justify-center items-center flex-col'>
      <Image 
        height={200} 
        width={200} 
        src={urlFor(product.productimage).url()} 
        alt={product.productname}
        />
      </span>
      <span className='bg-neutral-200 flex flex-col justify-center items-center'>
       <h1 className="text-xl font-bold mt-4">{product.productname}</h1>
       <p className='font-bold'> price {product.productPrice}$</p>
       <p className="mt-2 w-[280px] text-center">{product.productdescription}</p>
       <p className='flex justify-center items-center'><IoStar className='text-yellow-500' />{product.productraiting}</p>
       <button className="bg-black h-[35px] text-white w-[100px] rounded-lg mt-4"   onClick={() => handleAddToCart(product)} >
        Add To Cart
      </button>
      </span>
     </div>

    </div>
    
  )
}
export default ProductPage;

