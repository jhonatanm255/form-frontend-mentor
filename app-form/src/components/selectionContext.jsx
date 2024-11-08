import React, { createContext, useContext, useState } from "react";

const SelectionContext = createContext();
export const useSelectionContext = () => {
  return useContext(SelectionContext);
};

export const SelectionProvider = ({ children }) => {
  // Asegúrate de que se llame 'SelectionProvider'
  const [selectedServices, setSelectedServices] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <SelectionContext.Provider
      value={{ selectedServices, setSelectedServices, isAnnual, setIsAnnual }}
    >
      {children}
    </SelectionContext.Provider>
  );
};
