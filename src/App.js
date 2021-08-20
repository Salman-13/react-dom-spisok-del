import { useState } from 'react';
import Header from './header/Header';
import Form from './Form';
import Todos from './componentTodos/Todos';


function App() {


  const [todos, setTodos] = useState([
    {
      text: "Купить бананы",
      favorite: false
    },
    {
      text: "Продать квартиру",
      favorite: false
    },
    {
      text: "Начинать зарабатывать",
      favorite: true
    }
    ]
  )

  const deleteTodo = (indexTodo) => {
    const filtered =  todos.filter((todo, index) => {
      if (index === indexTodo) {
        return false
      }
      return true
    })

    setTodos(filtered)
  }

  const makeFavorite = (indexTodo) => {
    const newTodos = todos.map((todo, index) => {
      if (indexTodo === index){
        return {
          ...todo,
          favorite: !todo.favorite
        }
      }

      return todo
    })
    setTodos(newTodos)
  }

  const [text, setText] = useState('');
  const addTodo = () => {
    setTodos([ {
      text: text,
      favorite: false
    },
    ...todos]);

    setText('')
  }

  return (
    <div className="App">
      <Header/>
      <Form text={text} setText={setText} addTodo={addTodo}/>
      <Todos todos={todos} makeFavorite={makeFavorite} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
