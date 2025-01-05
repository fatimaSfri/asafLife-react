import React, { useState } from "react";

const ConfirmationBox = ({ onCheck }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onCheck(newCheckedState);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Terms & Conditions</h2>
          <div className="bg-gray-50 rounded-lg p-4 text-gray-600 text-left h-48 overflow-y-auto">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div
            className={`w-6 h-6 flex items-center justify-center rounded border cursor-pointer transition-colors duration-200 ${
              isChecked
                ? "bg-blue-600 border-blue-600"
                : "border-gray-300 hover:border-blue-500"
            }`}
            onClick={handleCheckboxChange}
            role="checkbox"
            aria-checked={isChecked}
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleCheckboxChange();
              }
            }}
          >
            {isChecked && (
              <span className="text-white text-sm font-bold">✔</span>
            )}
          </div>
          <label
            className="text-gray-700 select-none cursor-pointer"
            onClick={handleCheckboxChange}
          >
            I have read and agree to the terms and conditions
          </label>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationBox;
