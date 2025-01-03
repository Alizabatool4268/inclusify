import Image from "next/image";
import Herosection from "@/components/Herosection";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import {client} from "@/sanity/lib/client";
import Link from "next/link";
import { josefinSans } from '@/app/Fonts/fonts';
import { IoStar } from "react-icons/io5";
import { urlFor } from '@/sanity/lib/image';


export default async function Home() {
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
      const data:productDetails[] = await client.fetch(`
     *[_type == 'product']{
     _id,
     productname,
     productdescription,
     productimage,
     productownerimage,
     ownername,
     productPrice,
     productraiting
  }
  `)
  console.log("product data",data)
  if(!data){
    return(
      <p className='text-black'>check your internet</p>
    )
  }
  return (
    <main className="overflow-x-hidden">
      <section className="overflow-x-hidden">
      <Herosection />
      </section>
      
      <section className={`bg-neutral-200 h-[200px] flex flex-col justify-center items-center ${josefinSans.className}`}>
        <h1 className='font-bold text-[35px]'>Featured products</h1>
        <p>Inclusify, Get the best experience in shopping</p>
      </section>
      <section className='grid grid-cols-3 gap-3 grid-rows-2 mt-11 md:grid-cols-2 md:grid-rows-3 sm:grid-cols-2 sm:grid-rows-3 
      msm:grid-cols-1 msm:grid-rows-6 ssm:grid-cols-1 ssm:grid-rows-6 xsm:grid-cols-1 xsm:grid-rows-6 '>
        {data.slice(0,6).map((productsdata)=>(
          <div className='flex justify-center items-center flex-col' key={productsdata._id} >
            <div className='flex justify-around items-center w-[270px] h-[45px] border-[1px] border-solid border-neutral-400 rounded-sm '>
              <Image width={40} height={40} src={urlFor(productsdata.productownerimage).url()} alt={productsdata.ownername} className='rounded-[50%]'></Image>
              <h5 className='text-zinc-800 font-bold'>{productsdata.ownername}</h5>
            </div>
           <div className='w-[270px] flex justify-center flex-col items-center gap-2 shadow-lg bg-neutral-300' key={productsdata._id}>
             <Image height={200} width={200} src={urlFor(productsdata.productimage).url()} alt={productsdata.productname}></Image>
             <span className='bg-white flex justify-center flex-col items-center gap-2'>
              <h1 className='font-bold text-center text-pink-500'>{productsdata.productname}</h1>
              <p className='font-bold'>Price: {productsdata.productPrice}$</p>
              <p className='flex gap-2 items-center'><IoStar className='text-yellow-500'/>{productsdata.productraiting}</p>
              <p className='text-center '>{`${productsdata.productdescription.slice(0,100)}...`}</p>
              <Link href={`/AllProducts/${productsdata._id}`} className='bg-black text-white h-[35px] w-full flex justify-center items-center rounded-lg'>view more</Link>
             </span>
           </div>
          </div>
        ))}
      </section>
      <section className='w-screen overflow-x-hidden mt-20'>
               <div className='grid grid-cols-3 grid-rows-2 gap-2 xsm:grid-cols-1 xsm:grid-rows-6 ssm:grid-cols-2 ssm:grid-rows-3'>
                <div className="h-[280px]" style={{background:"url('/Images/womens-coat-two.jpg')",backgroundRepeat:"no-repeat" , backgroundSize:"cover"}}></div>
                <div className='bg-neutral-500 w-full flex justify-center items-center'>
                  <h1 className='text-[40px] msm:text-[35px] text-center text-white font-bold'>Inclusify</h1>
                </div>
                <div style={{background:"url('/Images/womens-coat-two.jpg')",backgroundRepeat:"no-repeat" , backgroundSize:"cover"}}></div>
                <div className='bg-neutral-200 w-full flex justify-center items-center'>
                  <h1 className='text-[40px] text-center font-bold'>One way Shop</h1>
                </div>
                <span className='flex justify-center items-center flex-col'>
                  <h1 className='text-[30px] font-bold text-neutral-600 '>Inclusify</h1>
                  <p className=' text-center'>Your go to store. we offer a variety of inclusive products. Get your cards ready, because you are goinng to find your perfect fit here. </p>
                </span>
                <div className='bg-neutral-200 w-full flex justify-center items-center'>
                  <Image height={150} width={150} src={"/Images/shooping-bag.png"} alt="shooping bag" ></Image>
                </div>
               </div>
            </section>
            <section className="overflow-x-hidden">
              <CustomerTestimonials />
            </section>
    </main>

   
  );
}
