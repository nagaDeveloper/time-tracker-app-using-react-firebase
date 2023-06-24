import React from "react";

const ErrorComponent = ({ error }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-12 w-12 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div>
          <div className="text-xl font-medium text-black">Error</div>
          <p className="text-gray-500">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
