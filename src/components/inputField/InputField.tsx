import React from 'react';
import "./styles.css";

interface TProps {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: TProps) => {
    return (
        <form className='form__input'>
            <input type="input" placeholder='Enter a Task' className="input__box" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit" className='input__submit'>Go</button>
        </form>
    );
};

export default InputField;
