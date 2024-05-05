import { NavLink, Outlet } from "react-router-dom"
import './rootLayout.css'
import logo from '../assets/logoipsum-253.svg'
import SideBar from "./SideBar/SideBar"


const RootLayout = () => {
  return (
    <div className="root-layout">
      <img className="company-logo" src={logo} alt="company-logo" />
      <header className="top-header">
      </header>
      <SideBar />
      <main> 
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout