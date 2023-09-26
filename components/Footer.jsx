import React from 'react'
import {CiPaperplane} from "react-icons/ci"
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineInstagram, AiOutlineCopyrightCircle } from "react-icons/ai";


const Footer = () => {
  return (
    <div className='flex flex-row justify-between  pl-32 pr-32 bg-black text-white h-96 w-full pt-12 pb-12 relative'>
        <div className='flex flex-col  gap-4'>
            <p className='text-3xl font-semibold'>Exclusive</p>
            <p className='text-xl font-semibold'>Subscribe</p>
            <p>Get 10% off on your first order</p>
            <div className='flex  border-2 justify-center items-center pr-2'><input type="text" className='bg-black border-white p-2 ' placeholder='Enter your email' /><CiPaperplane className='text-2xl'/> </div>
        </div>
        <div className='flex flex-col  gap-4'>
            <p className='text-2xl'>Support</p>
            <p className='text-xl'>Lorem ipsum dolor sit <br />amet consectetur adipisicing.</p>
            <p>exclusive@gmail.com</p>
            <p>+918080808080</p>

 
        </div>
        <div className='flex flex-col  gap-4'>
            <p className='text-2xl'>Account</p>
            <p className='text-xl font-semibold'>My Account</p>
            <p>Login</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>

        </div>
        <div className='flex flex-col  gap-4'>
            <p className='text-2xl'>Quick Links</p>
            <p>Privacy Policies</p>
            <p>Terms of Use</p>
            <p>FAQ</p>
            

        </div>
        <div className='flex flex-col  gap-4'>
            <p className='text-2xl'>Download App</p>
            <p>Save $3 with (App New Users Only)</p>
            <div className="flex flex-row justify-around md:justify-around text-lg  ">
                <BiLogoFacebookSquare className="cursor-pointer" />
                <FaXTwitter className="cursor-pointer" />
                <AiOutlineYoutube className="cursor-pointer" />
                <AiOutlineMail className="cursor-pointer" />
                <AiOutlineInstagram className="cursor-pointer" />
              </div>
            

        </div>
        <div className='absolute bottom-5  text-gray-600 flex items-center justify-center'>
             <AiOutlineCopyrightCircle className='text-lg text-white '/>Copyright Rimel 2022. All Right Reserved</div>

    </div>
  )
}

export default Footer