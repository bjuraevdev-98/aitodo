'use client';

import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { Plus } from 'lucide-react';

interface AddTaskFormProps {
  onAddTask: (task: {
    title: string;
    description?: string;
    dueDate?: Date;
    dueTime?: string;
  }) => void;
}

export default function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) return;

    onAddTask({
      title: title.trim(),
      description: description.trim() || undefined,
      dueDate: dueDate ? new Date(dueDate) : undefined,
      dueTime: dueTime || undefined,
    });

    // Reset form
    setTitle('');
    setDescription('');
    setDueDate('');
    setDueTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New Task</h2>
      
      <div className="space-y-4">
        <Input
          label="Task Title"
          type="text"
          placeholder="What do you need to do?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">
            Description (Optional)
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Add more details..."
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Due Date"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          
          <Input
            label="Due Time"
            type="time"
            value={dueTime}
            onChange={(e) => setDueTime(e.target.value)}
          />
        </div>
        
        <Button type="submit" className="w-full flex items-center justify-center gap-2">
          <Plus size={20} />
          Add Task
        </Button>
      </div>
    </form>
  );
}