import React from 'react';

const Form = (props) => {
  return (
    <div>
      <div className='form'>
        <input type="text"
               value={props.text}
               onChange={(e) => props.setText(e.target.value)}
        />
        <button onClick={props.addTodo}>
          Добавить
        </button>
      </div>
    </div>
  );
};

export default Form;