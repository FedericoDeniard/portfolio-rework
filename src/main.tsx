import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./views/Home.tsx";
import SlidingDiagonalsBackground from "./components/layout/SlidingDiagonalsBackground.tsx";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <SlidingDiagonalsBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:sectionId" element={<Home />} />
      </Routes>
    </Router>
  </StrictMode>
);
