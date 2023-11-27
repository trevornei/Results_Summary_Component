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
            <SubcategoryComponent image={ReactionIcon} backgroundColor={"bg-red-300/20"} textColor={"text-red-500"} resultValue={"80"} categoryName={"Reaction"} />
            <SubcategoryComponent image={MemoryIcon} backgroundColor={"bg-yellow-300/20"} textColor={"text-yellow-500"} resultValue={"92"} categoryName={"Memory"} />
            <SubcategoryComponent image={VerbalIcon} backgroundColor={"bg-green-300/20"} textColor={"text-green-500"} resultValue={"61"} categoryName={"Verbal"} />
            <SubcategoryComponent image={VisualIcon} backgroundColor={"bg-violet-400/20"} textColor={"text-violet-500"} resultValue={"73"} categoryName={"Visual"} />
            <button className='w-full h-auto py-2 mx-auto mt-6 font-bold text-white text-md bg-gradient-to-t from-violet-700 to-indigo-800 rounded-2xl font-hg'>Continue</button> 
         </div>
    </>
  )
}
