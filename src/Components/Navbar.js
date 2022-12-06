import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-bar">
      <h3>
        <Link to="/myhome">Home</Link>
      </h3>
      <h3>
        <Link to="/movieslists">Movie List</Link>
      </h3>
    </div>
  );
};
export default Navbar;
