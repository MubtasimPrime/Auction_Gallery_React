import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" flex flex-col justify-center items-center footer-center py-20">
        <div className="mb-3 poppins">
          <a href="#" className="text-3xl">
            <span className="text-[#003EA4]">Auction</span>
            <span className="text-[#FFD337] font-bold">Gallery</span>
          </a>
        </div>
        <nav className="grid grid-flow-col gap-6 mb-5 text-[22px] sora">
          <a href="#">Bid.</a>
          <a href="#">Win.</a>
          <a href="#">Own.</a>
        </nav>
        <nav className="grid grid-flow-col gap-12 mb-6 text-xl poppins">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Auctions</a>
          <a className="link link-hover">Categories</a>
          <a className="link link-hover">How to works</a>
        </nav>
        <aside>
          <p className="text-[18px] sora">
            © {new Date().getFullYear()} ActionHub. All rights reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
