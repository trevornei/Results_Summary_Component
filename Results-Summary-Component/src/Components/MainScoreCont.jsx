import React from 'react'
import ResultsCont from './Results/ResultsCont'
import SummaryCategoryCont from './Summary/SummaryCategoryCont'

export default function SummaryCont() {
  return (
    <>
        <div className="flex md:flex-row sm:flex sm:flex-col items-center justify-center shadow-sm shadow-black bg-slate-50 w-auto h-auto rounded-2xl">
            <ResultsCont />
            <SummaryCategoryCont />
        </div>
    </>
  )
}
