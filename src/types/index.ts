export interface Project {
  id: string;
  name: string;
  client: string;
  status: 'active' | 'completed' | 'on-hold' | 'pending';
  deadline: string;
  budget: number;
  progress: number;
}

export interface Activity {
  id: string;
  type: 'project' | 'payment' | 'task' | 'message';
  description: string;
  timestamp: string;
  icon?: string;
}

export interface Task {
  id: string;
  title: string;
  projectId: string;
  dueDate: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  avatar?: string;
  phone?: string;
  location?: string;
  bio?: string;
}

export interface Stat {
  label: string;
  value: number | string;
  change?: number;
  changeType?: 'increase' | 'decrease';
  icon?: string;
}

export interface ChartData {
  name: string;
  value?: number;
  earnings?: number;
}