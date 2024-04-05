import { NavLink } from "react-router-dom";
import Styles from "../css/PageNav.module.css";
import Logo from "../components/Logo";

function PageNav() {
  return (
    <nav className={Styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/">Home Page</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/Product">Product</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/Pricing">Pricing</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/Login">Login</NavLink>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
