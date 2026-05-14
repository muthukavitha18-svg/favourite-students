🌟 Favourite Student List – React Project

A responsive React JS application that allows users to manage their favourite students using React Router and useContext for global state management.

⭐ Live Demo

GitHub link: https://github.com/muthukavitha18-svg/favourite-students

 Vercel link: https://favourite-students-rho.vercel.app/

📸 Preview

📌 Project Description

This project is a Favourite Student List Application built using React JS.

 The application displays a list of students dynamically and allows users to add or remove students from their favourites list.

The main goal of this project is to practice important React concepts such as:

React Router navigation 
Global state management using useContext 
Dynamic rendering with map() 
Conditional rendering 
Component-based architecture 
🎯 Objective

Build a reusable and scalable React application focusing on:

Routing using React Router 
Global state management with useContext 
Dynamic rendering using map() 
Conditional rendering 
Component reusability 
Responsive UI design 
🔑 Key Features

🎓 Student List Page

Displays all students dynamically 
Each student card contains: 
Student Name 
Roll Number / ID 
Add to Favourite button 
❤️ Favourite Students Page

Displays all favourite students 
Allows removing students from favourites 
Shows message when no favourites are added 
Example:

No favourite students added yet

🌐 React Router Navigation

Multiple pages created using React Router 
Navigation handled using <Link> component 
Pages switch without reloading 
Pages:

Student List Page 
Favourite Students Page 
🔁 Dynamic Rendering with map()

Student data rendered dynamically using map() 
Clean and scalable UI structure 
Easy to add more students 
🌍 Global State Management using useContext

Favourite students managed globally 
createContext() used for context creation 
useContext() used to access and update favourites 
Benefits:

Avoids prop drilling 
Easy state sharing between pages 
🚫 Duplicate Prevention

Prevents adding the same student multiple times 
Checks existing favourites before adding 
🎨 Responsive UI Design

Responsive card layout using CSS / Tailwind CSS 
Layout automatically adjusts for different devices 
Screen Size

Layout

 

Desktop

3–4 columns

Tablet

2 columns

Mobile

1 column

🧩 Clean Component Structure

App.js → Main Routing 
StudentListpage.js → Student display page 
FavouritePage.js → Favourite students page 
StudentContext.js → Global state management 
Navbar.js → Navigation links 
StudentCard.js → Reusable student component 
Separation improves:

Readability 
Maintainability 
Scalability 
🛠️ Technologies Used

Technology

Usage

 

React JS

Component-based UI

React Router DOM

Routing

useContext

Global state management

JavaScript

Logic & rendering

HTML5

Structure

CSS3 / Tailwind CSS

Styling

Flexbox / Grid

Responsive layout

📁 Project Structure

favourite-student-list/

 │

 ├── src/

 │   ├── components/

 │   │   ├── Navbar.js

 │   │   ├── StudentCard.js

 │   │   

 │   │

 │   ├── pages/

 │   │   └── FavouritePage.js

 │   │    └── StudentListpage.js

││   

 │   ├── context/

 │   │   └── StudentContext.js

 │   │

 │   ├── App.js

 │   ├── App.css

 │   └── index.js

 │

 ├── public/

 │

 ├── package.json

 └── README.md

💡 What I Learned

⚛️ React Concepts

React Router setup pannrathu 
<Link> use panni navigation create pannrathu 
createContext() use pannrathu 
useContext() use panni global data access pannrathu 
map() use panni dynamic rendering pannrathu 
Conditional rendering implement pannrathu 
🎨 UI & Styling

Responsive layout create pannrathu 
Card-based UI design 
Flexbox/Grid use pannrathu 
Clean component structure maintain pannrathu 
🚀 Future Improvements

Search student functionality 
Filter favourite students 
Student profile page 
Local storage support 
Dark mode 
Animation effects 
📜 License

This project is created for learning purposes only.
