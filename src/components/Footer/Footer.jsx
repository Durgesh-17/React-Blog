import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* <div classNameName="Footer">Footer</div> */}

      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            <span>Blogger</span>
          </h3>

          <p className="footer-links">
            <Link to={"/React-Blog/"}>Home </Link>|
            <Link to={"/React-Blog/startups"}>startups </Link>|
            <Link to={"React-Blog/entrepreneurship"}>Entrepreneurship</Link>
          </p>

          <p className="footer-company-name">
            Copyright © 2023 <strong>Blogger</strong> All rights reserved
          </p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Powai</span>
              Bombay
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+91 74**9**258</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:xyz@gmail.com">xyz@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About us</span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, illo
            rem commodi error perferendis voluptate tempore iusto fugit dolores
            sint.
          </p>
          <div className="footer-icons">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
