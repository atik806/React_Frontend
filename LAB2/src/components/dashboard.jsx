import PropTypes from "prop-types";

function DashboardHeader({ favouriteCount }) {
  return (
    <header className="header">
      <h1>Student Dashboard</h1>
      <p>Favourits: {favouriteCount} </p>

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