import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Notes from "./Components/Notes";
import ShowNotes from "./Components/ShowNotes";

function App() {
  const [notes, setNotes] = useState([]);

  const addNotes = (note) => {
    console.log(note);
    note.title && setNotes([...notes, note]);
  };
  function deleteNote(id) {
    setNotes(preNotes=>{
      return preNotes.filter((val,key)=>{
        return key!==id;
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <Notes addNotes={addNotes} />
      <div className="card-container">
        {notes &&
          notes.map((value, key) => {
            return <ShowNotes note={value} key={key} id={key} onDelete={deleteNote}/>;
          })}
      </div>
    </div>
  );
}

export default App;
