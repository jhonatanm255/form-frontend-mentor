import React from "react";
import Header from "../header";
import PlanSelect from "./planSelect";
import ButtonNext from "../buttonNext";
import { useNavigate } from "react-router-dom";
import { useSelectionContext } from "../selectionContext";

function SecondPage() {
  const navigate = useNavigate();
  const { isAnnual, setIsAnnual } = useSelectionContext(); // Llama directamente al hook

  const handleNextStep = () => {
    navigate("/thirdPage");
  };

  const handleBack = () => {
    navigate("/"); // Cambia esta ruta si es necesario
  };

  return (
    <div className="h-[95vh] flex flex-col justify-between">
      <div className="h-screen">
        <div className="relative bg-sidebar-mobile h-[180px] bg-cover bg-center">
          <Header currentPage={2} />
          <PlanSelect
            isAnnual={isAnnual}
            setIsAnnual={setIsAnnual} // Proporcionar la función para cambiar la selección
            className="absolute mt-28"
          />
        </div>
      </div>
      <ButtonNext
        name={"Next Step"}
        onClick={handleNextStep}
        onBack={handleBack}
      />
    </div>
  );
}

export default SecondPage;
