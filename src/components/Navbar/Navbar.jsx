import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/React-Blog" className="nav-logo">
            Blogger
            <i className="far fa-edit"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/React-Blog/"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/React-Blog/startups"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Startups
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/React-Blog/entrepreneurship"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Entrepreneurship
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
