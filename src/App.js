import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css';
import { Nav } from "./Components/NavBar/NavBarElements";
import { NavLogo } from "./Components/NavBar/NavBarElements";
import { Bars } from "./Components/NavBar/NavBarElements";
import { NavMenu } from "./Components/NavBar/NavBarElements";
import { NavBtn } from "./Components/NavBar/NavBarElements";
import { NavLink } from "./Components/NavBar/NavBarElements";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DisplayPost from "./Components/DisplayPost/DisplayPost";
import CreatePost from "./Components/CreatePost/CreatePost";
import SignIn from "./Components/Signin/Signin";
import SignUp from "./Components/Signup/Signup";


function App() {
  return (
    <Router>
      <Nav />;
      <NavLogo />;
      <Bars />;
      <NavMenu />;
      <NavBtn />
      <NavLink />

    <Routes>
      <Route path="/DisplayPost" element={<NavBar/>} />
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
        <Link to="DisplayPost">DisplayPost</Link>
      </nav>
    </div>
  );
}

export default App & Users;
