import React from 'react';
import "./styles.css";

const InputField = () => {
  return (
  <form className='form__input'>
      <input type="input" placeholder='Enter a Task' className="input__box" />
      <button type="submit" className='input__submit'>Go</button>
  </form>
  );
};

export default InputField;
