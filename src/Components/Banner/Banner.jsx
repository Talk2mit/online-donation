import React, { useState } from "react";
const Banner = ({ searchQuery, setSearchQuery, handleSearchClick }) => {
  const bannerImgStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://i.ibb.co/9bwPXwG/Rectangle-4281.png')`,
    backgroundSize: "cover",
    backgroundPosition: "0 0",
    backgroundRepeat: "no-repeat",
    opacity: "1",
  };

  return (
    <div className="h-[30vh] md:h-[60vh] flex flex-col justify-center items-center"
      style={bannerImgStyle}>

      <div className="form-control">
        <div className="h-[60vh] flex justify-center items-center">

          <div className="form-control">
          <p className="text-center text-sm font-extrabold pb-3 lg:text-4xl md:text-3xl">I Grow By Helping People In Need</p>
            <div className="text-center">
              <input
                type="text"
                placeholder="Search here...."
                className="text-sm font-medium mb-2 px-5 py-2 rounded-md"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}/>
              <button
                onClick={handleSearchClick}
                className="bg-[#35cec6] text-sm font-medium mb-2 px-5 py-2 rounded-md text-white">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
