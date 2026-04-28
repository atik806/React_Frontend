import { createContext, useState, useEffect, useContext } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([
    {
      name: "Atik",
      id: "s1",
      avatar: "https://i.pravatar.cc/150?img=1",
      gpa: 2.88,
      major: "CSE",
      courses: [
        { name: "AI", color: "#6366f1" },
        { name: "ML", color: "#22c55e" },
      ],
    },
    {
      name: "Tony Stark",
      id: "s2",
      avatar: "https://i.pravatar.cc/150?img=2",
      gpa: 3.2,
      major: "CSE",
      courses: [
        { name: "ADV Web tech", color: "#6366f1" },
        { name: "ML", color: "#22c55e" },
      ],
    },
    {
      name: "Thor Odinson",
      id: "s3",
      avatar: "https://i.pravatar.cc/150?img=3",
      gpa: 3.5,
      major: "CSE",
      courses: [
        { name: "ADV Web tech", color: "#6366f1" },
        { name: "ML", color: "#22c55e" },
      ],
    },
    {
      name: "Bruce Wayne",
      id: "s4",
      avatar: "https://i.pravatar.cc/150?img=4",
      gpa: 3.8,
      major: "CSE",
      courses: [
        { name: "ADV Web tech", color: "#6366f1" },
        { name: "ML", color: "#22c55e" },
      ],
    },
  ]);
  const [query, setQuery] = useState("");
  const [sortType, setSortType] = useState("default");
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const Saved = JSON.parse(localStorage.getItem("students"));
    if (Saved) {
      setStudents(Saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(query.toLowerCase()) ||
      student.major.toLowerCase().includes(query.toLowerCase())
  );

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortType === "name") return a.name.localeCompare(b.name);
    if (sortType === "gpa") return b.gpa - a.gpa;
    return 0;
  });

  const toggleFavourite = (id) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  const removeStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <StudentContext.Provider
      value={{
        students: sortedStudents,
        rawStudents: students,
        query,
        setQuery,
        sortType,
        setSortType,
        favourites,
        toggleFavourite,
        addStudent,
        removeStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  return useContext(StudentContext);
}