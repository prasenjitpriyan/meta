import React from "react";

export const Ref = () => {
  const formInputRef = React.useRef(null);

  const focusInput = () => {
    formInputRef.current.focus();
  };

  return (
    <div className="flex flex-col items-center justify-between gap-5">
      <h1 className="text-2xl">Using useRef to access underlying DOM</h1>
      <input
        type="text"
        className="border-black border-2 rounded placeholder-gray-500 text-center w-[50%] p-2"
        placeholder="useRef input box"
        ref={formInputRef}
      />
      <button className="bg-blue-400 p-2 rounded" onClick={focusInput}>
        Focus input
      </button>
    </div>
  );
};
