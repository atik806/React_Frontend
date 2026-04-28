import { useState } from "react";
import { StudentContext } from "../context/StudentContext";



function addStudentForm(){
    const {addStudent, students} = useContext(StudentContext);
    const [form, setForm] = useState
    ({
        name: "",
    id: "",
    major: "",
    gpa: "",
    courses: "",
    });

    const [error, setError] = useState(""); 
    const [success, setSuccess] = useState("");

    const handelChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        if(!form.name || !form.id || !form.major){
            setError("Please fill in all required fields");
            return;
        }
        if(isNaN(form.id)){
            setError("ID must be a number");
            retuen;

        }

         if (rawStudents.some((s) => s.id === form.id)) {
             setError("ID already exists");
        return;
        }

         if (form.gpa < 0 || form.gpa > 4) {
          setError("GPA must be between 0 and 4");
          return;
    }

    addStudent({
        ...form,
        gpa: parseFloat(form.gpa),
        courses: form.courses.split(","),
        avatar: `https://i.pravatar.cc/150?u=${form.id}`,
    });
     setForm({ name: "", id: "", major: "", gpa: "", courses: "" });
    setError("");
    setSuccess("Student added successfully!");
    setTimeout(() => setSuccess(""), 3000);
    };


    return(
        <form onSubmit={handleSubmit} className="form">
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="id" placeholder="ID" value={form.id} onChange={handleChange} />
      <input name="major" placeholder="Major" value={form.major} onChange={handleChange} />
      <input name="gpa" placeholder="GPA" value={form.gpa} onChange={handleChange} />
      <input name="courses" placeholder="Courses (comma separated)" value={form.courses} onChange={handleChange} />

      <button type="submit">Add Student</button>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </form>
  );



}

export default addStudentForm;