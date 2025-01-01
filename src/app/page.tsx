import Image from "next/image";
import Herosection from "@/components/Herosection";
import CustomerTestimonials from "@/components/CustomerTestimonials";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="overflow-x-hidden">
      <Herosection />
      </section>
      <section className='w-screen overflow-x-hidden mt-20'>
               <div className='grid grid-cols-3 grid-rows-2 gap-2 xsm:grid-cols-1 xsm:grid-rows-6 ssm:grid-cols-2 ssm:grid-rows-3'>
                <div className="h-[280px]" style={{background:"url('/Images/womens-coat-two.jpg')",backgroundRepeat:"no-repeat" , backgroundSize:"cover"}}></div>
                <div className='bg-[#3c5377] w-full flex justify-center items-center'>
                  <h1 className='text-[50px] text-center text-white font-bold'>Inclusify</h1>
                </div>
                <div style={{background:"url('/Images/womens-coat-two.jpg')",backgroundRepeat:"no-repeat" , backgroundSize:"cover"}}></div>
                <div className='bg-pink-200 w-full flex justify-center items-center'>
                  <h1 className='text-[40px] text-center font-bold'>One way Shop</h1>
                </div>
                <span className='flex justify-center items-center flex-col'>
                  <h1 className='text-[35px] font-bold text-[#2f4a75] '>Inclusify</h1>
                  <p className=' text-center'>Your go to store. we offer a variety of inclusive products. Get your cards ready, because you are goinng to find your perfect fit here. </p>
                </span>
                <div className='bg-purple-200 w-full flex justify-center items-center'>
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
