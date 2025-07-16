import React from "react";
import { Link } from "react-router-dom";
import RideSwiftLogo from "../Images/SwiftRideX.png";
import map from "../Images/map.gif";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => props.setridePopUpPanel(false)}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-3">New Ride for you!</h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg">
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
        <div className=" flex mt-5 w-full items-center justify-between">
        <button
            onClick={() => {
              props.setridePopUpPanel(false);
            }}
            className=" mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg"
          >
            Ignore
          </button>
          <button
            onClick={() => {
              props.setConfimRidePopUpPanel(true);
            }}
            className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg"
          >
            Accept
          </button>
       
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
