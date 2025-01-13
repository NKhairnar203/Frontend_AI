// Desc: Main App component
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  return (
    <>
      <div className="w-full h-full">
        <AllRoutes />
        {/* <Login /> */}
      </div>
    </>
  );
}

export default App;
