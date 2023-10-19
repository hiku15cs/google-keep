import React from 'react';
import './ShowNotes.css';

const ShowNotes = (props) => {
  return (
    <div className='card'>
      <p>{props.note.title}</p>
      <p>{props.note.content}</p>
      <button onClick={()=>props.onDelete(props.id)}>DELETE</button>
    </div>
  )
}

export default ShowNotes; 
