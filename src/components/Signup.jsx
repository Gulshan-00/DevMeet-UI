import React from 'react'
import { Link } from 'react-router';

const Signup = () => {
  return (
    <div className="bg-blue-400 shadow-2xl flex flex-col justify-center self-center p-20 rounded-xl ">

          <label className="label font-bold text-black">First Name</label>
          <input
            type="name"
            className="input px-10"
            placeholder="First Name"
          />
  
          <label className="label font-bold text-black">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
          />
          <label className="label font-bold text-black">Password</label>
          <input
            type="password"
            className="input"

            placeholder="Password"
          />
          <div className="self-center">
            <a className="link link-hover font-bold text-black">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4 hover:bg-blue-400 hover:text-blue-950">
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