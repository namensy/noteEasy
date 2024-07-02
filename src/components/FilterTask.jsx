import React from "react";

function FilterTask({
  setFilter,
  filteredNotes,
  handleEditInputChange,
  handleEditButtonClick,
  handleDeleteNote,
  filter,
  editMode,
  editNote,
  editHistory,
  handleEditNote,
  handleCancelEdit,
}) {
  return (
    <div>
      <div>
        <div className="flex justify-between mb-[10px]">
          <h2 className="p-2 font-bold text-lg">Notes</h2>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2"
          >
            <option value="">All Categories</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Urgent">Urgent</option>
          </select>
        </div>
        {filteredNotes.map((note) => (
          <div key={note.id}>
            {editMode && editNote.id === note.id ? (
              <div className="flex ">
                <input
                  name="content"
                  value={editNote.content}
                  onChange={handleEditInputChange}
                  className="border mr-5 px-2 rounded-md mb-2 "
                />
                <div className="mb-2">
                  <button
                    className="p-2 px-4 bg-green-600 rounded-md mr-2 text-white tracking-wider hover:bg-green-800 drop-shadow-md"
                    onClick={handleEditNote}
                  >
                    Save
                  </button>
                  <button
                    className="p-2 px-4 bg-red-800 rounded-md text-white tracking-wider hover:bg-red-900 drop-shadow-md"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-[#022539] mb-2 p-2 rounded-md flex justify-between relative">
                <div className="flex w-full">
                  <div className="w-10/12 flex-col">
                    <p className="mb-6 font-bold text-white">{note.content}</p>
                    <button
                      className="p-2 px-4 bg-green-600 rounded-md mr-2 text-white tracking-wider hover:bg-green-800 drop-shadow-md"
                      onClick={() => handleEditButtonClick(note)}
                    >
                      Edit
                    </button>
                    <button
                      className="p-2 px-4 bg-red-800 rounded-md text-white tracking-wider hover:bg-red-900 drop-shadow-md"
                      onClick={() => handleDeleteNote(note.id)}
                    >
                      Delete
                    </button>
                  </div>
                  {editHistory[note.id] && (
                    <div className="absolute top-1.5 right-96">
                      <p className="text-xl font-bold text-white">
                        Edit History
                      </p>
                      <ul>
                        {editHistory[note.id].map((edit, index) => (
                          <ol>
                            <li className="text-white" key={index}>
                              {edit}
                            </li>
                          </ol>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="w-2/12">
                    <p className=" mb-2 uppercase font-bold text-white">
                      ({note.category})
                    </p>
                    <p className="mb-2 text-white">
                      Created by: {note.creator} on {note.date}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterTask;
