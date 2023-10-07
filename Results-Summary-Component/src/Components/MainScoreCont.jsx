import React from 'react'
import ResultsCont from './Results/ResultsCont'
import SummaryCategoryCont from './Summary/SummaryCategoryCont'

export default function SummaryCont() {
  return (
    <>
        <div className="flex md:flex-row sm:flex sm:flex-col items-center justify-center hover:shadow-lg hover:shadow-lightperp ease-in-out duration-300 delay-100 bg-white w-auto h-auto rounded-2xl">
            <ResultsCont />
            <SummaryCategoryCont />
        </div>
    </>
  )
}
