import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import Payment from './Pages/Dashboard/Payment/Payment';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route exact path="/home" element={<Home />}>
            </Route>
            <Route path="/appointment" element={<PrivateRoute>
              <Appointment></Appointment>
            </PrivateRoute>}>
            </Route>
            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>}>
              <Route exact path="/dashboard" element={<DashboardHome></DashboardHome>}>
              </Route>
              <Route path={`/dashboard/payment/:appointmentId`} element={<Payment></Payment>}>
              </Route>
              <Route path={`/dashboard/makeadmin`} element={<AdminRoute>  <MakeAdmin></MakeAdmin></AdminRoute>}>
              </Route>
              <Route path={`/dashboard/adddoctor`} element={<AdminRoute>    <AddDoctor></AddDoctor></AdminRoute>}>
              </Route>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
