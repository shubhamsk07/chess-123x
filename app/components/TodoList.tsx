    import React from 'react';

    interface TodoListProps {
      todos: string[];
      removeTodo: (index: number) => void;
    }

    const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
      return (
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{todo}</span>
              <button onClick={() => removeTodo(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                Remove
              </button>
            </li>
          ))}
        </ul>
      );
    };

    export default TodoList;
  onst toggleComplete = (id: number) => {
        setTodos(todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
      };

      const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
      };

      return (
        <div>
          <div className="mb-4">
            <input
              type="text"
              value={newTodoText}
              onChange={e => setNewTodoText(e.target.value)}
              placeholder="Add a new todo..."
              className="border border-gray-300 px-3 py-2 rounded"
            />
            <button onClick={addTodo} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
              Add
            </button>
          </div>
          <ul>
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>
        </div>
      );
    };

    export default TodoList;
  