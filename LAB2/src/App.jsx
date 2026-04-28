import DashboardHeader from "./components/dashboard";
import StudentCard from "./components/student_card";
import StatBadge from "./components/stat_badge";
import "./App.css";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";



function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [shortType, setShortType] = useState("default");
  const [favourits, setFavourits] = useState([]);


  useEffect(() => {
    setTimeout(() => {
      const data = [
        {
          name: "Atik",
          id: "s1",
          avatar: "https://i.pravatar.cc/150?img=1",
          gpa: 2.88,
          major: "CSE",
          courses:[
            { name: "AI", color: "#6366f1" },
            { name: "ML", color: "#22c55e" },
          ]
        },

        {
          name: "Tony Stark",
          id: "s2",
          avatar: "https://i.pravatar.cc/150?img=2",
          gpa: 3.2,
          major: "CSE",
          courses:[
            { name: "ADV Web tech", color: "#6366f1" },
            { name: "ML", color: "#22c55e" },
          ]
        },
        {
          name: "Thor Odinson",
          id: "s3",
          avatar: "https://i.pravatar.cc/150?img=3",
          gpa: 3.5,
          major: "CSE",
          courses:[
            { name: "ADV Web tech", color: "#6366f1" },
            { name: "ML", color: "#22c55e" },
          ]
        },

        {
          name: "Bruce Wayne",
          id: "s4",
          avatar: "https://i.pravatar.cc/150?img=4",
          gpa: 3.8,
          major: "CSE",
          courses:[
            { name: "ADV Web tech", color: "#6366f1" },
            { name: "ML", color: "#22c55e" },
          ]
        }


        
      ];
      setStudents(data);
      setLoading(false);
    }, 1000);
  }, []);

  const filterStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase())|| student.major.toLowerCase().includes(query.toLowerCase())
   
  );
   const sortedStudents = [...filterStudents].sort((a, b) => {
    if (shortType === "name") {
      return a.name.localeCompare(b.name);
    }
    if (shortType === "gpa") {
      return b.gpa - a.gpa;
    }
    return 0;
  });

  const toggleFavourit = (id) => {
    setFavourits((prev) => {
      return prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id];
    });
  }
  

  

  return (
    <>
      <div className="app">
        <DashboardHeader favouriteCount={favourits.length} />
        <SearchBar query = {query} setQuery = {setQuery} />
        <SortControls setShortType={setShortType} />

        {
          loading? (
            <div className="loading">
              <p>Loading students...</p>
            </div>):(
              <div className="student-grid">
                {sortedStudents.map((student) => (
                  <StudentCard key={student.id} {...student} isFavorite={favourits.includes(student.id)} toggleFavorite={toggleFavourit} />
                ))}
              </div>
            )
          
        }
      </div>
    </>
  );
}

export default App;