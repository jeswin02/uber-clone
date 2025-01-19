import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-bottom bg-[url(https://img-cdn.pixlr.com/image-generator/history/678d1f4de16f949e0ad8f209/9043e1e7-00a2-4ce5-a1b4-ae579349595b/preview.webp)] h-screen pt-8 w-full flex flex-col justify-between bg-red-400">
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber-logo"
        />
        <div className="bg-white py-5 px-4 pb-7">
          <h2 className="text-3xl font-bold">Get started with Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
