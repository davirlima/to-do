import styles from "./Header.module.css";
import rocketImage from "../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.icon} src={rocketImage} alt="rocket symbol" />
      <h1 className={styles.title}>
        to<span>do</span>
      </h1>
    </header>
  );
}
