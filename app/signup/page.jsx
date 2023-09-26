"use client"
import { img1 } from '../images'
import React from 'react'
import {FcGoogle} from "react-icons/fc"

const page = () => {
  return (
    <>
    <div className='flex flex-row gap-24 pr-32 pt-20 pb-20 items-center '>
        <img src={img1.src} alt="image" className='w-[620px] h-[560px]' />
        <div>
            <div className='flex flex-col gap-7'>
                <div className="text-4xl font-bold leading-6">Create an account</div>
                <div>Enter your information below</div>
                <input type="text" placeholder="Name"  className="border-b-2" />
                <input type="text" placeholder="Your Email" className="border-b-2" />
                <input type="text" placeholder="Your Phone Number" className="border-b-2"/>
                <button className=" w-full h-12 bg-red-500 text-white">Create Account</button>
                <div className="flex gap-4 flex-row border-2 justify-center items-center ">
               <div><FcGoogle className="text-xl"/> </div> 
      
                <button className=" h-12 bg-white">Sign-Up with Google</button>
                </div>
                <div className='flex flex-row gap-8 justify-center items-center'>
                    <div>Already have account?</div>
                    <div className="underline">Log in</div>
               </div>

            </div>
        </div>
        
        
        </div>
        </>
  )
}

export default page