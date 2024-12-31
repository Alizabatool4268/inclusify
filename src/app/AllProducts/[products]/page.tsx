import React from 'react'

interface PageProps{
    params:Promise<{
        products:string
    }>
}
interface productDetails {
        _id:string,
         productname:string,
         productdescription:string,
         productimage:{},
         productowner:{},
         productPrice:number,
         productraiting:number,
}

async function Page({params}:PageProps) {
    const resolvedParams = await params;
    const productId = toString();
  if ((productId) === null) {
  return <div>Invalid product ID</div>;
}
// const product = resolvedParams.products.find((prodetail:productDetails)=>{prodetail._id=== productId});
//   if (!product) {
//     console.log('Product not found');
//     return (
//       <section>
//         <div className="text-red-500">Product not found</div>
//       </section>
//     );
//   }
  return (
    <div>Page</div>
  )
}

export default Page