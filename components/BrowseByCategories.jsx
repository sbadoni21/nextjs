
import React from 'react'
import { iconsforbrowsecontent } from '@/contents/index.js'

const BrowseByCategories = () => {
  return (
    <div className="h-96 pl-32 pr-32 pt-16 border-b-2 pb-4">
    <div className="flex justify-start items-center gap-4">
      <div className="w-2 h-5 bg-red-600 rounded-sm"></div>
      <div className=" text-red-600">Categories</div>
    </div>
    <div className="flex flex-row justify-start items-center gap-20 ">
      <div className="font-bold text-3xl pt-3">Browse By Categories</div>
   
    </div>
        <div className='flex flex-row gap-12 pt-10 justify-between'>
        {iconsforbrowsecontent.map((ico,index)=>{
         return(     <button className='h-40 w-40 border-2 flex flex-col justify-center items-center rounded-md text-black hover:bg-red-500 hover:text-white hover:-translate-y-2 hover:shadow-xl hover:scale-110 delay-300 duration-300 hover:rounded-none'>
            {<ico.ico className='text-5xl font-light'/>} 
            {ico.text}
            </button>
         )


        })

        }
        </div>
        

       
</div>
  

  )
}

export default BrowseByCategories