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
            <SubcategoryComponent image={ReactionIcon} />
            <SubcategoryComponent image={MemoryIcon} />
            <SubcategoryComponent image={VerbalIcon} />
            <SubcategoryComponent image={VisualIcon} />
            <button className='w-3/4 mx-auto mt-6 h-auto py-2 bg-gradient-to-t from-indigo-600 to-indigo-800 rounded-2xl text-white text-xl font-bold font-hg'>Continue</button> 
         </div>
    </>
  )
}
