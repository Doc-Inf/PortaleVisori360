import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./components/ui/theme-provider";
import Sidebar from "./components/sidebar";
import { Videotape, X } from "lucide-react";
import { useState } from "react";
import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";

function App() {
  // open / close sidebar
  const [bar, setBar] = useState(false);
  const handleButton = () => setBar((prev) => !prev);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar
        btn={<Videotape className="text-primary" onClick={handleButton} />}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      {/* SIDEBAR */}
      <Sidebar open={bar}>
        <X className="w-10 h-10 me-3" onClick={handleButton} />
      </Sidebar>
    </ThemeProvider>
  );
}

export default App;
