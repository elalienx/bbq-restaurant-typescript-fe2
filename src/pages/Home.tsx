// NPM package
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
      <p>
        Come and see all the kind of meats we proudly prepare:{" "}
        <Link to="menu">View menu</Link>
      </p>
    </div>
  );
}
