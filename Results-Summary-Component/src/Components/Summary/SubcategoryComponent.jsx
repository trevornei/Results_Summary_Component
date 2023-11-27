import React from 'react'

export default function SubcategoryComponent({ image, backgroundColor }) {
  return (
    <div className={`flex flex-row items-center justify-center w-full h-12 my-2 ${backgroundColor} rounded-xl`} >
        <img src={image} alt="Icon" />
        <p className='px-3'>Subcategory</p>
        <p className='px-3'>Score / 100</p>
    </div>
  )
}
