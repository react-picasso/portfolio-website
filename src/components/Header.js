import { Link } from "react-router-dom";

const Header = () => {
    return (
        <article className="header">
            <h1 className="title-font white-text">
                Hi, I'm <br /><br />
                <em className="blue-text">Prathamesh Kulkarni</em>
                <br/><br/> web developer
            </h1>
            <p className="gray-text">Frontend Development</p>
            <Link className="blue-text" to="/prathamesh-kulkarni/portfolio">
                Check out my work
            </Link>
        </article>
    );
};

export default Header;