import React, { useState } from "react";
import CreatePost from "./Components/CreatePost/CreatePost";
import "./App.css";
import DisplayPosts from "./Components/Feed/Feed";


function App() {

    const [createPost, setCreatePost] = useState([])

    function addNewPost(post) {
        let reviewPost = [...createPost, post]

        setCreatePost(reviewPost)

    }
  return (
    <div className='container-fluid'>
    <div className='row'>
      <h1 style={{margin: '1em'}}>Intermodal Coder Social</h1>
      <div className='col-md-6'>
        <div className='border-box'>
          <setDisplayPost parentDisplayPost={DisplayPosts} />
        </div>
        <div className='border-box'>
          <CreatePost parentCreatePost={addNewPost}/>
        </div>
      </div>
    </div>
  </div>
);
}


export default App
