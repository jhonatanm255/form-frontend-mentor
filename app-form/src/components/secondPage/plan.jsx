import Icon1 from "../../assets/images/icon-arcade.svg";
import Icon2 from "../../assets/images/icon-advanced.svg";
import Icon3 from "../../assets/images/icon-pro.svg";
import ToggleSwitch from "./toggleSwich";
import { useSelectionContext } from "../selectionContext";

function Plan() {
  const { isAnnual, setIsAnnual, setSelectedPlan } = useSelectionContext();

  const handleToggle = () => {
    setIsAnnual(!isAnnual); // Alterna entre anual y mensual
  };

  // Función para seleccionar el plan y actualizar el contexto
  const selectPlan = (planName, monthlyPrice, annualPrice) => {
    const price = isAnnual ? annualPrice : monthlyPrice;
    setSelectedPlan({ name: planName, price });
  };

  return (
    <div className="flex flex-col gap-3">
      <section
        onClick={() => selectPlan("Arcade", 9, 90)}
        className="flex gap-4 border rounded-md p-3 hover:border-blue-500 hover:bg-blue-50 cursor-pointer"
      >
        <img src={Icon1} alt="Arcade Icon" />
        <div>
          <h1 className="text-primary-marine-blue text-xl font-bold">Arcade</h1>
          <p className="text-gray-500">{isAnnual ? "$90/yr" : "$9/mo"}</p>
          {isAnnual && (
            <p className="font-semibold text-primary-marine-blue text-sm">
              2 months Free
            </p>
          )}
        </div>
      </section>

      <section
        onClick={() => selectPlan("Advance", 12, 120)}
        className="flex gap-4 border rounded-md p-3 hover:border-blue-500 hover:bg-blue-50 cursor-pointer"
      >
        <img src={Icon2} alt="Advanced Icon" />
        <div>
          <h1 className="text-primary-marine-blue text-xl font-bold">
            Advance
          </h1>
          <p className="text-gray-500">{isAnnual ? "$120/yr" : "$12/mo"}</p>
          {isAnnual && (
            <p className="font-semibold text-primary-marine-blue text-sm">
              2 months Free
            </p>
          )}
        </div>
      </section>

      <section
        onClick={() => selectPlan("Pro", 15, 150)}
        className="flex gap-4 border rounded-md p-3 hover:border-blue-500 hover:bg-blue-50 cursor-pointer"
      >
        <img src={Icon3} alt="Pro Icon" />
        <div>
          <h1 className="text-primary-marine-blue text-xl font-bold">Pro</h1>
          <p className="text-gray-500">{isAnnual ? "$150/yr" : "$15/mo"}</p>
          {isAnnual && (
            <p className="font-semibold text-primary-marine-blue text-sm">
              2 months Free
            </p>
          )}
        </div>
      </section>

      <div className="flex justify-between px-12 gap-6 bg-blue-50 p-2 rounded-md mt-6">
        <div
          className={`flex items-center ${
            !isAnnual ? "text-primary-marine-blue font-bold" : "text-gray-500"
          }`}
        >
          Monthly
        </div>

        <ToggleSwitch isOn={isAnnual} onToggle={handleToggle} />

        <div
          className={`flex items-center ${
            isAnnual ? "text-primary-marine-blue font-bold" : "text-gray-500"
          }`}
        >
          Yearly
        </div>
      </div>
    </div>
  );
}

export default Plan;
