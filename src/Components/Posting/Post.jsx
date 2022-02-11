import React from "react";


const Post = (props) => {
    return ( 
        <div>
            <h4>{[props.name]}</h4>
            <span>{[props.date]}</span>
            <p>{[props.content]}</p>
            <button>Like</button>
            <button>Dislike</button>
        </div>
     );
}
 
export default Post;