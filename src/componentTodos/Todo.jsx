import React from 'react';

const Todo = (props) => {
  return (

      <div className={`todo ${props.todo.favorite ? 'todo selected': 'todo'}`}>
      <div className="favorite">
        <button onClick={() => props.makeFavorite(props.index)}>★</button>
      </div>
      <div className="todo-text">
        {props.todo.text}
      </div>
      <div className="action">
        <button onClick={() => props.deleteTodo(props.index)}>✖</button>
      </div>
    </div>

  );
};

export default Todo;