import React from 'react'
import ServiceOptions from './serviceOptions';

function Services() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-xl w-[90%] mt-[3%] m-auto p-8">
        <h1 className="text-3xl text-primary-marine-blue font-bold">
          Pick add-ons
        </h1>
        <p className="text-gray-500 text-base mt-4 mb-8">
          Add-ons help enhance your gaming experience.
        </p>
        <ServiceOptions />
      </div>
    </>
  );
}

export default Services