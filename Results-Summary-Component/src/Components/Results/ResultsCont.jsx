import React from 'react'
import CircleResult from './CircleResult'

export default function ResultsCont() {
  return (
    <>
        <div className="flex flex-col items-center justify-center w-full h-full p-12 bg-gradient-to-b from-violet-700 to-indigo-800 md:rounded-3xl sm:rounded-b-3xl my-18 mx-18 ">
            <h1 className="mx-auto mb-6 text-xl font-bold text-white/60 font-hg">Your Result</h1>
            <CircleResult />
            <h1 className='mx-auto mt-6 text-3xl font-bold text-white'>Great!</h1>
            <p className="mx-auto mt-6 text-center text-white/60 text-md">Your results exceeded 65% of the people conducting the experiment!</p>
        </div>
    </>
  )
}
