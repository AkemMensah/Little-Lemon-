import { lemonWord } from "../images";
import headerStyles from "../styles/header.css";

function Nav() {
  return (
    <nav className="navlinks">
      <img
        alt="little-Lemon"
        className="app-logo"
        width="150"
        src={lemonWord}
      />
      <input type="search" placeholder="Search item..." />
      <button>Search</button>

      <ul>
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
          <a href="./orders.html">OrderOnline</a>
        </li>
        <li>
          <a href="./login.html">Login</a>
        </li>
      </ul>
    </nav>
  );
}

function Heading() {
  return (
    <div className="app-header">
      <p style={{ color: "green" }}>Welcome to Little Lemon Restaurant!</p>
      <Nav />
    </div>
  );
}

export default Heading;
