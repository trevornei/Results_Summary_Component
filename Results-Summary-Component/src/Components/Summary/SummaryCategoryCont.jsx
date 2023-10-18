import React from 'react'
import SummaryCategoryTitle from './SummaryCategoryTitle'
import SummarySubcategoryCont from './SummarySubcategoryCont'


export default function SummaryCont() {
  return (
    <>
        <div className='flex flex-col  w-full h-auto my-18 mx-18 p-12 '>
          <SummaryCategoryTitle />
          <SummarySubcategoryCont />
        </div>
    </>
  )
}
