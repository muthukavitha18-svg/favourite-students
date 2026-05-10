import React from "react";
import { useStudent } from "../context/StudentContext";

const StudentCard = ({ student }) => {
  const { favourites, addFavourite } = useStudent();


  const isFavourite = favourites.some((s) => s.id === student.id);

  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-3 border border-gray-100 hover:shadow-md transition">
      

     
      <div>
        <h3 className="font-semibold text-gray-800 text-lg">{student.name}</h3>
        <p className="text-gray-500 text-sm">Roll No: {student.rollNo}</p>
        <p className="text-gray-400 text-xs">{student.department}</p>
      </div>

     
      <button
        onClick={() => addFavourite(student)}
        disabled={isFavourite}
        className={`mt-auto py-2 px-4 rounded-lg text-sm font-medium transition ${
          isFavourite
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-indigo-600 text-white hover:bg-indigo-700"
        }`}
      >
        {isFavourite ? "✓ Added" : "⭐ Add to Favourite"}
      </button>
    </div>
  );
};

export default StudentCard;
