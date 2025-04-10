import React from "react";
import { GoHeart } from "react-icons/go";

const RightAUction = () => {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th colSpan={2}>
              <div className="flex items-center gap-4 justify-center text-[2rem] text-[#0E2954]">
                <GoHeart className="w-8 h-8"></GoHeart>
                Favorite Items
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td colSpan={2}>
              <div className="flex flex-col justify-center items-center text-center">
                <span className="text-[26px]">No Favorites yet</span>
                <br />
                <span className="text-[18px]">
                  Click the heart icon on any item to add it to your favorites
                </span>
              </div>
            </td>
          </tr>
          {/* row 1 */}
          <tr className="text-[26px]">
            <td>Total bids Amount</td>
            <td className="font-medium">$0000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RightAUction;
