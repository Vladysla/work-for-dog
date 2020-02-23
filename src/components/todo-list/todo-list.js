import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = () => {

  const elements = () => {
    return (
      <li className="list-group-item">
        <TodoListItem {...itemProps } />
      </li>
    )
  }

  return (
    <ul className="list-group todo-list">
    </ul>
  );
};

export default TodoList;
