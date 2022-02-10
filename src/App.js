import React from "react";
import './App.css';
import Navbar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DisplayPost from "./Components/DisplayPost/DisplayPost";
import CreatePost from "./Components/CreatePost/CreatePost";
import SignIn from "./Components/Signin/Signin";
import SignUp from "./Components/Signup/Signup";


function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/DisplayPost" element={<DisplayPost/>} />
      <Route path="/DisplayPost" component={DisplayPost} />
      <Route path="/CreatePost" component={CreatePost} />
      <Route path="/signin" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
    </Routes>
  </Router>
);
}
function Users() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>
    </div>
  );
}

export default App & Users;
