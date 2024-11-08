import React from "react";
import Plan from "./plan";

function PlanSelect({ plan, setPlan }) {
  // Recibimos las props plan y setPlan
  const handleToggle = () => {
    setPlan(plan === "mensual" ? "anual" : "mensual");
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-xl w-[90%] mt-[3%] m-auto p-8">
        <h1 className="text-3xl text-primary-marine-blue font-bold">
          Select your plan
        </h1>
        <p className="text-gray-500 text-base mt-4 mb-8">
          You have the option of monthly or yearly billing.
        </p>
        <Plan plan={plan} setPlan={setPlan} />{" "}
        {/* Pasamos las props al componente Plan */}
      </div>
    </>
  );
}

export default PlanSelect;
