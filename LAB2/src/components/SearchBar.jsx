import PropTypes from "prop-types";

export default function SearchBar({query, setQuery}) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search students..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
    query: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired,
};
