import React from 'react'

const List = ({angka, text}:{angka:number,text:string}) => {
  return (
    <div className='flex justify-center items-center flex-row'>
        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-gray-500'>
            <p className='font-bold text-[20px] text-white'>
                0{angka}
            </p>
        </div>
        <p className='flex-1 ml-[30px] font-normal text-[18px] text-[white] leading-[32px]'>
            {text}
        </p>
    </div>
  )
}

export default List