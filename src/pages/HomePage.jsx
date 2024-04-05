import { Link } from "react-router-dom";
import styles from "../css/HomePage.module.css";
import PageNav from "../components/PageNav";
export default function HomePage() {
  return (
    <main className={styles.homePage}>
      <PageNav />
      <section>
        <h1>
          You travel the world
          <br />
          WorldWise Keeps track of Your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/app" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}