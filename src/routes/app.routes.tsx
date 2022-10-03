import { Routes, Route } from "react-router-dom";
import { Auth } from "../screens/Auth/Auth";
import { Home } from "../screens/Home";
import { Menu } from "../screens/Menu";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/login" element={<Auth />} />
    </Routes>
  );
}
