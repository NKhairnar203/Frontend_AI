import { AuthContext } from "@/context/AuthContextProvider";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";


const PrivateRoute = () => {
   const user = useContext(AuthContext);
  //  const [user, setUser] = useState(true);
  console.log("user", user.user.userID);
   if (user.user.userID) {
     return <Dashboard />;
   } else {
     return <Login />;
   }
 };

export const AllRoutes = () => {

 

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route
          path="/ask-to-ai"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};
