import React from "react";
import SingleAuction from "../Single Auction/SingleAuction";

const Auction = ({ infoJson, clickHeartBtn }) => {
  // const jsonData = use(infoJson);
  //   console.log(jsonData);

  return (
    <>
      {/* <h1>Json Data:{jsonData.length}</h1> */}
      {/* Next component */}
      <div className="rounded-3xl border border-base-content/5 bg-base-100">
        <table className="table mb-4">
          {/* head */}
          <thead className="py-6">
            <tr className="text-[18px] h-22 text-gray-800">
              <th className="pl-10">Items</th>
              <th></th>
              <th className="text-center">Current Bid</th>
              <th className="text-center">Time Left</th>
              <th className="text-center pr-10">Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {infoJson.map((data) => (
              <SingleAuction
                key={data.id}
                data={data}
                clickHeartBtn={clickHeartBtn}
              ></SingleAuction>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Auction;
