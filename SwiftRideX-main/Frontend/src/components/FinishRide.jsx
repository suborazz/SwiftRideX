import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => props.setFinishRidePanel(false)}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-3">
        Finsh this Ride
      </h3>
      <div className="flex  mt-4 items-center justify-between p-3 border-2 border-yellow-400 rounded-lg">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 w-12 rounded-full object-cover  "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdbcit8sy3LV4h77d-YiU1TxqyaE3dOHH-g&s"
          />
          <h2 className="text-lg font-medium">Sweety</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2KM</h5>
      </div>
      <div className="flex gap-2 justify-between items-center flex-col">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-1">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">23/12</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Garden Colony, Kharar
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-1">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">23/12</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Garden Colony, Kharar
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹143.23</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Payment</p>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full">
          <Link
            to={"/captain-home"}
            className="w-full flex text-lg justify-center mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg"
          >
            Finish Ride
          </Link>
          <p className="mt-10 text-xs">Click on finish ride button if you have completed the payment</p>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
