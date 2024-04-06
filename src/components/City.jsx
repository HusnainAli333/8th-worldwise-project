import { useEffect } from "react";
import { useCities } from "../context/CitiesContext";
import styles from "../css/components/City1.module.css";
import { useParams } from "react-router-dom";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const { getCity, state } = useCities();

  const navigate = useNavigate();
  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span
            className={`flag-icon flag-icon-${state.currentCity.emoji}`}
            title={state.currentCity.emoji}
          ></span>
          {state.currentCity.cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {state.currentCity.cityName} on</h6>
        <p>{formatDate(state.currentCity.date || null)}</p>
      </div>

      {state.currentCity.notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{state.currentCity.notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${state.currentCity.cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {state.currentCity.cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <Button
          type="back"
          onclick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          &larr; back
        </Button>
      </div>
    </div>
  );
}

export default City;
