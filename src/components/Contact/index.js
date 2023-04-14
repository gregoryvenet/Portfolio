import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useRef, useState } from "react"
import { Loader } from "react-loaders"
import emailjs from "@emailjs/browser"
import { AlertEmailError, AlertEmailSuccess } from "../Alert"
import StreetMap from "../StreetMap"

const Contact = () => {
  const splitContact = "Contactez-moi".split("")
  const [letterClass, setLetterClass] = useState("text-animate")
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_MY_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        refForm.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          AlertEmailSuccess()
          window.location.reload(false)
        },
        (error) => {
          AlertEmailError()
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={splitContact}
              idx={15}
            />
          </h1>
          <p>
            Je suis actuellement à la recherche d'une offre en Suisse dans les
            cantons de Genève, Vaud, Neuchâtel, Valais et Fribourg.
          </p>
          <p>
            Toutefois, si vous avez d'autres demandes ou questions, n'hésitez
            pas non plus à me contacter en utilisant le formulaire ci-dessous.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Nom" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="sujet"
                    placeholder="Sujet"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    className="flat-button"
                    type="submit"
                    value="ENVOYER"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Grégory VENET
          <br />
          Avenue Victor-Raffy 46a
          <br />
          1012 Lausanne Vd
          <br />
          Suisse
          <br />
          <span>gregvenet@gmail.com</span>
        </div>
        <div className="map-wrap">
          <StreetMap />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
