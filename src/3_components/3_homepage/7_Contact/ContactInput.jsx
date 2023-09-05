import React from 'react';

const ContactInput = ({ type, inputName, placeHolder, cutWidth }) => {
  if (type === 'text') {
    return (
      <div className="input-container">
        <input
          id={`${inputName}-input`}
          className="input"
          type="text"
          name={inputName}
          placeholder=" "
          required
        />
        <div
          className={`cut ${inputName === 'nom' ? '!w-[75px]' : '!w-[90px]'} `}
        ></div>
        <label htmlFor={inputName} className="placeholder">
          {placeHolder}
        </label>
      </div>
    );
  }
  if (type === 'textarea') {
    return (
      <div className="input-container !h-40">
        <textarea
          id={`${inputName}-input`}
          className="input input--textarea"
          name={inputName}
          placeholder=" "
          required
        />
        <div className={`cut !w-[95px]`}></div>
        <label htmlFor={inputName} className="placeholder">
          {placeHolder}
        </label>
      </div>
    );
  }
};
export default ContactInput;
