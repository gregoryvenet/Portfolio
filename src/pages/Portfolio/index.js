import "./index.scss"
import AnimatedLetters from "../../components/AnimatedLetters"
import { useEffect, useState } from "react"
import axios from "axios"
import Loader from "react-loaders"

const Portfolio = () => {
  const SplitPortfolio = "Portfolio".split("")
  const [letterClass, setLetterClass] = useState("text-animate")
  const UserNameGithub = process.env.REACT_APP_USERNAME_GITHUB
  const AccessTokenGithub = process.env.REACT_APP_GITHUB_KEY

  const [totalViews, setTotalViews] = useState(0)
  const [totalClones, setTotalClones] = useState(0)
  const [totalRepos, setTotalRepos] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 3000)
  }, [])

  useEffect(() => {
    // Utiliser axios pour récupérer la liste des répertoires.
    axios
      .get(
        `https://api.github.com/users/${UserNameGithub}/repos?per_page=1000`,
        {
          headers: {
            Authorization: `Bearer ${AccessTokenGithub}`,
          },
        }
      )
      .then((response) => {
        setTotalRepos(response.data.length)
        const repos = response.data.map((repo) => repo.full_name)
        // Boucle pour chaque repo, en utilisant l'API de trafic de Github pour récupérer les informations de trafic.
        for (const repo of repos) {
          axios
            .get(`https://api.github.com/repos/${repo}/traffic/views`, {
              headers: {
                Authorization: `Bearer ${AccessTokenGithub}`,
              },
            })
            .then((response) => {
              setTotalViews((prevViews) => prevViews + response.data.count)
            })
            .catch((error) => console.error(error))

          axios
            .get(`https://api.github.com/repos/${repo}/traffic/clones`, {
              headers: {
                Authorization: `Bearer ${AccessTokenGithub}`,
              },
            })
            .then((response) => {
              setTotalClones((prevClones) => prevClones + response.data.count)
            })
            .catch((error) => console.error(error))
        }
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={SplitPortfolio}
            idx={9}
          />
        </h1>
        <h2 className="github-title">Données en live Github :</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre de repositories</th>
              <th>Nombre total de vues</th>
              <th>Nombre total de clonages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{totalRepos}</td>
              <td>{totalViews}</td>
              <td>{totalClones}</td>
            </tr>
          </tbody>
        </table>
        {/* <div>{renderPortfolio()}</div> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
