import React from "react";
import { useSelectionContext } from "../selectionContext";

function Finish() {
  const { isAnnual, selectedPlan, selectedServices } = useSelectionContext();

  // Configuración de precios para los servicios adicionales
  const prices = {
    monthly: { onlineService: 1, largerStorage: 2, customizableProfile: 2 },
    annual: { onlineService: 10, largerStorage: 20, customizableProfile: 20 },
  };
  const selectedPrices = isAnnual ? prices.annual : prices.monthly;

  // Calcular el total, sumando el precio del plan y los servicios seleccionados
  const total = Object.keys(selectedServices).reduce((acc, service) => {
    if (selectedServices[service]) {
      return acc + selectedPrices[service];
    }
    return acc;
  }, selectedPlan.price); // Incluye el precio del plan inicial

  return (
    <>
      <div className="bg-blue-50 rounded-xl p-4">
        <section className="flex justify-between">
          <div>
            <p className="text-lg font-semibold text-primary-marine-blue">
              {selectedPlan.name} ({isAnnual ? "Yearly" : "Monthly"})
            </p>
            <p className="text-gray-400 underline cursor-pointer">Change</p>
          </div>
          <p className="text-lg font-bold text-primary-marine-blue flex items-center">
            ${selectedPlan.price}/{isAnnual ? "yr" : "mo"}
          </p>
        </section>
        <hr className="mt-2" />

        {/* Servicios adicionales seleccionados */}
        {Object.keys(selectedServices).map(
          (service) =>
            selectedServices[service] && (
              <section key={service} className="mt-4">
                <div className="flex justify-between">
                  <p className="text-gray-400">
                    {service.replace(/([A-Z])/g, " $1")}
                  </p>
                  <p className="text-primary-marine-blue font-semibold">
                    +${selectedPrices[service]}/{isAnnual ? "yr" : "mo"}
                  </p>
                </div>
              </section>
            )
        )}
      </div>

      {/* Total */}
      <section className="mt-4 px-4">
        <div className="flex justify-between">
          <p className="text-gray-400">
            Total (per {isAnnual ? "year" : "month"})
          </p>
          <p className="text-primary-purplish-blue text-lg flex items-center font-bold">
            +${total}/{isAnnual ? "yr" : "mo"}
          </p>
        </div>
      </section>
    </>
  );
}

export default Finish;
