import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" flex flex-col justify-center items-center footer-center p-10">
        <div className="mb-3">
          <a href="#" className="text-3xl">
            <span className="text-[#003EA4]">Auction</span>
            <span className="text-[#FFD337] font-bold">Gallery</span>
          </a>
        </div>
        <nav className="grid grid-flow-col gap-6 mb-5 text-[22px]">
          <a href="#">Bid.</a>
          <a href="#">Win.</a>
          <a href="#">Own.</a>
        </nav>
        <nav className="grid grid-flow-col gap-12 mb-6 text-xl">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <aside>
          <p className="text-[18px]">
            © {new Date().getFullYear()} ActionHub. All rights reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
