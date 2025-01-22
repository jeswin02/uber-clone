import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setvehiclePanelOpen(false)}
        className="p-3 w-full text-center absolute top-0"
      >
        <i className="text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-3">Ride Options</h3>
      <div
        onClick={() => {
          props.setconfirmRidePanel(true);
        }}
        className="flex w-full active:border-black bg-white-100 mb-2 rounded-xl border-2 items-center justify-between "
      >
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
        <h2 className="text-lg p-2 font-semibold">Rs. 193.20</h2>
      </div>
      <div
        onClick={() => {
          props.setconfirmRidePanel(true);
        }}
        className="flex w-full active:border-black bg-white-100 mb-2 rounded-xl border-2 items-center justify-between "
      >
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
        />
        <div className=" p-3 w-1/2">
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i> 1
            </span>{" "}
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs">Affordable, motorcycle ride</p>
        </div>
        <h2 className="text-lg p-2 font-semibold">Rs. 65.56</h2>
      </div>
      <div
        onClick={() => {
          props.setconfirmRidePanel(true);
        }}
        className="flex w-full active:border-black bg-white-100 mb-2 rounded-xl border-2 items-center justify-between "
      >
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
        />
        <div className=" p-3 w-1/2">
          <h4 className="font-medium text-base">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i> 3
            </span>{" "}
          </h4>
          <h5 className="font-medium text-sm">4 mins away</h5>
          <p className="font-normal text-xs">Affordable, auto rides</p>
        </div>
        <h2 className="p-2 text-lg font-semibold">Rs. 118.98</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
