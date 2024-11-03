import React from "react";

function ServiceOptions({ isAnnual }) {
  const prices = {
    monthly: { onlineService: 1, storage: 2, profile: 2 },
    annual: { onlineService: 10, storage: 20, profile: 20 }, // precios anuales
  };

  // Dependiendo de isAnnual, seleccionamos los precios correctos
  const selectedPrices = isAnnual ? prices.annual : prices.monthly;

  return (
    <div>
      <section className="flex items-center justify-between border p-3 rounded-md hover:bg-blue-50 hover:border-primary-purplish-blue mb-3">
        <div className="flex gap-3">
          <input type="checkbox" name="select" id="select" />
          <div>
            <h2 className="text-lg font-bold text-primary-marine-blue">
              Online service
            </h2>
            <p className="text-gray-500 text-sm">Access to multiplayer games</p>
          </div>
        </div>
        <p className="text-primary-purplish-blue">
          +${selectedPrices.onlineService}/{isAnnual ? "yr" : "mo"}
        </p>
      </section>

      <section className="flex items-center justify-between border p-3 rounded-md hover:bg-blue-50 hover:border-primary-purplish-blue mb-3">
        <div className="flex gap-3">
          <input type="checkbox" name="select" id="select" />
          <div>
            <h2 className="text-lg font-bold text-primary-marine-blue">
              Larger storage
            </h2>
            <p className="text-gray-500 text-sm">Extra 1TB of cloud save</p>
          </div>
        </div>
        <p className="text-primary-purplish-blue">
          +${selectedPrices.storage}/{isAnnual ? "yr" : "mo"}
        </p>
      </section>

      <section className="flex items-center justify-between border p-3 rounded-md hover:bg-blue-50 hover:border-primary-purplish-blue mb-3">
        <div className="flex gap-3">
          <input type="checkbox" name="select" id="select" />
          <div>
            <h2 className="text-lg font-bold text-primary-marine-blue">
              Customizable profile
            </h2>
            <p className="text-gray-500 text-sm">
              Custom theme on your profile
            </p>
          </div>
        </div>
        <p className="text-primary-purplish-blue">
          +${selectedPrices.profile}/{isAnnual ? "yr" : "mo"}
        </p>
      </section>
    </div>
  );
}

export default ServiceOptions;