import React from 'react';
import { useNavigate } from "react-router-dom";
import ButtonNext from '../buttonNext';
import Header from '../header';
import Finish from './finish';

function FourthPage() {
    const navigate = useNavigate();

    const handleBack = () => {
      navigate("/thirdPage");
    };

    const handleNextStep = () => {
      navigate("/confirm");
    };
  return (
    <>
      <div className="h-[95vh] flex flex-col justify-between">
        <div className="relative bg-sidebar-mobile h-[180px] bg-cover bg-center">
          <Header currentPage={4} />
          <Finish />
        </div>
        <ButtonNext
          name={"Confirm"}
          onClick={handleNextStep}
          onBack={handleBack}
        />
      </div>
    </>
  );
}

export default FourthPage;