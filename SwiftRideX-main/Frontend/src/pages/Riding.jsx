import React from "react";
import map from "../Images/map.gif";
import { Link } from "react-router-dom";


const Riding = () => {
  return (
    <div className="h-screen">
      <Link to="/home" className="fixed  right-1 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img className="h-full w-full  object-cover" src={map} alt="map" />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_715,w_1072/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Subo</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">BR30 AB 0476</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>
        <div className="flex gap-2 justify-between items-center flex-col">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
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
                <h3 className="text-lg font-medium">₹ 143.23</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash Payment</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
