import React from "react";

function Header({ currentPage }) {
  return (
    <div>
      <div className="flex justify-center p-8">
        <ul className="flex gap-6">
          <li
            className={`text-lg px-3 py-1 border-1 border rounded-full font-semibold 
              ${
                currentPage === 1
                  ? "bg-primary-pastel-blue text-gray-800"
                  : "text-white"
              }`}
          >
            <a href="#">1</a>
          </li>

          <li
            className={`text-lg px-3 py-1 border-1 border rounded-full font-semibold 
              ${
                currentPage === 2
                  ? "bg-primary-pastel-blue text-gray-800"
                  : "text-white"
              }`}
          >
            <a href="#">2</a>
          </li>

          <li
            className={`text-lg px-3 py-1 border-1 border rounded-full font-semibold 
              ${
                currentPage === 3
                  ? "bg-primary-pastel-blue text-gray-800"
                  : "text-white"
              }`}
          >
            <a href="#">3</a>
          </li>

          <li
            className={`text-lg px-3 py-1 border-1 border rounded-full font-semibold 
              ${
                currentPage === 4
                  ? "bg-primary-pastel-blue text-gray-800"
                  : "text-white"
              }`}
          >
            <a href="#">4</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
