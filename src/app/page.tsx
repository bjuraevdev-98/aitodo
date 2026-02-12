'use client';

import { useState } from 'react';
import { Task } from '@/src/types/task';
import AddTaskForm from '@/src/components/tasks/AddTaskForm';
import TaskList from '@/src/components/tasks/TaskList';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (taskData: {
    title: string;
    description?: string;
    dueDate?: Date;
    dueTime?: string;
  }) => {
    const newTask: Task = {
      id: Date.now().toString(),
      ...taskData,
      completed: false,
      createdAt: new Date(),
    };
    
    setTasks([newTask, ...tasks]);
  };

  const handleToggleComplete = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDelete = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            AI Todo App
          </h1>
          <p className="text-gray-600">
            Manage your tasks efficiently with AI assistance
          </p>
        </header>

        <AddTaskForm onAddTask={handleAddTask} />
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Your Tasks ({tasks.length})
          </h2>
          <TaskList
            tasks={tasks}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}