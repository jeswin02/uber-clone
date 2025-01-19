import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userData, setuserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setuserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });

    // Clear the input fields
    setfirstName("");
    setlastName("");
    setemail("");
    setpassword("");
  };

  return (
    <div className="p-5 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber-logo"
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-3">
            <input
              className="bg-gray-200 px-4 py-2 w-full border text-base rounded placeholder:text-sm mb-6 w-1/2"
              required
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              type="text"
              placeholder="first name"
            />
            <input
              className="bg-gray-200 px-4 py-2 w-full border text-base rounded placeholder:text-sm mb-6 w-1/2"
              required
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              type="text"
              placeholder="last name"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-gray-200 px-4 py-2 w-full border text-base rounded placeholder:text-sm mb-6"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-gray-200 px-4 py-2 w-full border text-base rounded placeholder:text-sm mb-6"
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="password"
          />

          <button className="px-4 py-2 w-full border text-lg rounded placeholder:text-base mb-3 bg-black text-white font-semibold">
            Sign up
          </button>

          <p className="text-center mb-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Log in
            </Link>
          </p>
        </form>
      </div>

      <div>
        {" "}
        <p className="text-left text-xs text-gray-500 leading-tight">
          By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
