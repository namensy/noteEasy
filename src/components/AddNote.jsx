import React from 'react'

function AddNote({ handleAddNote, handleInputChange, handleCategoryChange, title, category }) {
  return (
    <div>
        <form onSubmit={handleAddNote}>
                <div className='flex-col py-3 mx-[400px] mb-[100px]'>
                    <div className='my-4'>
                        <input
                            type="text"
                            placeholder="Type something here.."
                            value={title}
                            onChange={handleInputChange}
                            className='border p-2 rounded-md w-9/12'
                        />
                        <select
                            value={category}
                            onChange={handleCategoryChange}
                            required
                            className='border p-2 rounded-md w-3/12 '
                        >
                            <option value="">Select Category</option>
                            <option value="Work">Work</option>
                            <option value="Personal">Personal</option>
                            <option value="Urgent">Urgent</option>
                        </select>
                    </div>
                    <button className='mx-auto block p-2 rounded-md bg-[#022539] w-[80%] text-white font-bold hover:drop-shadow-xl' type="submit">Add</button>
                </div>
            </form>
    </div>
  )
}

export default AddNote