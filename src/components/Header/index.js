import NavigationTile from "../Navigation";
import "./styles.css";

export default function Header({ selectedTab, setSelectedTab }) {
  return (
    <nav>
      <div className="top-nav">
        <NavigationTile
          title="About"
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        />
        <NavigationTile
          title="Contact"
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        />
        <NavigationTile
          title="Portfolio"
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        />
        <NavigationTile
          title="Resume"
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        />
      </div>
    </nav>
  );
}
