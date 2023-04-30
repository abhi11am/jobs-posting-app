import { Routes, Route } from "react-router-dom";
import Register from "pages/auth/Register";
import Home from "pages/Home";
import Login from "pages/auth/Login";
import ForgotPassword from "pages/auth/ForgotPassword";
import ResetPassword from "pages/auth/ResetPassword";
import JobApplications from "pages/admin/JobApplications";
import AdminJobList from "pages/admin/Jobs";
import UserJobList from "pages/user/Jobs";
import JobCategories from "pages/admin/JobCategories";
import JobTypes from "pages/admin/JobTypes";
import PostNewJob from "pages/admin/PostNewJob";
import ViewJobApplication from "pages/admin/ViewJobApplication";
import AdminViewJobPost from "pages/admin/ViewJobPost";
import UserViewJobPost from "pages/user/ViewJobPost";
import { AuthProvider } from "contexts/auth";
import RequireAuth from "components/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <div className="bg-slate-200">
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />

          {/* Admin Routes */}
          <Route path="admin">
            <Route path="job-applications">
              <Route index element={<RequireAuth><JobApplications /></RequireAuth>} />
              <Route path="view" element={<RequireAuth><ViewJobApplication /></RequireAuth>} />
            </Route>
            <Route path="jobs">
              <Route index element={<RequireAuth><AdminJobList /></RequireAuth>} />
              <Route path="create" element={<RequireAuth><PostNewJob /></RequireAuth>} />
              <Route path="view" element={<RequireAuth><AdminViewJobPost /></RequireAuth>} />
            </Route>
            <Route path="job-categories" element={<RequireAuth><JobCategories /></RequireAuth>} />
            <Route path="job-types" element={<RequireAuth><JobTypes /></RequireAuth>} />
          </Route>

          {/* Candidate Routes */}
          <Route path="user">
            <Route path="jobs">
              <Route index element={<RequireAuth><UserJobList /></RequireAuth>} />
              <Route path="view" element={<RequireAuth><UserViewJobPost /></RequireAuth>} />
            </Route>
          </Route>

          {/* Other Route */}
          <Route path="*" element={<div>404 Error</div>} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
