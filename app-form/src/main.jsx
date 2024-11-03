import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SelectionProvider } from "./components/selectionContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SelectionProvider>
      <App />
    </SelectionProvider>
  </StrictMode>
);
