import { img1 } from "@/app/images";
import React from "react";

const NewArrivals = () => {
  return (
    <div className="pl-32 pr-32 pb-12 pt-4">
      <div className="flex justify-start items-center gap-8">
        <div className="w-2 h-5 bg-red-600 rounded-sm"></div>
        <div className=" text-red-600">Featured</div>
      </div>
      <div className="text-3xl font-bold pt-4 pb-4">New Arrival</div>

      <div className="flex flex-row gap-6 h-[600px] w-full">
        <div className="relative ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
            alt=""
            className="w-[800px] h-full"
          />
          <div className="absolute bottom-0 left-0 top-0 right-0 z-10 text-white text-2xl font-bold bg-transparent hover:bg-gradient-to-t from-black via-tranparent to-transparent transition delay-500 duration-500   ">
            <div className="absolute bottom-10 left-5 hover:text-center hover:scale-125 transition delay-300 duration-300 w-full">
              Playstation 5
              <br />
              <span className="font-normal text-lg">
            
                Black & White version coming out soon
              </span>
              <br />
              <span className="font-normal text-xl underline underline-offset-4">
                Shop Now
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
              alt=""
              className="h-[300px] w-[580px]"
            />
            <div className="absolute bottom-0 left-0 top-0 right-0 z-10 text-white text-2xl font-bold bg-transparent hover:bg-gradient-to-t from-black via-tranparent to-transparent transition delay-500 duration-500">
              <div className="absolute bottom-4 left-3 hover:text-center hover:scale-110 transition delay-300 duration-300 w-full">
                Playstation 5
                <br />
                <span className="font-normal text-lg">
                  
                  Black & White version coming out soon
                </span>
                <br />
                <span className="font-normal text-xl underline underline-offset-4">
                  Shop Now
                </span>
              </div>
            </div>
          </div>
          <div className="flex pt-4 gap-4">
            <div className="relative">      
             <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
              alt=""
              className="h-[285px] w-[280px]"
            /> <div className="absolute bottom-0 left-0 top-0 right-0 z-10 text-white text-2xl font-bold bg-transparent hover:bg-gradient-to-t from-black via-tranparent to-transparent transition delay-500 duration-500">
              <div className="absolute bottom-4 left-3 transition delay-300 duration-300 w-full">
                Playstation 5
                <br />
                <span className="font-normal text-lg">
                  
                  Black & White version coming out soon
                </span>
                <br />
                <span className="font-normal text-xl underline underline-offset-4">
                  Shop Now
                </span>
              </div>
            </div></div>
      
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
              alt=""
              className="w-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
