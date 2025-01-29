import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserSignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const { setUser } = useContext(UserDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    // Clear the input fields
    setfirstname("");
    setlastname("");
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
              className="bg-gray-200 px-4 py-2  border text-base rounded placeholder:text-sm mb-6 w-1/2"
              required
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
              type="text"
              placeholder="first name"
            />
            <input
              className="bg-gray-200 px-4 py-2  border text-base rounded placeholder:text-sm mb-6 w-1/2"
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

          <button className="px-4 py-2 w-full border text-lg rounded placeholder:text-base mb-3 bg-black text-white font-semibold">
            Create Account
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
