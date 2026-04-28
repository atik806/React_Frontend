import DashboardHeader from "./components/dashboard";
import StudentCard from "./components/student_card";
import StatBadge from "./components/stat_badge";
import "./App.css";

function App() {
  const students = [
    {
      name: "Atik Rahman",
      id: "S101",
      avatar: "https://i.pravatar.cc/150?img=1",
      gpa: 3.8,
      major: "Computer Science",
      courses: [
        { name: "AI", color: "#6366f1" },
        { name: "ML", color: "#22c55e" },
      ],
    },
    {
      name: "Sara Khan",
      id: "S102",
      avatar: "https://i.pravatar.cc/150?img=2",
      gpa: 3.6,
      major: "Software Engineering",
      courses: [
        { name: "React", color: "#06b6d4" },
        { name: "DBMS", color: "#f59e0b" },
      ],
    },
    {
      name: "Tanvir Ahmed",
      id: "S103",
      avatar: "https://i.pravatar.cc/150?img=3",
      gpa: 3.9,
      major: "Data Science",
      courses: [
        { name: "Python", color: "#10b981" },
        { name: "Stats", color: "#ef4444" },
      ],
    },
    {
      name: "Nusrat Jahan",
      id: "S104",
      avatar: "https://i.pravatar.cc/150?img=4",
      gpa: 3.7,
      major: "Information Systems",
      courses: [
        { name: "Networking", color: "#8b5cf6" },
        { name: "Security", color: "#ec4899" },
      ],
    },
  ];

  return (
    <>
      <DashboardHeader />

      <div className="container">
       
        <div className="flex">
          <StatBadge label="Total Students" value={students.length} />
          <StatBadge label="Avg GPA" value="3.75" />
        </div>

        
        <div className="grid" style={{ marginTop: "20px" }}>
          {students.map((student, index) => (
            <StudentCard key={index} {...student} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;