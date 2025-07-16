import React from "react";

const LocationSearchPanel = ({
  setPanelOpen,
  setVehiclePanelOpen,
  suggestions = [],
  activeField,
  onSuggestionClick,
  loading,
  error,
}) => {
  return (
    <div className="px-5 pt-4 pb-8">
      {/* <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
        Select {activeField === "pickup" ? "Pick-up" : "Destination"}
      </h3> */}

      <div className="max-h-80 overflow-y-auto px-2">
        {loading ? (
          <div className="text-center py-8 text-gray-500">
            Loading suggestions...
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">{error}</div>
        ) : suggestions.length > 0 ? (
          suggestions.map((elem, index) => (
            <div
              key={index}
              onClick={() => onSuggestionClick(elem)}
              className="flex gap-4 border border-gray-200 hover:border-gray-400 p-3 rounded-xl items-center my-2 cursor-pointer transition"
            >
              <div className="bg-gray-200 h-7 w-7 flex items-center justify-center rounded-full">
                <i className="ri-map-pin-fill text-sm text-gray-600" />
              </div>
              <span className="font-medium text-gray-800">
                {elem.description}
              </span>
            </div>
          ))
        ) : (
          <div className="text-gray-400 text-center py-8">
            No suggestions found
          </div>
        )}
      </div>

      {/* <div className="flex justify-end mt-6">
        <button
          onClick={() => {
            setPanelOpen(false);
            setVehiclePanelOpen(false);
          }}
          className="text-sm text-blue-600 hover:underline"
        >
          Cancel
        </button>
      </div> */}
    </div>
  );
};

export default LocationSearchPanel;
