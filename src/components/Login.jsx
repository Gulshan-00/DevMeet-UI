import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [emailId, setEmailId] = useState("rohit@gmail.com");
  const [password, setPassword] = useState("Rohit@123");
  const Dispatch=useDispatch(); 

  const navigate=useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
    

       //the data which is coming from the backend
       const data= await response.data;
       console.log(data);
       Dispatch(addUser(data));

     navigate('/feed');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-amber-300 card w-full max-w-sm shrink-0 shadow-2xl flex justify-center self-center">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4" onClick={handleLogin}>
            Login
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
