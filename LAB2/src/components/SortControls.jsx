import PropTypes from "prop-types"


function SortControls({setSortType}){
    return(
        <div className="sort">
            <button onClick={() => setSortType("default")}>Sort by Default</button>
            <button onClick={() => setSortType("name")}>Sort by Name</button>
            <button onClick={() => setSortType("gpa")}>Sort by GPA</button>

        </div>
    )
}

SortControls.propTypes = {
    setSortType: PropTypes.func.isRequired,
};
export default SortControls;