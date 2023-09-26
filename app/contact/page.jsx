import React from 'react';
import {BiPhoneCall} from "react-icons/bi"

const page = () => {
  return (
    <div className='pl-32 pr-32  pt-20 pb-20'>
        <div className='flex gap-5  pb-20'><span>Home</span> / <span className='font-medium'>Contact</span></div>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-col gap-4 shadow-xl p-10'>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-row gap-4 items-center'>
                        <div className='rounded-full h-8 w-8 bg-red-500 flex justify-center items-center '><BiPhoneCall className='text-white text-xl'/></div>
                        <div>Call Us</div></div>
                    <div>We are available 24/7, 7 Days a week</div>
                    <div>Phone : +8080800080</div>
                    <div className='border-2'></div>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-row gap-4 items-center'>
                        <div className='rounded-full h-8 w-8 bg-red-500 flex justify-center items-center '><BiPhoneCall className='text-white text-xl'/></div>
                        <div>Write To Us</div></div>
                    <div>We are available 24/7, 7 Days a week</div>
                    <div>Phone : +8080800080</div>
             
                </div>
                
            </div>
            <div className='flex flex-col gap-10 justify-end '>
                    <div className='flex flex-row gap-10 justify-around'>
                        <input type="text" name="" id="" placeholder='your details here*' className='h-10 bg-gray-100 p-1'/>
                        <input type="text" name="" id="" placeholder='your details here*' className='h-10 bg-gray-100 p-1' />
                        <input type="text" name="" id="" placeholder='your details here*' className='h-10 bg-gray-100 p-1' />
                    </div>
                    <div><input type="text" name="" id="" placeholder='your message' className='bg-gray-100 w-[765px] h-[200px]'/></div>
                    <button className="self-end h-fit w-fit p-2 pl-8 pr-8 text-white bg-red-500">View All Porducts</button></div>
                </div>
            
           
        </div>





   
  )
}

export default page