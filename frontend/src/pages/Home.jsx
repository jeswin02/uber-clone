import React from "react";

const Home = () => {
  return (
    <div className="h-screen relative">
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

      <div className="bg-white absolute top-0 w-full p-5">
        <h4 className="text-3xl font-semibold">Find a trip</h4>
        <form>
          <input className="bg-[#eee] px-8 " type="text" placeholder="Enter pick up location" />
          <input type="text" placeholder="Enter your destination" />
        </form>
      </div>
    </div>
  );
};

export default Home;
