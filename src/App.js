import React, { useState } from 'react';
import ToDoList from './ToDoList';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1>To Do List</h1>
        <br />
        <input
          type='text'
          placeholder="Add Items"
          value={inputList}
          onChange={itemEvent}
        />
        <button onClick={listOfItems}> + </button>
        <ol>
          {Items.map((itemval, index) => (
            <ToDoList
              key={index}
              id={index}
              text={itemval}
              onSelect={deleteItems}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default App;
