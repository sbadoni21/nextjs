"use client"
import React from 'react';
import {AiOutlineCheck} from "react-icons/ai"
import { useState } from 'react';

const page = () => {
    const [ticker, setTicker] = useState(false)
     const tick = () => {
         setTicker(!ticker)

     }
  return (
    <div className='pl-32 pr-32  pt-20 pb-20'>
        <div className='flex gap-5  pb-20'><span>Home</span> / <span>Account</span>  / <span>Product</span> / <span>View Cart</span> / <span className='font-medium'>Contact</span></div>
        <div className='text-2xl font-semibold pb-12'>Billing Details</div>
        <div className='flex flex-row justify-between'>

        <div className='flex flex-xol gap-10 justify-end '>
                    <div className='flex flex-col gap-10 justify-around'>
                        <div className='flex flex-col gap-1  '><p className='text-gray-400'>First Name*</p>
                        <input type="text" name="" id="" placeholder='' className='h-10 bg-gray-100 p-1' required />
                        </div>
                        <div className='flex flex-col gap-1'><p className='text-gray-400'>Company Name</p>
                        <input type="text" name="" id="" placeholder='' className='h-10 bg-gray-100 p-1' />
                        </div>
                        <div className='flex flex-col gap-1'><p className='text-gray-400'>Street Address*</p>
                        <input type="any" name="" id="" placeholder='' className='h-10 bg-gray-100 p-1' required />
                        </div>
                        <div className='flex flex-col gap-1'><p className='text-gray-400'>Apartment, Floor, etc*</p>
                        <input type="text" name="" id="" placeholder='' className='h-10 bg-gray-100 p-1' />
                        </div>
                        <div className='flex flex-col gap-1'><p className='text-gray-400'>Town/City *</p>
                        <input type="text" name="" id="" placeholder='' className='h-10 bg-gray-100 p-1' required />
                        </div>
                        <div className='flex flex-col gap-1'><p className='text-gray-400'>Phone Number*</p>
                        <input type="number" name="" id="" placeholder='' className='h-10 bg-gray-100 p-1' required />
                        </div>
                        <div className='flex flex-col gap-1'><p className='text-gray-400'>Email Adress*</p>
                        <input type="text" name="" id="" placeholder='' className='h-10 bg-gray-100 p-1' required />
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            
                        <input type="checkbox" name="" id="" />
                        <div>Save this information for faster check-out near future</div>
                        </div>
                        
                     

                    </div>

                    </div>
           
                </div>
            
           
        </div>





   
  )
}

export default page