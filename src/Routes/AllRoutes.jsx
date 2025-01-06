import { AuthContext } from "@/context/AuthContextProvider";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");


    if (!token) {
      return <Login />;
    } else {
      return <Dashboard />;
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
