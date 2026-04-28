import PropTypes from "prop-types";
import { useStudent } from "../context/StudentContext.jsx";

function StudentCard({ id, name, avatar, gpa, major, courses }) {
  const { toggleFavourite, favourites, removeStudent } = useStudent();
  const isFavorite = favourites.includes(id);

  return (
    <div className={`card ${isFavorite ? "fav" : ""}`}>
      <img src={avatar} alt={name} className="avatar" />
      <h2>{name}</h2>
      <p>{major}</p>
      <p>GPA: {gpa}</p>

      <button onClick={() => toggleFavourite(id)}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>

      <button onClick={() => removeStudent(id)}>Remove Student</button>
    </div>
  );
}

StudentCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  gpa: PropTypes.number.isRequired,
  major: PropTypes.string.isRequired,
  courses: PropTypes.array.isRequired,
};

export default StudentCard;