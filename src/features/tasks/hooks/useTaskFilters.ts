'use client';

import { useState, useMemo } from 'react';
import { Task, TaskFilters } from '../types/task';

export function useTaskFilters(tasks: Task[]) {
  const [filters, setFilters] = useState<TaskFilters>({
    status: 'all',
    searchQuery: '',
  });

  const filteredTasks = useMemo(() => {
    let result = [...tasks];

    // Filter by status
    if (filters.status === 'active') {
      result = result.filter((task) => !task.completed);
    } else if (filters.status === 'completed') {
      result = result.filter((task) => task.completed);
    }

    // Filter by search query
    if (filters.searchQuery.trim()) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(
        (task) =>
          task.title.toLowerCase().includes(query) ||
          task.description?.toLowerCase().includes(query)
      );
    }

    return result;
  }, [tasks, filters]);

  const activeCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.filter((task) => task.completed).length;

  return {
    filters,
    setFilters,
    filteredTasks,
    activeCount,
    completedCount,
  };
}