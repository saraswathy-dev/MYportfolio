import { useState } from "react";
import "./App.css";
import Loading from "./components/Loading.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Loading onComplete={() => setIsLoaded(true)} />}
      {""}
      <div
        className={`min-h-screen transition-opacity duration-700${
          isLoaded ? "opacity-100" : "opacity-0"
        }bg-black text-gray-100`}
      >
        <Navbar></Navbar>
      </div>
    </>
  );
};
export default App;
