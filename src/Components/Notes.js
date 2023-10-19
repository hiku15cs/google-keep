import React, { useState } from "react";
import "./Notes.css";

const Notes = (props) => {
  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNotes({ ...notes, [name]: value });
  };
  const addHandler = (e) => {
    props.addNotes(notes);
    setNotes({
      title: "",
      content: "",
    });
    e.preventDefault();
  };

  return (
    <div className="container">
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={changeHandler}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={changeHandler}
        />
        <button className="add" onClick={addHandler}>
          {" "}
          +{" "}
        </button>
      </form>
    </div>
  );
};

export default Notes;
