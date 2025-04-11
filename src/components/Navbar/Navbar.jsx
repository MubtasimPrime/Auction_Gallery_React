import React from "react";

const Navbar = () => {
  return (
    <div className="poppins">
      {/* Main Div */}
      <div className="flex justify-between py-4">
        {/* Navbar Title */}
        <div>
          <a href="#" className="text-3xl">
            <span className="text-[#003EA4]">Auction</span>
            <span className="text-[#FFD337] font-bold">Gallery</span>
          </a>
        </div>

        {/* Middle Part */}
        <ul className="flex gap-20 items-center text-[20px]">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Auctions</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">How to works</a>
          </li>
        </ul>

        {/* Right Part */}
        <div className="flex gap-3">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle bg-[#EBF0F5]"
            >
              <div className="indicator">
                <img src="bell-img.svg" alt="" />
                <span className="indicator-item bg-[#0E2954] text-white rounded-full w-5">
                  9
                </span>
              </div>
            </div>

            {/* Dummy */}
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="circle-img.svg" />
              </div>
            </div>
            {/* Dummy */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
