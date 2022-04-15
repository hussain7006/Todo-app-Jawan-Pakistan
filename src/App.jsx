import './App.css';
import Icon from "react-crud-icons";
import "../node_modules/react-crud-icons/dist/css/react-crud-icons.css";
import { useEffect, useState } from 'react';

function App() {
  // let todo = ['asdf', 'dfg', 'zxvbxcv', 'zxcvzxcv'];

  let [todos, setTodos] = useState(['asdf', 'dfg', 'zxvbxcv', 'zxcvzxcv'])

  const delteHandler = (e) => {
    const newTodos = [...todos];
    newTodos.splice(e, 1);
    setTodos(newTodos);
  }
    useEffect(()=>{

  },[todos])

  return (
    <>
      <div className="container">
        <div className="main">

          <div className="header">
            <h1>Todo App</h1>
          </div>
          <div className="body">
            <div className="input">
              <input type="text" />
              <button>Add</button>
            </div>
            {todos.map((e, i) =>
              <div className='data' key={i}>
                <div className='todo'>{e}</div>
                <div className='buttonsDiv'>
                  <Icon
                    name="edit"
                    tooltip="Edit"
                    theme="dark"
                    size="medium"
                  />
                  <Icon
                    name="delete"
                    tooltip="Delte"
                    theme="dark"
                    size="medium"
                    onClick={(i) => delteHandler(i)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
