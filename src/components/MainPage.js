import About from "./About";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const MainPage = () => {
    return (
        <article className="main-page">
            <Header />
            <About />
            <Portfolio />
            <Contact />
        </article>
    );
};

export default MainPage;