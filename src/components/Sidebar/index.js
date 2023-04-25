import "./index.scss"
import { Link, NavLink } from "react-router-dom"
import LogoGV from "../../assets/images/Logo GV noir & or 3D final.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faUser, faEnvelope, faSuitcase } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Weather from "../Weather"

const Sidebar = () => (
  <div className="nav-bar">
    <Link to="/">
      <img src={LogoGV} alt="logo Grégory VENET" />
      <h3>Grégory VENET</h3>
    </Link>
    <Weather />
    <nav>
      <NavLink
        exact="true"
        activeclassname="active"
        to="/"
        role="dialog"
        aria-label="accueil"
      >
        <FontAwesomeIcon
          icon={faHome}
          color="#4d4d4e"
          aria-label="icone page d'acceuil"
          tabindex="-1"
        />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
        role="dialog"
        aria-label="a propos"
      >
        <FontAwesomeIcon
          icon={faUser}
          color="#4d4d4e"
          aria-label="icone page à propos"
          tabindex="-1"
        />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
        role="dialog"
        aria-label="portfolio"
      >
        <FontAwesomeIcon
          icon={faSuitcase}
          color="#4d4d4e"
          aria-label="icone page portfolio"
          tabindex="-1"
        />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
        role="dialog"
        aria-label="contact"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          color="#4d4d4e"
          aria-label="icone page contact"
          tabindex="-1"
        />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/gregoryvenet/"
          title="Profil LinkedIn de Gregory Venet"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            color="#4d4d4e"
            aria-label="icone site LinkedIn"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/gregoryvenet"
          title="Profil github de Gregory Venet"
        >
          <FontAwesomeIcon
            icon={faGithub}
            color="#4d4d4e"
            aria-label="icone accès site github"
          />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
