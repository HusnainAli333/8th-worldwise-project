import { NavLink } from "react-router-dom";
import Styles from "../css/components/PageNav.module.css";
import Logo from "../components/Logo";

function PageNav() {
  return (
    <nav className={Styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/Product">Product</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/Pricing">Pricing</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/Login" className={Styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
