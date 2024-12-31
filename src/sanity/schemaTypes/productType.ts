import { defineField, defineType } from "sanity";

const productType = defineType ({
    title:"product",
    name:"product",
    type:"document",
    fields:[
       defineField({
          title:"Product Name",
          name:"productname",
          type:"string",
          
        }),
        defineField({
            title:"Product Description",
            name:"productdescription",
            type:"string"
          }),
           defineField({
            title:"Product Image",
            name:"productimage",
            type:"image"
          }),
          defineField({
            title:"Product owner image",
            name:"productownerimage",
            type:"image",
          }),
          defineField({
            title:"Owner Name",
            name:"ownername",
            type:"string"
          }),
          defineField({
            title:"Product price",
            name:"productPrice",
            type:"number"
          }),
          defineField({
            title:"Product raiting",
            name:"productraiting",
            type:"number"
          })
    ]
})
export default productType ;