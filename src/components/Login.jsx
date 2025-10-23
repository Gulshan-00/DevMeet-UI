import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/Constents";
import { Link } from "react-router";

const Login = () => {
  const [emailId, setEmailId] = useState("gulshan@gmail.com");
  const [password, setPassword] = useState("Gulshan@123");
  const Dispatch=useDispatch(); 

  const navigate=useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        BASE_URL +"/login",
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
       Dispatch(addUser(data));

     navigate('/feed');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-blue-400 shadow-2xl flex flex-col justify-center self-center p-20 rounded-xl ">
  
          <label className="label font-bold text-black">Email</label>
          <input
            type="email"
            className="input px-10"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            placeholder="Email"
          />
          <label className="label font-bold text-black">Password</label>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div className="self-center">
            <a className="link link-hover font-bold text-black">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4 hover:bg-blue-400 hover:text-blue-950" onClick={handleLogin}>
            Login
          </button>

          <div className="self-center mt-5">
            <a className="link link-hover text-black">
            <Link to="/signup">New User? SignUp</Link>
            </a>
          </div>
    </div>
  );
};

export default Login;
