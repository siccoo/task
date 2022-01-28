import React, { useState } from 'react';
import './App.css';
import InputField from './components/inputField/InputField';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  console.log(todo);
  
  return (
    <div className="App">
      <div className="text__heading">
        Taskify
      </div>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
