import React from "react";
import Buttons from "./Buttons";



const DisplayPosts = (props) => {

    return ( 
        <table clasName='table'>
        <tbody>
          {props.parentPosts.map((post) => {
            return (
              <body className='post-box'>
                <td>{post.name}</td>
                <td>{post.post}</td>
                <td><Buttons /></td>
              </body>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default DisplayPosts;
