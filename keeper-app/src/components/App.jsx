import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
  const [newNote, setNewNote] = useState([]);
  function addNote(note) {
    setNewNote((prevNote) => {
      return [...prevNote, note];
    });
  }
  function deleteNote(id) {
    console.log(id);
    setNewNote((prevNote) => {
      return prevNote.filter((value, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {newNote.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
