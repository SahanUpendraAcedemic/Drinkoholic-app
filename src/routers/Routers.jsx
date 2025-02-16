import { Route, Routes } from "react-router-dom";
import Mainpage from "../pages/Mainpage";
import Catalog from "../pages/Catalog";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/catalog" element={<Catalog />} />
    </Routes>
  );
};

export default Routers;
