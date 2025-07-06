import { useState } from "react";
import "./App.css";
import Loading from "./components/Loading.jsx";
import "./index.css";
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return <>{!isLoaded && <Loading onComplete={() => setIsLoaded(true)} />}</>;
};
export default App;
