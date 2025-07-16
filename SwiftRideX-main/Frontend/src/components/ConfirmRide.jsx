import React from "react";

const ConfirmRide = ({
  setVehiclePanelOpen,
  setVehicleFound,
  setConfirmRidePanelOpen,
  pickup,
  destination,
  fare,
  vehicleType,
}) => {
  const handleConfirm = () => {
    setVehicleFound(true);
    setConfirmRidePanelOpen(false);
  };

  return (
    <div className="relative px-4 pb-6 pt-10">
      {/* Close Icon */}
      <button
        className="absolute top-2 left-1/2 transform -translate-x-1/2 text-gray-300"
        onClick={() => setVehiclePanelOpen(false)}
      >
        <i className="ri-arrow-down-wide-line text-3xl"></i>
      </button>

      <h3 className="text-2xl font-semibold text-center mb-6">Confirm Your Ride</h3>

      <div className="flex flex-col items-center gap-5">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_715,w_1072/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
          alt="Car"
        />

        <div className="w-full mt-4 space-y-4">
          {/* Pickup Location */}
          <div className="flex items-start gap-4 p-3 border-b">
            <i className="ri-map-pin-user-fill text-xl text-green-600"></i>
            <div>
              <h4 className="text-lg font-medium">23/12</h4>
              <p className="text-sm text-gray-600 -mt-1">{pickup}</p>
            </div>
          </div>

          {/* Destination */}
          <div className="flex items-start gap-4 p-3 border-b">
            <i className="ri-map-pin-2-fill text-xl text-red-500"></i>
            <div>
              <h4 className="text-lg font-medium">45/89</h4>
              <p className="text-sm text-gray-600 -mt-1">{destination} </p>
            </div>
          </div>

          {/* Fare Info */}
          <div className="flex items-start gap-4 p-3">
            <i className="ri-currency-line text-xl text-yellow-500"></i>
            <div>
              <h4 className="text-lg font-medium">
                ₹{fare && vehicleType && fare[vehicleType] !== undefined ? fare[vehicleType] : "-"}
              </h4>
              <p className="text-sm text-black -mt-1">Cash Payment</p>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-all"
        >
          Confirm Ride
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
