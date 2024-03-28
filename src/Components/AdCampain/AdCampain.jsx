import React from 'react'

const AdCampain = () => {
  return (
    <div className="m-auto w-[100%] max-w-[1280px]">        
    <div className='flex w-[100%]  px-[20px] pt-[40px] pb-[20px] gap-[10px]'>
   <h4 className='w-[32%] text-[34px] font-[500] font-inter' > Ad campaign settings</h4>
   <div className='w-[23%]'>
    <h3 className='text-[20px] font-[400] font-inter'>Before</h3>
    <p className='text-[14px] font-[400] font-inter'>We’ll present you with a proposed route based on our own analysis and you’ll also be able to request specific locations as well.</p>
   </div>
   <div className='w-[23%] font-inter'>
    <h3 className='text-[20px] font-[400]'>During</h3>
    <p className='text-[14px] font-[400]'>During the campaign, you’ll receive updates and optimization suggestions from a dedicated team.</p>
   </div>
   <div className='w-[23%] font-inter'>
    <h3 className='text-[20px] font-[400]'>After</h3>
    <p className='text-[14px] font-[400]'>Post-campaign, a detailed report with GPS data, a gallery, and raw data for retargeting on social media is provided.</p>
   </div>
    </div>
    <div className='flex w-[100%] gap-[20px] px-[20px] pb-[40px] font-inter mt-[20px]'>
        <h2 className=' text-[80px] font-[500] tracking-[-4px]	font-inter leading-[70px]'>
        Pick a place <br/>
where your target audience <br/> congregates <br/>
and show them <br/>
the ads
        </h2>
    </div>
    </div>
  )
}

export default AdCampain