"use client"
import { img1 } from "../images/1.jpg"
import React from 'react'
import {FcGoogle} from "react-icons/fc"

const page = () => {
  return (
    <>
    <div className='flex flex-row  pr- '>
        <img src={img1} alt="image" className='w-2/3 h-[660px]' />
        <div>
            <div className='flex flex-col pt-60 gap-7'>
                <div className="text-4xl font-bold leading-6">Login to Exclusive</div>
                <div>Enter your information below</div>
                <input type="text" placeholder="Name"  className="border-b-2" />
                <input type="text" placeholder="Your Email" className="border-b-2" />
              <div className="flex justify-center items-center gap-12">
                <button className=" w-28 h-12 bg-red-500 text-white">Log In</button>
                <div className="text-red-500">Forgot Password?</div>
                </div>
            </div>
        </div>
        
        
        </div>
        </>
  )
}

export default page