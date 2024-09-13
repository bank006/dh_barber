import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard_mBarber from "./pages/pages_admin/mDashboard";
import MBarber_Details from "./pages/pages_admin/mBarber_Details";
import MServe from "./pages/pages_admin/mServe";
import MMember from "./pages/pages_admin/mMember";
import MBooking1 from "./pages/pages_admin/mBooking1";


import Dashboard_Barber from "./pages/pages_manager/Dashboard";
import Barber_Details from "./pages/pages_manager/Barber_Details";
import Serve from "./pages/pages_manager/Serve";
import Haircut_main from "./pages/pages_manager/Haircut_main";
import Member from "./pages/pages_manager/Member";
import Booking1 from "./pages/pages_manager/Booking1";
import Login from "./pages/pages_Login/Login";
import ProtectedRoute from "./Protected";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQuery } from "react-query";
import { fetchUser } from "./hooks/GetUser";
import { useDispatch, useSelector } from "react-redux";
import { setError, setUser } from "./reduxs/reducers/userReduce";
import { fetchServe } from "./hooks/GetServe";

function App() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, 
  [location.pathname]); // triggered on route change
  const { isLoading } = useQuery("userData", fetchUser, {
    onSuccess: (data) => {
      dispatch(setUser(data?.user));
    },
    onError: (error) => {
      dispatch(setError(error?.message));
    },
    staleTime: 1000 * 10,
    refetchOnWindowFocus: false,
  });

  return (
    <>
    {isLoading ? "Loading..." :
    <>
      <Routes>
        {/* mBarber */}
        
        <Route
          index
          path="/dashboard_mBarber"
          element={
            <ProtectedRoute>
              <Dashboard_mBarber />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
              <Login />
          }
        />
        <Route
          path="/mBarber_Details"
          element={
            <ProtectedRoute>
              <MBarber_Details />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mServe"
          element={
            <ProtectedRoute>
              <MServe />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mMember"
          element={
            <ProtectedRoute>
              <MMember />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mBooking1"
          element={
            <ProtectedRoute>
              <MBooking1 />
            </ProtectedRoute>
          }
        />
        

        {/* barber */}
        <Route
          path="/dashboard_barber"
          element={
            <ProtectedRoute>
              <Dashboard_Barber />
            </ProtectedRoute>
          }
        />
        <Route
          path="/barber_details"
          element={
            <ProtectedRoute>
              <Barber_Details  user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/serve"
          element={
            <ProtectedRoute>
              <Serve />
            </ProtectedRoute>
          }
        />
        <Route
          path="/haircut"
          element={
            <ProtectedRoute>
              <Haircut_main />
            </ProtectedRoute>
          }
        />
        <Route
          path="/member"
          element={
            <ProtectedRoute>
              <Member  user={user}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <Booking1 />
            </ProtectedRoute>
          }
        />
      </Routes>

      <ToastContainer
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
}
    </>
  );
}

export default App;
