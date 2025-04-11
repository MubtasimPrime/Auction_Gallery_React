import React from "react";
import { GoHeart } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

const RightAUction = ({ item, setItem, setEnableHeartId, enableHeartId }) => {
  // console.log(items);

  // Total price count
  const totalAmount = item.reduce((total, item) => {
    const numberPrice = Number(item.currentBidPrice.replace(/,/g, ""));
    return total + numberPrice;
  }, 0);

  const totalFormattedAmount = totalAmount.toLocaleString();

  // Remove items

  const removeItem = (itemRemove) => {
    setItem(item.filter((item) => item.id !== itemRemove.id));
    setEnableHeartId(enableHeartId.filter((id) => id !== itemRemove.id));
  };

  const notifyError = () =>
    toast.warning("Item Removed From Favorites", {
      autoClose: 1500,
    });

  return (
    <div className="overflow-x-auto rounded-3xl border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <div className="flex items-center gap-4 justify-center text-[28px] text-[#0E2954] h-16">
                <GoHeart className="w-8 h-8"></GoHeart>
                Favorite Items
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {item.length === 0 ? (
            //row 1
            <tr>
              <td>
                <div className="flex flex-col justify-center items-center text-center">
                  <h1 className="text-[26px] font-medium mt-5">
                    No favorites yet
                  </h1>
                  <p className="mt-4 text-gray-500 text-[17px] mb-5 w-[300px]">
                    Click the heart icon on any item to add it to your favorites
                  </p>
                </div>
              </td>
            </tr>
          ) : (
            item.map((item, id) => (
              <tr key={id}>
                <td>
                  <div className="flex justify-between">
                    {/* img div */}
                    <div>
                      <img
                        src={item.image}
                        className="w-24 h-24 object-cover rounded-sm"
                        alt="image"
                      />
                    </div>
                    {/* Texts */}
                    <div>
                      <h1 className="text-[16px] font-medium w-[185px]">
                        {item.title}
                      </h1>
                      <div className="flex gap-6 mt-4">
                        <p className="text-[16px]">${item.currentBidPrice}</p>
                        <p className="text-[16px]">Bids: {item.bidsCount}</p>
                      </div>
                    </div>
                    {/* Button div */}
                    <div>
                      <button
                        onClick={() => {
                          removeItem(item);
                          notifyError();
                        }}
                        className="text-black hover:text-red-500"
                      >
                        <IoClose className="w-7 h-7 cursor-pointer" />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          )}

          {item.length > 0 ? (
            <tr>
              <td>
                <div className="flex justify-between px-8 py-4">
                  <h3 className="text-[24px]">Total bids Amount</h3>
                  <h3 className="text-[24px] font-medium">
                    ${totalFormattedAmount}
                  </h3>
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              <td>
                <div className="flex justify-between px-8 py-4">
                  <h3 className="text-[24px]">Total bids Amount</h3>
                  <h3 className="text-[24px] font-medium">$0,000</h3>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RightAUction;
