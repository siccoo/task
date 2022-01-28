import React from 'react';
import './App.css';
import InputField from './components/inputField/InputField';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="text__heading">
        Taskify
      </div>
      <InputField />
    </div>
  );
}

export default App;
