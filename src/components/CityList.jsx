/* eslint-disable react/prop-types */
import styles from "../css/components/CityList.module.css";
import styles2 from "../css/components/City.module.css";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { useCities } from "../context/CitiesContext";
export default function CityList() {
  const { state } = useCities();

  if (state.status === "loading") {
    return <Spinner />;
  }
  if (!state.citiesList.length)
    return (
      <>
        <h2> ✋ No cities Added yet </h2>
        <h3>Add Your first city by clicking on map ☝️</h3>
      </>
    );

  return (
    <ul className={styles.cityList}>
      {state.citiesList?.map((value) => (
        <City value={value} key={value.id} />
      ))}
    </ul>
  );
}

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function City({ value }) {
  const tolowercase = value.emoji.toLowerCase();
  const { state } = useCities();
  return (
    <Link
      to={`${value.id}?lat=${value.position.lat}&lng=${value.position.lng}`}
      className={`${styles2.cityItem} ${
        value.id === state.currentCity.id ? styles2["cityItem--active"] : " "
      } `}
    >
      <span
        className={`flag-icon flag-icon-${tolowercase}`}
        title={value.emoji}
      ></span>
      <h3 className={styles2.name}>{value.cityName}</h3>
      <time className={styles2.date}>({formatDate(value.date)})</time>
    </Link>
  );
}
