import React, { useState } from "react";
import Icon1 from "../../assets/images/icon-arcade.svg";
import Icon2 from "../../assets/images/icon-advanced.svg";
import Icon3 from "../../assets/images/icon-pro.svg";
import ToggleSwitch from "./toggleSwich";

function Plan() {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly((prevIsYearly) => !prevIsYearly); // Alterna entre true y false
  };

  return (
    <div className="flex flex-col gap-3">
      <section className="flex gap-4 border rounded-md p-3 hover:border-blue-500 hover:bg-blue-50">
        <img src={Icon1} alt="" />
        <div>
          <h1 className="text-primary-marine-blue text-xl font-bold">Arcade</h1>
          <p className="text-gray-500">{isYearly ? "$90/yr" : "$9/mo"}</p>
          {isYearly && (
            <p className="font-semibold text-primary-marine-blue text-sm">
              2 months Free
            </p>
          )}
        </div>
      </section>

      <section className="flex gap-4 border rounded-md p-3 hover:border-blue-500 hover:bg-blue-50">
        <img src={Icon2} alt="" />
        <div>
          <h1 className="text-primary-marine-blue text-xl font-bold">
            Advance
          </h1>
          <p className="text-gray-500">{isYearly ? "$120/yr" : "$12/mo"}</p>
          {isYearly && (
            <p className="font-semibold text-primary-marine-blue text-sm">
              2 months Free
            </p>
          )}
        </div>
      </section>

      <section className="flex gap-4 border rounded-md p-3 hover:border-blue-500 hover:bg-blue-50">
        <img src={Icon3} alt="" />
        <div>
          <h1 className="text-primary-marine-blue text-xl font-bold">Pro</h1>
          <p className="text-gray-500">{isYearly ? "$150/yr" : "$15/mo"}</p>
          {isYearly && (
            <p className="font-semibold text-primary-marine-blue text-sm">
              2 months Free
            </p>
          )}
        </div>
      </section>

      <div className="flex justify-between px-12 gap-6 bg-blue-50 p-2 rounded-md mt-6">
        <div
          className={`flex items-center ${
            !isYearly
              ? "text-text-primary-marine-blue font-bold"
              : "text-gray-500"
          }`}
        >
          Monthly
        </div>

        <ToggleSwitch isOn={isYearly} onToggle={handleToggle} />

        <div
          className={`flex items-center ${
            isYearly
              ? "text-text-primary-marine-blue font-bold"
              : "text-gray-500"
          }`}
        >
          Yearly
        </div>
      </div>
    </div>
  );
}

export default Plan;
