import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar"
import "./index.scss"
import { AlertBuild } from "../Alert"

const Layout = () => {
  return (
    <>
      <Sidebar />
      <AlertBuild />
      <div className="page">
        <span className="top-tag-html">&lt;html&gt;</span>
        <br />
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </>
  )
}

export default Layout
