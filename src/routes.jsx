import { Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import AdminPage from "./admin/adminPage";

const AppRouter = () => {
  const location = useLocation();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
