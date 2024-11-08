import React from 'react'
import ServiceOptions from './serviceOptions';
import { useSelectionContext } from "../selectionContext";

function Services() {
  const { isAnnual, selectedServices, setSelectedServices } =
    useSelectionContext();

    const handleServiceChange = (service, checked) => {
      setSelectedServices((prevServices) => ({
        ...prevServices,
        [service]: checked,
      }));
    };
    
  return (
    <>
      <div className="bg-white rounded-lg shadow-xl w-[90%] mt-[3%] m-auto p-8">
        <h1 className="text-3xl text-primary-marine-blue font-bold">
          Pick add-ons
        </h1>
        <p className="text-gray-500 text-base mt-4 mb-8">
          Add-ons help enhance your gaming experience.
        </p>
        <ServiceOptions
          isAnnual={isAnnual} // Pasamos isAnnual
          selectedServices={selectedServices}
          onServiceChange={handleServiceChange} // Pasamos la función para manejar los cambios
        />
      </div>
    </>
  );
}

export default Services