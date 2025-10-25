import axios from 'axios';
import React, { useState } from 'react'
import { Link, Navigate } from 'react-router';
import { BASE_URL } from '../utils/Constents';

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        BASE_URL +"/signup",
        {
          firstName,
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
        console.log(response.status())

       //the data which is coming from the backend
      //  const data= await response.data;
      //  Dispatch(addUser(data));

       Navigate('/login');

    } catch (error) {
      console.error("ERROR:"+ error.message);
    }
  };


  return (
    <div className="bg-blue-400 shadow-2xl flex flex-col justify-center self-center p-20 rounded-xl ">

          <label className="label font-bold text-black">First Name</label>
          <input
            type="name"
            value={firstName}
            onChange={(e)=>{setFirstName(e.target.value)}}
            className="input px-10"
            placeholder="First Name"
          />
  
          <label className="label font-bold text-black">Email</label>
          <input
            type="email"
            value={emailId}
            onChange={(e)=>{setEmailId(e.target.value)}}
            className="input"
            placeholder="Email"
          />
          <label className="label font-bold text-black">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            className="input"

            placeholder="Password"
          />
          <div className="self-center">
            <a className="link link-hover font-bold text-black">Forgot password?</a>
          </div>
          <button onClick={handleLogin} className="btn btn-neutral mt-4 hover:bg-blue-400 hover:text-blue-950">
            SignUp
          </button>

          <div className="self-center mt-5">
            <a className="link link-hover text-black">
            <Link to="/login">Already User? Login</Link>
            </a>
          </div>
    </div>
  )
}

export default Signup;