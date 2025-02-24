import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <h1>📚 Online Library</h1>
      <ul className="nav-Items">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Browse Books</Link></li>
        <li><Link to="/add-book">Add Book</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
