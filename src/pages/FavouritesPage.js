import React from "react";
import { Link } from "react-router-dom";
import { useStudent } from "../context/StudentContext";

const FavouritesPage = () => {
 
  const { favourites, removeFavourite } = useStudent();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Favourite Students
        <span className="ml-2 text-sm font-normal text-gray-500">
          ({favourites.length} selected)
        </span>
      </h2>

     
      {favourites.length === 0 ? (
        
        <div className="text-center py-20 text-gray-400">
          <p className="text-xl font-medium">No favourite students added yet.</p>
          <p className="text-sm mt-2">Go to Student List and click "Add to Favourite"</p>
          <Link
            to="/"
            className="mt-6 inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-indigo-700 transition"
          >
            Go to Student List
          </Link>
        </div>
      ) : (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favourites.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-xl shadow p-5 flex flex-col gap-3 border border-yellow-200"
            >
             
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">{student.name}</h3>
                <p className="text-gray-500 text-sm">Roll No: {student.rollNo}</p>
                <p className="text-gray-400 text-xs">{student.department}</p>
              </div>
            
              <button
                onClick={() => removeFavourite(student.id)}
                className="mt-auto py-2 px-4 rounded-lg text-sm font-medium bg-red-100 text-red-600 hover:bg-red-200 transition"
              >
                🗑 Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritesPage;
