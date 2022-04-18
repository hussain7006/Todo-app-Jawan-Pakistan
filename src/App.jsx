import './App.css';
import Icon from "react-crud-icons";
import "../node_modules/react-crud-icons/dist/css/react-crud-icons.css";
import { useEffect, useState } from 'react';

function App() {
  // let todo = ['asdf', 'dfg', 'zxvbxcv', 'zxcvzxcv'];

  let [todos, setTodos] = useState([]);
  let [newTodo, setnewTodo] = useState('');
  let [updateTodo, setUpdateTodo] = useState('');

  const delteHandler = (e) => {
    const newTodos = [...todos];
    newTodos.splice(e, 1);
    setTodos(newTodos);
  }

  const addNewTodo = () => {
    if (newTodo) {

      setTodos([{ todo: newTodo }, ...todos])
      setnewTodo('')
    }
  }

  const editHandler = (index) => {

    todos[index].edit = true
    setTodos([...todos])

  }

  const updateHandler = (index) => {

    if (updateTodo) {
      todos[index].todo = updateTodo;
      todos[index].edit = false;
      setUpdateTodo('')
    } else {
      todos[index].edit = false;
      setTodos([...todos])
    }

  }

  useEffect(() => {

  }, [todos, newTodo])

  return (
    <>
      <div className="container">
        <div className="main">

          <div className="header">
            <h1>Todo App</h1>
          </div>
            <div className="input">
              <input type="text" value={newTodo} onChange={(e) => setnewTodo(e.target.value)} />
              <button onClick={addNewTodo}>Add</button>
            </div>
          <div className="body">
            {todos.map((e, i) =>

              <div className='data' key={i}>
                {!e.edit ? <>
                  <div className='todo'>{e.todo}</div>
                  <div className='buttonsDiv'>
                    <Icon
                      name="edit"
                      tooltip="Edit"
                      theme="dark"
                      size="medium"
                      onClick={() => editHandler(i)}
                    />
                    <Icon
                      name="delete"
                      tooltip="Delte"
                      theme="dark"
                      size="medium"
                      onClick={(i) => delteHandler(i)}
                    />
                  </div>
                </>
                  :
                  <div className='updateDiv'>
                    <input type="text" onChange={(e) => setUpdateTodo(e.target.value)}
                      value={updateTodo} />
                    <button onClick={() => updateHandler(i)}>Update</button>
                  </div>
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
