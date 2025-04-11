import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Auction from "./components/Auction/Auction";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import RightAUction from "./components/RightAuction/RightAUction";

function App() {
  const [infoJson, setInfoJson] = useState([]);
  const [item, setItem] = useState([]);

  // heart click
  const clickHeartBtn = (newItem) => {
    setItem([...item, newItem]);
    console.log(newItem);
  };

  useEffect(() => {
    fetch("info.json")
      .then((res) => res.json())
      .then((data) => setInfoJson(data));
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="max-w-screen-2xl mx-auto">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>

      {/* Auction part */}
      <div className="bg-[#EBF0F5] pt-32 pb-28">
        <div className="max-w-screen-2xl mx-auto">
          <h1 className="mb-5 text-4xl font-medium text-[#0E2954]">
            Active Auctions
          </h1>
          <p className="mb-8 text-2xl">
            Discover and bid on extraordinary items
          </p>
        </div>
        <div className="max-w-screen-2xl mx-auto flex gap-5">
          {/* Left */}
          <div className="w-[70%]">
            <Suspense
              fallback={
                <span className="loading loading-dots loading-lg"></span>
              }
            >
              <Auction
                clickHeartBtn={clickHeartBtn}
                infoJson={infoJson}
              ></Auction>
            </Suspense>
          </div>
          {/* Right */}
          <div className="w-[30%]">
            <RightAUction setItem={setItem} item={item}></RightAUction>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
