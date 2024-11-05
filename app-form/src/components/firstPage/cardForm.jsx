import React, { useRef } from "react";
import Form from "./form";
import ButtonNext from "../buttonNext";

function CardForm({ onSubmit }) {
  const formRef = useRef(); // Crear una referencia para el formulario

  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.handleSubmit(); // Llama al método handleSubmit del formulario
    }
  };

  return (
    <>
      <div className="h-[82vh] flex flex-col justify-between">
        <div className="bg-white rounded-lg shadow-xl w-[90%] mt-[3%] m-auto p-8">
          <h1 className="text-3xl text-primary-marine-blue font-bold">
            Personal Info
          </h1>
          <p className="text-gray-500 text-base mt-4 mb-8">
            Please provide your name, email address, and phone number
          </p>
          <Form ref={formRef} onSubmit={onSubmit} />{" "}
          {/* Pasar la referencia al formulario */}
        </div>

        <ButtonNext name={"Next Step"} onClick={handleButtonClick} />
      </div>
    </>
  );
}

export default CardForm;
