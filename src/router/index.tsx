import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import EditCandidateDetails from "../pages/edit-candidate-details";
import Home from "../pages/home";
import Login from "../pages/login";
import ManageUser from "../pages/manage-user";
import Payslip from "../pages/payslip";
import Payslips from "../pages/payslips";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/payslips" element={<Payslips />} />
      <Route path="/payslips/:payslipId" element={<Payslip />} />;
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/manage-user" element={<ManageUser />} />
      <Route path="/edit-candidate" element={<EditCandidateDetails />} />
    </Routes>
  );
}

export default AppRouter;
