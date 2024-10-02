// import { Outlet } from "react-router-dom";
// import Navbar from "./components/navbar";
// import Footer from "./components/Footer";

// const Layout = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Outlet />
//       <Footer/>
//     </div>
//   );
// };

// export default Layout;

import { useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/search-result/available" || location.pathname === "/search-result/not-available" || location.pathname === "/email-verification";
  const searchHeader = location.pathname === '/search-result'

  return (
    <div>
      {(!hideHeaderFooter && !searchHeader) && <Navbar />}
      <Outlet />
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default Layout;
