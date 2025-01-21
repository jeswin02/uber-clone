import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const {  setCaptain } = useContext(CaptainDataContext);

  const [vehicleCapacity, setvehicleCapacity] = useState("");
  const [vehiclePlate, setvehiclePlate] = useState("");
  const [vehicleColor, setvehicleColor] = useState("");
  const [vehicleType, setvehicleType] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        capacity: vehicleCapacity,
        plate: vehiclePlate,
        color: vehicleColor,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    // Clear the input fields
    setfirstname("");
    setlastname("");
    setemail("");
    setpassword("");
    setvehicleCapacity("");
    setvehiclePlate("");
    setvehicleType("");
    setvehicleColor("");
  };

  return (
    <div className="p-5 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-10"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="uber-logo"
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">Captain's name</h3>
          <div className="flex gap-3">
            <input
              className="bg-gray-200 px-4 py-2 w-full border text-base rounded placeholder:text-sm mb-6 w-1/2"
              required
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
              type="text"
              placeholder="first name"
            />
            <input
              className="bg-gray-200 px-4 py-2 w-full border text-base rounded placeholder:text-sm mb-6 w-1/2"
              required
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
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

          <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>
          <div className="flex gap-4">
            <input
              className="bg-gray-200 px-4 py-2 w-1/2 border text-base rounded placeholder:text-sm mb-6 "
              required
              value={vehicleCapacity}
              onChange={(e) => setvehicleCapacity(e.target.value)}
              type="text"
              placeholder="Vehicle Capacity"
            />
            <input
              className="bg-gray-200 px-4 py-2 w-1/2 border text-base rounded placeholder:text-sm mb-6"
              required
              value={vehiclePlate}
              onChange={(e) => setvehiclePlate(e.target.value)}
              type="text"
              placeholder="Vehicle Plate"
            />
          </div>
          <div className="flex gap-4">
            <input
              className="bg-gray-200 px-4 py-2 w-1/2 border text-base rounded placeholder:text-sm mb-6"
              required
              value={vehicleColor}
              onChange={(e) => setvehicleColor(e.target.value)}
              type="text"
              placeholder="Vehicle Color"
            />
            <select
              required
              value={vehicleType}
              onChange={(e) => setvehicleType(e.target.value)}
              className="bg-gray-200 px-4 py-2 w-1/2 border text-base rounded placeholder:text-sm mb-6 "
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="moto">Moto</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <button className="px-4 py-2 w-full border text-base rounded placeholder:text-base mb-3 bg-black text-white font-semibold">
            Create Captain Account
          </button>

          <p className="text-center mb-4">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-600">
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

export default CaptainSignup;
