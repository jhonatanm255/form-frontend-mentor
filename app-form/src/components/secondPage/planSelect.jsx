import React from 'react';
import ButtonNext from '../buttonNext';
import Plan from './plan';

function PlanSelect() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-xl w-[90%] mt-[3%] m-auto p-8">
        <h1 className="text-3xl text-primary-marine-blue font-bold">
          Select your plan
        </h1>
        <p className="text-gray-500 text-base mt-4 mb-8">
          You have the option of monthly or yearly billing.
        </p>
        <Plan />
      </div>

      {/* <ButtonNext onClick={handleButtonClick} /> */}
    </>
  );
}

export default PlanSelect