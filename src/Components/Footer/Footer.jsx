'use client';

import React from 'react'
import Image from "next/image"
import FooterLogo from "@/Assests/mobibo-footer.png"
import linkedin from "@/Assests/linkiden-icon.svg"
import facebook from "@/Assests/facebook.svg"
import Instagram from "@/Assests/Intsagram.svg"
import pinterest from "@/Assests/Pinterest.svg"



const Footer = () => {
  return (
    <div className='bg-[#2c2c2e] p-4'>
      <div className="flex w-[100%] lg:flex-row flex-col gap-[10px] lg:gap-[0px]">
        <div className="lg:w-[30%] w-[100%]">
          <Image src={FooterLogo}/>
        </div>
        <div className="w-[20%]">
          <li className='list-none font-inter font-[400] text-[12px] cursor-pointer leading-[25px] tracking-[0.05px] text-[#8b8b90]'>About Us</li>
          <li className='list-none font-inter font-[400] text-[12px] cursor-pointer leading-[25px] tracking-[0.05px] text-[#8b8b90]'>Features</li>
          <li className='list-none font-inter font-[400] text-[12px] cursor-pointer leading-[25px] tracking-[0.05px] text-[#8b8b90]'>Experience</li>
          <li className='list-none font-inter font-[400] text-[12px] cursor-pointer leading-[25px] tracking-[0.05px] text-[#8b8b90]'>Vedio</li>
          <li className='list-none font-inter font-[400] text-[12px] cursor-pointer leading-[25px] tracking-[0.05px] text-[#8b8b90]'>Trucks</li>
          <li className='list-none font-inter font-[400] text-[12px] cursor-pointer leading-[25px] tracking-[0.05px] text-[#8b8b90]'>Pricing</li>
          <li className='list-none font-inter font-[400] text-[12px] cursor-pointer leading-[25px] tracking-[0.05px] text-[#8b8b90]'>Ads Settings</li>
          <li className='list-none font-inter font-[400] text-[12px] cursor-pointer leading-[25px] tracking-[0.05px] text-[#8b8b90]'>Customizable</li>
          <li className='list-none font-inter font-[400] text-[12px] cursor-pointer leading-[25px] tracking-[0.05px] text-[#8b8b90]'>Coverage</li>
          <li className='list-none font-inter font-[400] text-[12px] cursor-pointer leading-[25px] tracking-[0.05px] text-[#8b8b90]'>Map</li>
          <li className='list-none font-inter font-[400] text-[12px] cursor-pointer leading-[25px] tracking-[0.05px] text-[#8b8b90]'>Order Process</li>
        </div>
        <div className="w-[20%]">
          <li className='list-none font-inter font-[400] text-[12px] cursor-pointer leading-[25px] tracking-[0.05px] text-[#8b8b90]'>Blog</li>
          <li className='list-none font-inter font-[400] text-[12px] cursor-pointer leading-[25px] tracking-[0.05px] text-[#8b8b90]'>SiteMap</li>
        </div>
        <div className="lg:w-[20%] w-[80%]">
          <div className="font-inter font-[400] text-[12px] leading-[18px] tracking-[0.05px] text-[#535357]">New York</div>
          <div className="font-inter font-[400] text-[12px] leading-[18px] tracking-[0.05px] text-[#535357]">418 Broadway</div>
          <div className="font-inter font-[400] text-[12px] leading-[18px] tracking-[0.05px] text-[#535357]">STE 4725 Albany, NY 12207</div>
          <div className="font-inter font-[400] text-[12px] leading-[25px] tracking-[0.05px] text-[#535357] my-[10px]">(718) 635–1316</div>
          <div className="font-inter font-[400] text-[12px] leading-[25px] tracking-[0.05px] text-[#535357]">victoria@heymobibo.com</div>
          <div className="font-inter font-[400] text-[12px] leading-[25px] tracking-[0.05px] text-[#535357]"><button className='bg-[#39393d] border-[1px] border-[#8b8b90] text-[#8b8b90] text-[16px] px-4 py-2 rounded-lg mt-[10px]'>Call</button></div>
        </div>
        <div className="lg:w-[20%] w-[80%] my-[30px] lg:my-[0px]">
          <div className="font-inter font-[400] text-[12px] leading-[18px] tracking-[0.05px] text-[#ffff]">Everything you need to know 
before ordering advertising</div>
<div className="font-inter font-[400] text-[12px] leading-[25px] tracking-[0.05px] text-[#535357]"><button className='bg-[#ffff] border-[1px] border-[#8b8b90] text-[#39393d] text-[16px] px-4 py-2 rounded-lg mt-[10px]'>Ads blog</button></div>

        </div>
      </div>
      <div className="flex mt-[30px]">
        <div className="font-inter font-[400] text-[12px] leading-[18px] tracking-[0.05px] text-[#535357] cursor-pointer w-[64%]">Privacy Policy <span className='ml-[20px]'>Terms of Service</span></div>
        <div className="flex gap-[15px]">
          <Image src={linkedin} className="cursor-pointer"/>
          <Image src={facebook} className="cursor-pointer"/>
          <Image src={Instagram} className="cursor-pointer"/>
          <Image src={pinterest} className="cursor-pointer"/>
        </div>
      </div>
    </div>
  )
}

export default Footer
