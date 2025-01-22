import React from "react";
import { Link } from "react-router-dom";

const CaptainHome = () => {
  return (
    <div className="h-screen">
      <div className="fixed p-4 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16 "
          src="https://brandeps.com/logo-download/U/Uber-logo-02.png"
        />
        <Link
          to="/home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="h1/2 p-4">
        <div>
          <div>
            <img src="" alt="" />
            <h4>Jeswin Mathew</h4>
          </div>

          <div>
            <h4>Rs. 200.02</h4>
            <p>Earned</p>
          </div>

          <div>
            <div className="text-center ">
              <i className="text-2xl font-thin ri-time-line"></i>
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
            <div className="text-center ">
              <i className="text-2xl font-thin ri-speed-up-line"></i>
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
            <div className="text-center ">
              <i className="text-2xl font-thin ri-booklet-line"></i>
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
