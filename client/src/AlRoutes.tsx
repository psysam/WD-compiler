import { Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader";
import AllCodes from "./pages/AllCodes";
import MyCodes from "./pages/MyCodes";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Compiler = lazy(() => import("./pages/Compiler"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function AlRoutes() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-[calc(100dvh-60px)] flex justify-center items-center">
          <Loader />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/all-codes" element={<AllCodes />} />
        <Route path="/my-codes" element={<MyCodes />} />
        <Route path="/compiler/:urlId?" element={<Compiler />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
