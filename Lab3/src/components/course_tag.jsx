import PropTypes from "prop-types";

function CourseTag({ courseName }) {
  return (
    <span className="tag">
      {courseName}
    </span>
  );
}

CourseTag.propTypes = {
  courseName: PropTypes.string.isRequired,
};

export default CourseTag;