import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ResponsiveLayout from "./components/layout/ResponsiveLayout";
import Home from "./pages/Home";

function AppRoutes() {
  const location = useLocation();

  return (
    // 啟用 framer-motion
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/project" element={<Project />} /> */}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    // 啟用 Router
    <BrowserRouter>
      {/* RWD響應式設計 Mobile / Desktop */}
      <ResponsiveLayout>
        <AppRoutes />
      </ResponsiveLayout>
    </BrowserRouter>
  );
}

export default App;
