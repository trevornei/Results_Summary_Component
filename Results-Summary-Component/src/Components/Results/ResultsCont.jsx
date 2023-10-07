import React from 'react'
import CircleResult from './CircleResult'

export default function ResultsCont() {
  return (
    <>
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-perp to-lightperp w-full h-full md:rounded-bl-none md:rounded-r-xl sm:rounded-b-xl my-18 mx-18 p-12 ">
            <h1 className="text-xl text-white font-bold mx-auto mb-6">Your Result</h1>
            <CircleResult />
            <h1 className='text-3xl font-bold text-white mt-6 mx-auto'>Great!</h1>
            <p className="text-md text-white text-center mt-6 mx-auto">Your score improved by 10% since your last attempt</p>
        </div>
    </>
  )
}
