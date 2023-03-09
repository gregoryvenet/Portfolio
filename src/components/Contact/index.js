import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useRef, useState } from "react"
import { Loader } from "react-loaders"
import emailjs from "@emailjs/browser"

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
        "service_p8f2kpb",
        "template_oyqdggk",
        refForm.current,
        "vknSISy7aewzAmIdF"
      )
      .then(
        (result) => {
          alert("Message envoyé avec succès!")
			  console.log(result.text)
			  window.location.reload(false)
        },
        (error) => {
			console.log(error.text)
			alert("Echec d'envoi du message, veuillez réessayer s'il vous plait.")
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
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
