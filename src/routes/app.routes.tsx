import { Routes, Route } from "react-router-dom";
import { Home } from "../screens/Home";
import { Menu } from "../screens/Menu";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}
