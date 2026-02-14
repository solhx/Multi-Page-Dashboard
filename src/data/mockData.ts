import { Project, Activity, Task, UserProfile, ChartData } from '../types';

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Website Redesign',
    client: 'TechCorp Inc.',
    status: 'active',
    deadline: '2026-03-15',
    budget: 15000,
    progress: 65,
  },
  {
    id: '2',
    name: 'Mobile App Development',
    client: 'StartupXYZ',
    status: 'active',
    deadline: '2026-04-20',
    budget: 25000,
    progress: 40,
  },
  {
    id: '3',
    name: 'Brand Identity Package',
    client: 'Creative Studio',
    status: 'completed',
    deadline: '2026-02-10',
    budget: 8000,
    progress: 100,
  },
  {
    id: '4',
    name: 'Dashboard UI/UX Design',
    client: 'DataViz Pro',
    status: 'on-hold',
    deadline: '2026-05-01',
    budget: 12000,
    progress: 25,
  },
  {
    id: '5',
    name: 'Marketing Website',
    client: 'GrowthAgency',
    status: 'pending',
    deadline: '2026-03-30',
    budget: 9500,
    progress: 10,
  },
];

export const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'payment',
    description: 'Payment received from TechCorp Inc. - $5,000',
    timestamp: '2026-02-14T10:30:00',
  },
  {
    id: '2',
    type: 'project',
    description: 'New project started: Dashboard UI/UX Design',
    timestamp: '2026-02-13T14:20:00',
  },
  {
    id: '3',
    type: 'task',
    description: 'Completed wireframes for Mobile App',
    timestamp: '2026-02-13T09:15:00',
  },
  {
    id: '4',
    type: 'message',
    description: 'New message from StartupXYZ client',
    timestamp: '2026-02-12T16:45:00',
  },
  {
    id: '5',
    type: 'project',
    description: 'Brand Identity Package marked as completed',
    timestamp: '2026-02-11T11:00:00',
  },
  {
    id: '6',
    type: 'payment',
    description: 'Invoice sent to Creative Studio - $8,000',
    timestamp: '2026-02-10T13:30:00',
  },
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Complete homepage design mockups',
    projectId: '1',
    dueDate: '2026-02-16',
    completed: false,
    priority: 'high',
  },
  {
    id: '2',
    title: 'Review client feedback',
    projectId: '2',
    dueDate: '2026-02-15',
    completed: false,
    priority: 'medium',
  },
  {
    id: '3',
    title: 'Final logo delivery',
    projectId: '3',
    dueDate: '2026-02-10',
    completed: true,
    priority: 'high',
  },
  {
    id: '4',
    title: 'Prepare project proposal',
    projectId: '5',
    dueDate: '2026-02-18',
    completed: false,
    priority: 'medium',
  },
];

export const mockUserProfile: UserProfile = {
  name: 'Alex Johnson',
  email: 'alex.johnson@freelance.com',
  role: 'Senior Full-Stack Developer & Designer',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  bio: 'Passionate freelancer with 8+ years of experience in web development and UI/UX design. Specialized in creating beautiful, functional digital experiences.',
};

export const monthlyEarnings: ChartData[] = [
  { name: 'Jan', earnings: 12500 },
  { name: 'Feb', earnings: 15800 },
  { name: 'Mar', earnings: 18200 },
  { name: 'Apr', earnings: 16500 },
  { name: 'May', earnings: 21000 },
  { name: 'Jun', earnings: 19800 },
];

export const taskDistribution: ChartData[] = [
  { name: 'Design', value: 35 },
  { name: 'Development', value: 45 },
  { name: 'Consulting', value: 12 },
  { name: 'Management', value: 8 },
];