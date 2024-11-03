import React from "react";
import CardForm from "./cardForm";
import Header from "../header";
import { useNavigate } from "react-router-dom";
import { useSelectionContext } from "../selectionContext"; // Asegúrate de la ruta correcta

function FirstPage() {
  const navigate = useNavigate();
  const { setIsAnnual } = useSelectionContext(); // Obtén la función para establecer el plan

  // Función que maneja el envío del formulario
  const handleFormSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    alert("Form submitted successfully");
    setIsAnnual(formData.isAnnual); // Asegúrate de que formData contenga la propiedad isAnnual
    navigate("/second"); // Navega a la segunda página después de enviar el formulario
  };

  return (
    <div>
      <div className="relative bg-sidebar-mobile h-[180px] bg-cover bg-center">
        <Header currentPage={1} />
        <CardForm onSubmit={handleFormSubmit} className="absolute mt-28" />
      </div>
    </div>
  );
}

export default FirstPage;
