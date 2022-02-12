import React, { useState } from 'react';

const Buttons = (props) => {

    const [like, setLike] = useState('inactive')
    const [dislike, setDislike] = useState('inactive')


    props.Buttons()

    function onLikeClick(){
        if(like === 'inactive'){
            setLike('liked')
            setDislike('inactive')
        }
        else{
            setLike('inactive')
        }
    }

    function onDislikeClick(){
        if(dislike === 'inactive'){
            setDislike('disliked')
            setLike('inactive')
        }
        else{
            setDislike('inactive')
            setLike('inactive')
        }
    }


    return ( <div>
        <button type="button" className={like} onClick={onLikeClick}>Like</button>
        <button type="button" className={dislike} onClick={onDislikeClick}>Dislike</button>
              </div>
    )
}
export default Buttons;