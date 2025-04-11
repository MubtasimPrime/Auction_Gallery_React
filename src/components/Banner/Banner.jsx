import React from "react";

const Banner = () => {
  return (
    <div className="banner-container bg-[url(/banner-img.svg)] bg-cover bg-center min-h-[calc(100vh-72px)] flex items-center sora">
      <div className="banner-text text-white max-w-screen-2xl w-full mx-auto">
        <h1 className="text-5xl font-semibold mb-5">
          Bid on Unique Items from
          <br />
          Around the World
        </h1>
        <p className="text-2xl font-light mb-8">
          Discover rare collectibles, luxury goods, and vintage
          <br />
          treasures in our curated auctions
        </p>
        <button className="cursor-pointer text-[20px] font-medium bg-white text-black rounded-4xl py-2.5 px-6.5">
          Explore Auctions
        </button>
      </div>
    </div>
  );
};

export default Banner;
