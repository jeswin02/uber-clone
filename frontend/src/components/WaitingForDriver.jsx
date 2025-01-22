import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      {" "}
      <div>
        <h5
          onClick={() => props.WaitingForDriver(false)}
          className="p-1 w-[93%] text-center absolute top-0"
        >
          <i className="text-gray-200 text-3xl ri-arrow-down-wide-fill"></i>
        </h5>

        <div className="flex items-center justify-between ">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"
          />{" "}
          <div className="text-right">
            <h2 className="text-lg font-medium ">Jeswin</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">HR29 AX 3977</h4>
            <p className="text-sm  text-gray">Bajaj Pulsar 125</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center">
          <div className="w-full mp-5">
            <div className="flex items-center gap-5  border-b-2 p-3">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">Phase 10, Mohali</p>
              </div>
            </div>
            <div className="flex items-center gap-5 border-b-2 p-3">
              <i className="text-lg ri-map-pin-5-fill"></i>{" "}
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">Phase 10, Mohali</p>
              </div>
            </div>
            <div className="flex items-center gap-5 border-b-2 p-3">
              <i className="text-lg ri-currency-line"></i>{" "}
              <div>
                <h3 className="text-lg font-medium">Rs. 193.20</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash, Cash</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
