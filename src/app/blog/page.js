"use client"

import React from "react";
import CityCard from "./BlogCards";
import Link from "next/link";
import { companyData } from "./companyData.jsx";
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
   const handleDetails = (e) => {
    router.push(`/blog/content/${e}`);
   }
  return (
    <div className=" bg-[#e4e4e4]  border-t-[1px]">
      <div className="bg-[#fff] px-4 py-2 flex gap-[10px] flex-wrap">
        <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">
          Title
        </button>
        <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">
          Title
        </button>
        <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">
          Title
        </button>
        <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">
          Title
        </button>
        <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">
          Title
        </button>
        <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">
          Title
        </button>
        <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">
          Title
        </button>
        <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">
          Title
        </button>
        <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">
          Title
        </button>
        <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">
          Title
        </button>
      </div>
      <div className="flex lg:flex-row flex-col flex-wrap gap-[10px] w-[100%] p-4 m-auto w-[100%] max-w-[1280px]">
        {companyData.map((item, index) => (
          <div
            className="lg:w-[24%] w-[100%] m-auto cursor-pointer"
            onClick={() =>handleDetails(item)}
          >
            {/* <Link
            href={{
              pathname: "/blog/content", 
              query: item 
            }}> */}
            <CityCard
              heading={item.heading}
              image={item.companyImage}
              description={item.description}
            />
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
