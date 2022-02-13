import React, { useState } from "react";
import CreatePost from "./Components/CreatePost/CreatePost";
import "./App.css";

function App() {

    const [createPost, setCreatePost] = useState([])
    const [displayAllPost, setDisplayAllPost] = useState([])

    function showMePost(post) {
      let showPost = [...displayAllPost, post]

      setDisplayAllPost(showPost)
    }

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
          <displayAllPost parentdisplayPost={showMePost} />
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