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

function App() {
  return (
    <div className="bg-slate-200">
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />

        {/* Admin Routes */}
        <Route path="admin">
          <Route path="job-applications">
            <Route index element={<JobApplications />} />
            <Route path="view" element={<ViewJobApplication />} />
          </Route>
          <Route path="jobs">
            <Route index element={<AdminJobList />} />
            <Route path="create" element={<PostNewJob />} />
            <Route path="view" element={<AdminViewJobPost />} />
          </Route>
          <Route path="job-categories" element={<JobCategories />} />
          <Route path="job-types" element={<JobTypes />} />
        </Route>

        {/* Candidate Routes */}
        <Route path="user">
          <Route path="jobs">
            <Route index element={<UserJobList />} />
            <Route path="view" element={<UserViewJobPost />} />
          </Route>
        </Route>

        {/* Other Route */}
        <Route path="*" element={<div>404 Error</div>} />
      </Routes>
    </div>
  );
}

export default App;
