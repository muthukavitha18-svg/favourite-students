import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import Navbar from "./components/Navbar";
import StudentListPage from "./pages/StudentListPage";
import FavouritesPage from "./pages/FavouritesPage";

function App() {
  return (
   
    <StudentProvider>
    
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navbar />

          <Routes>
            <Route path="/" element={<StudentListPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Routes>

        </div>
        
      </BrowserRouter>

    </StudentProvider>
  );
}

export default App;
