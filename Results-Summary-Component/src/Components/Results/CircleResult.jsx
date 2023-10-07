import React from 'react'

export default function CircleResult() {
  return (
    <>
        <div className="flex flex-col items-center justify-center w-32 h-32 rounded-full bg-gradient-to-t from-perp to-lightperp">
            {/*TODO - Outputs:
                        1. Your Score: Variable Outcome
                        2. Out of 100: Constant */}
            <h1 className='text-3xl font-bold text-white'>76</h1>
            <h1 className='text-lg text-white'>Out of 100</h1>
        </div>
    </>
  )
}
