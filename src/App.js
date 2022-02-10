import * as React from "react";

import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Nav } from "./Components/NavBar/NavBarElements";
import { NavLogo } from "./Components/NavBar/NavBarElements";
import { Bars } from "./Components/NavBar/NavBarElements";
import { NavMenu } from "./Components/NavBar/NavBarElements";
import { NavBtn } from "./Components/NavBar/NavBarElements";
import { NavLink } from "./Components/NavBar/NavBarElements";

import DisplayPost from "./Components/DisplayPost/DisplayPost";
import CreatePost from "./Components/CreatePost/CreatePost";
import SignIn from "./Components/Signin/Signin";
import SignUp from "./Components/Signup/Signup";


function App() {
  return (
    <>
    <h1>Intermodal Coder Social</h1>
    <select>
  <option value="DisplayPost">Display Post</option>
  <option value="CreatePost">Create Post</option>
  <option value="SignUp">Sign Up</option>
  <option value="SignIn">Sign In</option>
</select>
      <div><DisplayPost/>
           <CreatePost />
           <SignIn />
           <SignUp /> 
      </div>
    </>
   

     
);
}


export default App
