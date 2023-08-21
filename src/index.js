// import { useState } from "react";
import ReactDOM from "react-dom/client";
// import Gallery from "./gallery";
// import "./index.css";
// import WeatherComponet from "./form";
import RecipeSearch from "./RecipeApp";
// import { Users } from "./gallery";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/about";
// import Contact from "./pages/Contact";
// import Calculator from "./pages/Blogs";
// import Users from "./newapp.js";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/About">About Us</Link>
//         </li>
//         <li>
//           <Link to="/Contact">Contact Us</Link>
//         </li>
//       </ul>

//       <Routes>
//         <Route exact path="/" element={<Home />}></Route>
//         <Route exact path="/About" element={<About />}></Route>
//         <Route exact path="/Contact" element={<Contact />}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
// const divstyle = {
//   display: "flex",
//   flexWrap: "wrap",
//   margin: "10px",
//   // justifyContent: "space-around",
//   border: "3px solid #ffcccc",
//   borderRadius: "0 28px 0 28px",
//   backgroundColor: "#606C5D",
// };
// export default function UsersList() {
//   return (
//     <>
//       <h1
//         style={{
//           textAlign: "center",
//           color: "#33cccc",
//         }}
//       >
//         Users Profile Data
//         <hr></hr>
//       </h1>

//       {Users.map((names) => (
//         <div key={names.id} style={divstyle} className="main-div">
//           <img
//             src={names.profile}
//             alt={names.profile}
//             width={"100px"}
//             height={"100px"}
//             style={{
//               borderRadius: "50px",
//               // objectFit: "contain",
//               margin: "15px",
//             }}
//           />
//           <div
//             style={{
//               width: "60%",
//               minWidth: "cal(60%-600px)",
//               margin: "10px",
//               fontFamily: "fantasy",
//               color: "#fff",
//             }}
//           >
//             <h3>ID Number : {names.id}</h3>
//             <h3>Name : {names.name}</h3>
//             <h3>Role : {names.role}</h3>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }
ReactDOM.createRoot(document.getElementById("root")).render(<RecipeSearch />);
// root.render(<App />);
