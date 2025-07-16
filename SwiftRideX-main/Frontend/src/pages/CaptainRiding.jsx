import React, { useRef } from "react";
import { Link } from "react-router-dom";
import RideSwiftLogo from "../Images/SwiftRideX.png";
import map from "../Images/map.gif";
import FinishRide from "../components/FinishRide";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainRiding = () => {
  const [finishRidePanel, setfinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);
  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen reative">
      <div className="fixed  p-4 top-0 items-center justify-between w-screen">
        <img className="w-30" src={RideSwiftLogo} alt="logo" />
        <Link
          to="/home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img className="h-full w-full  object-cover" src={map} alt="map" />
      </div>
      <div
        className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 pt-10"
        onClick={() => setfinishRidePanel(true)}
      >
        <h5
          className="p-1 text-center w-[95%] absolute top-0 "
          onClick={() => {}}
        >
          <i className="text-3xl text-black ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM away</h4>
        <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          {" "}
          Complete Ride
        </button>
      </div>

      <div
        ref={finishRidePanelRef}
        className=" fixed z-10 h-screen bottom-0 translate-y-full bg-white px-3 py-10 pt-12 w-full"
      >
        <FinishRide setfinishRidePanel={setfinishRidePanel}/>
      </div>
    </div>
  );
};

export default CaptainRiding;
