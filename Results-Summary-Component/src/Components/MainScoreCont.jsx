import React from 'react'
import ResultsCont from './Results/ResultsCont'
import SummaryResultsCont from './Summary/SummaryResultsCont'

export default function SummaryCont() {
  return (
    <>
        <div className="flex flex-col items-center justify-center bg-slate-50 w-auto h-auto rounded-2xl p-12">
            <ResultsCont />
            <SummaryResultsCont />
        </div>
    </>
  )
}
