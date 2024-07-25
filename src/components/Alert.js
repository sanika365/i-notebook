
import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert && (
      <div
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
          props.alert ? "opacity-100" : "opacity-0"
        } bg-${
          props.alert.type === "success" ? "green" : "red"
        }-500 text-white px-4 py-2 rounded shadow-lg flex items-center`}
        role='alert'
      >
        <strong className='flex-grow'>{capitalize(props.alert.type)}</strong>:{" "}
        {props.alert.msg}
        <button
          type='button'
          className='ml-4 bg-transparent border-0 text-black text-lg font-bold'
          onClick={() => props.onClose && props.onClose()}
          aria-label='Close'
        >
          ×
        </button>
      </div>
     
    )
  );
}

export default Alert;
