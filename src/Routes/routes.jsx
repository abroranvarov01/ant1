import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/home/home";
import Login from "../Pages/Login/login";
import MainLayout from "../layout/main-layout";
import CreateUser from "../Pages/create-user/create-user";
import Register from "../Pages/Register/register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/app" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="user" element={<CreateUser />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
