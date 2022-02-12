import NavigationTile from "../Navigation";
import styles from "./styles.css";

export default function Header() {
  return (
    <nav>
      <div className="top-nav">
        <NavigationTile title="About" />
        <NavigationTile title="Contact" />
        <NavigationTile title="Portfolio" />
        <NavigationTile title="Resume" />
      </div>
    </nav>
  );
}
