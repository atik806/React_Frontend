import PropTypes from "prop-types";
import { useStudent } from "../context/StudentContext.jsx";

export default function SearchBar() {
  const { query, setQuery } = useStudent();

  return (
    <div className="search-bar">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search........"
        className="search"
      />
    </div>
  );
}