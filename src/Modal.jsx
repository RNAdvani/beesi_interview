import React from 'react'
import './style.css'

function Modal({open,count}) {
    if(!open) return null
  return (
    <div className='modal z-10 max-w-[100vw]'>
        <div className="  relative modalContainer flex phone:max-tablet:h-[90%] phone:max-tablet:w-[90%] xl:h-[50%] xl:w-[40%] bg-white ">
            <button className='absolute right-2 text-2xl'onClick={()=>!open} >x</button>
        </div>
    </div>
  )
}

export default Modal