import React, { useState } from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";

const SingleAuction = ({ data }) => {
  // console.log(data);
  const [heartColor, setHeartColor] = useState(false);

  // Red Heart Disabled
  const heart = () => setHeartColor(true);

  // Toast
  const notify = () => toast("An item is added to favorites");

  return (
    <>
      {/* row  */}
      <tr>
        <td>
          <img
            className="w-24 h-24 object-cover rounded-sm"
            src={data.image}
            alt=""
          />
        </td>
        <td>{data.title}</td>
        <td>{data.currentBidPrice}</td>
        <td>{data.timeLeft}</td>
        <td>
          <button
            onClick={() => {
              heart();
              notify();
            }}
            disabled={heartColor}
          >
            {heartColor ? (
              <GoHeartFill className="text-red-500 w-6 h-6 cursor-not-allowed duration-200 hover:scale-110 transition-transform" />
            ) : (
              <GoHeart className="text-[#0E2954] w-6 h-6 cursor-pointer hover:text-red-500 duration-200 hover:scale-110 transition-transform" />
            )}
          </button>
        </td>
      </tr>
      {/* <ToastContainer /> */}
    </>
  );
};
export default SingleAuction;
