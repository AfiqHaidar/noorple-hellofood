import React from 'react'

const List = ({imgUrl, text}:{imgUrl:string,text:string}) => {
  return (
    <div className='flex justify-center items-center flex-row'>
        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-gray-500'>
            {/* <p className='font-bold text-[20px] text-white'>
                0{angka}
            </p> */}
            <img src={imgUrl} alt="" className='w-[33px] h-[33px]'/>
        </div>
        <p className='flex-1 ml-[30px] font-normal text-[18px] text-[white] leading-[32px]'>
            {text}
        </p>
    </div>
  )
}

export default List