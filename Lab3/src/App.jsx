import DashboardHeader from "./components/dashboard";
import StudentCard from "./components/student_card";
import "./App.css";
import { useEffect, useState } from "react";
import { useStudent } from "./context/StudentContext.jsx";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";

function App() {
  const { students, toggleFavourite, favourites } = useStudent();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="app">
        <DashboardHeader favouriteCount={favourites.length} />
        <SearchBar />
        <SortControls />

        {loading ? (
          <div className="loading">
            <p>Loading students...</p>
          </div>
        ) : (
          <div className="student-grid">
            {students.map((student) => (
              <StudentCard
                key={student.id}
                {...student}
                isFavorite={favourites.includes(student.id)}
                toggleFavorite={toggleFavourite}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;