import React, { useState} from 'react';
import Buttons from '../Feed/Buttons';

const CreatePost  = props => {

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [idea, setIdea] = useState('');


  function handleSubmit(e){
    e.preventDefault();

    setName('');
    setContent('');
    setIdea('');

  }

  function handleName(event){
    setName(event.target.value);
}

  function handleContent(event){
    setContent(event.target.value);
}

  function handleIdea(event) {
    setIdea(event.target.value);
  }

  return ( 
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <label> User Name: </label>
        <input required value={name} onChange={handleName} type="text" />
        </div>
        <div>
        <label>Topic: </label>
        <input required value={content} onChange={handleContent} type="text" /> 
        </div>
        <div>
        <label>What's on your mind?</label>
        <input required value={idea} onChange={handleIdea} type="text" /> 
        </div>
        <button type="btn" >Submit</button>
      </form>
    </div>

    
   );
}
 
export default CreatePost;