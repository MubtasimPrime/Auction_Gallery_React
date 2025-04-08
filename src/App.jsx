import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className=" max-w-screen-2xl mx-auto">
        <Navbar></Navbar>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
