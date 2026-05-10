import React from "react";
import StudentCard from "../components/StudentCard";

// Student data array of objects
const students = [
  { id: 1, name: "Arun Kumar",    rollNo: "CS001", department: "Computer Science" },
  { id: 2, name: "Priya Devi",    rollNo: "CS002", department: "Computer Science" },
  { id: 3, name: "Ravi Shankar",  rollNo: "IT003", department: "Information Tech" },
  { id: 4, name: "Kavitha R",     rollNo: "IT004", department: "Information Tech" },
  { id: 5, name: "Manoj P",       rollNo: "EC005", department: "Electronics" },
  { id: 6, name: "Sneha M",       rollNo: "EC006", department: "Electronics" },
  { id: 7, name: "Dinesh K",      rollNo: "ME007", department: "Mechanical" },
  { id: 8, name: "Lakshmi S",     rollNo: "ME008", department: "Mechanical" },
];

const StudentListPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        All Students
        <span className="ml-2 text-sm font-normal text-gray-500">({students.length} students)</span>
      </h2>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default StudentListPage;
