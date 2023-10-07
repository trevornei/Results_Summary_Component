import React from 'react'
import SubcategoryComponent from './SubcategoryComponent'

export default function SummarySubcategoryCont() {
  return (
    <> 
        <div className="flex flex-col my-6">
            <SubcategoryComponent />
            <SubcategoryComponent />
            <SubcategoryComponent />
            <SubcategoryComponent />
            <button className='w-3/4 mx-auto mt-6 h-auto py-2 bg-gradient-to-t from-lightperp to-perp rounded-2xl text-white text-xl font-bold font-hg'>Continue</button> 
         </div>
    </>
  )
}
