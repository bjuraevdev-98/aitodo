'use client';

import { useState, useCallback } from 'react';
import { Task, CreateTaskDTO } from '../types/task';

// This hook will be replaced with API calls later
// For now, it manages local state
export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addTask = useCallback((taskData: CreateTaskDTO) => {
    const newTask: Task = {
      id: Date.now().toString(),
      ...taskData,
      completed: false,
      createdAt: new Date(),
    };
    
    setTasks((prev) => [newTask, ...prev]);
  }, []);

  const toggleComplete = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const updateTask = useCallback((id: string, updates: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, ...updates, updatedAt: new Date() } : task
      )
    );
  }, []);

  return {
    tasks,
    isLoading,
    error,
    addTask,
    toggleComplete,
    deleteTask,
    updateTask,
  };
}