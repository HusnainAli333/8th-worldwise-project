import { useSearchParams, useNavigate } from "react-router-dom";
import styles from "../css/components/AppMap.module.css";
export default function AppMap() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("Form")}>
      <h1>postion</h1>
      <h2>
        {lat} , {lng}
      </h2>
    </div>
  );
}
