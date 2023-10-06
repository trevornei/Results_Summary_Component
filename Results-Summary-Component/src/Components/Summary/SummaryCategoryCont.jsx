import React from 'react'
import SummaryCategoryTitle from './SummaryCategoryTitle'
import SummarySubcategoryCont from './SummarySubcategoryCont'


export default function SummaryCont() {
  return (
    <>
        <div className='flex flex-col border-2 w-full h-auto md:rounded-bl-none md:rounded-r-xl sm:rounded-b-xl my-18 mx-18 p-12 '>
          <SummaryCategoryTitle />
          <SummarySubcategoryCont />
        </div>
    </>
  )
}
