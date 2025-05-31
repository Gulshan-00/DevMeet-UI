import axios from 'axios'
import React from 'react'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'


const Navbar = () => {

  const Navigate=useNavigate();

 const handleLogout=async ()=>{
       try{
   const response = await axios.post("http://localhost:4000/logout");
          localStorage.removeItem('token');
       }
       catch(error){
        console.error(error);
       }
 }

  return (
    <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">DevMeet</a>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"profile"}>
                <a className="justify-between">
                  Profile
                     {/* <span className="badge">New</span> */}
                </a>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Navbar