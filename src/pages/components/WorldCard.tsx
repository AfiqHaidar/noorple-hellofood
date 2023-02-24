import React from 'react'

const WorldCard = ({id, imgUrl, position,  active, handleClick}:{id:string, imgUrl:string, position:string, active:string, handleClick:any }) => {


    
  return (
    <div className={`absolute ${position} ${active===id ? 
      'w-[100px] h-[100px] scale-150' : 'p-[6px] w-[70px] h-[70px] rounded-full hover:bg-white  bg-gray-400 ' } 
       shadow-white duration-[0.7s] ease-out cursor-pointer`}
    onClick={()=> handleClick(id)}>
        <img src={imgUrl} alt="food" className='w-full h-full rounded-full'/>
    </div>
  )
}

export default WorldCard