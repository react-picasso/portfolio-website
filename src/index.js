import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./_styles.scss";

import MainPage from "./components/MainPage";
import SideMenu from "./components/SideMenu";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Router>
        <SideMenu />
        <Routes>
            <Route path="/personal-portfolio" element={<MainPage />} />
            <Route path="/personal-portfolio/about" element={<About />} />
            <Route path="/personal-portfolio/portfolio" element={<Portfolio />} />
            <Route path="/personal-portfolio/contact" element={<Contact />} />
        </Routes>
    </Router>
);