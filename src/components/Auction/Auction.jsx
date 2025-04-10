import React, { use } from "react";
import SingleAuction from "../Single Auction/SingleAuction";

const Auction = ({ infoJson }) => {
  const jsonData = use(infoJson);
  //   console.log(jsonData);

  return (
    <div className="bg-[#EBF0F5]">
      <div className="max-w-screen-2xl mx-auto pt-32 pb-28">
        <h1 className="mb-5">Active Auctions</h1>
        <p>Discover and bid on extraordinary items</p>
        <h1>Json Data:{jsonData.length}</h1>
        {/* Next component */}
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Items</th>
                <th></th>
                <th>Current Bid</th>
                <th>Time Left</th>
                <th>Bid Now</th>
              </tr>
            </thead>
            <tbody>
              {jsonData.map((data) => (
                <SingleAuction key={data.id} data={data}></SingleAuction>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Auction;
