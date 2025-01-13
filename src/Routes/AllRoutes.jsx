import { AuthContext } from "@/context/AuthContextProvider";
import Dashboard from "@/pages/Dashboard";
import Feedback from "@/pages/Feedback";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
// import { useContext, useEffect, useState } from "react";
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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Signup />} />
      <Route
        path="/ask-to-ai"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  );
};
