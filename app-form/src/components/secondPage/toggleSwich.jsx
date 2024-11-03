import React from "react";

function ToggleSwitch({ isOn, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className="w-12 h-6 flex items-center rounded-full p-1 cursor-pointer bg-primary-marine-blue"
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ${
          isOn ? "translate-x-5" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
}

export default ToggleSwitch;
