import React from "react";

const LocationSearchPanel = (props) => {
  console.log(props);
  // sample array for location
  const locations = [
    "House no. 1031, Phase 10, Mohali",
    "House no. 1032, Phase 11, Mohali",
    "House no. 1033, Phase 12, Mohali",
    "House no. 1034, Phase 13, Mohali",
  ];

  return (
    <div>
      {locations.map((elem, idx) => {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setvehiclePanelOpen(true);
              props.setPanelOpen(false);
            }}
            className="flex border-2 border-gray-50 active:border-black  items-center justify-start gap-4 my-4 p-3 "
          >
            <h2 className="bg-[#eee] h-6 flex items-center justify-center w-12 rounded-full ">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
