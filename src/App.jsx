// Desc: Main App component
import { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  useEffect(() => {
    localStorage.getItem("token");
  }, []);
  return (
    <>
      <div className="w-full h-full">
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
