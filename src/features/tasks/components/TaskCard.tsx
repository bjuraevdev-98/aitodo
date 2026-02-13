import React from 'react';
import { Task } from '@/types/task';
import { Calendar, Clock, Trash2, Check } from 'lucide-react';
import { format } from 'date-fns';

interface TaskCardProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskCard({ task, onToggleComplete, onDelete }: TaskCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 border-l-4 transition-all hover:shadow-lg ${
      task.completed ? 'border-green-500 opacity-75' : 'border-blue-500'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 flex-1">
          <button
            onClick={() => onToggleComplete(task.id)}
            className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
              task.completed 
                ? 'bg-green-500 border-green-500' 
                : 'border-gray-300 hover:border-blue-500'
            }`}
            aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
          >
            {task.completed && <Check size={14} className="text-white" />}
          </button>
          
          <div className="flex-1">
            <h3 className={`font-semibold text-gray-900 ${
              task.completed ? 'line-through text-gray-500' : ''
            }`}>
              {task.title}
            </h3>
            
            {task.description && (
              <p className="text-sm text-gray-600 mt-1">{task.description}</p>
            )}
            
            <div className="flex gap-4 mt-2 text-xs text-gray-500">
              {task.dueDate && (
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{format(task.dueDate, 'MMM dd, yyyy')}</span>
                </div>
              )}
              {task.dueTime && (
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{task.dueTime}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700 transition-colors p-1 rounded hover:bg-red-50"
          aria-label="Delete task"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}