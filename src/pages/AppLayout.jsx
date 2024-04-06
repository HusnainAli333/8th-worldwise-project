import AppMap from "../components/AppMap";
import AppSideBar from "../components/AppSideBar";
import styles from "../css/Pages/AppLayout.module.css";
export default function AppLayout() {
  return (
    <div className={styles.app}>
      <AppSideBar />
      <AppMap />
    </div>
  );
}
