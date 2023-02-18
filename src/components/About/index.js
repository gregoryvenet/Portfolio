import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons"
import Loader from "react-loaders"

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const SplitAbout = "À propos de moi".split("")

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 3000)
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={SplitAbout}
            idx={15}
          />
        </h1>
        <p>
          Je suis un développeur Web Full-Stack passionné à la recherche d'un
          emploi dans une entreprise qui, idéalement, appliquent les dernières
          technologies sur des projets ambitieux et variés en Suisse.
        </p>
        <p>
          Au cours de mon parcours, j’ai acquis des compétences comme
          l’autonomie, la rigueur, l’ouverture d’esprit, le travail en équipe
          pour ne citer qu’eux. Mais aussi, j’ai appris à manipuler les langages
          html5, css3, Sass, Javascript, React. Un peu de python pour m’amuser
          ainsi que Scratch. J’ai également travaillé avec les bases de données
          comme MySQL puis MongoDB et dernièrement avec le CMS Wordpress par
          curiosité et selon les besoins client.
        </p>
        <p>
          Etant dans un domaine en constante évolution mais aussi féru de
          technologie, il m'est essentiel de poursuivre ma veille technologique
          afin d’être porteur de solutions novatrices.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faSass} color="#ce689a" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
      <Loader type="pacman" />
      </>
  )
}

export default About
