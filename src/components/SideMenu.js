import { NavLink, Link } from "react-router-dom";
import WhiteHam from "../assets/hamburger-white.png";
import WhiteXHam from "../assets/x-ham-black.png";
import IconBlack from "../assets/icon-black.png";
import Linkedin from "../assets/linkedin-blue.png";
import Github from "../assets/github-blue.png";

const SideMenu = () => {
    function ToggleMenu() {
        const HiddenMenu = document.querySelector(".main-menu");
        HiddenMenu.classList.toggle("active-menu");
    }

    function HideMenu() {
        const Hiddenmenu = document.querySelector(".main-menu");
        Hiddenmenu.classList.remove("active-menu");
        const HamIcon = document.querySelector(".ham-menu");
        HamIcon.src = WhiteHam;
    }

    function ResetLocation() {
        window.scrollTo(0, 0);
    }

    function changeHamburger() {
        const Hiddenmenu = document.querySelector(".main-menu");
        const HamIcon = document.querySelector(".ham-menu");
        if (Hiddenmenu.classList.contains("active-menu")) {
            HamIcon.src = WhiteXHam;
        } else {
            HamIcon.src = WhiteHam;
        }
    }

    return (
        <article className="side-menu">
            <section className="ham-section">
                <img 
                    className="ham-menu"
                    src={WhiteHam}
                    alt="Hamburger Menu"
                    onClick={() => {
                        ToggleMenu();
                        changeHamburger();
                    }}
                />
            </section>
            <section className="main-menu">
                <Link
                    to="/personal-portfolio"
                    className="gray-text"
                    onClick={() => {
                        ResetLocation();
                        HideMenu();
                    }}
                >
                    <img src={IconBlack} alt="" />
                </Link>
                <section className="menu-links">
                    <NavLink
                        to="/personal-portfolio"
                        className="gray-text"
                        onClick={() => {
                            ResetLocation();
                            HideMenu();
                        }}
                    >
                        Main
                    </NavLink>
                    <NavLink
                        to="/personal-portfolio/about"
                        className="gray-text"
                        onClick={() => {
                            ResetLocation();
                            HideMenu();
                        }}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="//personal-portfolio/portfolio"
                        className="gray-text"
                        onClick={() => {
                            ResetLocation();
                            HideMenu();
                        }}
                    >
                        Portfolio
                    </NavLink>
                    <NavLink
                        to="/personal-portfolio/contact"
                        className="gray-text"
                        onClick={() => {
                            ResetLocation();
                            HideMenu();
                        }}
                    >
                        Contact
                    </NavLink>
                </section>
                <section className="social-links">
                    <a 
                        href="https://www.linkedin.com/in/prathamesh-kulkarni-1908/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Linkedin} alt="Linkedin" />
                    </a>
                    <a
                        href="https://github.com/react-picasso"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Github} alt="Github" />
                    </a>
                </section>
            </section>
        </article>
    );
};

export default SideMenu;