import React from 'react';

const InputField = () => {
  return (
  <form className='input'>
      <input type="input" placeholder='Enter a Task' className="input__box" />
      <button type="submit" className='input__submit'>Go</button>
  </form>
  );
};

export default InputField;
