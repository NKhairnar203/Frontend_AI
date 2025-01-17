// Desc: Main App component
import { useEffect } from "react";
import { AllRoutes } from "./Routes/AllRoutes";

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
