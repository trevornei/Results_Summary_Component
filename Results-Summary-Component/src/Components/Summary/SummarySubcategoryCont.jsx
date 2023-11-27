import React from 'react'
import SubcategoryComponent from './SubcategoryComponent'

//images import: Reaction, memory, verbal, visual
import ReactionIcon from '../../assets/images/icon-reaction.svg'
import MemoryIcon from '../../assets/images/icon-memory.svg'
import VerbalIcon from '../../assets/images/icon-verbal.svg'
import VisualIcon from '../../assets/images/icon-visual.svg'

export default function SummarySubcategoryCont() {
  return (
    <> 
        <div className="flex flex-col my-6">
            <SubcategoryComponent image={ReactionIcon} backgroundColor={"bg-red-300/20"} textColor={"text-red-500"} resultValue={"80"} />
            <SubcategoryComponent image={MemoryIcon} backgroundColor={"bg-yellow-300/20"} textColor={"text-yellow-500"} resultValue={"92"} />
            <SubcategoryComponent image={VerbalIcon} backgroundColor={"bg-green-300/20"} textColor={"text-green-500"} resultValue={"61"} />
            <SubcategoryComponent image={VisualIcon} backgroundColor={"bg-blue-300/20"} textColor={"text-blue-500"} resultValue={"73"} />
            <button className='w-full h-auto py-2 mx-auto mt-6 font-bold text-white text-md bg-gradient-to-t from-violet-700 to-indigo-800 rounded-2xl font-hg'>Continue</button> 
         </div>
    </>
  )
}
