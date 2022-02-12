import { Link } from "react-router-dom";
export default function NavigationTile({ title }) {
  return (
    <div>
      <Link to={`/${title}`}>{title}</Link>
    </div>
  );
}
