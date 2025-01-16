// Desc: Main App component
import { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AllRoutes } from "./Routes/AllRoutes";
import New from "./pages/New";

function App() {
  useEffect(() => {
    localStorage.getItem("token");
  }, []);
  return (
    <>
      <div className="w-full h-full">
        <AllRoutes />
        {/* <New code={`function greet() { return "Hello, world!"; }`} /> */}
      </div>
    </>
  );
}

export default App;
