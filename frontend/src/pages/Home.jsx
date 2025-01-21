import React from "react";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setpickup] = useState("");
  const [destination, setdestination] = useState("");

  const panelRef = useRef(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const panelCloseRef = useRef(null);
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
          src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584820445-6MHFT7HI6MHUED46VYU4/Two+Maps+-+Color.png"
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
          <LocationSearchPanel />
        </div>
      </div>

      <div className="fixed w-full z-10 bottom-0 bg-white py-6 px-4">
        <h4 className="text-2xl font-semibold mb-3">Ride Options</h4>
        <div className="flex w-full border-black mb-2 rounded-xl border-2 items-center justify-between ">
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"
          />
          <div className=" p-3 w-1/2">
            <h4 className="font-medium text-base">
              UberGo{" "}
              <span>
                <i className="ri-user-3-fill"></i> 4
              </span>{" "}
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs">Affordable, compact rides</p>
          </div>
          <h2 className="text-2xl font-semibold">Rs. 193.20</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
