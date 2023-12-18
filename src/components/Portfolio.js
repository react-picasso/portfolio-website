import Projects from "./Projects";

const Portfolio = () => {
    return (
        <article className="portfolio">
            <section className="portfolio-text">
                <h2 className="title-font blue-text">Portfolio</h2>
                <p className="white-text">Here are some of my projects I have worked on.
                    <span>
                        <a href="https://github.com/react-picasso?tab=repositories"
                        className="blue-text"
                        target="_blank"
                        rel="noreferrer"
                        > Github</a>                        
                    </span>
                </p>
            </section>
            <Projects />
        </article>
    );
};

export default Portfolio;