import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { loginBack } from "./hooks/auth";
import useAuthStore from "./store/authStore";

const Layout = () => {
  const { setUser, setToken } = useAuthStore();

  useEffect(() => {
    handleLoginBack();
  }, []);

  const handleLoginBack = async () => {
    try {
      const res = await loginBack();
      if (!res) {
        setToken("");
        setUser(null);
        localStorage.removeItem("token");
        return;
      }
      setUser(res?.user.user);

      if (res?.token) {
        setToken(res.token);
      }
    } catch (error: any) {
      setToken("");
      setUser(null);
      localStorage.removeItem("token");
    }
  };

  return (
    <div>
      <Outlet />
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#081022",
            color: "#FDF8EC",
            border: "1px solid #FF1F47",
          },
        }}
      />
    </div>
  );
};

export default Layout;
