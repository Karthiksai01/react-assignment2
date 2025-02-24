import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="homepage">
      <h2 className="headline">Welcome to the Online Library</h2>
      <p>"Step into a world of endless stories and boundless knowledge. Uncover adventures, mysteries, and wisdom—one page at a time"</p>
      <p>Find your favorite books here!</p>
      <Link to="/books">Browse Books</Link>
    </div>
  );
};

export default Home;
