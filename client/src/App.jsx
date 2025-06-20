import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveLayout from "./components/layout/ResponsiveLayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ResponsiveLayout>
    </BrowserRouter>
  );
}

export default App;
