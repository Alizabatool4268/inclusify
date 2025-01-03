"use client"
import React from 'react';
import {client} from "@/sanity/lib/client"
import { groq } from 'next-sanity';
import Loader from '@/components/Loader';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useState,useEffect } from 'react';
import { useLocalStorage } from '@/lib/useLocalStorage';
import Header from '@/components/Header';
import { useCart } from '@/components/cartContext';


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
  const [cart, setCart] = useState<ProductDetails[]>([]);
  const { cartItems, addToCart } = useCart();
  
  function sendDataToCart(product: ProductDetails) {
    setCart([product]);
    console.log("cart",cart)
  }
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
    <div className="p-4">

      <Image 
        height={100} 
        width={100} 
        src={urlFor(product.productimage).url()} 
        alt={product.productname}
      />
      <h1 className="text-xl font-bold mt-4">{product.productname}</h1>
      <p className="mt-2">{product.productdescription}</p>
      <p className="mt-2">Price: ${product.productPrice}</p>
      <button className="bg-black h-[35px] text-white w-[100px] rounded-lg mt-4"   onClick={() => handleAddToCart(product)} >
        Add To Cart
      </button>

    </div>
    
  )
}
export default ProductPage;

