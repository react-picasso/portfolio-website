import { Component } from "react";
import ProjectsData from "./ProjectsData";

class Projects extends Component {
	RevealProject(event) {
		event.stopPropagation();
		const HiddenSnippet = document.querySelectorAll(".project-snippet");
		HiddenSnippet.forEach(function (target) {
			target.classList.add("show-snippet");
		});
	}

	HideProject(event) {
		event.stopPropagation();
		const HiddenSnippet = document.querySelectorAll(".project-snippet");
		HiddenSnippet.forEach(function (target) {
			target.classList.remove("show-snippet");
		});
	}

	render() {
		return (
			<section className="portfolio-grid">
				{ProjectsData.map((project, index) => (
					<section className="project">
						<a href={project.link} target="_blank" rel="noreferrer">
							<section
								className="project-icon"
								onMouseEnter={this.RevealProject}
							>
								<img
									key={index}
									src={project.img}
									alt=""
									className="project-img"
								/>
							</section>
							<section
								className="project-snippet"
								onMouseLeave={this.HideProject}
							>
								<section className="stack-used white-text">
									<p key={index}>{project.stackOne}</p>
									<p key={index}>{project.stackTwo}</p>
									<p key={index}>{project.stackThree}</p>
								</section>
							</section>
						</a>
					</section>
				))}
			</section>
		);
	}
}

export default Projects;
