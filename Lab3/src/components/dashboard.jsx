import PropTypes from "prop-types";
import { useStudent } from "../context/StudentContext.jsx";

function DashboardHeader({ favouriteCount }) {
  const { toggleTheme } = useStudent();

  return (
    <header className="header">
      <h1>Student Dashboard</h1>
      <p>Favourites: {favouriteCount}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <nav>
        <a href="#">Home</a>
        <a href="#">Students</a>
        <a href="#">Courses</a>
      </nav>
    </header>
  );
}

DashboardHeader.propTypes = {
  favouriteCount: PropTypes.number.isRequired,
};

export default DashboardHeader;