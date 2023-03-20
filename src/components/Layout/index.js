import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import Sidebar from "../Sidebar/"
import "./index.scss"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from "react-toastify"

const Layout = () => {
  useEffect(() => {
    toast.warning(
      "Patience, Portfolio en construction! De nouvelles fonctionnalités vont être ajoutées ces prochains jours. Vous pouvez me contacter à la page contact.",
      {
        position: "top-center",
        autoClose: false,
        theme: "dark",
      }
    )
  }, [])
  return (
    <div className="App">
      <ToastContainer />
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
