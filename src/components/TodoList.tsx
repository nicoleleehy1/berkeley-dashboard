"use client"
import React, { useState } from 'react';
import TodoItem from './TodoItem';

type Task = {
    id: number;
    text: string;
    completed: boolean;
  };
  function TodoList() {
    const [tasks, setTasks] = useState<Task[]>([
      {
        id: 1,
        text: 'Doctor Appointment',
        completed: true,
      },
      {
        id: 2,
        text: 'Meeting at School',
        completed: false,
      },
    ]);
  
    const [text, setText] = useState('');
  
    function addTask(text: string) {
      if (text.trim() === '') return;
  
      const newTask: Task = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setText('');
    }
  
    function deleteTask(id: number) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  
    function toggleCompleted(id: number) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    }
  
    return (
      <div className="todo-list">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={() => addTask(text)}>Add</button>
      </div>
    );
  }
  
  export default TodoList;