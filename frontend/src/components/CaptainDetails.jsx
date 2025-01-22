import React from "react";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://pbs.twimg.com/media/DcYuLBSVwAAlLSa.jpg"
            alt=""
          />
          <h4 className="text-lg font-medium">Aditya Shah</h4>
        </div>

        <div className="mb-4">
          <h4 className="text-xl font-semibold">Rs. 200.02</h4>
          <p className="text-sm  text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex p-3 bg-gray-50 rounded-xl justify-center gap-4 items-start">
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
  );
};

export default CaptainDetails;
