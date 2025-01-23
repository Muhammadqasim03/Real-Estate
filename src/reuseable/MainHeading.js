import React from 'react'

const MainHeading = ({
    title
}) => {
  return (
    <>
     <h3 className='font-semibold text-[45px] text-[#3B3A5D] leading-[54px] text-center mt-10 '>
        {
            title
        }
        </h3> 
    </>
  )
}

export default MainHeading