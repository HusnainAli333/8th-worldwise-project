/* eslint-disable react/prop-types */
import styles from "../css/components/CountryList.module.css";
import styles2 from "../css/components/Country.module.css";
import Spinner from "../components/Spinner";
import { useCities } from "../context/CitiesContext";
export default function CountryList() {
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
  const countries = state.citiesList.reduce((p, c) => {
    if (!p.map((value) => value.country).includes(c.country)) {
      return [...p, { country: c.country, emoji: c.emoji }];
    } else {
      return p;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries?.map((value, index) => (
        <Country value={value} key={index} />
      ))}
    </ul>
  );
}

function Country({ value }) {
  const tolowercase = value.emoji.toLowerCase();

  return (
    <li className={styles2.countryItem}>
      <span
        className={`flag-icon flag-icon-${tolowercase}`}
        title={value.emoji}
      ></span>

      <span>{value.country}</span>
    </li>
  );
}
