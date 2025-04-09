import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
}

export default App;
