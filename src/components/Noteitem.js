// import React, { useContext } from "react";
// import noteContext from "../context/notes/noteContext";

// const Noteitem = (props) => {
//   const context = useContext(noteContext);
//   const { deleteNote } = context;
//   const { note, updateNote } = props;

//   return (
//     <div className='max-w-sm rounded overflow-hidden shadow-lg my-3 bg-yellow-300'>
//       <div className='px-6 py-4'>
//         <div className='font-bold text-xl mb-2'>{note.title}</div>
//         <p className='text-gray-700 text-base'>{note.description}</p>
//       </div>
//       <div className='px-6 py-4 flex justify-end space-x-4'>
//         <button
//           onClick={() => {
//             deleteNote(note._id);
//             props.showAlert("Deleted successfully", "success");
//           }}
//           className='text-red-500 hover:text-red-700'
//         >
//           <i className='fa-solid fa-trash'></i>
//         </button>
//         <button
//           onClick={() => {
//             updateNote(note);
//           }}
//           className='text-blue-500 hover:text-blue-700'
//         >
//           <i className='fa-solid fa-pen-to-square'></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Noteitem;
import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg my-3 bg-yellow-300'>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{note.title}</div>
        <p className='text-gray-700 text-base'>{note.description}</p>
      </div>
      <div className='px-6 py-4 flex justify-end space-x-4'>
        <button
          onClick={() => {
            deleteNote(note._id);
            props.showAlert("Deleted successfully", "success");
          }}
          className='text-red-500 hover:text-red-700'
        >
          <i className='fa-solid fa-trash'></i>
        </button>
        <button
          onClick={() => {
            updateNote(note);
          }}
          className='text-blue-500 hover:text-blue-700'
        >
          <i className='fa-solid fa-pen-to-square'></i>
        </button>
      </div>
    </div>
  );
};

export default Noteitem;
