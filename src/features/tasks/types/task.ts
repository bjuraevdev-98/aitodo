export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate?: Date;
  dueTime?: string;
  completed: boolean;
  createdAt: Date;
}

// DTO for creating tasks (Data Transfer Object)
export interface CreateTaskDTO {
  title: string;
  description?: string;
  dueDate?: Date;
  dueTime?: string;
}

// DTO for updating tasks
export interface UpdateTaskDTO {
  title?: string;
  description?: string;
  dueDate?: Date;
  dueTime?: string;
  completed?: boolean;
}

// UI filter state
export interface TaskFilters {
  status: 'all' | 'active' | 'completed';
  searchQuery: string;
}