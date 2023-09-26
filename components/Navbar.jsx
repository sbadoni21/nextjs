import React from "react";
import { AiOutlineArrowDown, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import {HiOutlineMagnifyingGlass} from "react-icons/hi2";

const Navbar = () => {
  return (
    <div>
      <div className="h-12 w-full flex gap-2 bg-black  text-white items-center justify-center">
        <div className="">
          <div className="flex gap-2  capitalize text-sm">
            Summer Sale For All Swim Suits And Free Shipping -{" "}
            <span className="uppercase">OFF 50%</span>{" "}
            <span className="font-bold underline">ShopNow</span>
          </div>
        </div>
        <div className="pl-36 flex flex-row gap-2">
          <div className="text-white bg-black ">English</div>
          <button>
            <AiOutlineArrowDown className="text-white font-bold text-2xl" />
          </button>
        </div>
      </div>
      <div className="flex flex-row pl-28 pr-28 pb-8 h-28  text-black justify-between items-end border-b-2">
        <div className="text-xl capitalize font-bold">Exclusive</div>
        <div className="text-sm flex gap-8 justify-center">
            <div>Home</div>
            <div>Connect</div>
            <div>About</div>
            <div>SignUp</div>
        </div>
        <div className="text-sm flex gap-4 justify-center items-center" >
            <div className="flex items-center justify-center rounded-md bg-slate-100 "> <input type="text" placeholder="What are you looking for?" /><HiOutlineMagnifyingGlass className="text-xl" />
            </div>
            <AiOutlineHeart className="text-xl" />
        <AiOutlineShoppingCart className="text-xl" />

        </div>
  
      </div>
    </div>
  );
};

export default Navbar;
