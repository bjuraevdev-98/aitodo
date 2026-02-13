// Public API for the tasks feature
// Other features/pages import from here, not from internal files

// Components
export { TaskList } from './components/TaskList';
export { TaskCard } from './components/TaskCard';
export { AddTaskForm } from './components/AddTaskForm';

// Hooks
export { useTasks } from './hooks/useTasks';
export { useTaskFilters } from './hooks/useTaskFilters';

// Types
export type { Task, CreateTaskDTO, UpdateTaskDTO, TaskFilters } from './types/task';

// Utils
export { sortTasksByDate, isTaskOverdue, getTaskStats } from './utils/taskHelpers';