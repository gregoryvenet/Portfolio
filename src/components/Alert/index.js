
import "./index.scss";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from "react-toastify"

export const AlertBuild = () => {
    toast.warning(
      "Patience, Portfolio en construction! Des mises à jour vont être ajoutées ces prochains jours. Vous pouvez me contacter à la page contact.",
      {
        position: "top-center",
        autoClose: false,
        theme: "dark",
      }
    )
  return <ToastContainer />
}

export const AlertEmailSuccess = () => {
    toast.success("Message envoyé avec succès !👌", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  return <ToastContainer />
}

export const AlertEmailError = () => {
    toast.error("Oups, il y a un soucis! Message non envoyé...🙈", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  return <ToastContainer />
}

export const AlertGps = () => {
  toast.warning("Géolocalisation non pris en charge par votre navigateur...🤷‍♂️", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  })
  return <ToastContainer />
}
