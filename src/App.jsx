import * as React from "react";
import "./App.css";
import Feed from "./Components/Feed/Feed";
import CreatePost from "./Components/CreatePost/CreatePost";
import Post from "./Components/Posting/Post";

function App() {
  return (
    <>
    <h1>Intermodal Coder Social</h1>

      <div>

        <Feed />
        <CreatePost />
        <Post />
  
      </div>
    </>
   

     
);
}


export default App
