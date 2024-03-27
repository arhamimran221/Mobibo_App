'use client';
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import React from "react";
import Image  from "next/image";
import ledTruck from "@/Assests/Led-Truck.png"
import brightIcon from "@/Assests/bright-icon.svg"
import gameIcon from "@/Assests/gamecontroller-icon.svg"

const page = () => {
  return (
    <div className="m-auto w-[100%] max-w-[1280px]">
      <Header />
      <div className="hero-banner lg:text-[100px] text-[30px] font-inter lg:leading-[96px] leading-[30px] lg:tracking-[-10px] tracking-[0px] text-[#fff] font-[700] p-4 uppercase">
        LED Truck <br />
        Advertising
      </div>
      <div className="lg:flex block justify-between items-center p-4">
        <div>
          <div className="font-inter text-[#e4e4e6] lg:text-[100px] lg:tracking-[-11px] tracking-[0px] lg:leading-[96px] leading-[0px] font-[700]">LED TRACK</div>
          <p className="lg:p-2 p-0 py-2 font-inter">Is a truck equipped <br/>with high-resolution LED screens</p>
        </div>
        <div className="flex justify-between items-center gap-[30px] pr-[10px]">
          <div className="flex flex-col justify-center items-center">
            <svg
              width="169"
              height="120"
              viewBox="0 0 169 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.7609 109.52H137.311C146.959 109.52 151.995 104.642 151.995 94.8348V33.6574C151.995 23.8499 146.959 18.9727 137.311 18.9727H31.7609C22.1124 18.9727 17.0762 23.8499 17.0762 33.6574V94.8348C17.0762 104.642 22.1124 109.52 31.7609 109.52ZM32.4501 99.2349C28.9512 99.2349 27.3608 97.8036 27.3608 94.1987V34.2935C27.3608 30.6886 28.9512 29.2573 32.4501 29.2573H136.621C140.12 29.2573 141.711 30.6886 141.711 34.2935V94.1987C141.711 97.8036 140.12 99.2349 136.621 99.2349H32.4501ZM71.839 88.3672C73.1643 88.3672 74.2776 87.9431 75.5499 87.2539L106.351 69.1233C108.577 67.798 109.744 66.2076 109.744 64.1931C109.744 62.2316 108.63 60.6942 106.351 59.3689L75.5499 41.2383C74.2776 40.5491 73.1643 40.125 71.839 40.125C69.1883 40.125 67.0148 42.0865 67.0148 45.6914V82.7478C67.0148 86.3527 69.2413 88.3672 71.839 88.3672ZM57.4194 128.074H111.652C114.303 128.074 116.476 125.901 116.476 123.25C116.476 120.599 114.303 118.373 111.652 118.373H57.4194C54.7687 118.373 52.5951 120.599 52.5951 123.25C52.5951 125.901 54.7687 128.074 57.4194 128.074Z"
                fill="#787880"
                fill-opacity="0.2"
              />
            </svg>
            <p>Vedio</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <svg
              width="79"
              height="104"
              viewBox="0 0 79 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.355469 15.2994V88.8977C0.355469 98.6913 5.4481 103.833 15.1437 103.833H63.5237C73.2193 103.833 78.3119 98.6913 78.3119 88.8977V15.2994C78.3119 5.45689 73.2683 0.364258 63.5237 0.364258H15.1437C5.4481 0.364258 0.355469 5.45689 0.355469 15.2994ZM10.1 15.887C10.1 12.0675 12.0587 10.1088 15.9272 10.1088H62.7402C66.6576 10.1088 68.5674 12.0675 68.5674 15.887V88.2612C68.5674 92.0806 66.6087 94.0393 62.7402 94.0393H15.9272C12.0587 94.0393 10.1 92.0806 10.1 88.2612V15.887ZM39.3337 40.028C45.6016 40.028 50.7432 34.9844 50.6942 28.7165C50.5963 22.3997 45.6016 17.454 39.3337 17.405C33.0658 17.356 28.0222 22.3997 28.0222 28.7165C28.0222 35.0333 33.0658 40.028 39.3337 40.028ZM39.3337 33.9071C36.4446 33.9071 34.1431 31.5566 34.1431 28.7165C34.1431 25.6805 36.4446 23.477 39.3337 23.477C42.1738 23.477 44.5243 25.8274 44.5243 28.7165C44.5243 31.5566 42.2228 33.9071 39.3337 33.9071ZM39.3337 86.6942C50.3025 86.6942 59.1166 77.929 59.1166 66.9113C59.1166 55.8936 50.3025 47.2263 39.3337 47.1773C28.4139 47.1283 19.5998 55.8936 19.5998 66.9113C19.5998 77.929 28.4139 86.6942 39.3337 86.6942ZM39.3337 74.7951C35.0246 74.7951 31.4989 71.2694 31.4989 66.9113C31.4989 62.4063 34.9266 59.0275 39.3337 59.0275C43.7408 59.0275 47.2175 62.4063 47.2175 66.9113C47.2175 71.2694 43.7408 74.7951 39.3337 74.7951Z"
                fill="#787880"
                fill-opacity="0.2"
              />
            </svg>
            <p className="mt-[20px]">
              Audio
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[60%] w-[100%] m-auto my-[30px]">
        <Image
        src={ledTruck}
        alt="truck image"
        className="m-auto"
        />
      </div>
      <div className="flex lg:w-[26%] w-[100%] m-auto gap-[20px] mt-[100px] mb-[20px]">
        <div>
        <Image src={brightIcon} alt="bright-icon" width={60}/>
        </div>
        <div>
          <div className="font-inter font-[500] text-[24px] leading-[28px] tracking-[-0.55px]">Bright LED technology</div>
          <div className="w-[60%] font-inter font-[400] text-[14px] leading-[16px] tracking-[-0.5px] text-[#3C3C43] my-[20px]">Ensuring visibility 
under any lighting conditions, 
including bright sunlight</div>
        </div>
      </div>
      <div className="gaming-console p-4">
        <div className="flex lg:flex-row flex-col w-[100%] ">
        <div className="lg:w-[50%] w-[80%] font-inter leading-[32px] tracking-[-0.8px] lg:text-[24px] text-[22px] lg:text-[#EBEBF5] text-[#000]">You can use the LED truсk as</div>
        <div className="lg:w-[50%] w-[80%] leading-[44px] lg:mt-[0px] mt-[40px]">
          <ul className="leading-[24px]">
          <li className="lg:text-[#ffff] text-[#000] list-none font-inter lg:text-[28px] text-[18px] leading-[34px] lg:tracking-[-2.05px] tracking-[0px]">Gaming consoles</li>
          <li className="lg:text-[#ffff] text-[#000] list-none font-inter lg:text-[28px] text-[18px] leading-[34px] lg:tracking-[-2.05px] tracking-[0px] flex items-center gap-[10px]">Interactive games <span className="text-[10px] tracking-[1px]">(eg. roulette)</span></li>
          <li className="lg:text-[#ffff] text-[#000] list-none font-inter lg:text-[28px] text-[18px] leading-[34px] lg:tracking-[-2.05px] tracking-[0px]">Live streaming</li>
          <li className="lg:text-[#ffff] text-[#000] list-none font-inter lg:text-[28px] text-[18px] leading-[34px] lg:tracking-[-2.05px] tracking-[0px]">Live drone feed</li>
          <li className="lg:text-[#ffff] text-[#000] list-none font-inter lg:text-[28px] text-[18px] leading-[34px] lg:tracking-[-2.05px] tracking-[0px]">Go Pro camera</li>
          <li className="lg:text-[#ffff] text-[#000] list-none font-inter lg:text-[28px] text-[18px] leading-[34px] lg:tracking-[-2.05px] tracking-[0px]">iPhone screen mirror</li>
          <li className="lg:text-[#ffff] text-[#000] list-none font-inter lg:text-[28px] text-[18px] leading-[34px] lg:tracking-[-2.05px] tracking-[0px]">Social media stream</li>
          </ul>
        </div>
        </div>
        <div className="lg:mt-[117%] mt-[80%] text-[#fff]">
          <div><Image src={gameIcon} alt="game icon"/></div>
          <div className="mt-[30px] font-inter leading-[20px] tracking-[0px] lg:text-[16px] text-[14px] text-[#8d939d] ">In the picture</div>
          <div className="mt-[10px] lg:w-[20%] w-[70%] font-inter leading-[20px] lg:text-[16px] text-[14px]">Customers have connected
a game console and play directly
on our LED truck</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
