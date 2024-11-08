import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FirstPage from "./components/firstPage/firstPage";
import SecondPage from "./components/secondPage/secondPage";
import ThirdPage from "./components/thirdPage/thirdPage";
import FourthPage from "./components/fourthPage/fourthPage";
import Confirm from "./components/fourthPage/confirm";

function App() {
  const [plan, setPlan] = useState("mensual");

  return (
    <Router>
      <div className="bg-neutral-magnolia min-h-screen">
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route
            path="/second"
            element={<SecondPage plan={plan} setPlan={setPlan} />}
          />{" "}
          {/* Pasamos plan y setPlan como props */}
          <Route path="/thirdPage" element={<ThirdPage plan={plan} />} />{" "}
          {/* Pasamos plan como prop */}
          <Route path="/fourthPage" element={<FourthPage plan={plan} />} />{" "}
          {/* Pasamos plan como prop */}
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
