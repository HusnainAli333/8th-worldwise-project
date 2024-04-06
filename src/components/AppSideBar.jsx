import { Outlet } from "react-router-dom";

import styles from "../css/components/AppSideBar.module.css";
import Logo from "../components/Logo";
import AppNav from "./AppNav";
export default function AppSideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}
