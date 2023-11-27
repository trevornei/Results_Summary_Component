import React from 'react'

export default function CircleResult() {
  return (
    <>
        <div className="flex flex-col items-center justify-center w-48 h-48 rounded-full shadow-xl bg-gradient-to-t from-violet-600 to-indigo-800 ">
            {/*TODO - Outputs:
                        1. Your Score: Variable Outcome
                        2. Out of 100: Constant */}
            <h1 className='text-5xl font-extrabold text-white'>76</h1>
            <h3 className='text-lg font-bold text-white/50'>of 100</h3>
        </div>
    </>
  )
}
