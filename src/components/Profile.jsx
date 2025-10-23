import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.user.items[0]);

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        {user ?
          <div className="hero-content flex-col lg:flex-col">
            <img
              src={user.photoUrl}
              className="max-w-xs rounded-lg shadow-2xl"
            />
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold">
                {user.firstName + " " + user.lastName}
              </h1>
              <h1 className="text-2xl font-bold">{user.gender}</h1>
              <p className="py-2">
                <h1>
                  <b>About:</b> {user.about}
                </h1>
              </p>
              <p className="py-1">
                <h1>
                  <b>Skills:</b> {user.skills.join(", ")}
                </h1>
              </p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div> : <h1>User is not logged in</h1>
        }
      </div>
    </div>
  );
};

export default Profile;
