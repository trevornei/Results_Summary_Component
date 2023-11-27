import React from 'react'
import ResultsCont from './Results/ResultsCont'
import SummaryCategoryCont from './Summary/SummaryCategoryCont'

export default function SummaryCont() {
  return (
    <>
        <div className="flex flex-col items-center justify-center w-auto h-auto duration-300 ease-in-out delay-100 bg-white md:flex-row sm:flex-col xs:flex-col rounded-3xl hover:shadow-lg hover:shadow-violet-600/30 ">
            <ResultsCont />
            <SummaryCategoryCont />
        </div>
    </>
  )
}
