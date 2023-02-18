import "./index.scss"
import { Link, NavLink } from "react-router-dom"
import LogoGV from "../../assets/images/Logo GV noir & or 3D final.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoGV} alt="logo Grégory VENET" />
      <h3>Grégory VENET</h3>
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/gregoryvenet/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/gregoryvenet"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
