import React, { useContext, useRef, useState } from "react";
import { CaptainDataContext } from "../Context/CaptainContext";
import map from "../Images/map.gif";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import RideSwiftLogo from "../Images/SwiftRideX.png";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import ConfimRidePopup from "../components/ConfimRidePopup";

const CaptainHome = () => {
  const { captain } = useContext(CaptainDataContext);
  const ridePopUpPanelRef = useRef(null);
  const confimRidePopUpPanelRef = useRef(null);

  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const [confimRidePopUpPanel, setConfimRidePopUpPanel] = useState(false);

  useGSAP(
    function () {
      if (setRidePopUpPanel) {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [setRidePopUpPanel]
  );

  useGSAP(
    function () {
      if (confimRidePopUpPanel) {
        gsap.to(confimRidePopUpPanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(confimRidePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confimRidePopUpPanel]
  );

  return (
    <div className="h-screen">
      <div className="fixed  p-4 top-0 items-center justify-between w-screen">
        <img className="w-30" src={RideSwiftLogo} alt="logo" />
        <Link
          to="/home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img className="h-full w-full  object-cover" src={map} alt="map" />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopUpPanelRef}
        className=" fixed z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12 w-full"
      >
        <RidePopUp
          setRidePopUpPanel={setRidePopUpPanel}
          setConfimRidePopUpPanel={setConfimRidePopUpPanel}
        />
      </div>
      <div
        ref={confimRidePopUpPanelRef}
        className=" fixed z-10 h-screen bottom-0 translate-y-full bg-white px-3 py-10 pt-12 w-full"
      >
        <ConfimRidePopup
          setConfimRidePopUpPanel={setConfimRidePopUpPanel}
          setRidePopUpPanel={setRidePopUpPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
