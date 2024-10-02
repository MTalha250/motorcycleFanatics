import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import SearchResultPage from "./pages/search-result";
import Checkout from "./pages/checkout/page";
import SearchResultAvailable from "./pages/searchResultAvailable";
import SearchResultNotAvailable from "./pages/searchResultNotAvailable";
import SignUp from "./pages/signUp";
import Login from "./pages/Login";
import EmailVerification from "./pages/EmailVerification";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/search-result' element={<SearchResultPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/email-verification' element={<EmailVerification />} />
        <Route path='/search-result/available' element={<SearchResultAvailable />} />
        <Route path='/search-result/not-available' element={<SearchResultNotAvailable />} />
        <Route path='/checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;