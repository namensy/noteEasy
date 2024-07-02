import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddNote from "./AddNote";
import FilterTask from "./FilterTask";

function Notepage({ username }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [filter, setFilter] = useState("");
  const [editHistory, setEditHistory] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [editNote, setEditNote] = useState({
    id: "",
    content: "",
    category: "",
    date: "",
    creator: "",
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (e) => {
    e.preventDefault();
    const enteredNotes = e.target[0].value;
    const selectedCategory = e.target[1].value;
    const currentDate = new Date().toLocaleString();

    if (enteredNotes && selectedCategory) {
      const newNote = {
        id: uuidv4(),
        content: enteredNotes,
        category: selectedCategory,
        date: currentDate,
        creator: username,
      };
      setNotes([...notes, newNote]);
      setTitle("");
      setCategory("");
    }
  };

  const handleEditNote = () => {
    const id = editNote.id;
    const newContent = editNote.content;
    if (id && newContent) {
      const currentDate = new Date().toLocaleString();
      const updatedNotes = notes.map((note) => {
        if (note.id === id) {
          const existingHistory = editHistory[id] || [];
          setEditHistory({
            ...editHistory,
            [id]: [...existingHistory, note.content],
          });
          return { ...note, content: newContent, date: currentDate };
        }
        return note;
      });
      setNotes(updatedNotes);
      setEditMode(false);
      setEditNote({ id: "", content: "", category: "", date: "", creator: "" });
    }
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    const { [id]: deleted, ...rest } = editHistory;
    setEditHistory(rest);
  };

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleEditButtonClick = (note) => {
    setEditMode(true);
    setEditNote({
      id: note.id,
      content: note.content,
      category: note.category,
      date: note.date,
      creator: note.creator,
    });
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditNote({ id: "", content: "", category: "", date: "", creator: "" });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const filteredNotes = filter
    ? notes.filter((note) => note.category === filter)
    : notes;

  return (
    <div>
      <AddNote
        handleAddNote={handleAddNote}
        handleInputChange={handleInputChange}
        handleCategoryChange={handleCategoryChange}
        title={title}
        category={category}
      />
      <FilterTask
        setFilter={setFilter}
        filteredNotes={filteredNotes}
        handleEditInputChange={handleEditInputChange}
        handleEditButtonClick={handleEditButtonClick}
        handleDeleteNote={handleDeleteNote}
        filter={filter}
        editMode={editMode}
        editNote={editNote}
        editHistory={editHistory}
        handleEditNote={handleEditNote}
        handleCancelEdit={handleCancelEdit}
      />
    </div>
  );
}

export default Notepage;
