import React from "react";

const Feed = () => {
  return (
    <div>
      <div className="card bg-base-100 image-full w-96 shadow-sm">
        <figure>
          <img
            src="https://i.pinimg.com/236x/b5/a0/9c/b5a09cf03fdf435aafe7606be7924b88.jpg"
            alt="My Profile"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
