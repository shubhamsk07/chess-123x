    import React from 'react';
    import { Todo } from './TodoList';

    interface TodoItemProps {
      todo: Todo;
      toggleComplete: (id: number) => void;
      deleteTodo: (id: number) => void;
    }

    const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo }) => {
      return (
        <li className="flex items-center justify-between p-2 border-b border-gray-200">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="mr-2"
            />
            <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
          </div>
          <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
            Delete
          </button>
        </li>
      );
    };

    export default TodoItem;
  