import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const [alert, setAlert] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    setAlert({ message: "Note added successfully", type: "success" });
    setTimeout(() => setAlert(null), 3000); // Hide alert after 3 seconds
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className='max-w-md mx-auto my-5 p-6 bg-white rounded-xl shadow-md'>
      <h2 className='text-2xl font-semibold mb-4'>Add a Note</h2>
      <form className='space-y-4'>
        <div>
          <label
            htmlFor='title'
            className='block text-sm font-medium text-gray-700'
          >
            Title
          </label>
          <input
            type='text'
            id='title'
            name='title'
            value={note.title}
            onChange={onChange}
            minLength={5}
            required
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          />
        </div>
        <div>
          <label
            htmlFor='description'
            className='block text-sm font-medium text-gray-700'
          >
            Description
          </label>
          <input
            type='text'
            id='description'
            name='description'
            value={note.description}
            onChange={onChange}
            minLength={5}
            required
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          />
        </div>
        <div>
          <label
            htmlFor='tag'
            className='block text-sm font-medium text-gray-700'
          >
            Tag
          </label>
          <input
            type='text'
            id='tag'
            name='tag'
            value={note.tag}
            onChange={onChange}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          />
        </div>
        <button
          disabled={note.title.length < 5 || note.description.length < 5}
          type='submit'
          className='mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={handleClick}
        >
          Add Note
        </button>
      </form>
      {alert && (
        <div className={`alert alert-${alert.type} mt-4`}>{alert.message}</div>
      )}
    </div>
  );
};

export default AddNote;
