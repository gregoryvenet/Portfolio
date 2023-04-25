import { useEffect } from "react"
import LogoTitle from "../../assets/images/Logo G noir recadré.webp"
import { Link } from "react-router-dom"
import "./index.scss"
import { useState } from "react"
import AnimatedLetters from "../../components/AnimatedLetters"
import Logo from "../../components/Logo"
import Loader from "react-loaders"

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const SplitPoliteness = "Bonjour,".split("")
  const SplitPresentment = "je suis".split("")
  const SplitName = "régory,".split("")
  const SplitJob = "Développeur Web.".split("")

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 5000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={SplitPoliteness}
              idx={12}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={SplitPresentment}
              idx={20}
            />
            <img src={LogoTitle} alt="logo G de Grégory" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={SplitName}
              idx={27}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={SplitJob}
              idx={34}
            />
          </h1>
          <h2>Développeur Full-Stack / Javascript / React</h2>
          <Link to="/contact" className="flat-button">
            ME CONTACTER
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
