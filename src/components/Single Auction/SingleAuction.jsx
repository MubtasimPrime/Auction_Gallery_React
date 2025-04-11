import React, { useState } from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { toast } from "react-toastify";

const SingleAuction = ({ data, clickHeartBtn }) => {
  // console.log(data);
  const [heartColor, setHeartColor] = useState(false);

  // Red Heart Disabled
  const heart = () => setHeartColor(true);

  // Toast
  const notify = () =>
    toast.success("An item is added to favorites", {
      autoClose: 1500,
    });

  return (
    <>
      {/* row  */}
      <tr className="text-[18px] text-[#0E2954]">
        <td>
          <img
            className="w-24 h-24 object-cover rounded-sm"
            src={data.image}
            alt="image"
          />
        </td>
        <td>{data.title}</td>
        <td className="text-center">{data.currentBidPrice}</td>
        <td className="text-center">{data.timeLeft}</td>
        <td className="text-center">
          <button
            onClick={() => {
              heart();
              notify();
              clickHeartBtn(data);
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
    </>
  );
};
export default SingleAuction;
