import { lemonWord } from "../images";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";




function Info() {
  return (
    <div className="footer">
      <div className="fLogo">
        <img height="100" width="100" src={lemonWord} alt="lemon" />
      </div>
      <div className="contact">
        <p>Little Lemon</p>
        <p>Chicago</p>
        <p>P.O.Box C348</p>
        <p>Tel: 123-456-7890</p>
        <a href="littlelemon@gmail.com">Email</a>
      </div>

      <div className="links">
        <ul>
          <p>Links</p>
          <li>
            <a href="./index.html">Home</a>
          </li>
          <li>
            <a href="./about.html">About</a>
          </li>
          <li>
            <a href="./menu.html">Menu</a>
          </li>
          <li>
            {" "}
            <a href="./orders.html">Order Online</a>
          </li>
          <li>
            <a href="./login.html">Login</a>
          </li>
        </ul>
      </div>

      <div className="social">
        <ul>
          <p>Follow Us</p>
          <li>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <>
      <Info />
    </>
  );
}

export default Footer;
