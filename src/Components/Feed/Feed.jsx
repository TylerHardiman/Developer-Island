import React from "react";
import CreatePost from "../CreatePost/CreatePost.jsx";
import Post from "../Posting/Post.jsx";


const Feed = props => {
    const [allPost, setAllPost] = useState([]);

    function addPost (name, content) {
    setAllPost([...setAllPost, {name: name, content: content, date: new Date().toDateString()}, ...allPost]);
    
    }

    function displayPost({
        return allPost.map(post => 
        <Post name={post.name} content={post.content} date={post.date} />
    })

    return ( 
        <div>

            <CreatePost addPost={addPost} />
            {allPost.map(post => {
               <Post /> 
            })}
            
        </div>
     );
     export default Feed;
}
 
