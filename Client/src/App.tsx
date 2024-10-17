import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import Login from "./pages/Login";
import EmailVerification from "./pages/EmailVerification";
import useAuthStore from "./store/authStore";
import VideoVerification from "./pages/VideoVerification";
import PlanPage from "./pages/PlanPage";

const App = () => {
  const { user } = useAuthStore();
  console.log(user);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {!user?.is_email_verified && (
          <Route path="/email-verification" element={<EmailVerification />} />
        )}
        {!user?.is_video_verified && (
          <Route path="/video-verification" element={<VideoVerification />} />
        )}
        <Route path="/our-plan/:lat/:lng" element={<PlanPage />} />
      </Route>
    </Routes>
  );
};

export default App;
