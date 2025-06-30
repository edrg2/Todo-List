import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ResponsiveLayout from "./components/layout/ResponsiveLayout";
import Overview from "./pages/overview/Overview";
import Project from "./pages/Project";
import Calendar from "./pages/Calendar";
import Account from "./pages/Account";

function AppRoutes() {
  const location = useLocation();

  return (
    // 啟用 framer-motion
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/today" />} />
        <Route path="/:category" element={<Overview />} />
        <Route path="/project" element={<Project />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/account" element={<Account />} />
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
