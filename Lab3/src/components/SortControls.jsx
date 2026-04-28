import { useStudent } from "../context/StudentContext.jsx";

function SortControls() {
  const { setSortType } = useStudent();
  return (
    <div className="sort">
      <button onClick={() => setSortType("default")}>Sort by Default</button>
      <button onClick={() => setSortType("name")}>Sort by Name</button>
      <button onClick={() => setSortType("gpa")}>Sort by GPA</button>
    </div>
  );
}

export default SortControls;