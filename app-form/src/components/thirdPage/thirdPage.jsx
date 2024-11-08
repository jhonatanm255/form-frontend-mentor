import React from "react";
import Header from "../header";
import ButtonNext from "../buttonNext";
import { useNavigate } from "react-router-dom";
import Services from './services'

function ThirdPage() {
  const navigate = useNavigate();
  
  const handleNextStep = () => {
    navigate("/fourthPage");
  };

  const handleBack = () => {
    navigate("/second");
  };
  

  return (
    <div className="h-[95vh] flex flex-col justify-between">
      <div className="relative bg-sidebar-mobile h-[180px] bg-cover bg-center">
        <Header currentPage={3} />
        <Services />
      </div>
      <ButtonNext
        name={"Next Step"}
        onClick={handleNextStep}
        onBack={handleBack}
      />
    </div>
  );
}

export default ThirdPage;














