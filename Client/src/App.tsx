import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
