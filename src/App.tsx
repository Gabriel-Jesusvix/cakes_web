import { useState, useEffect } from "react";

import { Header } from "./components/Header";
import { AppRoutes } from "./routes/app.routes";
import { Home } from "./screens/Home";

export default function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}
