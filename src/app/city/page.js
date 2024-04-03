import React from "react";
import companyImage1 from "@/Assests/companyImage.png";
import companyImage2 from "@/Assests/companyImage2.png";
import companyImage3 from "@/Assests/companyImage3.png";
import companyImage4 from "@/Assests/companyImage4.png";
import companyImage5 from "@/Assests/companyImage5.png";
import companyImage6 from "@/Assests/companyImage6.png";
import companyImage8 from "@/Assests/companyImage8.png";
import companyImage9 from "@/Assests/companyImage9.png";
import companyImage10 from "@/Assests/companyImage10.png";
import companyImage11 from "@/Assests/companyImage11.png";
import companyImage12 from "@/Assests/companyImage12.png";
import companyImage13 from "@/Assests/companyImage13.png";
import companyImage14 from "@/Assests/companyImage14.png";
import companyImage15 from "@/Assests/companyImage15.png";
import companyImage16 from "@/Assests/companyImage16.png";
import companyImage17 from "@/Assests/companyImage17.png";
import CityCard from "./CityCard";

const page = () => {
  const companyData = [
    {
      heading: "company Name1",
      companyImage: companyImage1,
      description: "Good Company",
    },
    {
      heading: "company Name2",
      companyImage: companyImage2,
      description: "Good Company",
    },
    {
      heading: "company Name3",
      companyImage: companyImage3,
      description: "Good Company",
    },
    {
      heading: "company Name4",
      companyImage: companyImage4,
      description: "Good Company",
    },
    {
      heading: "company Name5",
      companyImage: companyImage5,
      description: "Good Company",
    },
    {
      heading: "company Name6",
      companyImage: companyImage6,
      description: "Good Company",
    },
    {
      heading: "company Name8",
      companyImage: companyImage8,
      description: "Good Company",
    },
    {
      heading: "company Name9",
      companyImage: companyImage9,
      description: "Good Company",
    },
    {
      heading: "company Name10",
      companyImage: companyImage10,
      description: "Good Company",
    },
    {
      heading: "company Name11",
      companyImage: companyImage11,
      description: "Good Company",
    },
    {
      heading: "company Name12",
      companyImage: companyImage12,
      description: "Good Company",
    },
    {
      heading: "company Name13",
      companyImage: companyImage13,
      description: "Good Company",
    },
    {
      heading: "company Name14",
      companyImage: companyImage14,
      description: "Good Company",
    },
    {
      heading: "company Name15",
      companyImage: companyImage15,
      description: "Good Company",
    },
    {
      heading: "company Name16",
      companyImage: companyImage16,
      description: "Good Company",
    },
    {
      heading: "company Name17",
      companyImage: companyImage17,
      description: "Good Company",
    },
  ];
  return (
    <div className=" bg-[#e4e4e4]  border-t-[1px]">
      <div className="bg-[#fff] px-4 py-2 flex gap-[10px] flex-wrap">
      <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">Title</button>
      <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">Title</button>
      <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">Title</button>
      <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">Title</button>
      <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">Title</button>
      <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">Title</button>
      <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">Title</button>
      <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">Title</button>
      <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">Title</button>
      <button className="px-4 py-2 rounded-full border-[1px] border-[#e4e4e4] text-[#98989c] font-inter text-[16px] hover:bg-[#FF80FD] hover:text-[#fff]">Title</button>
      </div>
        <div className="flex lg:flex-row flex-col flex-wrap gap-[10px] w-[100%] p-4 m-auto w-[100%] max-w-[1280px]">
        {companyData.map((item) => (
          <div className="lg:w-[24%] w-[100%] m-auto">
            <CityCard
              heading={item.heading}
              image={item.companyImage}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
