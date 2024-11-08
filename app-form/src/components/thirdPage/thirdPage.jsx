// import React from "react";
// import { useSelectionContext } from "../selectionContext";
// import Header from "../header";
// import Services from "./services";
// import ButtonNext from "../buttonNext";
// import { useNavigate } from "react-router-dom";

// function ThirdPage() {
//   const navigate = useNavigate();
//   const { isAnnual, selectedServices, setSelectedServices } =
//     useSelectionContext();

//   // Define la función handleNextStep
//   const handleNextStep = () => {
//     navigate("/fourthPage");
//   };

//   // Define la función handleBack si es necesaria
//   const handleBack = () => {
//     navigate("/second");
//   };

//   const handleServiceChange = (service) => {
//     setSelectedServices((prevServices) => ({
//       ...prevServices,
//       [service]: !prevServices[service],
//     }));
//   };

  // return (
  //   <div className="h-[95vh] flex flex-col justify-between">
  //     <div className="relative bg-sidebar-mobile h-[180px] bg-cover bg-center">
  //       <Header currentPage={3} />
  //       <Services onChange={handleServiceChange} />{" "}
  //       {/* Si necesitas pasar la función */}
  //     </div>
  //     <ButtonNext
  //       name={"Next Step"}
  //       onClick={handleNextStep}
  //       onBack={handleBack}
  //     />
  //   </div>
  // );
// }

// export default ThirdPage;



import React from "react";
import { useSelectionContext } from "../selectionContext";
import Header from "../header";
import ServiceOptions from "./serviceOptions";
import ButtonNext from "../buttonNext";
import { useNavigate } from "react-router-dom";
import Services from './services'

function ThirdPage() {
  const navigate = useNavigate();
  const { isAnnual, selectedServices, setSelectedServices } =
    useSelectionContext();

  // Función para manejar el siguiente paso
  const handleNextStep = () => {
    navigate("/fourthPage");
  };

  // Función para manejar el retroceso
  const handleBack = () => {
    navigate("/second");
  };

  // Función que maneja el cambio de selección de servicios
  const handleServiceChange = (service, checked) => {
    setSelectedServices((prevServices) => ({
      ...prevServices,
      [service]: checked,
    }));
  };

  return (
    <div className="h-[95vh] flex flex-col justify-between">
      <div className="relative bg-sidebar-mobile h-[180px] bg-cover bg-center">
        <Header currentPage={3} />

        {/* <Services /> */}
        <ServiceOptions
          isAnnual={isAnnual} // Pasamos isAnnual
          selectedServices={selectedServices}
          onServiceChange={handleServiceChange} // Pasamos la función para manejar los cambios
        />
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














