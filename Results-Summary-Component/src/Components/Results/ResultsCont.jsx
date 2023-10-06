import React from 'react'
import CircleResult from './CircleResult'

export default function ResultsCont() {
  return (
    <>
        <div className="flex flex-col bg-gradient-to-b from-violet-600 to-violet-800 w-full h-auto md:rounded-bl-none md:rounded-r-xl sm:rounded-b-xl my-18 mx-18 p-12 ">
            <h1 className="text-xl text-white font-bold mx-auto">Your Result</h1>
            <CircleResult />
            <h1 className='text-3xl font-bold text-white mx-auto'>Great!</h1>
        </div>
    </>
  )
}
