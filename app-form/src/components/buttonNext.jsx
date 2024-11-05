import React from 'react'

function ButtonNext({ onClick, onBack, name }) {
  return (
    <>
      <div className="bg-white p-6 flex justify-between">
        <button
          onClick={onBack}
          className="font-semibold text-gray-400 py-2 px-4 rounded"
        >
          Go Back
        </button>
        <button
          onClick={onClick}
          className="bg-primary-marine-blue font-semibold text-gray-200 py-2 px-4 rounded"
        >
          {name}
        </button>
      </div>
    </>
  );
}

export default ButtonNext;