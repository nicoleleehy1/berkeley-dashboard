import React from 'react';

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoItemProps = {
  task: Task;
  deleteTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
};

function TodoItem({ task, deleteTask, toggleCompleted }: TodoItemProps) {
  function handleChange() {
    toggleCompleted(task.id);
  }

  return (
    <div className="todo-item">
      <input 
        type="checkbox"
        checked={task.completed}
        onChange={handleChange}
      />
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}

export default TodoItem;