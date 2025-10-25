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
          withCredentials: true,                //because of this withCredential the cookie is stored in the browser 
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
    <div className="bg-blue-100 shadow-2xl flex flex-col justify-center self-center p-20 rounded-xl ">
             <h1 className="text-black font-bold self-center pb-4 text-3xl">Login</h1>
          <label className="label font-bold text-black text-lg">Email</label>
          <input
            type="email"
            className="input textarea-lg bg-gray-400"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            placeholder="Email"
          />
          <label className="label font-bold text-black text-lg">Password</label>
          <input
            type="password "
            className="input textarea-lg bg-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div className="self-center">
            <a className="link link-hover font-bold text-black">Forgot password?</a>
          </div>
          <button className="bg-pink-400 p-2 rounded-md cursor-pointer border border-pink-400 hover:border hover:border-pink-800 mt-4 " onClick={handleLogin}>
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
