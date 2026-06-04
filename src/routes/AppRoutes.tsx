import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";

import ProtectedRoute from "./ProtectedRoute";

import AccountsPage from "../pages/AccountsPage";
import TransactionsPage from "../pages/TransactionsPage";
import LoansPage from "../pages/LoansPage";

import TransferPage from "../pages/TransferPage";
import ApplyLoanPage from "../pages/ApplyLoanPage";
import AdminPage from "../pages/AdminPage";
import BeneficiariesPage from "../pages/BeneficiariesPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import OtpVerificationPage from "../pages/OtpVerificationPage";

import KycPage from "../pages/KycPage";
import NomineePage from "../pages/NomineePage";
import ManagerDashboard from "../pages/ManagerDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import FraudDashboard from "../pages/FraudDashboard";
import LoanApprovalPage from "../pages/LoanApprovalPage";
import ChequePage from "../pages/ChequePage";
import AuditLogsPage from "../pages/AuditLogsPage";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/accounts"
          element={
            <ProtectedRoute>
              <AccountsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/transactions"
          element={
            <ProtectedRoute>
              <TransactionsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/loans"
          element={
            <ProtectedRoute>
              <LoansPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transfer"
          element={
            <ProtectedRoute>
              <TransferPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/apply-loan"
          element={
            <ProtectedRoute>
              <ApplyLoanPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/beneficiaries"
          element={
            <ProtectedRoute>
              <BeneficiariesPage />
            </ProtectedRoute>
          }
        />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-otp" element={<OtpVerificationPage />} />

        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route
          path="/kyc"
          element={
            <ProtectedRoute>
              <KycPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/nominee"
          element={
            <ProtectedRoute>
              <NomineePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manager"
          element={
            <ProtectedRoute>
              <ManagerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/fraud"
          element={
            <ProtectedRoute>
              <FraudDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/loan-approval"
          element={
            <ProtectedRoute>
              <LoanApprovalPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cheques"
          element={
            <ProtectedRoute>
              <ChequePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/audit-logs"
          element={
            <ProtectedRoute>
              <AuditLogsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
