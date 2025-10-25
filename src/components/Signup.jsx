import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/Constents";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      const valid = response.status;

      //the data which is coming from the backend
      //  const data= await response.data;
      //  Dispatch(addUser(data));
      if (valid === 200 || valid === 201) {
        setShowSuccess(true);

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      console.error("ERROR:" + error.message);
    }
  };

  return (
    <div className="bg-blue-100 shadow-2xl flex flex-col justify-center self-center p-20 rounded-xl ">
      <h1 className="text-black font-bold self-center pb-4 text-3xl">Signup</h1>
      {showSuccess && (
        <div role="alert" className="alert alert-success absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>User Successfully Created!</span>
        </div>
      )}

      <label className="label font-bold text-black">First Name</label>
      <input
        type="name"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        className="input textarea-lg bg-gray-400"
        placeholder="First Name"
      />

      <label className="label font-bold text-black">Email</label>
      <input
        type="email"
        value={emailId}
        onChange={(e) => {
          setEmailId(e.target.value);
        }}
        className="input textarea-lg bg-gray-400"
        placeholder="Email"
      />
      <label className="label font-bold text-black">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="input textarea-lg bg-gray-400"
        placeholder="Password"
      />
      <div className="self-center">
        <a className="link link-hover font-bold text-black">Forgot password?</a>
      </div>
      <button
        onClick={handleLogin}
        className="bg-pink-400 p-2 rounded-md cursor-pointer border border-pink-400 hover:border hover:border-pink-800 mt-4 hover:bg-pink-600 hover:text-white"
      >
        SignUp
      </button>

      <div className="self-center mt-5">
        <a className="link link-hover text-black">
          <Link to="/login">Already User? Login</Link>
        </a>
      </div>
    </div>
  );
};

export default Signup;
