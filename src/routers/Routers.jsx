import { Route, Routes } from "react-router-dom";
import Mainpage from "../pages/Mainpage";
import Catalog from "../pages/Catalog";
import DrinkPage from "../pages/DrinkPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/drink/:id" element={<DrinkPage />} />
    </Routes>
  );
};

export default Routers;
