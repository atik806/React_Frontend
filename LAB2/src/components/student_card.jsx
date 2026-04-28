import PropTypes from "prop-types";
import CourseTag from "./course_tag";
import StatBadge from "./stat_badge";

function StudentCard({ 
  name,
  id,
  avatar,
  gpa,
  major,
  courses,
  isFavorite,
  toggleFavorite,
 }) {
  return (
    <div className="card">
      <img src={avatar} alt={name} className="avatar" />

      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Major: {major}</p>

      <div className="stats">
        <StatBadge label="GPA" value={gpa} />
        <StatBadge label="Courses" value={courses.length} />
      </div>

      <div className="courses">
        {courses.map((course, index) => (
          <CourseTag key={index} courseName={course.name} />
        ))}
      </div>

      <button onClick={() => toggleFavorite(id)}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>

    </div>
  );
}

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  gpa: PropTypes.number.isRequired,
  major: PropTypes.string.isRequired,
  courses: PropTypes.array.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default StudentCard;