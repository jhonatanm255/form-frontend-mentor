import React from "react";
import { useSelectionContext } from "../selectionContext";
import Header from "../header";
import Services from "./services";
import ButtonNext from "../buttonNext";
import { useNavigate } from "react-router-dom";

function ThirdPage() {
  const navigate = useNavigate();
  const { isAnnual, selectedServices, setSelectedServices } =
    useSelectionContext();

  // Define la función handleNextStep
  const handleNextStep = () => {
    navigate("/fourPage");
  };

  // Define la función handleBack si es necesaria
  const handleBack = () => {
    navigate("/second");
  };

  const handleServiceChange = (service) => {
    setSelectedServices((prevServices) => ({
      ...prevServices,
      [service]: !prevServices[service],
    }));
  };

  return (
    <div className="h-[95vh] flex flex-col justify-between">
      <div className="relative bg-sidebar-mobile h-[180px] bg-cover bg-center">
        <Header currentPage={3} />
        <Services onChange={handleServiceChange} />{" "}
        {/* Si necesitas pasar la función */}
      </div>
      <ButtonNext onClick={handleNextStep} onBack={handleBack} />
    </div>
  );
}

export default ThirdPage;
