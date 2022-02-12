import { Link } from "react-router-dom";
import "./styles.css";
export default function NavigationTile({ title, selectedTab, setSelectedTab }) {
  return (
    <div>
      {selectedTab === title ? (
        <Link
          className="selectedNavTile"
          to={`/${title}`}
          onClickCapture={() => setSelectedTab(title)}
        >
          {title}
        </Link>
      ) : (
        <Link
          className="navigationTiles"
          to={`/${title}`}
          onClickCapture={() => setSelectedTab(title)}
        >
          {title}
        </Link>
      )}
    </div>
  );
}
