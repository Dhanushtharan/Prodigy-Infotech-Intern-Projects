import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="home" smooth={true} duration={500}>
                    <img src="https://res.cloudinary.com/duz2ivzgc/image/upload/v1724662545/Screenshot_2024-08-26_142518_mn7sjh.png" alt="Dhanush" />
                </Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        <i className="fas fa-code"></i>
                        <span className="navbar-tooltip">Skills</span>
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        <i className="fas fa-user"></i>
                        <span className="navbar-tooltip">About</span>
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>
                        <i className="fas fa-project-diagram"></i>
                        <span className="navbar-tooltip">Projects</span>
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        <i className="fas fa-envelope"></i>
                        <span className="navbar-tooltip">Contact</span>
                    </Link>
                </li>
                {/* <li>
                    <Link to="resume" smooth={true} duration={500}>
                        <i className="fas fa-file-alt"></i>
                        <span className="navbar-tooltip">Resume</span>
                    </Link>
                </li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
