import React from 'react'

const CompanyCard = (props) => {

    console.log(props)

  return (
    <div>
      <div className="" style={{backgroundImage: `url(${props.image.companyImage.src})`,backgroundRepeat:"no-repeat",backgroundSize:'100%'}}>
        <div className="pt-[90%] p-2 font-inter font-[400] text-[12px] leading-[16px] tracking-[0.05px]">
            <p className='bg-[#695953] rounded-full w-fit p-2 text-[#fff]'>{props.companyName}</p></div>
      </div>
    </div>
  )
}

export default CompanyCard
