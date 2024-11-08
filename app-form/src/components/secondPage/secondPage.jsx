import React from "react";
import Header from "../header";
import PlanSelect from "./planSelect";
import ButtonNext from "../buttonNext";
import { useNavigate } from "react-router-dom";
import { useSelectionContext } from "../selectionContext";

function SecondPage() {
  const navigate = useNavigate();
  const { isAnnual, setIsAnnual } = useSelectionContext();

  const handleNextStep = () => {
    navigate("/thirdPage");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="h-[95vh] flex flex-col justify-between">
      <div className="h-screen">
        <div className="relative bg-sidebar-mobile h-[180px] bg-cover bg-center">
          <Header currentPage={2} />
          <PlanSelect
            isAnnual={isAnnual}
            setIsAnnual={setIsAnnual} // Pasamos el estado y la función para cambiarlo
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
