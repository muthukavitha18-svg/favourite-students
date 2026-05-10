import React, { createContext, useState, useContext } from "react";


const StudentContext = createContext();


export const StudentProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);


  const addFavourite = (student) => {
    const alreadyAdded = favourites.some((s) => s.id === student.id);
    if (!alreadyAdded) {
      setFavourites([...favourites, student]);
    }
  };

 
  const removeFavourite = (id) => {
    setFavourites(favourites.filter((s) => s.id !== id));
  };

  return (
    <StudentContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </StudentContext.Provider>
  );
};


export const useStudent = () => useContext(StudentContext);
