import { Bestselling } from "@/contents";
import { img5 } from "@/app/images";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";


const BestSellingProducts = () => {
  return (
    <div className="h-fit pl-32 pr-32 pt-16 pb-4">
      <div className="flex justify-start items-center gap-4">
        <div className="w-2 h-5 bg-red-600 rounded-sm"></div>
        <div className=" text-red-600">This Month</div>
      </div>
      <div>
        <div className="flex flex-row justify-between  items-center gap-20 ">
          <div className="font-bold text-3xl pt-3">Best Selling Prodcuts</div>
          <button className=" h-fit w-fit p-2 pl-8 pr-8 text-white bg-red-500">
            View All
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-between pt-10  ">
        {Bestselling.map((best, index) => {
          return (
            <div className="bg-gray-100 p-2 h-fit w-72 hover:h-fit relative flex flex-col shadow-xl hover:scale-125  hover:z-10 hover:flex-shrink-0 hover:flex-grow-0 delay- duration-1000">
              <div className="absolute top-6 right-6 bg-white h-8 w-8 rounded-full flex items-center justify-center">
                <AiOutlineHeart className="text-xl text-black " />
              </div>
              <div className="absolute top-20 right-6 bg-white h-8 w-8 rounded-full flex items-center justify-center">
                <BsCart className="text-xl text-black" />
              </div>
             
              <img src={best.imgUrl} alt={best.imgUrl} className="w-full" />
              <div className="">
              <p className="text-bold">{best.itemName}</p>
              <div className="flex gap-4">
                <p className="text-red-500 ">{best.itemCost}</p>
                <p className="text-slate-500 line-through ">
                  {best.itemsoriginal}
                </p>
              </div>
              <div className="flex flex-row gap-10">
                <div>rating</div>
                <div>rating</div>
              </div>
              </div>
            </div>
          );
        })}
      </div>
      <img src={img5.src} alt="" className="h-[560px] w-full mt-32 shadow-2xl"/>
    </div>
  );
};

export default BestSellingProducts;
