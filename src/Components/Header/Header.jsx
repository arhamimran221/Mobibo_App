"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import mobiboLogo from "@/Assests/mobibo-logo.svg"
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
     <div className="flex justify-between items-center px-4 py-1">
        <div className="flex justify-between items-center gap-[20px]">
          <div className="">
            <Image
             src={mobiboLogo}
             alt='mobibo-log'
            />
          </div>

          {isOpen && (
            <div className="flex flex-col md:hidden absolute bg-[#fff] w-[100%] top-[59px] left-[0px] py-[20px] border-b-[1px] border-[#000]">
 <div className="flex justify-between items-center gap-[10px] bg-[#F9FF8A] rounded-full p-1 w-[90%] m-auto">
            <div className="rounded-full hover:bg-[#A57BFF] "><button className='text-[12px] font-inter leading-[16px] tracking-[0.05px] font-600 px-4 py-2 hover:text-[#ffff]'>Presentation</button></div>
            <div className="border-[1px] border-[#dddfaf] h-[25px]"></div>
            <div className="rounded-full hover:bg-[#A57BFF] "><button className='text-[12px] font-inter leading-[16px] tracking-[0.05px] font-600 px-4 py-2 hover:text-[#ffff]'>City</button></div>
            <div className="border-[1px] border-[#dddfaf] h-[25px]"></div>
            <div className="rounded-full hover:bg-[#A57BFF] "><button className='text-[12px] font-inter leading-[16px] tracking-[0.05px] font-600 px-4 py-2 hover:text-[#ffff]'>Blog</button></div>
          </div>
               <div className="flex flex-col justify-between items-center list-none gap-[20px] mt-[20px]">
            <li className='font-inter font-[400] tracking-[-0.5px] leading-[16px] text-[14px] cursor-pointer text-[#3C3C43] hover:text-[#000000]'>Features</li>
            <li className='font-inter font-[400] tracking-[-0.5px] leading-[16px] text-[14px] cursor-pointer text-[#3C3C43] hover:text-[#000000]'>Experience</li>
            <li className='font-inter font-[400] tracking-[-0.5px] leading-[16px] text-[14px] cursor-pointer text-[#3C3C43] hover:text-[#000000]'>Pricing</li>
            <li className='font-inter font-[400] tracking-[-0.5px] leading-[16px] text-[14px] cursor-pointer text-[#3C3C43] hover:text-[#000000]'>Trucks</li>
            <li className='font-inter font-[400] tracking-[-0.5px] leading-[16px] text-[14px] cursor-pointer text-[#3C3C43] hover:text-[#000000]'>Ads Settings</li>
            <li className='font-inter font-[400] tracking-[-0.5px] leading-[16px] text-[14px] cursor-pointer text-[#3C3C43] hover:text-[#000000]'>Coverage</li>
            <li className='font-inter font-[400] tracking-[-0.5px] leading-[16px] text-[14px] cursor-pointer text-[#3C3C43] hover:text-[#000000]'>Order Process</li>
          </div>
            </div>
          )}
          <div className="hidden md:flex justify-between items-center gap-[10px] bg-[#F9FF8A] rounded-full p-1">
            <div className="rounded-full hover:bg-[#A57BFF] "><button className='text-[12px] font-inter leading-[16px] tracking-[0.05px] font-600 px-4 py-2 hover:text-[#ffff]'>Presentation</button></div>
            <div className="border-[1px] border-[#dddfaf] h-[25px]"></div>
            <div className="rounded-full hover:bg-[#A57BFF] "><button className='text-[12px] font-inter leading-[16px] tracking-[0.05px] font-600 px-4 py-2 hover:text-[#ffff]'>City</button></div>
            <div className="border-[1px] border-[#dddfaf] h-[25px]"></div>
            <div className="rounded-full hover:bg-[#A57BFF] "><button className='text-[12px] font-inter leading-[16px] tracking-[0.05px] font-600 px-4 py-2 hover:text-[#ffff]'>Blog</button></div>
          </div>
          <div className="hidden md:flex justify-between items-center list-none gap-[20px]">
            <li className='font-inter font-[400] tracking-[-0.5px] leading-[16px] text-[14px] cursor-pointer text-[#3C3C43] hover:text-[#000000]'>Features</li>
            <li className='font-inter font-[400] tracking-[-0.5px] leading-[16px] text-[14px] cursor-pointer text-[#3C3C43] hover:text-[#000000]'>Experience</li>
            <li className='font-inter font-[400] tracking-[-0.5px] leading-[16px] text-[14px] cursor-pointer text-[#3C3C43] hover:text-[#000000]'>Pricing</li>
            <li className='font-inter font-[400] tracking-[-0.5px] leading-[16px] text-[14px] cursor-pointer text-[#3C3C43] hover:text-[#000000]'>Trucks</li>
            <li className='font-inter font-[400] tracking-[-0.5px] leading-[16px] text-[14px] cursor-pointer text-[#3C3C43] hover:text-[#000000]'>Ads Settings</li>
            <li className='font-inter font-[400] tracking-[-0.5px] leading-[16px] text-[14px] cursor-pointer text-[#3C3C43] hover:text-[#000000]'>Coverage</li>
            <li className='font-inter font-[400] tracking-[-0.5px] leading-[16px] text-[14px] cursor-pointer text-[#3C3C43] hover:text-[#000000]'>Order Process</li>
          </div>
        </div>
        <div className="flex gap-[20px]">
          <button className='p-4 rounded-lg hover:text-[#80FFAB] font-inter font-[500] text-[14px] leading-[20px] tracking-[-0.5px] bg-[#80FFAB] rounded-[12px]	hover:border-[1px] hover:border-[#80FFAB] hover:bg-[#fff]'>Order</button>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen? <CloseOutlined/> : <MenuOutlined/>}
          </button>
        </div>
     </div>      
    </div>
  )
}

export default Header
