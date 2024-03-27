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
            <div className="mobile-menu">
            <div className="tab-buttons-mobile">
            <div className="tab-btn-mobile"><button className=''>Presentation</button></div>
            <div className="border-tabs-mobile"></div>
            <div className="tab-btn-mobile"><button className=''>City</button></div>
            <div className="border-tabs-mobile"></div>
            <div className="tab-btn-mobile"><button className=''>Blog</button></div>
          </div>
          <div className="navlinks-mobile">
            <li className=''>Features</li>
            <li className=''>Experience</li>
            <li className=''>Pricing</li>
            <li className=''>Trucks</li>
            <li className=''>Ads Settings</li>
            <li className=''>Coverage</li>
            <li className=''>Order Process</li>
          </div>
            </div>
          )}
          <div className="tab-buttons">
            <div className="tab-btn"><button className=''>Presentation</button></div>
            <div className="border-tabs"></div>
            <div className="tab-btn"><button className=''>City</button></div>
            <div className="border-tabs"></div>
            <div className="tab-btn"><button className=''>Blog</button></div>
          </div>
          <div className="navlinks">
            <li className=''>Features</li>
            <li className=''>Experience</li>
            <li className=''>Pricing</li>
            <li className=''>Trucks</li>
            <li className=''>Ads Settings</li>
            <li className=''>Coverage</li>
            <li className=''>Order Process</li>
          </div>
        </div>
        <div className="flex gap-[20px]">
          <button className=' order-button'>Order</button>
          <button onClick={() => setIsOpen(!isOpen)} className="menu-toggle">
            {isOpen? <CloseOutlined/> : <MenuOutlined/>}
          </button>
        </div>
     </div>      
    </div>
  )
}

export default Header
