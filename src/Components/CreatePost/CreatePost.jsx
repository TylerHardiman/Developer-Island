import React, { useState} from 'react';


const CreatePost  = props => {

  const [name, setName] = useState('');
  const [content, setContent] = useState('');


  function handleSubmit(e){
    e.preventDefault();


    props.addPost(name, content);

    setName('');
    setContent('');

  }

  function handleName(event){
    setName(event.target.value);
}

  function handleContent(event){
    setContent(event.target.value);
}


  return ( 
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Name</label>
        <input required value={name} onChange={handleName} type="text" />
        </div>
        <div>
        <label>What's on your mind?</label>
        <input required value={content} onChange={handleContent} type="text" /> 
        </div>
        <button type="submit" >Post</button>
      </form>
    </div>

    
   );
}
 
export default CreatePost;