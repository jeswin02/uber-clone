import React from "react";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setpickup] = useState("");
  const [destination, setdestination] = useState("");

  const panelRef = useRef(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const panelCloseRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const [vehiclePanelOpen, setvehiclePanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const confirmPanelRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const [confirmRidePanel, setconfirmRidePanel] = useState(false);
  const [vehicleFound, setvehicleFound] = useState(false);
  const [waitingForDriver, setwaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
          // opacity:1
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
          // opacity:0
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanelOpen]);

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className=" w-16 absolute left-5 top-5 "
        src="https://brandeps.com/logo-download/U/Uber-logo-02.png"
      />

      <div className="h-screen w-screen">
        {/* Image for temporary use */}
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] bg-white p-5">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 top-6 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setpickup(e.target.value)}
              className="bg-[#eee] px-8 py-2  text-lg rounded-lg w-full mb-3 mt-5"
              type="text"
              placeholder="Add pick up location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setdestination(e.target.value)}
              className="bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mb-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white h-0">
          {" "}
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setvehiclePanelOpen={setvehiclePanelOpen}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed translate-y-full w-full z-10 bottom-0 bg-white py-6 px-3 pt-12"
      >
        <VehiclePanel
          setvehiclePanelOpen={setvehiclePanelOpen}
          setconfirmRidePanel={setconfirmRidePanel}
        />
      </div>

      <div
        ref={confirmPanelRef}
        className="fixed translate-y-full w-full z-10 bottom-0 bg-white py-6 px-3 pt-12"
      >
        <ConfirmRide
          setconfirmRidePanel={setconfirmRidePanel}
          setvehicleFound={setvehicleFound}
        />
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed translate-y-full w-full z-10 bottom-0 bg-white py-6 px-3 pt-12"
      >
        <LookingForDriver setvehicleFound={setvehicleFound} />
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed  w-full z-10 bottom-0 bg-white py-6 px-3 pt-12"
      >
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
