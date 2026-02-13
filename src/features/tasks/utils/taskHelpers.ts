import { Task } from '../types/task';

export function sortTasksByDate(tasks: Task[]): Task[] {
  return [...tasks].sort((a, b) => {
    const dateA = a.dueDate ? new Date(a.dueDate).getTime() : Infinity;
    const dateB = b.dueDate ? new Date(b.dueDate).getTime() : Infinity;
    return dateA - dateB;
  });
}

export function sortTasksByCreatedDate(tasks: Task[]): Task[] {
  return [...tasks].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function isTaskOverdue(task: Task): boolean {
  if (!task.dueDate || task.completed) return false;
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const dueDate = new Date(task.dueDate);
  dueDate.setHours(0, 0, 0, 0);
  
  return dueDate < today;
}

export function getTaskStats(tasks: Task[]) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const active = total - completed;
  const overdue = tasks.filter((t) => isTaskOverdue(t)).length;

  return { total, completed, active, overdue };
}