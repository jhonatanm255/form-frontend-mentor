import React from 'react'
import Confirmation from './confirmation';

function Finish() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-xl w-[90%] mt-[3%] m-auto p-8">
        <h1 className="text-3xl text-primary-marine-blue font-bold">
          Finishing up
        </h1>
        <p className="text-gray-500 text-base mt-4 mb-8">
          Double-check everything looks OK before confirming.
        </p>
        <Confirmation />
      </div>
    </>
  );
}

export default Finish