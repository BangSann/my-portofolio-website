import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import MainLayout from "./_components/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="contact" element={<MainLayout>Contact</MainLayout>} />
        <Route path="profile" element={<MainLayout>Profile</MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
