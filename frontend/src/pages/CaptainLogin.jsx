import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [captainData, setcaptainData] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    setcaptainData({ email: email, password: password });

    // Clear the input fields
    setemail("");
    setpassword("");
  };

  return (
    <div className="p-5 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-20 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="uber-logo"
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-gray-200 px-4 py-2 w-full border text-lg rounded placeholder:text-base mb-7"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-gray-200 px-4 py-2 w-full border text-lg rounded placeholder:text-base mb-7"
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="password"
          />

          <button className="px-4 py-2 w-full border text-lg rounded placeholder:text-base mb-3 bg-black text-white font-semibold">
            Login
          </button>

          <p className="text-center">
            Join a fleet?{" "}
            <Link to="/captain-signup" className="text-blue-600">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          to="/login"
          className="flex items-center justify-center px-4 py-2 w-full border text-lg rounded placeholder:text-base mb-7 bg-[#d5622d] text-white font-semibold"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
