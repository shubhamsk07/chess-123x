  import React from 'react';
  import { Todo } from '../pages/index';


  type Props = {
    todo: Todo;
    onToggleComplete: (id: number) => void;
    onDelete: (id: number) => void;
  };

  const TodoItem: React.FC<Props> = ({ todo, onToggleComplete, onDelete }) => {
    return (
      <li className="flex items-center justify-between border-b border-gray-200 py-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id)}
            className="mr-2"
          />
          <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
        </div>
        <button onClick={() => onDelete(todo.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
          Delete
        </button>
      </li>
    );
  };

  export default TodoItem;
  