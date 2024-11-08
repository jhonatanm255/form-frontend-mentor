import React, { createContext, useContext, useState } from "react";

const SelectionContext = createContext();
export function SelectionProvider({ children }) {
  const [isAnnual, setIsAnnual] = useState(false); // Estado para la modalidad anual
  const [selectedPlan, setSelectedPlan] = useState(null); // Estado para el plan seleccionado
  const [selectedServices, setSelectedServices] = useState({}); // Estado para servicios seleccionados

  return (
    <SelectionContext.Provider
      value={{
        isAnnual,
        setIsAnnual,
        selectedPlan,
        setSelectedPlan,
        selectedServices,
        setSelectedServices,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelectionContext() {
  return useContext(SelectionContext);
}

