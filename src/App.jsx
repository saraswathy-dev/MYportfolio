import { useState } from "react";
import "./App.css";
import Loading from "./components/Loading.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Mobilemenu from "./components/Mobilemenu.jsx";
import Home from "./components/sections/Home.jsx";
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <Loading onComplete={() => setIsLoaded(true)} />}
      {""}
      <div
        className={`min-h-screen transition-opacity duration-700${
          isLoaded ? "opacity-100" : "opacity-0"
        }bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Navbar>
        <Mobilemenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Mobilemenu>
        <Home></Home>
      </div>
    </>
  );
};
export default App;
