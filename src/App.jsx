import { Suspense } from "react";
import "./App.css";
import Auction from "./components/Auction/Auction";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  const infoJson = fetch("info.json").then((res) => res.json());
  return (
    <>
      <ToastContainer />
      <div className="max-w-screen-2xl mx-auto">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>

      <Suspense
        fallback={<span className="loading loading-dots loading-lg"></span>}
      >
        <Auction infoJson={infoJson}></Auction>
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
