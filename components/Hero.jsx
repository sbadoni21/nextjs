"use client"

import React from 'react';
import { sections } from "../contents/index.js";

const Hero = () => {
  return (
    <div className='h-fit pl-32 pr-32'>
      <div className='flex flex-row pt-2 gap-20 justify-between'>
        <div className='border-r-2  '>
          {sections.map((section, index) => {
            return (
              <h1 className='text-black capitalize pb-4 pr-12 w-48 ' key={index}>
                {section}
              </h1>
            );
          })}
        </div>
  

  
      </div>
    </div>
  );
};

export default Hero;

