import React from "react";
import { GoHeart } from "react-icons/go";
import { IoClose } from "react-icons/io5";

const RightAUction = ({ item }) => {
  // console.log(items);

  const totalAmount = item.reduce(
    (total, item) => total + item.currentBidPrice,
    0
  );
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <div className="flex items-center gap-4 justify-center text-[2rem] text-[#0E2954] h-18">
              <GoHeart className="w-8 h-8"></GoHeart>
              Favorite Items
            </div>
          </tr>
        </thead>
        <tbody>
          {item.length === 0 ? (
            //row 1
            <tr>
              <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-[26px] font-medium mt-8">
                  No favorites yet
                </h1>
                <p className="mt-4 text-gray-500 text-[18px] mb-8">
                  Click the heart icon on any item to add it to your favorites
                </p>
              </div>
            </tr>
          ) : (
            item.map((item) => (
              <tr>
                <div>
                  {/* img div */}
                  <div>
                    <img
                      src={item.image}
                      className="w-24 h-24 object-cover rounded-sm"
                      alt="image"
                    />
                  </div>
                  <div className="text-[16px] font-medium">{item.title}</div>
                  <div className="text-[14px]">${item.currentBidPrice}</div>
                  <div className="text-[14px]">Bids: {item.bidsCount}</div>
                  {/* Button div */}
                  <div>
                    <button className="text-black hover:text-red-500">
                      <IoClose className="w-7 h-7" />
                    </button>
                  </div>
                </div>
              </tr>
            ))
          )}
          {item.length > 0 ? (
            <div className="flex justify-between px-8 py-4">
              <h3 className="text-[26px]">Total bids Amount</h3>
              <h3 className="text-[26px]">${totalAmount.toFixed(2)}</h3>
            </div>
          ) : (
            <div className="flex justify-between px-8 py-4">
              <h3 className="text-[26px]">Total bids Amount</h3>
              <h3 className="text-[26px]">$0000</h3>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RightAUction;
