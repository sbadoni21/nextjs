
import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { products } from '../contents/index';

const OurProducts = () => {
  console.log(products)
  return (
    <div className="h-fit pl-32 pr-32 pt-16 pb-16 border-b-2 flex-col">
    <div className="flex justify-start items-center gap-4">
      <div className="w-2 h-5 bg-red-600 rounded-sm"></div>
      <div className=" text-red-600">Our Products</div>
    </div>

      <div className="font-bold text-3xl pt-3 pb-12">Explore Our Products</div>
      <div className='grid grid-cols-3 grid-rows-3 overflow-hidden gap-6 '>
      {products.map((product)=>{
      return(
      <div className='flex flex-col relative bg-black h-56 w-64' key={product.id}>
      <div className="absolute top-6 right-6 bg-white h-8 w-8 rounded-full flex items-center justify-center">
                  <AiOutlineHeart className="text-xl text-black " />
                </div>
                <div className="absolute top-20 right-6 bg-white h-8 w-8 rounded-full flex items-center justify-center">
                  <BsCart className="text-xl text-black" />
                </div>
          <img src={product.imgUrl.img1.src} alt="" className='h-fit w-fit' />
  
          <div className='text-white'>{product.itemName}</div>
          <div className='flex'>
              <div className='text-white'>{product.itemCost}</div>
              <div></div>
              <div></div>
          </div>
          </div> 
      )
        })}
        </div>
  
         </div>
        


  
  )
}

export default OurProducts