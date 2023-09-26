import { img1 } from "@/app/images";
import React from "react";

const NewArrivals = () => {
  return (
    <div className="pl-32 pr-32 pb-12">
      <div className="flex justify-start items-center gap-8">
        <div className="w-2 h-5 bg-red-600 rounded-sm"></div>
        <div className=" text-red-600">Featured</div>
              </div>
              <div className="text-3xl font-bold pt-4 pb-4">New Arrival</div>
    
        <div className="flex flex-row gap-6 h-[600px] w-full">
            <div className="relative ">
                <div className=" "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s" alt="" className="w-[800px] h-full bg-transparent hover:bg-gradient-to-t from-black via-transparent to-white"/>
                <div className="absolute bottom-16 left-10 z-10 text-white text-2xl font-bold">Playstation 5
                <br /><span className="font-normal text-lg"> Black & White version coming out soon</span>
                <br /><span className="font-normal text-xl underline underline-offset-4">Shop Now</span>
              </div>
              </div>
            </div>
            <div className="flex flex-col">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s" alt="" className="h-1/2 w-[580px]" />
                <div className="flex pt-4 gap-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s" alt="" className="h-[285px] w-1/2" /> 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s" alt="" 
                    className="w-1/2"/></div></div>
        </div>
    </div>
  );
};

export default NewArrivals;
