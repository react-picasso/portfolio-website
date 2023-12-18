import ProjectOne from "../assets/project-one.svg";

const Projects = () => {
    function RevealProject() {
        const HiddenSnippet = document.querySelector(".project-snippet");
        const ProjectImg = document.querySelector(".project-icon");
        HiddenSnippet.classList.add("show-snippet");
        ProjectImg.classList.add("transform-icon");
    }

    function HideProject() {
        const HiddenSnippet = document.querySelector(".project-snippet");
        const ProjectImg = document.querySelector(".project-icon");
        HiddenSnippet.classList.remove("show-snippet");
        ProjectImg.classList.remove("transform-icon");
    }

    return (
        <section className="portfolio-grid">
            <section className="project">
                <a
                    href="https://tred-banking.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <section className="project-icon" onMouseEnter={RevealProject}>
                        <img src={ProjectOne} alt="" className="project-img"/>
                    </section>

                    <section className="project-snippet" onMouseLeave={HideProject}>
                        <section className="stack-used white-text">
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>Vanilla JavaScript</p>
                        </section>
                    </section>
                </a>
            </section>
        </section>
    );
};

export default Projects;