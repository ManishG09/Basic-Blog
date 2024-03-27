import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar">
        <h1>Blog</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
