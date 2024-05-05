import "./SideBar.css";
import { FaArrowRight } from "react-icons/fa";
import { SideBarLinks } from './SideBarLinks'
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="side-bar" >
      <nav>
        <ul className="nav_links" role="list">
          {SideBarLinks.map((item, index) => {
            return (
              <li key={index} className="link-item" ><FaArrowRight /><NavLink key={index} to={item.path} >{item.title}</NavLink></li>
            )
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
