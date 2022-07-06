import './App.scss';
import { Header, Main, Layout, Form, Todo } from './components';
import { useState } from 'react'


function App() {

  const [todos, setTodos] = useState([]);

  const addTask = (inputValue) => {
    
    if (inputValue) {
      const newItem = {
        id: Math.random().toFixed(5),
        title: inputValue,
        completed: false,
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => 
      todo.id === id ? {...todo, completed: !todo.completed} : {...todo}
      )
    ])
  }

  return (
    <div className="App">
      <Header></Header>
      <Main>
        <Layout>
          <Form addTask={addTask} />
          <Todo items={ todos }  handleToggle={handleToggle} removeTask={removeTask} />
        </Layout>
      </Main>
    </div>
  );
}

export default App;
