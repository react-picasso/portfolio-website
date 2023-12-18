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
            <Route path="/prathamesh-kulkarni" element={<MainPage />} />
            <Route path="/prathamesh-kulkarni/about" element={<About />} />
            <Route path="/prathamesh-kulkarni/portfolio" element={<Portfolio />} />
            <Route path="/prathamesh-kulkarni/contact" element={<Contact />} />
        </Routes>
    </Router>
);