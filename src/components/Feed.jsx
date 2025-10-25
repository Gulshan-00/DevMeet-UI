import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/Constents";
import { useDispatch } from "react-redux";
import { addFeed } from "../utils/feedStore";


const Feed = () => {
       const [feedData,setFeedData]=useState([])
    const userDispatch=useDispatch();

  useEffect(() => {
    fetchFeedData();
  }, []);

  const fetchFeedData = async () => {
    try {
      const feedRes = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true, // stores cookie in browser
      });
      
     setFeedData(feedRes.data.data[3]);
      userDispatch(addFeed(feedRes.data.data));

    } catch (error) {
      console.error("Error fetching feed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-96 rounded-2xl overflow-hidden shadow-lg group">
        {/* Image */}
        <img
          src="https://i.pinimg.com/236x/b5/a0/9c/b5a09cf03fdf435aafe7606be7924b88.jpg"
          alt="Feed"
          className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay text area */}
        <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white px-5 py-4 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-2">{feedData?.firstName}</h2>
          <h3 className="text-md font-semibold mb-0">{feedData?.gender}</h3>
          <p className="text-sm mb-0">
            {feedData?.about}
          </p>
          <div className="mb-2"> Tech Stacks : {feedData.skills && feedData.skills.map((skill,i)=> <span key={i} className="mr-2">{skill}</span>)}</div>
               
          <div className="flex justify-between">
            <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer">
              Ignore
            </button>
            <button className="bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 rounded-lg text-sm font-semibold transition cursor-pointer">
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
