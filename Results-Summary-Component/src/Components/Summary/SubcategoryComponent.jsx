import React from 'react'

export default function SubcategoryComponent({ image, backgroundColor, textColor }) {
  return (
    <div className={`flex flex-row items-center justify-center w-full h-12 my-2 ${backgroundColor} rounded-xl `} >
        <img src={image} alt="Icon" />
        <p className={`px-3 ${textColor}`}>Subcategory</p>
        <p className='px-3 hover:animate-bounce hover:ease-in-out hover:delay-1000'>
          <a className='font-extrabold text-slate-700'>Score </a> 
          <a className='text-bold text-slate-500/50'>/ 100</a>
        </p>
    </div>
  )
}
